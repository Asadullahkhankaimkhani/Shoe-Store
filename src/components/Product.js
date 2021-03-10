import React from 'react'
import Shoes from '../shoe.json'

import {Link} from 'react-router-dom'


const Product = () => {
    
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className = 'container'>
                {Object.keys(Shoes).map(keyName =>{
                const shoe = Shoes[keyName];
                return (<Link key = {keyName} className = "link" to = {`/product/${keyName}`}>
                    
                    <h3>{shoe.name}</h3>
                    <img src = {shoe.img} height= {200} alt = {shoe.name} />
                </Link>)})}
            </div>
        </div>
    )
}

export default Product
