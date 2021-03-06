import { ICreateRentalDTO } from '@modules/rentals/dtos';
import { Rental } from '@modules/rentals/infra/typeorm/entities';

interface IRentalsRepository {
	findOpenRentalByCarId(car_id: string): Promise<Rental>;
	findOpenRentalByUserId(user_id: string): Promise<Rental>;
	create(data: ICreateRentalDTO): Promise<Rental>;
	findById(id: string): Promise<Rental>;
	findByUser(user_id: string): Promise<Rental[]>;
}

export { IRentalsRepository };
