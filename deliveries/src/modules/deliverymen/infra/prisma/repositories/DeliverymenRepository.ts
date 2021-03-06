import { inject, injectable } from 'tsyringe';

import { PrismaClient } from '@prisma/client';

import { ICreateDeliverymanDTO, IFindAllDeliveriesDTO } from '../../../dtos';
import { IDeliverymenRepository } from '../../../repositories';
import { IDeliveryman } from '../entities';

@injectable()
class DeliverymenRepository implements IDeliverymenRepository {
	constructor(
		@inject('Prisma')
		private prisma: PrismaClient
	) {}

	async create({
		username,
		password,
	}: ICreateDeliverymanDTO): Promise<IDeliveryman> {
		const deliveryman = await this.prisma.deliverymen.create({
			data: { username, password },
		});

		return deliveryman;
	}

	async findByUsername(username: string): Promise<IDeliveryman | null> {
		const deliveryman = await this.prisma.deliverymen.findFirst({
			where: { username: { equals: username, mode: 'insensitive' } },
		});

		return deliveryman;
	}

	async findAllDeliveries({
		id_deliveryman,
	}: IFindAllDeliveriesDTO): Promise<IDeliveryman> {
		const deliveryman = (await this.prisma.deliverymen.findFirst({
			where: { id: id_deliveryman },
			include: { deliveries: true },
		})) as IDeliveryman;

		return deliveryman;
	}
}

export { DeliverymenRepository };
