import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link, useLocation } from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethod';

const Info = styled.div`
opacity:0 ;
width:100% ;
height:100% ;
position:absolute ;
top: 0;
left: 0;
display: flex;
justify-content:center ;
align-items:center ;
z-index:3 ;
background-color:rgba(0,0,0,0.2) ;
transition:all 0.5 ease ;
cursor: pointer;
`


const Container = styled.div`
flex:1 ;
margin:30px ;
min-width:280px ;
height: 350px;
display:flex ;
justify-content:center ;
align-items:center ;
background-color: #f5fbfd ;
position:relative ;

&:hover ${Info}
{
    opacity:1 ;

}
`

const Circle = styled.div`
width:200px ;
height:200px;
border-radius:50% ;
background-color:white ;
position:absolute ;

`



const Image = styled.img`
height:75% ;
z-index:2 ;
`
const Icon= styled.i`
margin:5px ;
width:40px ;
height:40px ;
border-radius:50% ;
background-color:white ;
display: flex;
justify-content:center ;
align-items:center ;
transition: all 0.5s ease ;

&:hover{
    background-color:#e9f5f5 ;
    transform:scale(1.1);
}
`
const CartIcon= styled.i` margin:5px ;
margin:3px ;
width:40px ;
height:40px ;
border-radius:50% ;
background-color:white ;
display: flex;
justify-content:center ;
align-items:center ;
transition: all 0.5s ease ;

&:hover{
    background-color:#e9f5f5 ;
    transform:scale(1.1);
}

`
const Searchicon= styled.i` margin:5px ;
margin:3px ;
width:40px ;
height:40px ;
border-radius:50% ;
background-color:white ;
display: flex;
justify-content:center ;
align-items:center ;
transition: all 0.5s ease ;

&:hover{
    background-color:#e9f5f5 ;
    transform:scale(1.1);
}

`

const Product = ({item}) => {


 

  

  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
      {/* <CartIcon>
      <AddShoppingCartIcon/>
       </CartIcon> */}
     <Searchicon>
     <Link to={`/product/${item._id}`}>
     <SearchIcon/>
     </Link>
   
     </Searchicon>
       {/* <Icon>
       <FavoriteBorderOutlinedIcon/>
       </Icon> */}
      </Info>
    </Container>
  )
}

export default Product