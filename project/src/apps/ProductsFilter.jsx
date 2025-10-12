import { useReducer } from "react";
import { products } from "../data/products.js";
import { filterReducer } from "../reducers/filterReducer.jsx";
const ProductsFilter = () => {
  const initialState = {
    discount: 0,
    price: 0,
  };
  //   const [filters, filterDispatch] = useReducer(filterReducer, initialState);

  const [{ price, discount }, filterDispatch] = useReducer(
    filterReducer,
    initialState
  );

  const handleDiscountChange = (e) => {
    filterDispatch({ type: "DISCOUNT", payload: e.target.value });
  };

  const handlePriceChange = (e) => {
    filterDispatch({ type: "PRICE", payload: e.target.value });
  };

  const filteredByPrice =
    price > 0 ? products.filter((product) => product.price <= price) : products;

  const filterByDiscount =
    discount > 0
      ? filteredByPrice.filter((product) => product.discount > discount)
      : filteredByPrice;
  return (
    <div>
      ProductsFilter
      <div>
        Price:
        <input
          onChange={handlePriceChange}
          type="text"
          placeholder="set your price"
        />{" "}
        Discount:{" "}
        <input
          onChange={handleDiscountChange}
          type="text"
          placeholder="set your discount"
        />{" "}
        {/* <button>Apply Filter</button> */}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filterByDiscount.length > 0 &&
            filterByDiscount.map((product) => {
              return (
                <div
                  key={product.id}
                  style={{
                    border: "1px solid black",
                    margin: "5px",
                    padding: "5px",
                  }}
                >
                  {product.name} : {product.price}
                  {product.discount && ` - ${product.discount}% off`}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
