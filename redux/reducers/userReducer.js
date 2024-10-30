// redux/reducers/userReducer.js
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, ADD_USER, DELETE_USER } from '../actions/userActions';

const initialState = {
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, error: action.payload };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
};

export default userReducer;
