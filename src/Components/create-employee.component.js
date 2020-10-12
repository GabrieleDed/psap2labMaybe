import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class CreateEmployee extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeEmployeeFirsName = this.onChangeEmployeeFirstName.bind(this);
    this.onChangeEmployeeLastName = this.onChangeEmployeeFirstName.bind(this);
    this.onChangeEmployeePosition = this.onChangeEmployeePosition.bind(this);
    this.onChangeEmployeeDepartment = this.onChangeEmployeeDepartment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      fname: '',
      lname: '',
      position: '',
      department: ''
    }
  }

  onChangeEmployeeFirstName(e) {
    this.setState({fname: e.target.value})
  }
  onChangeEmployeeLastName(e) {
    this.setState({lname: e.target.value})
  }

  onChangeEmployeePosition(e) {
    this.setState({position: e.target.value})
  }

  onChangeEmployeeDepartment(e) {
    this.setState({department: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`Employee successfully created!`);
    console.log(`FName: ${this.state.fname}`);
    console.log(`LName: ${this.state.lname}`);
    console.log(`Position: ${this.state.position}`);
    console.log(`Department: ${this.state.department}`);

    this.setState({fname: '', Lname: '' , position: '', department: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FtName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onChangeEmployeeFirstName}/>
        </Form.Group>

        <Form.Group controlId="LName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onChangeEmployeeLastName}/>
        </Form.Group>

        <Form.Group controlId="Position">
          <Form.Label>Position</Form.Label>
          <Form.Control type="text" value={this.state.position} onChange={this.onChangeEmployeePosition}/>
        </Form.Group>

        <Form.Group controlId="Department">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" value={this.state.department} onChange={this.onChangeEmployeeDepartment}/>
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Employee
        </Button>
      </Form>
    </div>);
  }
}