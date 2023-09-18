/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react';

const ItemList = ({ productos }) => {
  return (
    <div>
      <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={4}>
      {productos.map((p) => (
        <Item producto={p} key={p.id} />
        
        ))}
        </Flex>
    </div>
  );
};

export default ItemList;
