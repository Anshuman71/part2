import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import './App.css';

import Main from './components/Main.jsx';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: "#e91685",
      },}); 
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
      <AppBar title="Pechkus Co"></AppBar>
      <Main/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
