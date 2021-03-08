import React from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import ProductItem from './components/ProductItem'
const RouterConfig = () => {
    return (
        <div>
            <Router>
            <Switch>
            <Route exact path ='/' component={Home}/>
            <Route path ='/about' component={About}/>
            <Route path ='/product' component={Product}/>
            <Route path ='/productItem/:id' component={ProductItem}/>
            </Switch>
            </Router>
        </div>
    )
}

export default RouterConfig
