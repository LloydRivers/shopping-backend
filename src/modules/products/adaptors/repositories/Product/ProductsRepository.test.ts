import axios from 'axios';
import 'reflect-metadata';
import { ProductsRepository } from './ProductsRepository';

describe('ProductsRepository', () => {
  let instance: ProductsRepository;

  beforeEach(() => {
    // Initialize a new instance of ProductsRepository before each test
    instance = new ProductsRepository();
  });

  beforeEach(() => {
    // Mock axios
    vi.mock('axios');

    // Set up Axios mock to be used in all test cases
    vi.mocked(axios.get);
  });

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
});
