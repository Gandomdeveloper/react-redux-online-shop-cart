import React, { Component } from 'react';
import data from "./data.json";
import Products from './components/products';
//feature 1

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      products : data,
      size : "",
      sort : ""
      
    }
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
              <Products products={this.state.products}/>
              </div>
            <div className="sidebar">side bar items</div>
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
