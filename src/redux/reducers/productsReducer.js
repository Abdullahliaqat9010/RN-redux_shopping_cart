const initialState = {
  products: [],
  wishlisted_products: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_WISHLIST": {
      return state;
    }
    case "REMOVE_FROM_WISHLIST": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default productsReducer;
