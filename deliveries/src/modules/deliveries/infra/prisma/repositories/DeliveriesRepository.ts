import { inject, injectable } from 'tsyringe';

import { PrismaClient } from '@prisma/client';

import { ICreateDeliveryDTO } from '../../../dtos';
import { IDeliveriesRepository } from '../../../repositories';
import { IDelivery } from '../entities';

@injectable()
class DeliveriesRepository implements IDeliveriesRepository {
	constructor(
		@inject('Prisma')
		private prisma: PrismaClient
	) {}

	async create({
		item_name,
		id_client,
	}: ICreateDeliveryDTO): Promise<IDelivery> {
		const delivery = await this.prisma.deliveries.create({
			data: { item_name, id_client },
		});

		return delivery;
	}

	async findAllAvailable(): Promise<IDelivery[]> {
		const deliveries = await this.prisma.deliveries.findMany({
			where: { end_at: null },
		});

		return deliveries;
	}
}

export { DeliveriesRepository };
