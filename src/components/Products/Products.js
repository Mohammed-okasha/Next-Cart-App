import React from "react";
import Section from "../UI/Layouts/Section";
import ProductCard from "../ProductCard/ProductCard";

import RowGrid from "../UI/Layouts/RowGrid";

const Products = ({ products }) => {
  const productList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <Section title="our products">
      <RowGrid>{productList}</RowGrid>
    </Section>
  );
};

export default Products;
