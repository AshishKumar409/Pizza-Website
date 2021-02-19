import React from 'react'
// import Navbar from './components/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
    <Router>
      <GlobalStyle/>
       <Hero/>
       <Products heading={"Choose Your Favorite"} data={productData}/>
       <Feature/>
       <Products heading={"Sweet's For You"} data={productDataTwo}/>
       <Footer/>
    </Router>  
    </div>
  );
}

export default App;
