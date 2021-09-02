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
import MenuIcons from './MenuIcons';
import { Badge, Typography } from 'components/Wrappers';
import { AppBar, Toolbar, IconButton, InputBase, Menu, MenuItem, Fab, useMediaQuery } from '@material-ui/core';
import classNames from 'classnames';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './mu-styles';
import SearchField from 'components/SearchField';

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
  const [profileMenu, setProfileMenu] = useState<Element | null>(null);
  const classes = useStyles();

  const handleSetIsSearch = (e: React.MouseEvent, isSearch: boolean) => {
    setIsSearchActive(isSearch);
    setProfileMenu(e.currentTarget);
  };

  const handleInputOchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsSearchActive(false);
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
    setIsSearchActive(false);
    setSearchPhrase(phrase.name);
    handleRedirectsToSearch(phrase.name);
  };

  const handleDeletePhrase = (phrase: ProductPhrase) => {
    dispatch(showNotification('Deleted', 'success'));
    console.log(phrase);
  };

  return (
    <>
      <div className='space-due-fixed-child'>
        <div className='desktop-header-container'>
          <div className='page-content flex-center'>
            <div className='logo'>LOGO</div>
            <div className='sss'>
              <SearchField searchInitPhrase='a' handleSetIsSearchActive={(isActive: boolean) => console.log(isActive)} />
              <div className='search-form-autocomplete'>
                <MobileSearchSuggestions
                  searchPhrase={''}
                  lastSearchedPhrase={arr}
                  popularPhrase={arr}
                  allPhrase={arr}
                  clickSuggestedPhrase={() => console.log('aaa')}
                  deletePhrase={() => console.log('bbbb')}
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
