import api from "../../api";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT, SAVE_PROFILE } from "./actionTypes";

export const postLogin = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await api.post('/users/login', { email, password });
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
}

export const saveProfile = (token) => async (dispatch) => {
    try{
        const response = await api.get('/users/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: SAVE_PROFILE, payload: response.data });
    }
    catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
}

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
}