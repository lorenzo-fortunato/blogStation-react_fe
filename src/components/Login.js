import { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json());
}

const Login = ({ setToken }) => {
    const [user, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [isWrongCredentials, setIsWrongCredentials] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleLogin = async e => {
        e.preventDefault();

        try {
            const token = await loginUser({
                user,
                password
            });
            setToken(token);
        } catch(error) {
            console.log("wrong");
            setIsWrongCredentials(true);
        }

        setIsPending(true);
    };

    const handleFocus = () => {
        setIsWrongCredentials(false);
        setIsPending(false);
    }

    return (
        <div className="login">
            <h1>The BlogStation</h1>
            <h2>Try to log in!</h2>
            <form onSubmit={handleLogin}>
                <label>User</label>
                <input
                    type="text"
                    required
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    onFocus={handleFocus}
                />
                <label>Password</label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPwd(e.target.value)}
                    onFocus={handleFocus}
                />
                { isWrongCredentials && <div>Wrong credentials, please retry with others</div> }
                { !isPending ? <button>Login</button> : <button disabled>Logging in...</button> }
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;