CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(40) NOT NULL,
  type varchar(40) NOT NULL
);

INSERT INTO
  products(name, type)
VALUES
  ('gelin', 'ring'),
  ('tira', 'ring'),
  ('mina', 'ring'),
  ('maya', 'ring');

SELECT * FROM products;
