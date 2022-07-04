import Link from 'next/link';

const ProductsPage = () => {
  Link;
  return (
    <>
      <h1>ProductsPage</h1>
      <ul>
        <li>
          <Link href='/products/1'>
            <a>Product1</a>
          </Link>
        </li>
        <li>
          <Link href='/products/2'>
            <a>Product2</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ProductsPage;
