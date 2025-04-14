import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=10");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className={styles.wrapper}>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={{
                title: product.title,
                slug: product.id,
                image: product.image,
                isOutOfStock: index % 4 === 0,
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
