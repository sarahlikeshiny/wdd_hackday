import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider'

require('create-react-class');
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <div>
            <Slider />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
