import { Products } from '../data';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  products: Products,
});

export const addToCart = productId => ({
  type: 'ADD_TO_CART',
  productId
});