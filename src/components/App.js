import React from 'react';
import logoctb from '../logoctb.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Contacts from './Contacts';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={AboutUs} /> 
          <Route path="/products" component={ProductList} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
