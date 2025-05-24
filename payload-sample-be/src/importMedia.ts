import fs from 'fs';
import path from 'path';
import { getPayload } from 'payload';
import config from '@/payload.config';




const importMedia = async () => {
  const payload = await getPayload({ config });
  const mediaDir = path.resolve(__dirname, 'media-images');
  const files = fs.readdirSync(mediaDir);

  for (const file of files) {
    const filePath = path.join(mediaDir, file);
    const fileStats = fs.statSync(filePath);

    if (fileStats.isFile()) {
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: path.basename(file, path.extname(file)),
        },
        filePath,  
      });
      
    }
  }
};

importMedia().catch(console.error)