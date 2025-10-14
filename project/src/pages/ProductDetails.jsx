import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
const ProductDetails = () => {
  const params = useParams();
  const selectedProduct = products.find(
    (product) => product.id === parseInt(params.id)
  );
  console.log(selectedProduct);
  return (
    <div>
      <h1>Product Details</h1>

      {selectedProduct && <ProductCard product={selectedProduct} />}
    </div>
  );
};

export default ProductDetails;
