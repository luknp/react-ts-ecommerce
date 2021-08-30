import React from 'react';
import './styles.scss';

type Props = {
  rating: number;
};

export default function StarsRating({ rating }: Props) {
  const style = { '--rating': `${rating}` } as React.CSSProperties;
  return <div className='starsRating' style={style} />;
}
