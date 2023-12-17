import express from "express";
import ViteExpress from "vite-express";
import 'dotenv/config';
import cors from 'cors';
import foodsRouter from './routes/Foods';
import ordersRouter from './routes/Orders';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.use('/api/foods', foodsRouter);
app.use('/api/orders', ordersRouter);


ViteExpress.listen(app, PORT, () =>
  console.log("Server is listening on port 3000..."),
);
