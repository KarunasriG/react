import { useReducer } from "react";
import { products } from "../data/products.js";
import { filterReducer } from "../reducers/filterReducer.jsx";
import ProductCard from "../components/ProductCard.jsx";
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
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
          {filterByDiscount.length > 0 &&
            filterByDiscount.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;
