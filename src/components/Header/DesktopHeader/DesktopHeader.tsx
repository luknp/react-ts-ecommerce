import React from 'react';
import MobileSearchSuggestions from 'components/MobileSearchSuggestions';
import SearchField from 'components/SearchField';
import { searchSuggestions } from 'components/Header/mocks';
import MenuIcons from 'components/Header/DesktopHeader/MenuIcons';
import useSearchHeader from 'components/Header/useSearchHeader';
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

  return (
    <>
      <div className='space-due-fixed-child'>
        <div className='desktop-header-container'>
          <div className='page-content flex-center'>
            <div className='logo'>LOGO</div>
            <div className='search-container'>
              <SearchField
                isSearchActive={isSearchActive}
                searchPhrase={searchPhrase}
                handleSetSearchPhrase={(searchPhrase: string) => setSearchPhrase(searchPhrase)}
                handleSetIsSearchActive={(isSearchActive: boolean) => setIsSearchActive(isSearchActive)}
              />
              {isSearchActive && (
                <div className='search-form-autocomplete'>
                  <MobileSearchSuggestions
                    searchPhrase={searchPhrase}
                    lastSearchedPhrase={searchSuggestions}
                    popularPhrase={searchSuggestions}
                    allPhrase={searchSuggestions}
                    clickSuggestedPhrase={handleClickSuggestedPhrase}
                    deletePhrase={handleDeleteSuggestedPhrase}
                  />
                </div>
              )}
            </div>
            <div className='personal-data-section'>
              <MenuIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
