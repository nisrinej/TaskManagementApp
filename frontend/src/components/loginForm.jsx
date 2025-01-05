import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

const loginForm = ({redirectUrl}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    

}