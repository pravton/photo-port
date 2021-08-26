import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Photolist from '../Photolist';

function Gallery({ currentCategory }) {
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(capitalizeFirstLetter(name))}</h1>
      <p>{capitalizeFirstLetter(description)}</p>
      <div>
      <Photolist category={name}/>
      </div>
    </section>
  )
}

export default Gallery;