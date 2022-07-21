import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import { mobile } from '../responsive';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from '../pages/Home';




const Container = styled.div`
height: 80px;
margin-top:-15px ;
${mobile({height : "70px"})}
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex ;
justify-content: space-between ;
align-items:center ;
${mobile({padding : "10px 0px"})}
`

const Left = styled.div`flex:1;
display: flex;
align-items:center ;
`

const Language = styled.span`
cursor: pointer;
font-size:14px ;
${mobile({display: "none"})}
`

const SearchContainer=styled.div`
border: 0.5px solid lightgray ;
display: flex;
align-items:center ;
margin-left:25px ;
padding: 5px;
${mobile({marginLeft:"5px"})}


`

const Input = styled.input`
border:none ;
${mobile({width: "50px"})}
`

const Icon = styled.i``

const Center = styled.div`flex:1;
text-align:center ;
`

const Logo = styled.h1`
font-weight:bold ;
text-decoration:none ;
${mobile({fontSize : "24px" })}
`

const Right = styled.div`flex:1;
display: flex;
align-items:center ;
justify-content:flex-end ;
${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
font-size:14px ;
cursor: pointer;
margin-left:25px;
text-decoration:none ;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const CartIcon = styled.i``


const Nabvar = () => {
  const quantity = useSelector(state=>state.cart.quantity)

  return (
    <Container>
    <Wrapper>
    <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input/>
           <Icon style={{color:"gray", fontsize:"16px"}}><SearchIcon/></Icon>
        </SearchContainer>
    </Left>
    <Center>
      <Link to={"/"}> <Logo style={{textDecoration:"none"}}>YartCom</Logo></Link> 
    </Center>
    <Right>
        <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
       <Link to="/login"><MenuItem>SIGN IN</MenuItem></Link>
        <Link to="/cart">
        <MenuItem>
        <Badge badgeContent={quantity} color="primary">
     <CartIcon><ShoppingCartIcon/></CartIcon>
    </Badge>
        </MenuItem>
        </Link>
    </Right>
    </Wrapper>
    </Container>
  )
}

export default Nabvar