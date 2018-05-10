/*
  state structure:
  {
    selectedCategory: '',
    didInvalidate: false,
    categories: {
      isFetching: false,
      items: []
    },
    posts: {
      isFetching: false,
      lastUpdated: 1439478405547,
      items: []
    },
    postsDetail: {
      isFetching: false,
      lastUpdated: 1439478405547,
      posts: {
        title: '',
        body: ''
      },
      comments: []
    }
  }
*/
import {
  INVALIDATE_PAGE,
  SELECT_CATEGORY,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REQUEST_POSTS_DETAIL,
  RECEIVE_POSTS_DETAIL
} from './actions';
import { combineReducers } from 'redux';

function didInvalidate(state = false, action) {
  switch (action.type) {
    case INVALIDATE_PAGE:
      return true;
    default:
      return state;
  }
}

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
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        items: action.categories
      };
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.fetchAt,
        items: action.posts
      };
    default:
      return state;
  }
}

// function postsByCategory(state = {}, action) {
//   switch (action.type) {
//     case REQUEST_POSTS:
//     case RECEIVE_POSTS:
//       return {
//         ...state,
//         [action.category]: posts(state[action.category], action)
//       };
//     default:
//       return state;
//   }
// }

function comments(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

function postsDetal(
  state = {
    isFetching: false,
    posts: {},
    comments: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS_DETAIL:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS_DETAIL:
      return {
        ...state,
        isFetching: false,
        lastUpdated: action.fetchAt,
        comments: comments(state.postsDetal.comments, action)
      };
    default:
      return state;
  }
}

export default combineReducers({
  didInvalidate,
  selectedCategory,
  categories,
  posts,
  postsDetal
});
