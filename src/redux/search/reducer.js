import {
  SEARCH_REPOSITORIES,
  SEARCH_REPOSITORIES_SUCCESS,
  SEARCH_REPOSITORIES_ERROR,
} from './actionTypes';

const INITIAL_STATE = {
  data: null,
  loading: true,
  error: null,
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_REPOSITORIES:
      return {
        ...state,
        data: null,
        loading: true,
      };
    case SEARCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        error: null,
      };
    case SEARCH_REPOSITORIES_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}

export default searchReducer;
