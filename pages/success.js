import { useEffect } from 'react';
import { useRouter } from 'next/router';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { params } = router.query;
    if (params) {
      window.location.assign(`https://vincode.az/success?params=${params}`);
    }
  }, [router.query.params]);

  return null;
};

export default SuccessPage;
