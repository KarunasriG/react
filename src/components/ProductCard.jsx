import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    console.log("Added to cart:", product.name);
    cartDispatch({ type: "ADD_TO_CART", payload: product });
    console.log("Current cart:", cart);
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <>
      <div
        key={product.id}
        style={{
          border: "1px solid black",
          margin: "5px",
          padding: "5px",
        }}
      >
        <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
          {product.name}
        </div>{" "}
        : {product.price}
        {product.discount && ` - ${product.discount}% off`} <br />
        <div>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
