import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.assign('');
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  // Rendering null because we're redirecting via JavaScript
  return null;
};

export default RedirectPage;
