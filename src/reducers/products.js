import { LOAD_PRODUCTS } from '../actions';

const initialState = {
  products: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOAD_PRODUCTS": {
      return {
        ...state,
        products: action.products,
      };
    }
    default:
      return state;
  }
}