import React, { useState } from 'react';
import "./reg-form.css"

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoginDisabled, setIsLoginDisabled] = useState(true);

    const validateUsername = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            setUsernameError('Username must be in email format');
            return false;
        }
        setUsernameError('');
        return true;
    };
    const validatePassword = () => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must contain at least one capital letter, one number, and one special character');
            return false;
        }
        setPasswordError('');
        return true;
    };
    const handleLogin = (event) => {
        event.preventDefault();
    };
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setIsLoginDisabled(!validatePassword() || !validateUsername());
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setIsLoginDisabled(!validatePassword() || !validateUsername());
    };
    return (
        <div class="container">
            <h2>Login Form</h2>
            <form onSubmit={handleLogin}>
                <div class="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        onBlur={validateUsername}
                        placeholder="Enter your email id"
                        required
                    />
                    {usernameError && <p className="error">{usernameError}</p>}
                </div>
                <div class="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        onBlur={validatePassword}
                        placeholder="Enter your password"
                        required
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <button type="submit" disabled={isLoginDisabled}>Login</button>
            </form>
        </div>
    );
}
export default LoginForm;