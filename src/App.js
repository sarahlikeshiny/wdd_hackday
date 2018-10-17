import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider'
import AlertDialog from './Alert'
import EntryDate from './Date'

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
    value: this.value,
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    console.log(value);

    switch (value) {
      case 0:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-0';
        break;
      case 1:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-1';
        break;
      case 2:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-2';
        break;
      case 3:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-3';
        break;
      case 4:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-4';
        break;
      case 5:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-5';
        break;
      case 6:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-6';
        break;
      case 7:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-7';
        break;
      case 8:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-8';
        break;
      case 9:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-9';
        break;
      case 10:
        document.querySelector('.emoji-wrapper').childNodes[0].className = 'emoji-10';
        break;
      default:
    }

    return (
      <div className="App">
        <div>
          <div className="App-header">
            <EntryDate />
          </div>
          <div className="emoji-wrapper">
            <span className="emoji-5"></span>
            <div className="fake-background"></div>
            <div className="slider">
              <Slider
                classes={{ container: classes.slider }}
                value={value}
                aria-labelledby="label"
                onChange={this.handleChange}
                min={0}
                max={9}
                step={1}
              />
            </div>   
            <AlertDialog />  
          </div>
        </div>
      </div >
    );
  }
}




export default withStyles(styles)(App);
