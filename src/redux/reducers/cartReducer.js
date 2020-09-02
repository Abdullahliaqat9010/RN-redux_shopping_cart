const initialState = {
  products: [],
  total_items: 0,
  total_bill: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload: product } = action;
  switch (type) {
    case "ADD_TO_CART": {
      return state;
    }
    case "REMOVE_FROM_CART": {
      return state;
    }
    case "RESET_CART": {
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
