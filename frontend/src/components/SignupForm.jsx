import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useFetch from "../hooks/useFetch";


const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const {data, loading, error, fetchData} = useFetch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    const config = {url: "/api/users/register", method: "POST", body: JSON.stringify(formData), headers: {"Content-Type": "application/json"}};
    fetchData(config).then(() => navigate('/login'));

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <Link to="/login">Login</Link>
        </div>
    );
}

export default SignupForm;
