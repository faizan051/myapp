import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mobile } from '../responsive'
import Products from './Products'

const Container = styled.div`
flex:1 ;
height:70vh ;
margin:5px ;
position: relative;
`
const Image= styled.img`
width:100% ;
height:100% ;
object-fit:cover ;
${mobile({ height: "35vh" })}

`
const Info= styled.p`
position:absolute ;
width:100% ;
height:100% ;
top:10% ;
display: flex;
justify-content:center ;
align-items:center ;
flex-direction:column ;
`
const Title = styled.h1`
color:white ;
margin-bottom:20px ;
`
const Button = styled.button`
padding: 10px;
background-color:white ;
color:gray ;
border:none ;
cursor: pointer;
font-weight:600 ;
`

const Catagoryitem = ({item}) => {
  return (
  <Container>
<Link  to={`/products/${item.cat}`}>
  <Image src={item.img} />
  <Info>
      <Title>
          {item.title}
      </Title>
      <Button>
            SHOP NOW
      </Button>

  </Info>
</Link>
  </Container>
  )
}

export default Catagoryitem