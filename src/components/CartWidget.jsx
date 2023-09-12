import { Box, Divider, Flex } from '@chakra-ui/react'
// eslint-disable-next-line no-unused-vars
import React from 'react'


const CartWidget = () => {
  return (
    <div>
        <Flex>
            <Box>
        <span className="material-symbols-outlined">
        shopping_cart
         </span>
            </Box>
            <Divider/>
            <Box>
                <p>5</p>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget