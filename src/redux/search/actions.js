import * as ActionTypes from './actionTypes';

export const searchRepositories = params => ({
  type: ActionTypes.SEARCH_REPOSITORIES,
  params,
});

export const searchRepositoriesSuccess = data => ({
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
  data,
});

export const searchRepositoriesError = error => ({
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
  error,
});
