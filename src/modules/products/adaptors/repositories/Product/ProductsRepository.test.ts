import axios from 'axios';
import 'reflect-metadata';
import { ProductsRepository } from './ProductsRepository';

describe('ProductsRepository', () => {
  let instance: ProductsRepository;

  beforeEach(() => {
    // Initialize a new instance of ProductsRepository before each test
    instance = new ProductsRepository();
  });

  vi.mock('axios');

  afterEach(() => {
    // Clear all mocks after each test to ensure isolation
    vi.clearAllMocks();
  });
  describe('getAllProducts', () => {
    test('should call getAllProducts and return the correct data', async () => {
      const data = [{ id: 1, name: 'Product 1' }];
      // Mock Axios to resolve with data
      vi.mocked(axios.get).mockResolvedValueOnce({ data });

      // Call getAllProducts and verify the response and Axios call
      const products = await instance.getAllProducts();
      expect(products).toEqual(data);
      expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    });

    test('should throw an error when getAllProducts fails', async () => {
      const error = new Error('Failed to fetch products');
      // Mock Axios to reject with an error
      vi.mocked(axios.get).mockRejectedValue(error);

      // Call getAllProducts and expect it to throw an error
      await expect(instance.getAllProducts()).rejects.toThrowError(error);
    });
  });

  describe('getProductByID', () => {
    test('should call getProductByID and return the correct data', async () => {
      const data = { id: 1, name: 'Product 1' };
      const productId = 1;
      // Mock Axios to resolve with data
      vi.mocked(axios.get).mockResolvedValueOnce({ data });

      // Call getProductByID and verify the response and Axios call
      const product = await instance.getProductByID(productId);
      expect(product).toEqual(data);
      expect(axios.get).toHaveBeenCalledWith(`https://fakestoreapi.com/products/${productId}`);
    });

    test('should throw an error when getProductByID fails', async () => {
      const error = new Error('Failed to fetch product');
      const productId = 1;
      // Mock Axios to reject with an error
      vi.mocked(axios.get).mockRejectedValue(error);

      // Call getProductByID and expect it to throw an error
      await expect(instance.getProductByID(productId)).rejects.toThrowError(error);
    });
  });

  describe('postProduct', () => {
    test('should call postProduct and return the correct data', async () => {
      const product = {
        id: 1,
        name: 'Product 1',
        title: 'Product Title',
        price: 10,
        description: 'Description',
        category: 'Category',
        image: 'Image URL',
        rating: { rate: 5, count: 10 },
      };
      // Mock Axios to resolve with product
      vi.mocked(axios.post).mockResolvedValueOnce({ data: product });

      // Call postProduct and verify the response and Axios call
      const newProduct = await instance.postProduct(product);
      expect(newProduct).toEqual(product);
      expect(axios.post).toHaveBeenCalledWith('https://fakestoreapi.com/products', product);
    });

    test('should throw an error when postProduct fails', async () => {
      const error = new Error('Failed to post product');
      const product = {
        id: 1,
        name: 'Product 1',
        title: 'Product Title',
        price: 10,
        description: 'Description',
        category: 'Category',
        image: 'Image URL',
        rating: { rate: 5, count: 10 },
      };
      // Mock Axios to reject with an error
      vi.mocked(axios.post).mockRejectedValue(error);

      // Call postProduct and expect it to throw an error
      await expect(instance.postProduct(product)).rejects.toThrowError(error);
    });
  });
});
