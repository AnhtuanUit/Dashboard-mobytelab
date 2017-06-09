import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import {
    Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '10px 32px 16px 10px'
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px'
  }
};

const muiTheme = getMuiTheme({
  // fontFamily: "Avenir Next",
  palette: {},
  appBar: {
    height: 50
  }
});

let tableData = [];

const getContact = () => {
  return fetch('http://localhost:4201/api/contact').then((resp) => resp.json());
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      tableData: tableData
    };

  }
  componentDidMount() {
    getContact().then((response) => {
      this.setState({tableData: response});
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {/* <RaisedButton label="Primary" primary onTouchTap={() => console.log('haha')} /> */}
        <div>
          <AppBar title="Title" titleStyle={{
            fontSize: '20px',
            fontFamily: 'Avenir Next'
          }} iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <Paper style={style.paper}>
            <Menu>
              <MenuItem primaryText="Preview" leftIcon={< RemoveRedEye />}/>
              <MenuItem primaryText="Share" leftIcon={< PersonAdd />}/>
              <MenuItem primaryText="Get links" leftIcon={< ContentLink />}/>
              <Divider/>
              <MenuItem primaryText="Make a copy" leftIcon={< ContentCopy />}/>
              <MenuItem primaryText="Download" leftIcon={< Download />}/>
              <Divider/>
              <MenuItem primaryText="Preview" leftIcon={< RemoveRedEye />}/>
              <MenuItem primaryText="Share" leftIcon={< PersonAdd />}/>
              <MenuItem primaryText="Get links" leftIcon={< ContentLink />}/>
              <Divider/>
              <MenuItem primaryText="Make a copy" leftIcon={< ContentCopy />}/>
              <MenuItem primaryText="Download" leftIcon={< Download />}/>
              <Divider/>
              <MenuItem primaryText="Remove" leftIcon={< Delete />}/>
            </Menu>
          </Paper>
          <div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn tooltip="Id">ID</TableHeaderColumn>
                  <TableHeaderColumn tooltip="First name">First name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Last name">Last name</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Email">Email</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Content">Content</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Location">Location</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Time zone">Time zone</TableHeaderColumn>
                  <TableHeaderColumn tooltip="Created at">Created at</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
                {this.state.tableData.map((row, index) => (
                  <TableRow key={index}>

                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{row.firstName}</TableRowColumn>
                    <TableRowColumn>{row.lastName}</TableRowColumn>
                    <TableRowColumn>{row.email}</TableRowColumn>
                    <TableRowColumn>{row.content}</TableRowColumn>
                    <TableRowColumn>{row.location}</TableRowColumn>
                    <TableRowColumn>{row.timeZone}</TableRowColumn>
                    <TableRowColumn>{row.createdAt}</TableRowColumn>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </MuiThemeProvider>
    )
  };
};

export default App;
