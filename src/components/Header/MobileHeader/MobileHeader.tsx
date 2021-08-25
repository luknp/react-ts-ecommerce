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

import { useHistory, useLocation } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ClearIcon from '@material-ui/icons/Clear';

import MobileSearchSuggestions from 'components/MobileSearchSuggestions';
import './style.scss';

export default function MobileHeader() {
  const [isSearch, setIsSearch] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const history = useHistory();
  const inputElement = useRef<HTMLInputElement>(null);
  const { pathname, search } = useLocation();
  const [searchPhrase, setSearchPhrase] = useState('');

  let isArrowBack = false;
  if (isSearch || pathname !== '/products/list') {
    isArrowBack = true;
  }
  const handleInputOnlick = () => {
    // history.push(`/app/shop/search`);
    setIsSearch(true);
    setIsTyping(true);
  };

  const handleInputOchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setIsTyping(false);
    setIsSearch(false);
    // const newFilterParams = JSON.parse(JSON.stringify(filtersParams));
    // newFilterParams['search'] = searchPhrase;
    e.preventDefault();
    inputElement?.current?.blur();
  }

  function handleClearInput() {
    // inputElement?.current?.value = ''; //Invalid left-hand side in assignment expression?
    inputElement?.current?.focus();
  }

  function handleBack() {
    setIsTyping(false);
    setIsSearch(false);
    history.goBack();
  }

  return (
    <>
      <div className='mobile-search-header-container'>
        <form className='search-container' onSubmit={handleSubmit}>
          {isArrowBack && <ArrowBackIosIcon onClick={handleBack} />}
          <input
            id='auto'
            onClick={handleInputOnlick}
            autoComplete='off'
            placeholder='Search...'
            className='search-input'
            value={searchPhrase}
            onChange={handleInputOchange}
            ref={inputElement}
          />
          {isTyping ? (
            <button type='button' className='favorite-button' onClick={handleClearInput} value='Cancel'>
              <ClearIcon />
            </button>
          ) : (
            <button className='favorite-button'>
              <StarBorderIcon />
            </button>
          )}
          <button type='submit' className='search-button'>
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className='suggestion-container'>
        <MobileSearchSuggestions searchPhrase={searchPhrase} lastSearchedPhrase={arr} popularPhrase={arr} allPhrase={arr} />
      </div>
    </>
  );
}

const arr = [
  {
    name: 'bulbasaur 2 wsde      dsssssssssdsf fdsf fdsafvd edsfdcx  sfdsxffds',
    category: 'Elektronika i Urządzenia przemysłowe',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    name: 'ivysaur',
    category: 'Elektronika',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    name: 'venusaur',
    category: 'Elektronika',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    name: 'charmander',
    category: 'Elektronika',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    name: 'charmeleon',
    category: 'Elektronika',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    name: 'charmeleon2',
    category: 'Elektronika',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
];
