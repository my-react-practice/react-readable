/*
  state structure:
  {
    selectedCategory: '',
    categories: {
      isFetching: false,
      didInvalidate: false,
      items: []
    },
    posts: {
      react: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: 1439478405547,
        items: []
      },
      redux: {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: 1439478405547,
        items: []
      }
    },
    comments: {
      postId1: {
        isFetching: false,
        didInvalidate: false,
        items: []
      },
      postId2: {
        isFetching: false,
        didInvalidate: false,
        items: []
      }
    }
  }
*/
import {
  SELECT_CATEGORY,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES
} from './actions';
import { combineReducers } from 'redux';

function selectedCategory(state = 'all', action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

function categories(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      // es6写法
      // return Object.assign({}, state, {
      //   isFetching: true,
      //   didInvalidate: false
      // });
      // es7写法
      return { ...state, isFetching: true, didInvalidate: false };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.categories
      };
    default:
      return state;
  }
}

export default combineReducers({
  selectedCategory,
  categories
});
