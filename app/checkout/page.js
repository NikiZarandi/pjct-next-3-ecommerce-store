import Form from './Form';

export const metadata = {
  title: 'Checkout',
  description:
    'Complete your Pilates journey with confidence on our secure checkout page. Enjoy the convenience of online shopping while we handle the rest. Your personalized classes and equipment are just a few steps away.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default function checkoutPage() {
  return (
    <div>
      <Form />
    </div>
  );
}
