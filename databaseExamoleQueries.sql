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






import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import { productNotFoundMetadata } from './not-found';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: Props) {
  const singleProduct = await getProductById(parseInt(props.params.productId));

  if (!singleProduct) {
    return productNotFoundMetadata;
  }

  return {
    title: singleProduct.name,
    description: `Single product page for ${singleProduct.name}`,
  };
}

type Props = {
  params: {
    productId: string;
  };
};

export default async function AnimalPage(props: Props) {
  const singleProduct = await getProductById(parseInt(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  return (
    <>
      <h1>{singleProduct.name}</h1>
      <main>
        This product is a {singleProduct.type}
        <br />
        <Image
          src={`/images/${singleProduct.name}-${singleProduct.id}.jpg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
      </main>
    </>
  );
}






import { products } from '../../../migrations/1676216545-createTableProduct.mjs';

export default function singleProduct({ params }) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productname;
  });

  return (
    <div>
      <h2>{singleProduct.name}</h2>
    </div>
  );
}













//button


'use client';

import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';

export default function product(props: Props) {
  return (
    <div>
      {/* <h2>{props.product.name}</h2> */}
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productCookie');

          if (!productsInCookies) {
            // if there is no cookie function stop here
            return;
          }

          // try to find the product inside of the cookies
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my product is not inside of the cookie
          if (foundProduct) {
            // update the cookie with the new values
            foundProduct.stars--;
            // if there is a negative value set number to 0
            if (foundProduct.stars < 0) {
              foundProduct.stars = 0;
            }
            // Update the cookie after transformation
            setStringifiedCookie('productsCookie', productsInCookies);
          }
        }}
      >
        - ⭐️
      </button>
      <button
        onClick={() => {
          // get the cookie
          const productsInCookies = getParsedCookie('productsCookie');

          // if there is no cookie we initialize the value with a 1
          if (!productsInCookies) {
            // create the cookie with a new object for the product
            setStringifiedCookie('productsCookie', [
              { id: props.product.id, stars: 1 },
            ]);
            // if there is no cookie function stop here
            return;
          }

          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          // my product is inside of the cookie
          if (foundProduct) {
            // Add a start to the foundFruit
            foundProduct.stars++;
            // my product is not inside of the cookie
          } else {
            // Add a the product to the array of products in cookies
            productsInCookies.push({ id: props.product.id, stars: 1 });
          }

          // Update the cookie after transformation
          setStringifiedCookie('productsCookie', productsInCookies);
        }}
      >
        + ⭐️
      </button>
    </div>
  );
}



//Cart
'use client';
import { useContext } from 'react';

// import { products } from '../migrations/1676216545-createTableProduct.mjs';

export default function CartPage() {
  // eslint-disable-next-line no-undef
  const { cart, removeProduct } = useContext(CartPage);

  const Products = cart.map((Product) => (
    <div key={Product.id}>
      <p>
        {Product.name} ({Product.quantity})
      </p>
      <button onClick={() => removeProduct(Product.id)}>Remove</button>
    </div>
  ));

  const totalCost = cart.reduce(
    (acc, products) => acc + Products.price * products.quantity,
    0,
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart}
      <p>Total Cost: {totalCost}</p>
    </div>
  );
}






import Image from 'next/image';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { getProductById, Product } from '../../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import IndexPage from './product';
import styles from './Products.module.scss';

'use client';

// import { productNotFoundMetadata } from './not-found';
export const dynamic = 'force-dynamic';



type Props = {
  product: any;
  params: {
    productId: string;
    name: string;
    price: number;
    type: string;
  };
};

export default async function ProductPage(props: Props) {
  console.log('lets see the type', props.params.productId);
  const singleProduct = await getProductById(parseInt(props.params.productId));
  // console.log('seeeeee', singleProduct);

  if (!singleProduct) {
    // throw new Error('this action is not allowed with Error id: 213123123');
    notFound();
  }

  return (
    <>
      <h1>{singleProduct.name}</h1>
      <main>
        This is a {singleProduct.type}
        <br />
        The price is : {singleProduct.price}
        <br />
        <br />

        <Image
          src={`/images/${singleProduct.name}.jpeg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
        <IndexPage />

        <div className={styles.description}>{singleProduct.description}</div>

      <div className={styles.price} data-test-id="product-price">
        {singleProduct.price} €
      </div>
      <div>
        <label data-test-id="product-quantity" htmlFor="amount">
          Qty:
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={inputAmount}
          onChange={(event) => setInputAmount(event.currentTarget.value)}
        />
        <button onClick={() => {
                // get the cookie
                amount: 1,
              });
            }

            // Update the cookie after transformation
            setStringifiedCookie('productsCookie', producstInCookies);
            router.refresh();
          }}
        > const producstInCookies = getParsedCookie('productsCookie');

            // if there is no cookie we initialize the value with 1
            if (!producstInCookies) {
              // create the cookie with a new object
              setStringifiedCookie('productsCookie', [
                { id: singleProduct.id, amount: 1 },
              ]);
              // if there is no cookie stop here
              return;
            }

            // try to find the fruit inside of the cookie
            const foundProduct = producstInCookies.find((productCookie) => {
              return productCookie.id === singleProduct.id;
            });

            // my product is inside of the cookie
            if (foundProduct) {
              // Add amount to the foundProduct
              foundProduct.amount =
                Number(foundProduct.amount) + Number(inputAmount);
              // my product is inside of the cookie
            } else {
              // Add the product to the array of products in cookies
              producstInCookies.push({
                id: singleProduct.id,

          Add to Cart
        </button>
        }}></button>
      </main>
    </>
  );
}







'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './Products.module.scss';

export default function Products({ singleProduct }) {
  const [inputAmount, setInputAmount] = useState(1);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{singleProduct.title}</h1>
      <h3 className={styles.header}>{singleProduct.header}</h3>
      <div className={styles.card}>
        <Image
          src={`/images/${singleProduct.image}`}
          alt={singleProduct.name}
          width="370"
          height="280"
          className={styles.image}
          data-test-id="product-image"
        />
        <div className={styles.description}>{singleProduct.description}</div>
      </div>
      <div className={styles.price} data-test-id="product-price">
        {singleProduct.price} €
      </div>
      <div>
        <label data-test-id="product-quantity" htmlFor="amount">
          Qty:
        </label>
        <input
          type="number"
          min="1"
          max="10"
          value={inputAmount}
          onChange={(event) => setInputAmount(event.currentTarget.value)}
        />

        <button
          data-test-id="product-add-to-cart"
          className={styles.button}
          onClick={() => {
            // get the cookie
            const producstInCookies = getParsedCookie('productsCookie');

            // if there is no cookie we initialize the value with 1
            if (!producstInCookies) {
              // create the cookie with a new object
              setStringifiedCookie('productsCookie', [
                { id: singleProduct.id, amount: 1 },
              ]);
              // if there is no cookie stop here
              return;
            }

            // try to find the fruit inside of the cookie
            const foundProduct = producstInCookies.find((productCookie) => {
              return productCookie.id === singleProduct.id;
            });

            // my product is inside of the cookie
            if (foundProduct) {
              // Add amount to the foundProduct
              foundProduct.amount =
                Number(foundProduct.amount) + Number(inputAmount);
              // my product is inside of the cookie
            } else {
              // Add the product to the array of products in cookies
              producstInCookies.push({
                id: singleProduct.id,
                amount: 1,
              });
            }

            // Update the cookie after transformation
            setStringifiedCookie('productsCookie', producstInCookies);
            router.refresh();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}



.itemRow {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0.5px solid black;
  margin-bottom: 10px;
  max-width: 800px;
}

.title {
  width: 40%;
}

.header {
  width: 30%;
}

.price {
  width: 15%;
  text-align: right;
}

.amount {
  width: 15%;
  text-align: right;
}

.total {
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 450px;
}

.btn {
  text-decoration: none;
  border: none;
  padding: 5px 10px;
  font-size: 0.7rem;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
}
/* Adding transformation when the button is active */
.btn:hover {
  background-color: #3e8e41;
}
.btn:active {
  transform: scale(0.98);
  /* Scaling button to 0.98 to its original size */
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  /* Lowering the shadow */
}

/* .container {
  display: grid;
} */

/* .leftBox {
  position: relative;
  top: 48%;
  text-align: center;
  transform: translate(0, -50%);
  padding-left: 15px;
} */

/* .rightBox {
  position: relative;
  top: -30%;
  text-align: center;
  transform: translate(0, -50%);
  padding: 3rem;
} */

/* .left {
  grid-column: 1;
} */

/* .right {
  grid-column: 2;
} */




'use client';
import { cookies } from 'next/headers';

export default function Head() {
  return (
    <>
      <title>Create Next App</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
