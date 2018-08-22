import React, { Component } from 'react';
import Navigation from "./components/navigation";
import Header from './components/header';
import Footer from './components/footer';
import SearchBox from './components/searchbox';

class App extends Component {
  render() {
    return (
   
        <React.Fragment>

     
        <Navigation/>
        <main role="main">
        <SearchBox/>    
        </main>
       <Footer/>
        </React.Fragment>
    );
  }
}

export default App;
