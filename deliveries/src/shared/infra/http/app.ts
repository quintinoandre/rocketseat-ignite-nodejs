import 'dotenv/config';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';
import '../../container';

import { AppError } from '../../erros';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use(
	(error: Error, request: Request, response: Response, _next: NextFunction) => {
		if (error instanceof AppError)
			return response
				.status(error.statusCode)
				.json({ status: 'error', message: error.message });

		return response.status(500).json({
			status: 'error',
			message: `Internal server error - ${error.message}`,
		});
	}
);

export { app };
