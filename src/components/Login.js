import { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = ({ setToken }) => {
    const [user, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const handleLogin = async e => {
        e.preventDefault();

        const token = await loginUser({
            user,
            password
        });
        setToken(token);

        setIsPending(true);
    };

    const handleFocus = () => {
        setIsLogged(false);
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
                {!isPending && <button>Login</button>}
                {isPending && <button disabled>Loging in...</button>}
            </form>
            {isLogged && <div>Wrong credentials, please retry with others</div>}
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;