import * as React from "react";
import { useStyles } from './Login.styles';
import { useNavigate } from 'react-router-dom';
import PageContainer from '@components/PageContainer'

const Login = () => {
    const classes = useStyles();
    const navigator = useNavigate();

    return (
        <PageContainer>
            <div className={classes.loginRoot} onClick={() =>{navigator('/Films')}}>
              <div> Login</div>
             </div>
        </PageContainer>
    );
}
export default Login;
