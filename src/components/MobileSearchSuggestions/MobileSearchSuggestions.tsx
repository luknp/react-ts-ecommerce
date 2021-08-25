import React from 'react';
import './style.scss';
import ClearIcon from '@material-ui/icons/Clear';

type ProductPhrase = {
  name: string;
  category?: string;
};

type Props = {
  searchPhrase: string;
  lastSearchedPhrase: Array<ProductPhrase>;
  popularPhrase: Array<ProductPhrase>;
  allPhrase: Array<ProductPhrase>;
  // getSelectedPhrase: (productPhrase: ProductPhrase) => void;
  // deleteLastSearched: (productPhrase: ProductPhrase) => void;
};

export default function MobileSearchSuggestions({
  searchPhrase,
  lastSearchedPhrase,
  popularPhrase,
  allPhrase,
}: // getSelectedPhrase,
// deleteLastSearched,
Props) {
  const handleClickPhrase = (phrase: string) => {
    console.log(phrase);
  };

  if (searchPhrase) {
    return (
      <div className='mobile-search-suggestions-container'>
        {allPhrase.length > 0 && (
          <>
            <p>WYSZUKIWANIA</p>
            {lastSearchedPhrase
              .filter(({ name }) => name.indexOf(searchPhrase.toLowerCase()) > -1)
              .map((value, i) => {
                return (
                  <div onClick={() => handleClickPhrase(value.name)} className='suggestion clear-hide' key={i} tabIndex={0}>
                    <div className='suggestion-row'>
                      <span className='suggestion-row-name'>{`${value.name}`}</span>
                      <span className='suggestion-row-extra-info'>{`${value.category}`}</span>
                    </div>
                    <ClearIcon />
                  </div>
                );
              })}
          </>
        )}
      </div>
    );
  }

  return (
    <div className='mobile-search-suggestions-container'>
      {lastSearchedPhrase.length > 0 && (
        <>
          <p>OSTATNIE WYSZUKIWANIA</p>
          {lastSearchedPhrase.map((value, i) => {
            return (
              <div onClick={() => handleClickPhrase(value.name)} className='suggestion' key={i} tabIndex={0}>
                <div className='suggestion-row'>
                  <span className='suggestion-row-name'>{`${value.name}`}</span>
                  <span className='suggestion-row-extra-info'>{`${value.category}`}</span>
                </div>
                <ClearIcon />
              </div>
            );
          })}
          {popularPhrase.length > 0 && (
            <>
              <p>POPULARNE WYSZUKIWANIA</p>
              {popularPhrase
                .filter(({ name }) => name.indexOf(searchPhrase.toLowerCase()) > -1)
                .map((value, i) => {
                  return (
                    <div onClick={() => handleClickPhrase(value.name)} className='suggestion clear-hide' key={i} tabIndex={0}>
                      <div className='suggestion-row'>
                        <span className='suggestion-row-name'>{`${value.name}`}</span>
                        <span className='suggestion-row-extra-info'>{`${value.category}`}</span>
                      </div>
                      <ClearIcon />
                    </div>
                  );
                })}
            </>
          )}
        </>
      )}
    </div>
  );
}
