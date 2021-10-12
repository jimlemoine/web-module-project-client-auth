import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="username"
                    />
                    <input
                        type="password"
                        name="password"
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;