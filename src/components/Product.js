import React from 'react'
import Shoes from '../shoe.json'

const Product = () => {
    
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div>
                {Object.keys(Shoes).map(keyName =>{
                const shoe = Shoes[keyName];
                return (<div key={keyName}>
                    <h3>{shoe.name}</h3>
                    <img src = {shoe.img} height= {200} alt = {shoe.name} />
                </div>)})}
            </div>
        </div>
    )
}

export default Product
