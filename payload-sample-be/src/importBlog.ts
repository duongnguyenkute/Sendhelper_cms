import { parse } from 'csv-parse';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getPayload } from 'payload';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { HomeTips } from './collections/HomeTips';
import { Blogs } from './collections/Blogs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = buildConfig({
  collections: [Users, Media, HomeTips, Blogs],
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URI || 'postgres://d6dev:123456@127.0.0.1:5432/payload-sample-be',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '2da3e0356448d3948f37c8f8',
});

// Hàm generate slug đơn giản
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  
    .trim()
    .replace(/\s+/g, '-')     
}

interface BlogRecord {
  name: string;
  slug?: string;
  publishedDate?: string;
  categories?: string;      
  thumbnailImage?: string;
  postSummary?: string;
  category?: string;
}

async function importBlogs() {
  try {
    const payload = await getPayload({ config });
    const csvFilePath = path.join(__dirname, 'Sendhelpers.csv'); 
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

    const parser = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    for await (const blog of parser) {
      const blogName = blog.name || blog.Name;
      if (!blogName) {
        console.warn('Skipping blog with missing name:', blog);
        continue;
      }

      let slug = blog.slug || blog.Slug || generateSlug(blogName);
      let counter = 1;
      let finalSlug = slug;

      while (true) {
        const existing = await payload.find({
          collection: 'blogs',
          where: { slug: { equals: finalSlug } },
        });
        if (existing.docs.length === 0) break;
        finalSlug = `${slug}-${counter}`;
        counter++;
      }

      let categoriesText = undefined;
      if (blog.categories || blog.Categories) {
        categoriesText = (blog.categories || blog.Categories)
          .split(',')
          .map((c: string) => c.trim())
          .join(', ');
      }

      const dateRaw = blog.publishedDate || blog['Published Date'];
      let publishedDateISO: string | undefined = undefined;
      if (dateRaw) {
        const dateObj = new Date(dateRaw);
        if (!isNaN(dateObj.getTime())) {
          publishedDateISO = dateObj.toISOString();
        } else {
          console.warn(`Skipping blog "${blogName}" with invalid publishedDate: ${dateRaw}`);
          continue;
        }
      } else {
        console.warn(`Skipping blog "${blogName}" with missing publishedDate.`);
        continue;
      }

      const data: any = {
        name: blogName,
        slug: finalSlug,
        categories: categoriesText,
        thumbnailImage: blog.thumbnailImage || blog['Thumbnail image'] || undefined,
        postSummary: blog.postSummary || blog['Post Summary'] || undefined,
        category: blog.category || blog.Category || undefined,
      };

      if (publishedDateISO) {
        data.publishedDate = publishedDateISO;
      }

      await payload.create({
        collection: 'blogs',
        data,
      });

      console.log(`Imported blog: ${blogName}`);
    }

    console.log('Import blogs completed!');
    process.exit(0);
  } catch (error) {
    console.error('Import blogs failed:', error);
    process.exit(1);
  }
}

importBlogs();
