import React from 'react'
import Shoes from '../shoe.json'
import styles from './Product.module.css'
import {Link} from 'react-router-dom'


const Product = () => {
    
    return (
        <div>
            <h1>Welcome to Product</h1>
            <div className={styles.container}>
                {Object.keys(Shoes).map(keyName =>{
                const shoe = Shoes[keyName];
                return (<Link  className = {styles.link} key={keyName} to= {`/product/${shoe.name}`}>
                    
                    <h3>{shoe.name}</h3>
                    <img src = {shoe.img} height= {200} alt = {shoe.name} />
                </Link>)})}
            </div>
        </div>
    )
}

export default Product
