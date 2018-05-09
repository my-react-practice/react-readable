import * as Api from './api';

export const SELECT_CATEGORY = 'SELECT_CATEGORY'; // 类别选择

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'; // 请求类别
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'; // 收到类别

export const REQUEST_POSTS = 'REQUEST_POSTS'; // 请求帖子
export const RECEIVE_POSTS = 'RECEIVE_POSTS'; // 收到帖子

export const REQUEST_POSTS_DETAIL = 'REQUEST_POSTS_DETAIL'; // 请求帖子详情
export const RECEIVE_POSTS_DETAIL = 'RECEIVE_POSTS_DETAIL'; // 收到帖子详情

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'; // 请求评论
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'; // 收到评论

// 类别选择
export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
});

const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const fetchCategories = () => {
  return dispatch => {
    dispatch(requestCategories());
    Api.getCategories().then(categories => {
      dispatch(receiveCategories(categories));
    });
  };
};

const shouldFetchCategories = state => {
  const { categories } = state;
  // console.log('categories::', categories);
  if (!categories.items.length) {
    return true;
  } else if (categories.isFetching) {
    return false;
  } else {
    return categories.didInvalidate;
  }
};

export const fetchCategoriesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories());
    }
  };
};
