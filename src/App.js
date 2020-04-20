import React from 'react';

import Product from './component/product'
import Cart from './component/cart'



function App() {
  return (
    <div className="App">
      <Product className="product"/>
      <hr/>
      <Cart/>
    </div>
  )
}

export default App;
