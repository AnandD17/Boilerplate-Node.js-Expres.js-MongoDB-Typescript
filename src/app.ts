import express from 'express';
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js"
dotenv.config();
const port = 4000;
import routes from './routes';
import { errorConverter, errorHandler } from './middleware/error.js';
import cors from 'cors';

(async () => {
  await connectDB();

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });


  app.use('/api', routes);

  app.use(errorConverter)

  app.use(errorHandler)

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });

})();