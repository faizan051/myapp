import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Container = styled.div`
display:flex ;
${mobile({ flexDirection: "column" })}
position: relative;
`
const Left = styled.div`flex : 1;
display:flex ;
flex-direction:column ;
padding: 20px;
`

const Logo = styled.h1``;
const Desc = styled.p``
const SocialIcon = styled.div`
display:flex ;

`
const Icon = styled.div`
margin: 0px 10px;
height:40px;
width:40px ;
border-radius:50% ;
color:white ;
background-color: #${props=>props.color};
display: flex;
justify-content:center ;
align-items:center ;
padding:5px ;
`

const Center = styled.div`flex : 1;
padding: 20px;
${mobile({ marginTop : "5px" })}
`

const Title = styled.h3`
margin-bottom:30px ;
`
const List = styled.ul`
list-style:none ;
margin:0px ;
padding: 0;
display: flex;
flex-wrap:wrap ;
${mobile({ flexDirection: "column" })}
`
const ListItem = styled.li`
width:50% ;
margin-bottom:10px ;
`



const Right = styled.div`flex : 1;
margin-top: 15px;
${mobile({ marginTop : "5px" })}
`

const TitleContact= styled.h3`
margin-bottom:20px ;
${mobile({ marginLeft : "13px" })}
`

const Icons = styled.i`
margin-right:15px ;

`
const ContactList = styled.div`
display:flex ;
align-items:center ;
margin-bottom:20px ;
${mobile({ marginLeft : "13px" })}
`
const Payment = styled.img`
width:50% ;
${mobile({ marginLeft : "13px" })}
`

const CopyRight= styled.span`
text-align:center ;
font-size:14px ;
font-weight:600 ;
margin-top:10px ;
position:absolute ;

background-color:#eee ;
top:100% ;
left:40% ;
${mobile({ marginLeft: "-15%" })}
`


const Footer = () => {
  return (

    <Container>
    <Left>
        <Logo>Yartcom</Logo>
        <Desc>Sign up for unlimited free delivery. Low prices at Yartcom on Shirts, Bags, Shoes and much more ...</Desc>
        <SocialIcon>
        <Icon color='385999'>
        <FacebookOutlinedIcon/>
        </Icon>
        <Icon color='E440F5'>
       <InstagramIcon/>
        </Icon>
        <Icon color='55AC55'>
       <TwitterIcon/>
        </Icon>
        <Icon color='E60023'>
       <PinterestIcon/>
        </Icon>

        </SocialIcon>
    </Left>


    <Center>
      <Title>USEFUL LINKS</Title>
      <List>
           <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
      </List>
    </Center>


    <Right>

      <TitleContact>CONTACT</TitleContact>
      <ContactList>
        <Icons><AddLocationIcon/></Icons>Industrial State, North Lahore.
      </ContactList>
      <ContactList>
       <Icons><PhoneIcon/></Icons>+063-1600876
      </ContactList>
      <ContactList>
       <Icons><MailOutlineIcon/></Icons>contact@yartcom.com
      </ContactList>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
    </Right>

    <CopyRight> ©Copyright2022.All right reserved</CopyRight>
    </Container>
   
  )
}

export default Footer