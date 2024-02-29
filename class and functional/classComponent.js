import React from "react";

class ClassRegForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            company: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div class="container">
                <h2 class="heading">Registration Form</h2>
                <form id="registration-form">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        value = {this.state.name}
                        onChange = {this.handleChange}
                        required />
                    </div>
                    <div class="form-group">
                        <label for="age">Age:</label>
                        <input
                        type="text" 
                        id="age" 
                        name="age" 
                        placeholder="Enter your age" 
                        value = {this.state.age}
                        onChange = {this.handleChange}
                        required />
                    </div>
                    <div class="form-group">
                        <label for="company">Company Name:</label>
                        <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        placeholder="Enter your company name" 
                        value = {this.state.company}
                        onChange = {this.handleChange}
                        required />
                    </div>
                    <div class="form-group">
                        <button type="submit">Publish</button>
                    </div>
                </form>
                <div>
                    <h2>Entered Values: </h2>
                    <p>Name: {this.state.name}</p>
                    <p>Age: {this.state.age} </p>
                    <p>Company : {this.state.company}</p>
                </div>
            </div>
        )
    }
}


export default ClassRegForm;