import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// CORS: cho phép frontend localhost:3001 truy cập
app.use(cors({
  origin: 'http://localhost:3001',
}));

app.get('/api/home-tips', (req: Request, res: Response) => {
  res.json([
    { id: 1, tip: 'Always write clean code' },
    { id: 2, tip: 'Use version control' },
    { id: 3, tip: 'Test your components' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
