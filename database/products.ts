import { cache } from 'react';
import Product from '../app/products/[productName]/product';
import { sql } from './connect';

type Product = {
  id: number;
  name: string;
  type: string;
};

// get all products
export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
  `;

  return products;
});

// get a single product
export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return Product;
});

// get a single aproduct
// export const getProductById = cache(async (id: number) => {
//   const [product] = await sql<Product[]>`
//     SELECT
//       *
//     FROM
//       products
//     WHERE
//       id = ${id}
//   `;
//   return product;
// });
