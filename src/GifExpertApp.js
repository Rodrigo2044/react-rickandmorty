import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  // const [categories, setCategories] = useState(['One Punch']);
  const [categories, setCategories] = useState(['The Rick and Morty']);

  return (
    <>
      {/* <h2>GifExpertApp</h2> */}
      <h2>The Rick and Morty</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
