import React from 'react';
import './style.scss';
import ClearIcon from '@material-ui/icons/Clear';

function MobileSearchSuggestions() {
  const updatePokeDex = (poke: string) => {
    console.log(poke);
  };

  const searchString = 'Ivy';

  return (
    <div className='mobile-search-suggestions-container'>
      <p>OSTATNIE WYSZUKIWANIA</p>
      {arr
        .filter(({ name }) => name.indexOf(searchString.toLowerCase()) > -1)
        .map((value, i) => {
          return (
            <div onClick={() => updatePokeDex(value.name)} className='suggestion' key={i} tabIndex={0}>
              <div className='suggestion-row'>
                <span className='suggestion-row-name'>{`${value.name}`}</span>
                <span className='suggestion-row-extra-info'>{`${value.category}`}</span>
              </div>
              <ClearIcon />
            </div>
          );
        })}
    </div>
  );
}

export default MobileSearchSuggestions;

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
];
