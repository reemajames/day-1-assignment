import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from './rootReducer';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Login = () => {
    const [name, setNameInput] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = () => {
        dispatch(setName(name));
        navigate('/dashboard');
    };
    return (
        <div className='login'>
            <input type="text" value={name} onChange={(e) => setNameInput(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Login;