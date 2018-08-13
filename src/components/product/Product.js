import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import productSample from "../../images/productSample.png";

import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ""
    };
  }

  componentDidMount() {
    this.loadAttributes();
  }

  loadAttributes() {
    // TODO: the only attribute we are interested to load is the image
    this.setState({ image: productSample });
  }

  render() {
    const { id, title, description, price } = this.props;
    const { image } = this.state;
    return (
      <div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={image} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
              <br />
              {price}
            </p>
            <Link to={`/products/${id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
