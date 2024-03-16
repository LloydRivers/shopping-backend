import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductsController } from '../adapators/controllers/concrete/ProductsController';
import { ProductsService } from '../services/concrete/ProductsService';
import { ProductsRepository } from '../adapators/repositories/concrete/ProductsRepository';

const container = new Container();

container.bind<ProductsController>(TYPES.ProductsController).to(ProductsController);
container.bind<ProductsService>(TYPES.ProductsService).to(ProductsService);
container.bind<ProductsRepository>(TYPES.ProductsRepository).to(ProductsRepository);

export { container };
