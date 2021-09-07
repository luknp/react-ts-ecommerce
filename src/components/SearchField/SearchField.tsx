import React, { useRef, FormEvent, ChangeEvent } from 'react';
import { Search as SearchIcon } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ClearIcon from '@material-ui/icons/Clear';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import './style.scss';

type Props = {
  isSearchActive: boolean;
  allowBackHistory?: boolean;
  searchPhrase: string;
  handleSetIsSearchActive: (isActive: boolean) => void;
  handleSetSearchPhrase: (searchPhrase: string) => void;
  handleBackHistory?: () => void;
};

export default function SearchField({
  isSearchActive,
  allowBackHistory,
  searchPhrase,
  handleSetSearchPhrase,
  handleSetIsSearchActive,
  handleBackHistory,
}: Props) {
  const inputElement = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleOnClickBackHistory = () => {
    handleSetIsSearchActive(false);
    if (handleBackHistory) {
      handleBackHistory();
    }
  };

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSetSearchPhrase(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSetIsSearchActive(false);
    e.preventDefault();
    handleRedirectsToSearch(searchPhrase);
    inputElement?.current?.blur();
  };

  const handleRedirectsToSearch = (searchPhrase: string) => {
    history.push(`/products/list?search=${searchPhrase}`);
  };

  const handleClearInput = () => {
    handleSetSearchPhrase('');
    inputElement?.current?.focus();
  };

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit}>
        {isMobile && (isSearchActive || allowBackHistory) && <ArrowBackIosIcon onClick={handleOnClickBackHistory} />}
        <input
          id='auto'
          onClick={() => handleSetIsSearchActive(true)}
          autoComplete='off'
          placeholder='Search...'
          className='search-input'
          value={searchPhrase}
          onChange={handleInputOnChange}
          ref={inputElement}
        />
        {isSearchActive ? (
          <button type='button' className='search-favorite-button' onClick={handleClearInput} value='Cancel'>
            <ClearIcon />
          </button>
        ) : (
          <button className='search-favorite-button'>
            <StarBorderIcon />
          </button>
        )}
        <button type='submit' className='search-button'>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
