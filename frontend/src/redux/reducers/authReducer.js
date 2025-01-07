import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SAVE_PROFILE } from "../actions/actionTypes";

const initialState = {
    token: null,
    user: {},
    isLogedIn: false,
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                user: {},
                isLogedIn: false,
                token:"",
                error: ""
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isLogedIn: true,
                loading: false,
                error: ""
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                user: {},
                isLogedIn: false,
                token: "",
                error: action.payload.message,
                loading: false
            }
        case SAVE_PROFILE:
            return {
                ...state,
                loading: false,
                isLogedIn: true,
                user: action.payload.user,
                token: action.payload.token,
                error: ""
            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                user: {},
                isLogedIn: false,
                isLogedIn: false,
                error: ""
            }
        default:
            return state;
    }
}

export default authReducer;