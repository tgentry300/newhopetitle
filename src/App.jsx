import React, { Component } from 'react';
import { Grid, Card, Icon } from 'semantic-ui-react';
import './App.css';
import InputScreen from './InputScreen';
import PageHeader from './PageHeader';

const style = {
  marginTop: '20px'
};

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader />
        <InputScreen />
      </React.Fragment>
    );
  }
}

export default App;
