import { useParams } from "react-router-dom";
import { products } from "../data/data";

function ProductDetails() {
  const { productId } = useParams();
  console.log(productId);

  const product = products.find(
    (product) => product.id === parseInt(productId, 10)
  );
  console.log(product);

  return (
    <div>
      {product ? (
        <>
          <h1>Product Detail</h1>
          <h2>{product.name}</h2>
          <p>price: {product.price}$</p>
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "150px" }}
          />{" "}
        </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

export default ProductDetails;
