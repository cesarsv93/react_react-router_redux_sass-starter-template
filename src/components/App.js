import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

//Components
import Header from './Header';
import Home from './Home';
import About from './About';

//Style
import '../css/style.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}



export default connect(null)(App);
//When actions added uncomment below and comment above
//export default connect(null, actions)(App);