export const products = [
  { id: 1, name: 'galin', price: 200, type: 'ring' },
  { id: 2, name: 'tira', price: 110, type: 'ring' },
  { id: 3, name: 'mina', price: 130, type: 'ring' },
  { id: 4, name: 'maya', price: 190, type: 'iring' },
];

/// lets just cherck the error
export async function up(sql) {
  await sql`
  INSERT INTO products ${sql(products, 'name', 'price', 'type')}`;
}
export async function down(sql) {
  for (const product of products) {
    await sql`
DELETE FROM
products
WHERE
 id = ${product.id}
  `;
  }
}
