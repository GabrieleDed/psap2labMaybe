import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        fname: '',
        lname: '',
        position: '',
        department: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
      }
    render() {
        const { fname, lname, position, department } = this.state;

        return (
            <form>
                <label htmlFor="name"> First Name</label>
                <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={fname}
                    onChange={this.handleChange} />
                <label htmlFor="name"> Last Name</label>
                    <input
                        type="text"
                        name="lname"
                        id="lname"
                        value={lname}
                        onChange={this.handleChange} />
                <label htmlFor="name"> Possition</label>
                    <input
                        type="text"
                        name="position"
                        id="position"
                        value={position}
                        onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                    <input
                        type="text"
                        name="department"
                        id="department"
                        value={department}
                        onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
export default Form;