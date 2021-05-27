import React, { Component } from 'react';
import Footer from './components/footer/footer';
import JumbotronHead from './components/jumbotron/jumbotron.component';
import './App.css';
import Navigation from "./components/Navigation"
import { Jumbotron } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron className="jumbotron">
          <JumbotronHead />
          <hr className="my-2" />

        </Jumbotron>
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
