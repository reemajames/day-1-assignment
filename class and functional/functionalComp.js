import React, { useState } from 'react';

function FunctionalRegistration() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [company, setCompany] = useState('');

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </div>
                <div class="form-group">
                    <label for="age">Age:</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        placeholder="Enter your age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required />
                </div>
                <div class="form-group">
                    <label for="company">Company Name:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Enter your company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required />
                </div>
                <div class="form-group">
                    <button type="submit">Publish</button>
                </div>
            </form>
            <div>
                <h2>Entered Values: </h2>
                <p>Name: {name}</p>
                <p>Age: {age} </p>
                <p>Company : {company}</p>
            </div>
        </div>
    );
}
export default FunctionalRegistration;