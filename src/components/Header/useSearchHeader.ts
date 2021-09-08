import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { showNotification } from 'redux/slices/notificationSlice';
import { ProductPhrase } from 'components/MobileSearchSuggestions/MobileSearchSuggestions';
import { useAppDispatch } from 'redux/hooks';
import { pushFilters } from 'redux/slices/productsSlice';

const useSearchHeader = (searchInitPhrase: string, handleSetIsSearchActive?: (isSearchActive: boolean) => void) => {
  const [searchPhrase, setSearchPhrase] = useState(searchInitPhrase);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const history = useHistory();
  const { pathname } = history.location;
  const dispatch = useAppDispatch();

  const handleRedirectsToSearch = (searchPhrase: string) => {
    dispatch(pushFilters({ search: searchPhrase }));
    history.push(`${pathname}?search=${searchPhrase}`);
  };

  const handleClickSuggestedPhrase = (phrase: ProductPhrase) => {
    setIsSearchActive(false);
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
