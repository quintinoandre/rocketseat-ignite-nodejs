import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from '.';

class CreateUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { body: data } = request;

		const createUserUseCase = container.resolve(CreateUserUseCase);

		await createUserUseCase.execute(data);

		return response.sendStatus(201); //* status 201 - Created
	}
}

export { CreateUserController };
