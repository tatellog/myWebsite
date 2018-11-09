import React, { Component } from "react";
import { BrowserRouter as Router} from 'react-router-dom';

import NavigationPage from "./components/navigation/NavigationBar"

import './styles/main.scss';

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
