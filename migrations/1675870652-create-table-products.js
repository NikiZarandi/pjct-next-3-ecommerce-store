exports.up = async (sql) => {
  await sql`CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(40) NOT NULL,
    price integer NOT NULL,
    type varchar(40) NOT NULL
  );`;
};
exports.down = async (sql) => {
  await sql`DROP TABLE products`;
};
