import { Router } from 'express';
import multer from 'multer';

import {
	createCategoryController,
	listCategoriesController,
} from '../modules/cars/useCases';

const categoriesRoutes = Router();

const upload = multer({ dest: './tmp' });

categoriesRoutes.post('/', (request, response) => {
	return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
	return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
	const { file } = request;

	console.log(file);

	return response.send();
});

export { categoriesRoutes };
