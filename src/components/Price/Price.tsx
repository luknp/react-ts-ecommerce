import React from 'react';
import { countProcentFever } from 'utils';
import './style.scss';

interface Props {
  price: number;
  currency: string;
  promotionPrice?: number;
}

export default function Price({ price, currency, promotionPrice }: Props) {
  const actualPrice = promotionPrice ? promotionPrice : price;
  return (
    <div className='price-container'>
      <div className='price'>
        <div className='price-row'>
          <p className='price-money'>{`${actualPrice} ${currency}`}</p>
          {promotionPrice && (
            <div className='promotion'>
              <p className='old-price'>
                <s>{`${price} ${currency}`}</s>
              </p>
              <div className='procent-promotion'>
                <p>
                  {`${countProcentFever(price, promotionPrice)}
                      %`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
