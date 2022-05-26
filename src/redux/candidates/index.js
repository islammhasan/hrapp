const types = {
  ADD_CANDIDATE: 'ADD_CANDIDATE',
  REMOVE_CANDIDATE: 'REMOVE_CANDIDATE',
};

const initialState = {
  candidate: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.ADD_CANDIDATE:
      return {...state};
    case types.REMOVE_CANDIDATE:
      return {...state};
    default:
      return state;
  }
};
