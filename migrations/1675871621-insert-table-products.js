import ProductsPage from '../app/products/page';

export const products = [
  { name: 'galin', price: 100, type: 'ring' },
  { name: 'tira', price: 110, type: 'ring' },
  { name: 'mina', price: 130, type: 'ring' },
  { name: 'maya', price: 190, type: 'iring' },
];

/// lets just cherck the error
exports.up = async (sql) => {
  await sql`
  INSERT INTO products ${sql(products, 'name', 'price', 'type')}`;
};
exports.down = async (sql) => {
  for (const product of products) {
    await sql`
DELETE FROM
products
WHERE
name=${product.name} AND
price=${product.price} AND
type=${product.type}`;
  }
};
