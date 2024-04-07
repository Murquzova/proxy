import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Get the params from the query string
    const { params } = router.query;

    // Redirect to the desired URL
    if (params) {
      window.location.assign(`/success?params=${params}`);
    }
  }, [router.query.params]); // Run the effect whenever params change

  // Rendering null because we're redirecting via JavaScript
  return null;
};

export default SuccessPage;
