import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import LoginForm from "../components/loginForm";
import MainLayout from '../layouts/MainLayout'

const Login = () => {
    const { state } = useLocation();
    const redirectUrl = state?.from || '/';

    useEffect(() => {
        document.title = "Login";
    }, []);

    return(
        <>
        <MainLayout>
        <h1>Login</h1>
        <LoginForm redirectUrl={redirectUrl} />
        </MainLayout>
           
        </>
    )
}

export default Login;