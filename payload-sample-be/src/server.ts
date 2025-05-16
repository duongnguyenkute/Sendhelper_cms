import express from 'express';
import payload from 'payload';

const app = express();

app.use(express.json());

payload.init({
  // Không truyền secret ở đây nữa
  // secret: process.env.PAYLOAD_SECRET || 'devsecretkey', // bỏ dòng này
  mongoURL: '', // hoặc để trống nếu dùng postgres
  express: app,
  onInit: () => {
    app.listen(3000, () => {
      console.log('Server running on http://localhost:3000/admin');
    });
  },
});
