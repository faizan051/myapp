import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
height:60vh ;
background-color:#fcf5f5 ;
display: flex;
align-items:center ;
justify-content:center ;
flex-direction:column ;
`
const Title = styled.h1`
font-size:70px ;
margin-bottom:20px ;
`
const Descripition = styled.div`
font-weight:300 ;
font-size:24px ;
margin-bottom:20px ;
${mobile({ textAlign: "center" })}
`
const InputContainer= styled.div`
width:50% ;
height:40px ;
background-color:#fcf5f5 ;
display: flex;
align-items:center ;
justify-content:space-between ;
border:1px solid lightgray;
${mobile({ width: "80%" })}

`
const Input = styled.input`
border:none ;
flex:8 ;
height:40px ;
padding-left:20px ;
`
const Button = styled.button`
flex:1 ;
height:40px ;
background-color:teal ;
color:white ;
border:none ;
`


const Newsletter = () => {
  return (
    
    <Container>
        <Title>Newsletter</Title>
        <Descripition>Get Timely Updates for Favriout Products</Descripition>
        <InputContainer>
        <Input placeholder='Enter Your Email'/>
        <Button>
       
        <SendIcon/>
       
        </Button>
        </InputContainer>
     
    </Container>
  )
}

export default Newsletter