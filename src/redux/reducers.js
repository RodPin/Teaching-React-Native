const INITIAL_STATE = {
  user: '',
};

const SET_USER = 'SET_USER';

export function setUser(userJSONdaAPI) {
  return {
    type: SET_USER,
    payload: userJSONdaAPI,
  };
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return {user: action.payload};
    default:
      return state;
  }
}
