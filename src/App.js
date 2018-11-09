import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import NavigationPage from "./components/navigation/NavigationBar"

import './style/_main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <NavigationPage/>
      </Router>
    )
  }
}

export default App;
