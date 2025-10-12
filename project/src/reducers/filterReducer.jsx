export const filterReducer = (state, action) => {
  switch (action.type) {
    case "DISCOUNT":
      return { ...state, discount: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    default:
      return state;
  }
};
