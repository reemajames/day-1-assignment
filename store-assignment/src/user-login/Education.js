import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const EducationDetails = () => {
    const [certification, setCertification] = useState('');
    const handleInputChange = (e) => {
        setCertification(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        education.addCertification(certification);
        setCertification('');
    };
    const { education } = useSelector(state => state);
    return (
        <div>
            <h2>Education Details</h2>
            <p>10th Institute: {education.tenth.institute}, CGPA: {education.tenth.cgpa}</p>
            <p>Higher Secondary Institute: {education.higherSecondary.institute}, CGPA: {education.higherSecondary.cgpa}</p>
            <p>Graduation Institute: {education.graduation.institute}, CGPA: {education.graduation.cgpa}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={certification}
                    onChange={handleInputChange}
                    placeholder="Enter certification name"
                />
                <button type="submit">Add New</button>
            </form>
        </div>
    );
};
export default EducationDetails;