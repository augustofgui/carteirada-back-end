import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import router from '@http/routes';

import AppError from '@core/errors/AppError';

const app = express();
const port = process.env.PORT || 4003;

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      messsage: 'Internal server error',
    });
  }
);

app.listen(port, () => console.log('🚀 Server is runnning in PORT ' + port));
