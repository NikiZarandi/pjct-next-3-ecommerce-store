import Form from './Form';

export const metadata = {
  title: 'Checkout',
  description:
    'Complete your purchase on our secure checkout page. Your chosen Jewelry is just a few steps away.',
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
