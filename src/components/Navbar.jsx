// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, 
  Box, 
  Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

const Navbar = () => {
 
  return (
    
    <div>
      <Flex>
        <Box p='4'>
          <Link to={"/"}>
        <h3>Aljaba Home</h3>
        </Link>
        </Box>
      <Spacer />
        <Box p='4'>
      <Menu>
        <MenuButton>
          Categorias
        </MenuButton>
          <MenuList>
            <MenuItem>
            <Link to={`/categoria/${'Velas'}`}>
            Velas
             </Link>
            </MenuItem>
            <MenuItem>
            <Link to={`/categoria/${'Spray Home'}`}>
              Spray Home
             </Link>
            </MenuItem>
            <MenuItem>
            <Link to={`/categoria/${'Difusor'}`}>
              Difusor
             </Link>
            </MenuItem>
            </MenuList>
      </Menu>
    </Box> 
    <Spacer/>
    
    <Box p='4'>
      <Link to={"/cart"}>
      <CartWidget/>
      </Link>
    </Box>
  </Flex>
  </div>
  )
}

export default Navbar