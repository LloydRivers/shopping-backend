import axios from 'axios';
import 'reflect-metadata';
import { ProductsRepository } from './ProductsRepository';
/*
Test by mocking or create a fake server (supertest)
Mock the direct dependency of the class
*/
// const mockAxiosGet = vi.spy(axios, 'get');

vi.mock('axios');

describe('ProductsRepository', () => {
  describe('getAllProducts', () => {
    //we should clear allmocks before/after a test if we do this
    let instance: ProductsRepository;
    const data = [{ id: 1, name: 'Product 1' }];
    beforeEach(() => {
      instance = new ProductsRepository();
    });
    test('should call axios.get and return the correct data', async () => {
      vi.mocked(axios.get).mockResolvedValueOnce({
        data,
      });
      const products = await instance.getAllProducts();
      expect(products).toEqual(data);
    });
  });
});
