import Image from 'next/image';
import { products } from '../../databace';

// import { animalNotFoundMetadata } from './not-found';
export const dynamic = 'force-dynamic';

// eslint-disable-next-line require-await

// export async function generateMetadata(props) {
//   return {
//     title: `entity ${props.params.entityId} not found`,
//     description: `There is no entity with id: ${props.params.entityId}`,
//   };
// }

// export default function EntityNotFound() {
//   return <div>Sorry this Entity was not found</div>;
// }
// // app/error.js

// export const metadata = {
//   title: 'Error',
//   description: 'ups something went wrong',
// };

// export function Error() {
//   return <div>Sorry this Entity was not found</div>;
// }

export default function ProducktPage({ params }) {
  const singleProduct = products.find((product) => {
    return product.name.toLowerCase() === params.productName;
  });

  return (
    <>
      <h1>{singleProduct.firstName}</h1>
      <main>
        This product is a {singleProduct.type} {singleProduct.accessory}
        <br />
        <Image
          src={`/images/${singleProduct.name}-${singleProduct.id}.jpeg`}
          alt={singleProduct.type}
          width="200"
          height="200"
        />
        <button>by now</button>
      </main>
    </>
  );
}
