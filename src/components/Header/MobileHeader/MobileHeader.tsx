import React, { useState, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MobileSearchSuggestions from 'components/MobileSearchSuggestions';
import { ProductPhrase } from 'components/MobileSearchSuggestions/MobileSearchSuggestions';
import ConfirmDialog from 'components/ConfirmDialog';
import { useDispatch } from 'react-redux';
import { showNotification } from 'redux/slices/notificationSlice';
import SearchField from 'components/SearchField';
import MobileButtomMenu from 'components/MobileButtomMenu';
import queryString from 'query-string';
import { searchSuggestions } from 'components/Header/mocks';
import './style.scss';

type Props = {
  searchInitPhrase: string;
};

export default function MobileHeader({ searchInitPhrase }: Props) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState(searchInitPhrase);
  const inputElement = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { search } = useLocation();

  const { pathname } = history.location;
  const isMobileFullPage = 'isMobileFullPage';
  const queries = queryString.parse(search);

  const handleUrlQuery = (isSearch: boolean) => {
    if (isSearch) {
      if (!queries[isMobileFullPage]) {
        history.push(`${pathname}${search}&${isMobileFullPage}=true`);
      }
    } else {
      const a = queryString.exclude(search, [isMobileFullPage]);
      history.push(`${pathname}${a}`);
    }
  };
  const handleSetIsSearch = (isSearch: boolean) => {
    setIsSearchActive(isSearch);
    handleUrlQuery(isSearch);
  };

  if (!queries[isMobileFullPage] && isSearchActive) {
    handleSetIsSearch(false);
  }

  const handleRedirectsToSearch = (searchPhrase: string) => {
    history.push(`${pathname}?search=${searchPhrase}`);
  };

  const handleSetSearchPhrase = (searchPhrase: string) => {
    setSearchPhrase(searchPhrase);
  };

  const handleClickSuggestedPhrase = (phrase: ProductPhrase) => {
    handleSetIsSearch(false);
    setSearchPhrase(phrase.name);
    handleRedirectsToSearch(phrase.name);
  };

  const handleDeletePhrase = (phrase: ProductPhrase) => {
    dispatch(showNotification('Deleted', 'success'));
    console.log(phrase);
  };

  return (
    <>
      <div className='header-mobile-space-due-fixed-child'>
        <div className='mobile-header-container'>
          <SearchField
            isSearchActive={isSearchActive}
            searchPhrase={searchPhrase}
            handleSetSearchPhrase={handleSetSearchPhrase}
            handleSetIsSearchActive={handleSetIsSearch}
          />
        </div>
      </div>
      {isSearchActive && (
        <div className='suggestion-whole-page'>
          <div className='allow-scroll'>
            <MobileSearchSuggestions
              searchPhrase={searchPhrase}
              lastSearchedPhrase={searchSuggestions}
              popularPhrase={searchSuggestions}
              allPhrase={searchSuggestions}
              clickSuggestedPhrase={handleClickSuggestedPhrase}
              deletePhrase={handleDeletePhrase}
            />
          </div>
        </div>
      )}
      {!isSearchActive && <MobileButtomMenu />}
      {false && (
        <ConfirmDialog
          title='Confirm Delete Cart'
          contentText='Are you sure you want to delete the product?'
          actionBtnText='Delete Product'
          confirmAction={() => console.log('confirmAction')}
          cancelAction={() => console.log('cancelAction')}
        />
      )}
    </>
  );
}
