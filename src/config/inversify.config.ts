import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductsController } from '../adapators/controllers/concrete/ProductsController';
import { ProductsService } from '../services/concrete/ProductsService';

const container = new Container();

container.bind<ProductsController>(TYPES.ProductsController).to(ProductsController);
container.bind<ProductsService>(TYPES.ProductsService).to(ProductsService);

export { container };
