import * as React from "react";
import { useStyles } from './Login.styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const classes = useStyles();
    const navigator = useNavigate();

    return (
        <div className={classes.loginRoot} onClick={() =>{navigator('/Game')}}>
            <div> Login</div>
        </div>
    );
}
export default Login;
