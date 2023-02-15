import { cache } from 'react';
import { sql } from './connect';

export type Product = {
  id: number;
  name: string;
  price: number;
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
  if (!id) return undefined;
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
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
