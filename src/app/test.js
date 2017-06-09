import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import 'whatwg-fetch';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0'
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  }
};

let tableData = [
  {
    firstName: 'Do Anh',
    lastName: 'Tuan',
    email: 'tuan.do@mobytelab.com',
    content: 'Hello',
    location: '10,10',
    timeZone: 'VN',
    createdAt: 'Mai'
  }
];

const getContact = () => {
  return fetch('http://localhost:4201/api/contact').then((resp) => resp.json());
}

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {


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
   getContact()
   .then((response) => {
     console.log(response);
     console.log(this.state);
     this.setState({tableData: response});
   })
 }
  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    console.log(tableData);
    return (
      <div>
        <Table height={this.state.height} fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
            <TableRow>
              <TableHeaderColumn colSpan="7" tooltip="Super Header" style={{
                textAlign: 'center'
              }}>
                Super Header
              </TableHeaderColumn>
            </TableRow>
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
          {/* <TableFooter adjustForCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={{
                textAlign: 'center'
              }}>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter> */}
        </Table>

        {/* <div style={styles.propContainer}>
          <h3>Table Properties</h3>
          <TextField floatingLabelText="Table Body Height" defaultValue={this.state.height} onChange={this.handleChange}/>
          <Toggle name="fixedHeader" label="Fixed Header" onToggle={this.handleToggle} defaultToggled={this.state.fixedHeader}/>
          <Toggle name="fixedFooter" label="Fixed Footer" onToggle={this.handleToggle} defaultToggled={this.state.fixedFooter}/>
          <Toggle name="selectable" label="Selectable" onToggle={this.handleToggle} defaultToggled={this.state.selectable}/>
          <Toggle name="multiSelectable" label="Multi-Selectable" onToggle={this.handleToggle} defaultToggled={this.state.multiSelectable}/>
          <Toggle name="enableSelectAll" label="Enable Select All" onToggle={this.handleToggle} defaultToggled={this.state.enableSelectAll}/>
          <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
          <Toggle name="deselectOnClickaway" label="Deselect On Clickaway" onToggle={this.handleToggle} defaultToggled={this.state.deselectOnClickaway}/>
          <Toggle name="stripedRows" label="Stripe Rows" onToggle={this.handleToggle} defaultToggled={this.state.stripedRows}/>
          <Toggle name="showRowHover" label="Show Row Hover" onToggle={this.handleToggle} defaultToggled={this.state.showRowHover}/>
          <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
          <Toggle name="showCheckboxes" label="Show Checkboxes" onToggle={this.handleToggle} defaultToggled={this.state.showCheckboxes}/>
        </div> */}
      </div>
    );
  }
}
