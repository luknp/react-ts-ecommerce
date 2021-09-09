import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useMobileFullPage = (isPageActive: boolean, urlKey: string, onClose?: () => void) => {
  const [allowBackHistory, setAllowBackHistory] = useState(false);
  const history = useHistory();
  const { search } = useLocation();
  const { pathname } = history.location;
  const queries = queryString.parse(search);

  useEffect(() => {
    if (pathname === '/filters') {
      setAllowBackHistory(true);
    } else {
      setAllowBackHistory(false);
    }
  }, [pathname]);

  useEffect(() => {
    console.log(search);
    if (!queries[urlKey] && isPageActive) {
      if (onClose) {
        onClose();
      }
    }
  }, [search, isPageActive]);

  const handleFullPageUrlQuery = (isPageActive: boolean) => {
    if (isPageActive) {
      addFullPageKeyToUrl();
    } else {
      removeFullPageKeyFromUrl();
    }
  };

  const addFullPageKeyToUrl = () => {
    console.log('addFullPageKeyToUrl');
    if (!queries[urlKey]) {
      const queryParam = `${urlKey}=true`;
      history.push(`${pathname}${search}&${queryParam}`);
    } else {
      console.log('addFullPageKeyToUrl exist');
    }
  };

  const removeFullPageKeyFromUrl = () => {
    console.log('removeFullPageKeyFromUrl');
    if (queries[urlKey]) {
      const queryParam = queryString.exclude(search, [urlKey]);
      history.push(`${pathname}${queryParam}`);
      history.push(`${pathname}${queryParam}`);
    }
  };

  const handleBackHistory = () => {
    history.goBack();
  };

  return { addFullPageKeyToUrl, removeFullPageKeyFromUrl, handleFullPageUrlQuery, allowBackHistory, handleBackHistory };
};

export default useMobileFullPage;
