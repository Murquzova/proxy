import { useEffect } from 'react';

const DeclinePage = () => {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.assign('/decline');
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  // Rendering null because we're redirecting via JavaScript
  return null;
};

export default DeclinePage;
