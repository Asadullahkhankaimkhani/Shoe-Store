import React from "react";
import Shoes from "../shoe.json";

import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="jumbotron text-primary">
        <h1>Welcome to Product</h1>
      </div>
      <div className="row">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link
              key={keyName}
              className="link"
              to={`/product/${keyName}`}
              className="col-md-4"
            >
              <h3>{shoe.name}</h3>
              <img src={shoe.img} height={200} alt={shoe.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
