/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const filteredProducts = productos.filter(producto => producto.id == id);

  return (
    <div>
      {filteredProducts.map(p => {
        return (
          <div key={p.id}>
            <Center p='1rem'>
              <Card>
                <CardHeader>
                  <Heading size='md'>{p.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>{p.description}</Text>
                  <Text>{p.category}</Text>
                </CardBody>
                <CardFooter>
                  <ItemCount />
                </CardFooter>
              </Card>
            </Center>
          </div>
        );
      })}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(ItemDetail);