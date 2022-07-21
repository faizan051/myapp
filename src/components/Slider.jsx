import { style } from '@mui/system'
import React, { useState } from 'react'
import styled from 'styled-components'
import { slideritem } from '../data'
import { mobile } from '../responsive'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Container = styled.div`
width:100% ;
height:100vh ;
display:flex ;
position:relative ;
overflow:hidden ;
${mobile({ height : "70vh",
overflow:"hidden"
 })}

${mobile({ flexDirection: "column" })}

`
const Arrow= styled.i`
width:50px ;
height:50px ;
background-color:whitesmoke ;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center ;
position:absolute ;
top: 0;
bottom: 0;
margin:auto ;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity:0.5 ;
z-index:2 ;
`

const Wrapper = styled.div`
height:100% ;
display: flex;
transition: all 1.5s ease ;
transform:translateX(${props=> props.slideindex * -100}vw) ;
`

const Slide= styled.div`
display: flex;
align-items:center ;
width:100vw ;
height:100vh ;
background-color: #${props => props.bg} ;
`
const ImageContainer= styled.div`
flex:1 ;
height:100% ;
${mobile({ height : "65%" })}

${mobile({ marginTop: "-210px" })}

`
const Image= styled.img`
height:80% ;
${mobile({ height : "60%" })}
`
const InfoContent= styled.div`
flex:1 ;
padding: 50px;
${mobile({ padding : "10px" })}

`

const Title = styled.h1`
font-size: 70px;
${mobile({ fontSize : "20px" })}

${mobile({ marginLeft : "-200px" ,
marginTop : "100px"
})}
`
const Description = styled.p`
margin:50px 0px ;
font-weight: 500;
font-size:20px ;
letter-spacing:3px ;
${mobile({ fontSize : "10px" })}
${mobile({ marginLeft : "-200px" ,
marginTop : "20px"
})}

`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color:transparent ;
cursor: pointer;
${mobile({ marginLeft : "-200px" ,
marginTop : "-10px",
fontSize:"16px"
})}
`

const Slider = () => {

  const [slideindex, setslide] = useState(0);

const handleclick= (direction)=>
{
   if(direction === "left")
   {
     setslide(slideindex > 0 ? slideindex-1 : 2)
   }
   else {
     setslide(slideindex < 2 ? slideindex+1 : 0)
   }
};

  return (
    <Container>
<Arrow direction="left" onClick={()=> {handleclick("left")}}>
<ChevronLeftIcon/>
</Arrow>

<Wrapper slideindex = {slideindex}>

{slideritem.map(item=>(


<Slide bg={item.bg} key={item.id}>
    <ImageContainer>
     <Image src={item.img} />
    </ImageContainer>
    <InfoContent>
      <Title>{item.title}</Title>
      <Description>{item.descripiton}</Description>
      <Button>SHOP NOW</Button>
    </InfoContent>
    </Slide>
))}

</Wrapper>

<Arrow direction="right" onClick={()=> {handleclick("right")}}>
<ChevronRightIcon/>
</Arrow>

    </Container>
  )
}

export default Slider