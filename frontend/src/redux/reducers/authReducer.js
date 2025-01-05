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
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isLogedIn: true,
                loading: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case SAVE_PROFILE:
            return {
                ...state,
                user: action.payload.user
            }
        case LOGOUT:
            return {
                ...state,
                token: null,
                user: {},
                isLogedIn: false
            }
        default:
            return state;
    }
}

export default authReducer;