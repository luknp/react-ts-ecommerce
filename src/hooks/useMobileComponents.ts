import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const useMobileComponents = () => {
  const [isHide, setIsHide] = useState(true);
  const [allowDisplay, setAllowDisplay] = useState(true);
  const [allowDisplayMobileHeader, setAllowDisplayMobileHeader] = useState(true);
  const history = useHistory();
  const { search } = useLocation();
  const { pathname } = history.location;
  const queries = queryString.parse(search);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleAllowDisplayMobileHeader = () => {
    if (pathname === '/filters') {
      setAllowDisplayMobileHeader(false);
    } else {
      setAllowDisplayMobileHeader(true);
    }
  };

  useEffect(() => {
    const searchUrlKey = 'mobile-search=true';
    console.log(`pathname: ${pathname}`);
    if (pathname === '/filters') {
      console.log(pathname);
      setIsHide(true);
    } else if (search.includes(searchUrlKey)) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
    handleAllowDisplayMobileHeader();
  }, [pathname, search]);

  useEffect(() => {
    console.log(`isHide: ${isHide}  isMobile: ${isMobile}`);
    if (!isHide && isMobile) {
      setAllowDisplay(true);
    } else {
      setAllowDisplay(false);
    }
  }, [isHide, isMobile]);

  return { allowDisplay, isMobile, allowDisplayMobileHeader };
};

export default useMobileComponents;
