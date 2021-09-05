import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const useMobileFullPage = (isPageActive: boolean, urlKey: string) => {
  const [closePageFlag, setClosePageFlag] = useState(false);
  const history = useHistory();
  const { search } = useLocation();
  const { pathname } = history.location;
  const queries = queryString.parse(search);

  const handleFullPageUrlQuery = (isPageActive: boolean) => {
    if (isPageActive) {
      if (!queries[urlKey]) {
        const queryParam = `${urlKey}=true`;
        if (search) {
          history.push(`${pathname}${search}&${queryParam}`);
        } else {
          history.push(`${pathname}?${queryParam}`);
        }
      }
    } else {
      const queryParam = queryString.exclude(search, [urlKey]);
      history.push(`${pathname}${queryParam}`);
    }
  };

  if (!queries[urlKey] && isPageActive && !closePageFlag) {
    setClosePageFlag(true);
  } else {
    if (closePageFlag) {
      setClosePageFlag(false);
    }
  }

  return { handleFullPageUrlQuery, closePageFlag };
};

export default useMobileFullPage;
