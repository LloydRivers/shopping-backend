import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductsController } from '../modules/products/adaptors/controllers/concrete/ProductsController';
import { ProductsService } from '../modules/products/services/concrete/ProductsService';
import { ProductsRepository } from '../modules/products/adaptors/repositories/concrete/ProductsRepository';

const container = new Container();

container.bind<ProductsController>(TYPES.ProductsController).to(ProductsController);
container.bind<ProductsService>(TYPES.ProductsService).to(ProductsService);
container.bind<ProductsRepository>(TYPES.ProductsRepository).to(ProductsRepository);

export { container };
