import React, {useEffect} from "react";
import SignupForm from "../components/SignupForm";

const SignUp = () => {
    useEffect(() => {
        document.title = "Sign Up";
    }, []);

    return(
        <>
            <h1>Sign Up</h1>
            <SignupForm />
        </>
    )
}
export default SignUp;
