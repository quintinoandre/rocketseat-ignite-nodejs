import { container } from 'tsyringe';

import { PrismaClient } from '@prisma/client';

import { ClientsRepository } from '../../modules/clients/infra/prisma/repositories';
import { IClientsRepository } from '../../modules/clients/repositories';
import { DeliveriesRepository } from '../../modules/deliveries/infra/prisma/repositories';
import { IDeliveriesRepository } from '../../modules/deliveries/repositories';
import { DeliverymenRepository } from '../../modules/deliverymen/infra/prisma/repositories';
import { IDeliverymenRepository } from '../../modules/deliverymen/repositories';

container.registerInstance('Prisma', new PrismaClient());

container.registerSingleton<IClientsRepository>(
	'ClientsRepository',
	ClientsRepository
);

container.registerSingleton<IDeliverymenRepository>(
	'DeliverymenRepository',
	DeliverymenRepository
);

container.registerSingleton<IDeliveriesRepository>(
	'DeliveriesRepository',
	DeliveriesRepository
);
