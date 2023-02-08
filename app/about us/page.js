// import { products } from 'databace/aboutUs';
// import Image from 'next/image';
// import Link from 'next/link';
// import { aboutUs } from '../../database/products';

export const dynamic = 'force-dynamic';

export default function aboutUsPage() {
  return (
    <>
      <h1>AboutUs</h1>
      <main>
        {aboutUsPage.map((aboutUs) => {
          return (
            <div key={aboutUs.id}>
              <h2>{aboutUs.name}</h2>

              <p4>
                ZARANDI DESIGN is an association of experienced designers,
                artists, photographers, copywriters and sales professionals.
                This enables us to offer top performance in every discipline and
                to ensure your success. The primary goal of ZARANDI is that our
                customers can stand out clearly from the competition. ZARANDI
                DESIGN should enhance your perception and creates a clear added
                value for you. Our design arises emotions and will boost your
                sales by inspiring your customers!
              </p4>

              {/* <!-- <Link href={`/products/${products.name.toLowerCase()}`} /> -->
<!-- <Image
src={`/images/${aboutUs.name}-${aboutUs.id}.jpg`}
alt={aboutUs.type}
width="200"
height="200"
/> -->
<!-- </Link> --> */}
            </div>
          );
        })}
      </main>
    </>
  );
}
