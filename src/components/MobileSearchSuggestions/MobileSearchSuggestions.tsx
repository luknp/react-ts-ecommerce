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

  function Sugestions(headerName: string, phrases: Array<ProductPhrase>, allowDelete: boolean) {
    return (
      <div className='mobile-search-suggestions-container'>
        {phrases.length > 0 && (
          <>
            <p>{headerName}</p>
            {phrases
              .filter(({ name }) => name.indexOf(searchPhrase.toLowerCase()) > -1)
              .map((value, i) => {
                return (
                  <div
                    onClick={() => handleClickPhrase(value.name)}
                    className={`suggestion ${!allowDelete && 'clear-hide'}`}
                    key={i}
                    tabIndex={0}
                  >
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

  if (searchPhrase) {
    return <>{Sugestions('WYSZUKIWANIA', allPhrase, false)}</>;
  }
  return (
    <>
      {Sugestions('OSTATNIE WYSZUKIWANIA', lastSearchedPhrase, true)}
      {Sugestions('POPULARNE WYSZUKIWANIA', popularPhrase, false)}
    </>
  );
}
