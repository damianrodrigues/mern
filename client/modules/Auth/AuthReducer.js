import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS } from './AuthActions';
import isEmpty from '../../../server/validation/is-empty';

const initialState = {
  errors: {},
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state, errors: action.payload,
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        errors: {},
      };

    default:
      return state;
  }
}
