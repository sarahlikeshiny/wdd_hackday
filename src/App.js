import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider'
import AlertDialog from './Alert'

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};
class App extends Component {
  state = {
    value: 50,
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    console.log(value);



    return (
      <div className="App">
        <div>
          <Slider
            classes={{ container: classes.slider }}
            value={value}
            aria-labelledby="label"
            onChange={this.handleChange}
            min={0}
            max={6}
            step={1}
          />
        </div>
        <div>
          <AlertDialog />
        </div>
      </div >
    );
  }
}




export default withStyles(styles)(App);
