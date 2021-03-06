import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from '.';

class UpdateUserAvatarController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {
			user: { id: user_id },
			file: { filename: avatar_file },
		} = request;

		const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

		await updateUserAvatarUseCase.execute({ user_id, avatar_file });

		return response.sendStatus(204); //* status 204 - No content
	}
}

export { UpdateUserAvatarController };
