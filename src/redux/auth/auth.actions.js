import AuthActionTypes from './auth.types';


  // Registration Data
  export const setAuthData = data => ({
    type: AuthActionTypes.SET_AUTH_DATA,
    payload: data
  })

  // Loading
  export const loadingStart = () => ({
    type: AuthActionTypes.LOADING_START,
  });

  export const loadingStop = () => ({
    type: AuthActionTypes.LOADING_STOP,
  });

  // Sign In
  export const signInRequest = payload => ({
    type: AuthActionTypes.SIGN_IN_REQUEST,
    payload: payload
  });
  
  export const signInSuccess = user => ({
    type: AuthActionTypes.SIGN_IN_SUCCESS,
    payload: user
  });
  
  export const signInFailure = error => ({
    type: AuthActionTypes.SIGN_IN_FAILURE,
    payload: error
  });

  // Sign Out
  export const signOutRequest = () => ({
    type: AuthActionTypes.SIGN_OUT_REQUEST
  });
  
  export const signOutSuccess = () => {
    return ({
    type: AuthActionTypes.SIGN_OUT_SUCCESS
  })};
  
  export const signOutFailure = error => ({
    type: AuthActionTypes.SIGN_OUT_FAILURE,
    payload: error
  });
