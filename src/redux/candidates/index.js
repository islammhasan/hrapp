const types = {
  ADD_CANDIDATE_SUCCESS: 'ADD_CANDIDATE_SUCCESS',
  ADD_CANDIDATE_FAILED: 'ADD_CANDIDATE_FAILED',
  REMOVE_CANDIDATE_SUCCESS: 'REMOVE_CANDIDATE_SUCCESS',
  REMOVE_CANDIDATE_FAILED: 'REMOVE_CANDIDATE_FAILED',
};

export const insertCandidate = candidate => (dispatch, getState) => {
  try {
    return dispatch({
      type: types.ADD_CANDIDATE_SUCCESS,
      payload: {...candidate, id: Math.floor(Math.random() * 9999999)},
    });
  } catch (error) {
    console.log(error);
    return dispatch({type: types.ADD_CANDIDATE_FAILED});
  }
};

export const removeCandidate = candidateId => (dispatch, getState) => {
  try {
    const cands = getState().candidates.data;
    const newArr = cands.filter(item => item.id != candidateId);
    return dispatch({type: types.REMOVE_CANDIDATE_SUCCESS, payload: newArr});
  } catch (error) {
    console.log(error);
    return dispatch({type: types.REMOVE_CANDIDATE_FAILED});
  }
};

const initialState = {
  data: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.ADD_CANDIDATE_SUCCESS:
      console.log('payload===>', payload);
      return {...state, data: [payload, ...state.data]};
    case types.REMOVE_CANDIDATE_SUCCESS:
      return {...state, data: payload};
    case types.ADD_CANDIDATE_FAILED:
    case types.REMOVE_CANDIDATE_FAILED:
      return {...state};
    default:
      return state;
  }
};
