import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import MobileSearchSuggestions from 'components/MobileSearchSuggestions';
import { ProductPhrase } from 'components/MobileSearchSuggestions/MobileSearchSuggestions';
import { useDispatch } from 'react-redux';
import { showNotification } from 'redux/slices/notificationSlice';
import SearchField from 'components/SearchField';
import { searchSuggestions } from 'components/Header/mocks';
import MenuIcons from 'components/Header/DesktopHeader/MenuIcons';
import './style.scss';

type Props = {
  searchInitPhrase: string;
};

export default function MobileHeader({ searchInitPhrase }: Props) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState(searchInitPhrase);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRedirectsToSearch = (searchPhrase: string) => {
    history.push(`/products/list?search=${searchPhrase}`);
  };

  const handleClickSuggestedPhrase = (phrase: ProductPhrase) => {
    setIsSearchActive(false);
    setSearchPhrase(phrase.name);
    handleRedirectsToSearch(phrase.name);
  };

  const handleDeletePhrase = (phrase: ProductPhrase) => {
    dispatch(showNotification('Deleted', 'success'));
    console.log(phrase);
  };
  const handleSetSearchPhrase = (searchPhrase: string) => {
    setSearchPhrase(searchPhrase);
  };

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
                handleSetSearchPhrase={handleSetSearchPhrase}
                handleSetIsSearchActive={(isActive: boolean) => console.log(isActive)}
              />
              <div className='search-form-autocomplete'>
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
            <div className='personal-data-section'>
              <MenuIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
