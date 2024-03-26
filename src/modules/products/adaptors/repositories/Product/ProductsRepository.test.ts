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

  describe('modifyProduct', () => {
    test('should call modifyProduct and return the correct data', async () => {
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
      const productId = 1;
      // Mock Axios to resolve with product
      vi.mocked(axios.put).mockResolvedValueOnce({ data: product });

      // Call modifyProduct and verify the response and Axios call
      const updatedProduct = await instance.modifyProduct(productId, product);
      expect(updatedProduct).toEqual(product);
      expect(axios.put).toHaveBeenCalledWith(`https://fakestoreapi.com/products/${productId}`, product);
    });

    test('should throw an error when modifyProduct fails', async () => {
      const error = new Error('Failed to modify product');
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
      const productId = 1;
      // Mock Axios to reject with an error
      vi.mocked(axios.put).mockRejectedValue(error);

      // Call modifyProduct and expect it to throw an error
      await expect(instance.modifyProduct(productId, product)).rejects.toThrowError(error);
    });
  });

  describe('deleteProduct', () => {
    test('should call deleteProduct and return the correct data', async () => {
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
      const productId = 1;
      // Mock Axios to resolve with product
      vi.mocked(axios.delete).mockResolvedValueOnce({ data: product });

      // Call deleteProduct and verify the response and Axios call
      const deletedProduct = await instance.deleteProduct(productId);
      expect(deletedProduct).toEqual(product);
      expect(axios.delete).toHaveBeenCalledWith(`https://fakestoreapi.com/products/${productId}`);
    });

    test('should throw an error when deleteProduct fails', async () => {
      const error = new Error('Failed to delete product');
      const productId = 1;
      // Mock Axios to reject with an error
      vi.mocked(axios.delete).mockRejectedValue(error);

      // Call deleteProduct and expect it to throw an error
      await expect(instance.deleteProduct(productId)).rejects.toThrowError(error);
    });
  });
});
