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
import './style.scss';

type Props = {
  searchInitPhrase: string;
  handleSetIsSearchActive: (isActive: boolean) => void;
};

export default function MobileHeader({ searchInitPhrase, handleSetIsSearchActive }: Props) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState(searchInitPhrase);
  const inputElement = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const handleSetIsSearch = (isSearch: boolean) => {
    setIsSearchActive(isSearch);
    handleSetIsSearchActive(isSearch);
  };

  const handleInputOchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
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
    setSearchPhrase('');
    inputElement?.current?.focus();
  };

  const handleClickSuggestedPhrase = (phrase: ProductPhrase) => {
    handleSetIsSearch(false);
    setSearchPhrase(phrase.name);
    handleRedirectsToSearch(phrase.name);
  };

  const handleDeletePhrase = (phrase: ProductPhrase) => {
    console.log(phrase);
  };

  return (
    <>
      <div className='space-due-fixed-child'>
        <div className='mobile-search-header-container'>
          <form className='search-container' onSubmit={handleSubmit}>
            {isSearchActive && <ArrowBackIosIcon onClick={() => handleSetIsSearch(false)} />}
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
      </div>
      {isSearchActive && (
        <>
          <MobileSearchSuggestions
            searchPhrase={searchPhrase}
            lastSearchedPhrase={arr}
            popularPhrase={arr}
            allPhrase={arr}
            clickSuggestedPhrase={handleClickSuggestedPhrase}
            deletePhrase={handleDeletePhrase}
          />
        </>
      )}
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
