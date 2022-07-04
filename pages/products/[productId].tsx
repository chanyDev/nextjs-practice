import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const { productId } = router.query;

  return (
    <>
      <h1>DetailPage</h1>
      <div>ProductId : {productId}</div>
    </>
  );
};

export default DetailPage;
