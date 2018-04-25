import { combineReducers } from 'redux';
import {
  SET_CURRENT_CATEGORY,
  SET_CATEGORIES,
  GET_CATEGORIES,
  GET_POSTS,
  GET_POSTS_BY_CATEGORY
} from '../actions';

// 公共状态
const initGlobalState = {};

function common(state = initGlobalState, action) {
  return state;
}

const initCategoryState = {
  current: 'all',
  list: []
};
function categories(state = initCategoryState, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        current: action.category
      };
    case SET_CATEGORIES:
      return {
        ...state,
        list: action.categories
      };
    default:
      return state;
  }
}

const initPostsState = {
  currentId: 'all',
  list: []
};
function posts(state = initPostsState, action) {
  return state;
}

const initCommentsState = {
  list: []
};
function comments(state = initCommentsState, action) {
  return state;
}

export default combineReducers({
  common,
  categories,
  posts,
  comments
});
