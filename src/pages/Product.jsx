import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Annoucment from '../components/Annoucment'
import Footer from '../components/Footer'
import Nabvar from '../components/Nabvar'
import { mobile } from '../responsive'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethod';
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'



const Container = styled.div``
const Wrapper = styled.div`
display: flex;
padding: 50px;
${mobile({ padding: "10px", flexDirection:"column" })}
`
const ImageContainer= styled.div`
flex:1 ;
`
const Image = styled.img`
height:90vh ;
width:100% ;
object-fit:cover ;
${mobile({ height: "40vh" })}
`
const InfoContainer = styled.div`
flex:1 ;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`
const Title = styled.h1`
font-weight:300 ;
`
const Desc = styled.p`
margin:20px 0px ;
`
const Price = styled.p`
font-weight:100 ;
font-size:25px ;
`


const FilterContainer = styled.div`
display: flex;
justify-content:space-between ;
width:80% ;
${mobile({ width: "100%" })}
`
const Filter = styled.div`
display: flex;
align-items:center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight:300 ;

`
const FilterColor= styled.div`
width:15px ;
height:15px ;
border-radius:50% ;
background-color:${props=>props.color} ;
margin:0px 5px ;
cursor: pointer;
`
const FilterSize= styled.select`
cursor: pointer;
margin:10px ;
padding: 5px;
`
const Option = styled.option``


const AddContainer = styled.div`
 width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}

`
const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top:10px;
  
 
`
const Remove = styled.i``
const Add = styled.i``
const Ammount = styled.span`
 width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 15px;
`
const Button = styled.button`
 padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-top:10px;

  &:hover{
      background-color: #f8f4f4;
  }
`





const Product = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    
const getProduct = async ()=>{
  try{
              const res = await publicRequest.get("/products/find/"+id) ;
              setProduct(res.data)  

  } catch{}
}
getProduct()
},[id])

const handleQuantity = (type) => {
  if (type === "dec") {
    quantity > 1 && setQuantity(quantity - 1);
  } else {
    setQuantity(quantity + 1);
  }
};

const handleClick = () => {
  dispatch(
    addProduct({ ...product, quantity, color, size })
  );
};

  return (
<Container>
    <Annoucment/>
    <Nabvar/>

    <Wrapper>
        <ImageContainer>
            <Image src={product.img}/>
        </ImageContainer>
        <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>PKR {product.price}</Price>

           <FilterContainer>

           <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>

                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize  onChange={(e) => setSize(e.target.value)} >
                    {product.size?.map((s) => (
                      <Option key={s}>{s}</Option>
                    ))}
                       
                    </FilterSize>
                </Filter>
           </FilterContainer>

           <AddContainer>
               <AmmountContainer>
               
               <RemoveIcon onClick={() => handleQuantity("dec")} />
                 <Ammount>{quantity}</Ammount>
                 <AddIcon onClick={() => handleQuantity("inc")} />
               </AmmountContainer>
               <Button onClick={handleClick} >ADD TO CART</Button>
           </AddContainer>
           
        </InfoContainer>
    </Wrapper>

    <Footer/>
</Container>
  )
}

export default Product