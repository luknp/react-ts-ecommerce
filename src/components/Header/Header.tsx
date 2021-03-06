import React, { useState } from 'react';
import MobileHeader from 'components/Header/MobileHeader';
import DesktopHeader from 'components/Header/DesktopHeader';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import useMobileComponents from 'hooks/useMobileComponents';
import queryString from 'query-string';

const queryKeys = {
  SEARCH: 'search',
  CATEGORY: 'category',
};
function Header() {
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const { search } = useLocation();
  const queries = queryString.parse(search);
  const { allowDisplayMobileHeader } = useMobileComponents();
  //   console.log(search);
  //   console.log(queries[queryKeys.SEARCH]);

  let searchInitPhrase = queries[queryKeys.SEARCH] || '';
  if (Array.isArray(searchInitPhrase)) {
    searchInitPhrase = searchInitPhrase[0];
  }

  return (
    <>
      {isMobile ? (
        allowDisplayMobileHeader && <MobileHeader searchInitPhrase={searchInitPhrase} />
      ) : (
        <DesktopHeader searchInitPhrase={searchInitPhrase} />
      )}
    </>
  );
}

export default Header;
