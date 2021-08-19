import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { IconButton } from '@material-ui/core';
import { Badge } from 'components/Wrappers';
import { useHistory } from 'react-router-dom';
import './style.scss';

export default function ButtomMenu() {
  const history = useHistory();

  const favoritesOnclick = () => {
    history.push(`/app/shop/favorites-cart`);
  };

  const shoppingCartOnclick = () => {
    history.push(`/app/shop/shopping-cart`);
  };

  return (
    <div className='buttom-menu-container'>
      <ul className='menu'>
        <li className='menu-item'>
          <IconButton color='primary' aria-haspopup='true' aria-controls='mail-menu' className='bottom-menu-icon-button'>
            <HomeOutlinedIcon />
          </IconButton>
          <p>Start</p>
        </li>
        <li className='menu-item'>
          <IconButton color='inherit' aria-haspopup='true' aria-controls='mail-menu' className='bottom-menu-icon-button'>
            <PlaylistPlayOutlinedIcon />
          </IconButton>

          <p>Kategorie</p>
        </li>
        <li className='menu-item'>
          <IconButton
            color='inherit'
            aria-haspopup='true'
            aria-controls='mail-menu'
            className='bottom-menu-icon-button'
            onClick={shoppingCartOnclick}
          >
            <Badge badgeContent={3} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <p>Koszyk</p>
        </li>
        <li className='menu-item'>
          <IconButton color='inherit' aria-haspopup='true' aria-controls='mail-menu' onClick={favoritesOnclick}>
            <Badge badgeContent={4} color='info'>
              <FavoriteBorderOutlinedIcon />
            </Badge>
          </IconButton>
          <p>Ulubione</p>
        </li>
        <li className='menu-item'>
          <IconButton color='inherit' aria-haspopup='true' aria-controls='mail-menu'>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <p>Profil</p>
        </li>
      </ul>
    </div>
  );
}
