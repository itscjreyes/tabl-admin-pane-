import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebase from '../firebase/firebase';
import {AuthContext} from '../firebase/Auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/"/>;
    }

    return (
        <div className="login">
            <div className="container">
                <h1>Take Action for Black Lives</h1>
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        type="email"
                        name="email"
                        label="Email"
                    />
                    <TextField
                        variant="outlined"
                        type="password"
                        name="password"
                        label="Password"
                    />
                    <Button variant="contained" size="large" color="primary" type="submit">Log In</Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);