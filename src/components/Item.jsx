/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Card, Image, Stack, Text, CardBody, Divider, Button, ButtonGroup, CardFooter, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import ItemCount from './ItemCount';


// eslint-disable-next-line react-refresh/only-export-components
const Item = ({ producto }) => {
    
    console.log(producto)

    return (

        <div>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        // eslint-disable-next-line react/prop-types
                        src={producto.image}

                        borderRadius='lg'
                    />
                    <Stack>
                        <Heading size='md'>{producto.nombre}</Heading>
                        <Text>
                        </Text>
                        <Text color='blue.600' fontSize='2x1'>
                        ${producto.precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                        <Link to={`/item/${producto.id}`}>Detalle</Link>
                        </Button>
                    </ButtonGroup> 
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item