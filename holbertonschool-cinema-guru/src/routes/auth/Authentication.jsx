import { useState } from 'react';
import Button from '../../components/general/Button';
import '../auth/auth.css';
import Login from './Login';
import Register from './Register';
import PropTypes from 'prop-types';
import axios from 'axios';


export default function Authentication({setIsLoggedIn, setuserUsername}) {
    const [_switch, set_switch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (_switch == true) {
            axios.post('/api/auth/login', {
                username: username,
                password: password,
            })
            .then(function(response) {
                console.log("Login success", response.data);
                localStorage.setItem("accessToken", response.data.accessToken);
                setUsername(username)
                setIsLoggedIn(true);

            })
            .catch(function (error) {
                console.error("Error to Login", error);
            })
        }
        else {
            axios.post('/api/auth/register'), {
                username: username,
                password: password,
            }
            .then(function (response) {
                console.log("Register success", response.data);
                localStorage.setItem("accessToken", response.data.accessToken);
                setUsername(username)
                setIsLoggedIn(true)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }


    return(
        <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <div className='button-section'>
            <Button label="Sign In" className="sign-button" onClick={() => {set_switch(true)}}/>
            <Button label="Sign Up" className="sign-button" onClick={() => {set_switch(false)}}/>
            </div>
            <div className='input-container'>
                {_switch == false ? (
                    <Register
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    />
                ) : (
                    <Login
                    username={username}
                    password={password}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    />
                )}
            </div>
        </form>
        </div>
    )
}




Authentication.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
    setuserUsername: PropTypes.func.isRequired,
}