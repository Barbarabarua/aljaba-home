// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Center } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {
  return (
    <Center bg='mistyrose' h='100px' color='black'>
          {greeting}
</Center>
  )
}

export default ItemListContainer