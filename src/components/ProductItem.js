import React from 'react'
import {useParams} from 'react-router-dom'
import Shoes from '../shoe.json'


const ProductItem = () => {
  const {id} = useParams();
    const shoe = Shoes[id];

  if(!shoe)
    return(
        <h4>Item Not Found</h4>
    )
  
    return (
        <div>
            <div className = "link">
            <h4 >{shoe.name}</h4>
            <img src = {shoe.img} height={600} alt ='Shoe'/ >
            </div>
        </div>
    )
}

export default ProductItem
