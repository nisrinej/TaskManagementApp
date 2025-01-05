import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import loginForm from "../components/loginForm";

const Login = () => {
    const { state } = useLocation();
    const redirectUrl = state?.from || '/';

    useEffect(() => {
        document.title = "Login";
    }, []);

    return(
        <>
            <h1>Login</h1>
            <loginForm redirectUrl={redirectUrl} />
        </>
    )
}

export default Login;