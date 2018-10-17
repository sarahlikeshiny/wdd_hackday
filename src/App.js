import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider'

require('create-react-class');
class App extends Component {
  state = {
    value: 10,
  };
  handleChange = (event, value) => {
    this.setState({ value });
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
          <Button variant="contained" color="primary">
            Hello World
         </Button>
        </div>
      </div>
    );
  }
}




export default withStyles(styles)(App);
