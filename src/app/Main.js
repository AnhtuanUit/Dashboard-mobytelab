/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'whatwg-fetch';
import Test from './test';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
});

const getData = () => {
  return fetch('http://ipinfo.io/json').then((resp) => resp.json()).then((response) => {
    return response;
    console.log(response);
  }).catch((e) => console.log(e));
}

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      title: "Super Secret Password"
    };
  }

  handleRequestClose = () => {
    this.setState({open: false});
  }

  handleTouchTap = () => {
    const {a, action} = this.props;
    getData().then((response) => {
      console.log(response.region);
      this.setState({open: true, title: response.region});
    })

  }

  componentWillMount() {
    console.log("component Will Mount");
  }

  render() {
    const standardActions = (
      <FlatButton label="Ok"
        primary={true}
        onTouchTap={this.handleRequestClose}/>);

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Test test={this.state.title}/>
          <Dialog open={this.state.open} title={this.state.title} actions={standardActions} onRequestClose={this.handleRequestClose}>
            1-2-3-4-5
          </Dialog>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <RaisedButton label="Super Secret Password" secondary={true} onTouchTap={this.handleTouchTap}/>
        </div>
      </MuiThemeProvider>
    );
  }

  componentDidMount() {
    console.log("component Did Mount");
  }

  componentWillReceiveProps() {
    console.log("component Will ReceiveProps");
  }
}

export default Main;
