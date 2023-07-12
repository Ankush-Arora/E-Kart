import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuPage from './components/MenuPage';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import { useState } from 'react';
function App() {

  const [cart, setCart] = useState([]);
  // function addToCart(item) {
  //   setCart([...cart, { ...item, quantity: 1 }])
  //   // console.warn('In cart ', cart)
  //   alert('Item Added')
  // }

  function OrderConfirmed([])
  {
  //  alert('working this method')
    setCart([])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" exact element={<Home />} />
          {/* <Route path="/item" exact element={<MenuPage addToCart={addToCart} />} /> */}
          <Route path="/item" exact element={<MenuPage/>} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path="/cart" exact element={<Cart cart={cart} order={OrderConfirmed} />} /> */}
           <Route path="/cart" exact element={<Cart/>} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
