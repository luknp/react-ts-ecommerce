import React, { useState, useRef, FormEvent, ChangeEvent } from 'react';
import {
  Menu as MenuIcon,
  MailOutline as MailIcon,
  NotificationsNone as NotificationsIcon,
  Person as AccountIcon,
  Search as SearchIcon,
  Send as SendIcon,
  ArrowBack as ArrowBackIcon,
  Brightness4 as Brightness4Icon,
} from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ClearIcon from '@material-ui/icons/Clear';
import MobileSearchSuggestions from 'components/MobileSearchSuggestions';
import { ProductPhrase } from 'components/MobileSearchSuggestions/MobileSearchSuggestions';
import ConfirmDialog from 'components/ConfirmDialog';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from 'redux/slices/notificationSlice';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import './style.scss';

type Props = {
  isSearchActive: boolean;
  searchPhrase: string;
  handleSetIsSearchActive: (isActive: boolean) => void;
  handleSetSearchPhrase: (searchPhrase: string) => void;
};

export default function SearchField({ isSearchActive, searchPhrase, handleSetSearchPhrase, handleSetIsSearchActive }: Props) {
  const inputElement = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleSetIsSearch = (isSearch: boolean) => {
    handleSetIsSearchActive(isSearch);
  };

  const handleInputOchange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSetSearchPhrase(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    handleSetIsSearch(false);
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

  const handleClickSuggestedPhrase = (phrase: ProductPhrase) => {
    handleSetIsSearch(false);
    handleSetSearchPhrase(phrase.name);
    handleRedirectsToSearch(phrase.name);
  };

  const handleDeletePhrase = (phrase: ProductPhrase) => {
    dispatch(showNotification('Deleted', 'success'));
    console.log(phrase);
  };

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit}>
        {isMobile && isSearchActive && <ArrowBackIosIcon onClick={() => handleSetIsSearch(false)} />}
        <input
          id='auto'
          onClick={() => handleSetIsSearch(true)}
          autoComplete='off'
          placeholder='Search...'
          className='search-input'
          value={searchPhrase}
          onChange={handleInputOchange}
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
