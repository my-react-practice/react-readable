import { combineReducers } from 'redux';
import { UPDATE_CURRENT_CATEGORY, GET_CATEGORIES, GET_POSTS } from '../actions';

// 公共状态
const initGlobalState = {
  currentCategory: 'all'
};

function common(state = initGlobalState, action) {
  const { type, currentCategory } = action;
  switch (type) {
    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory
      };
    default:
      return state;
  }
}

/**
 * 类别数据state
 * @param {Array} state
 * @param {Object} action
 */
function categories(state = [], action) {
  const { type, categories } = action;
  switch (type) {
    case GET_CATEGORIES:
      return [...state, ...categories];
    default:
      return state;
  }
}

/**
 * 帖子数据state
 * @param {Array} state
 * @param {Object} action
 */
function posts(state = [], action) {
  const { type, posts } = action;
  switch (type) {
    case GET_POSTS:
      return [...state, ...posts];
    default:
      return state;
  }
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
