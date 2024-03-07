import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { name, country, gender, pan } = useSelector(state => state);
    return (
        <div>
            <h2>Personal Details</h2>
            <p>Name: {name}</p>
            <p>Country: {country}</p>
            <p>Gender: {gender}</p>
            <p>PAN: {pan}</p>
        </div>
    );
};
export default Profile;