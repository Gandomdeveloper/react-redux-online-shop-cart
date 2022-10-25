import React, { Component } from 'react';
import data from "./data.json";
import Filter from './components/filter';
import Products from './components/products';
import Cart from './components/cart';
//feature 1

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      products : data,
      cartItems: [],
      size : "",
      sort : ""
      
    }
  }
  removeFromCart = (product)=>{
    let cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems : cartItems.filter(x=> x._id !== product._id)
    })

  }
  addToCart = (product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyExists = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        alreadyExists = true;
        item.count++;
     
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({cartItems})
  }
  filterProducts = (event)=>{
    console.log(event.target.value)
    if(event.target.value === ""){
      this.setState({
        size: event.target.value,
        products : data
      });
    }else{
      this.setState({
        size: event.target.value,
        products : data.filter((product)=>product.availableSize.indexOf(event.target.value)>=0)
      });
    }

  }
  sortProducts = (event) =>{
    const sort = event.target.value
    console.log(event.target.value);
    this.setState((state)=>({
      sort : sort,
      products : this.state.products.slice().sort((a,b)=>(
        sort ==="lowest"?
        ((a.price > b.price)?1:-1):
        sort ==="highest"?
        ((a.price < b.price)?1:-1):
        ((a._id < b._id)?1:-1)
      ))
    }));
  }
  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href="http://www.google.com">React Redux Shopping Card</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              count={this.state.products.length}/>
              <Products addToCart={this.addToCart} products={this.state.products}/>
              </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}/>
              </div>
          </div>

        </main>
        <footer>
  
          <p> All Things Are Reserverd</p>
          <p> All Things Are Reserverd</p>
          <p> All Things Are Reserverd</p>


        </footer>

      </div>
    )
  }
}
