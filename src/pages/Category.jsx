import { useParams, Link, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
import { useState, useEffect } from "react";

function Category() {
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sorter, setSorter] = useState(false);
  const [productsList, setProducts] = useState([]);

  const maxPrice = searchParams.get("maxPrice");

  const currentCategoryArray = products.filter(
    (product) => product.categoryId === categoryId
  );
  useEffect(() => {
    let filteredProducts = currentCategoryArray;

    if (maxPrice) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price < Number(maxPrice)
      );
    }

    if (sorter) {
      filteredProducts = [...filteredProducts].sort(
        (a, b) => a.price - b.price
      );
    }

    setProducts(filteredProducts);
  }, [maxPrice, sorter, categoryId]);

  function handleChange(e) {
    const value = e.target.value;
    setSearchParams({ maxPrice: value });
  }

  return (
    <div>
      <h1>Category {categoryId}</h1>
      <p>Filter for products by price</p>
      <label htmlFor="maxPrice">Enter max price</label>
      <input
        type="number"
        id="maxPrice"
        placeholder="price"
        onChange={handleChange}
        value={maxPrice || ""}
      />
      <button onClick={() => setSorter((prev) => !prev)}>
        {sorter ? "Remove Sorting" : "Sort by Price"}
      </button>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {productsList.map((product) => (
          <li key={product.id} style={{ margin: "10px" }}>
            <Link to={`/product/${product.id}`}>
              {product.name} {product.price}$
              <img
                src={product.img}
                alt={product.name}
                style={{ width: "150px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
