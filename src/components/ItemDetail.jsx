/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import ItemCount from './ItemCount';
import { CardHeader, CardBody, CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
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
                  <Image>{p.image}</Image>
                  <Text>{p.description}</Text>
                  <Text>{p.categoria}</Text>
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