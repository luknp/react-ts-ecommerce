import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showNotification } from 'redux/slices/notificationSlice';
import { ProductPhrase } from 'components/MobileSearchSuggestions/MobileSearchSuggestions';

const useSearchHeader = (searchInitPhrase: string, handleSetIsSearchActive?: (isSearchActive: boolean) => void) => {
  const [searchPhrase, setSearchPhrase] = useState(searchInitPhrase);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const history = useHistory();
  const { pathname } = history.location;
  const dispatch = useDispatch();

  const handleRedirectsToSearch = (searchPhrase: string) => {
    history.push(`${pathname}?search=${searchPhrase}`);
  };

  const handleClickSuggestedPhrase = (phrase: ProductPhrase) => {
    if (handleSetIsSearchActive) {
      handleSetIsSearchActive(false);
    }
    setSearchPhrase(phrase.name);
    handleRedirectsToSearch(phrase.name);
  };

  const handleDeleteSuggestedPhrase = (phrase: ProductPhrase) => {
    dispatch(showNotification('Deleted', 'success'));
    console.log(phrase);
  };

  return {
    isSearchActive,
    setIsSearchActive,
    searchPhrase,
    setSearchPhrase,
    handleRedirectsToSearch,
    handleClickSuggestedPhrase,
    handleDeleteSuggestedPhrase,
  };
};

export default useSearchHeader;
