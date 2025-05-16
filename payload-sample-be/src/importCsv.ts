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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create config
const config = buildConfig({
  collections: [Users, Media, HomeTips],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgres://d6dev:123456@127.0.0.1:5432/payload-sample-be',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '2da3e0356448d3948f37c8f8',
});

interface HomeTipRecord {
  title: string;
  slug?: string;
  summary: string;
  published_date: string;
  category: 'Home Tips' | 'Blog' | 'Home Projects & DIY' | 'Singapore Living';
  url: string;
  img: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .substring(0, 100); // Ensure it doesn't exceed maxLength
}

async function importHomeTips() {
  try {
    // Initialize Payload
    const payload = await getPayload({ config });

    // Read and parse CSV file
    const csvFilePath = path.join(__dirname, 'home_tips.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

    const parser = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    // Process each row
    for await (const record of parser) {
      try {
        // Create slug from title if not provided
        let slug = record.slug || generateSlug(record.title);
        
        // Check if slug exists and append a number if it does
        let counter = 1;
        let finalSlug = slug;
        while (true) {
          try {
            const existing = await payload.find({
              collection: 'home-tips',
              where: {
                slug: {
                  equals: finalSlug,
                },
              },
            });
            
            if (existing.docs.length === 0) {
              break;
            }
            
            finalSlug = `${slug}-${counter}`;
            counter++;
          } catch (error) {
            break;
          }
        }

        // Create home tip in Payload
        await payload.create({
          collection: 'home-tips',
          data: {
            title: record.title,
            slug: finalSlug,
            summary: record.summary,
            published_date: record.published_date,
            category: record.category,
            url: record.url,
            img: record.img,
          },
        });

        console.log(`Successfully imported: ${record.title}`);
      } catch (error) {
        console.error(`Error importing record: ${record.title}`, error);
      }
    }

    console.log('Import completed!');
    process.exit(0);
  } catch (error) {
    console.error('Error during import:', error);
    process.exit(1);
  }
}

// Run the import
importHomeTips(); 