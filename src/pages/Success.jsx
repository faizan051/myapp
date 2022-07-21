import React from 'react'
import { useLocation } from 'react-router-dom'
import {data} from "./Cart"

const Success = () => {

    const location = useLocation()
    const data = location.state.stripeData;

    console.log(location)

  return (
    <div>Successful</div>
  )
}

export default Success