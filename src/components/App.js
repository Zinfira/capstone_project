import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import Contacts from './Contacts/Contacts';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart/Cart';
import NotFoundPage from './NotFoundPage';
import Footer from './Footer';
import Modal from './Modal';
import Thank from './Thank';

class App extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route path="/products" component={ProductList} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/thanks" component={Thank} />
            <Route component={NotFoundPage} />
          </Switch>
          
        </div>
          <Modal />
        <Footer />
      </div>
    );
  }
}

export default App;
