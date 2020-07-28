import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ProductList />
      <Details />
      <Cart />
      <NotFoundPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
