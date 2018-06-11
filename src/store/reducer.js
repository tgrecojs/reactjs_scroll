const defaultState = {
  loading: false,
  error: null,
  data: []
};

export const actionTypes = {
  initialize: 'FETCH_DATA_INITIALIZE',
  success: 'FETCH_DATA_SUCCESS',
  error: 'FETCH_DATA_ERROR'
};

const reducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.initialize:
      return {
        ...state,
        loading: true
      };
    case actionTypes.success:
      return {
        ...state,
        loading: false,
        data: payload
      };
    case actionTypes.error:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default reducer;
