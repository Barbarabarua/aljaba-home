/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div>
      {productos.map((p) => (
        <Item producto={p} key={p.id} />
        
      ))}
    </div>
  );
};

export default ItemList;
