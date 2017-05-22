import React, { Component } from 'react';
import Header from './Header/Header';
import Article from './Article/Article'
import Ad from './Ad/Ad'
import Links from './Links/Links'
import Footer from './Footer/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          
          <Article />
          <Ad />
          <Links />
         
        </main>

        <Footer />
       
      </div>
    );
  }
}

export default App;
