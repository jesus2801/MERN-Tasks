import {SUCCESS_REGISTER, SUCCESS_LOGIN, GET_USER, SIGN_OFF} from '../../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticate: true,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        authenticate: true,
        loading: false,
      };
    case SIGN_OFF:
      return {
        ...state,
        token: null,
        user: null,
        authenticate: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
