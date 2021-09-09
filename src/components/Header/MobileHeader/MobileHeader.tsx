import React from 'react';
import MobileSearchSuggestions from 'components/MobileSearchSuggestions';
import ConfirmDialog from 'components/ConfirmDialog';
import SearchField from 'components/SearchField';
import MobileButtomMenu from 'components/MobileButtomMenu';
import { searchSuggestions } from 'components/Header/mocks';
import useMobileFullPage from 'hooks/useMobileFullPage';
import useSearchHeader from 'components/Header/useSearchHeader';
import useMobileComponents from 'hooks/useMobileComponents';

import './style.scss';

type Props = {
  searchInitPhrase: string;
};

export default function MobileHeader({ searchInitPhrase }: Props) {
  const {
    isSearchActive,
    setIsSearchActive,
    searchPhrase,
    setSearchPhrase,
    handleDeleteSuggestedPhrase,
    handleRedirectsToSearch,
    handleClickSuggestedPhrase,
  } = useSearchHeader(searchInitPhrase);
  const { handleFullPageUrlQuery, allowBackHistory, handleBackHistory } = useMobileFullPage(isSearchActive, 'mobile-search', () =>
    setIsSearchActive(false),
  );
  const { allowDisplay } = useMobileComponents();

  const handleSetIsSearchActive = (isSearchActive: boolean) => {
    handleFullPageUrlQuery(isSearchActive);
    setIsSearchActive(isSearchActive);
  };

  return (
    <>
      <div className='header-mobile-space-due-fixed-child'>
        <div className='mobile-header-container'>
          <SearchField
            isSearchActive={isSearchActive}
            searchPhrase={searchPhrase}
            handleSetSearchPhrase={(searchPhrase: string) => setSearchPhrase(searchPhrase)}
            handleSetIsSearchActive={handleSetIsSearchActive}
            allowBackHistory={allowBackHistory}
            handleBackHistory={handleBackHistory}
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
              deletePhrase={handleDeleteSuggestedPhrase}
            />
          </div>
        </div>
      )}
      {allowDisplay && <MobileButtomMenu />}
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
