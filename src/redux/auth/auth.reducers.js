import AuthActionTypes from './auth.types';

/*************************************************/

const INITIAL_STATE  = {
    token: localStorage.getItem('token'),
    error: "",
    loading: false,
}

/*************************************************/

const userReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case AuthActionTypes.SET_AUTH_DATA:
            return {
                ...state,
                registrationData: {...state.registrationData, ...action.payload}
            };
        case AuthActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                trainer_token: action.payload
            };
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                trainer_token: null,
                token: null,
                ...INITIAL_STATE
            };
        case AuthActionTypes.LOADING_START:
            return {
                ...state,
                loading: true
            };
        case AuthActionTypes.LOADING_STOP:
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
}

/*************************************************/

export default userReducer;

/*************************************************/
