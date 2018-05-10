import * as Api from './api';

export const INVALIDATE_PAGE = 'INVALIDATE_PAGE'; // 页面失效状态（请求数据的时候使用）
export const SELECT_CATEGORY = 'SELECT_CATEGORY'; // 类别选择

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'; // 请求类别
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'; // 收到类别

export const REQUEST_POSTS = 'REQUEST_POSTS'; // 请求帖子
export const RECEIVE_POSTS = 'RECEIVE_POSTS'; // 收到帖子

export const REQUEST_POSTS_DETAIL = 'REQUEST_POSTS_DETAIL'; // 请求帖子详情
export const RECEIVE_POSTS_DETAIL = 'RECEIVE_POSTS_DETAIL'; // 收到帖子详情

export const REQUEST_COMMENTS = 'REQUEST_COMMENTS'; // 请求评论
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'; // 收到评论

export const invalidateCategory = () => ({
  type: INVALIDATE_PAGE
});
//////////////////////////////////////////////////////////////////////////////
//  类别
//////////////////////////////////////////////////////////////////////////////
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
  const { categories, didInvalidate } = state;
  // console.log('categories::', categories);
  if (!categories.items.length) {
    return true;
  } else if (categories.isFetching) {
    return false;
  } else {
    return didInvalidate;
  }
};

export const fetchCategoriesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories());
    }
  };
};

//////////////////////////////////////////////////////////////////////////////
// 帖子
//////////////////////////////////////////////////////////////////////////////
const requestPosts = category => ({
  type: REQUEST_POSTS,
  category
});
const receivePosts = (category, posts) => ({
  type: RECEIVE_POSTS,
  category,
  fetchAt: Date.now(),
  posts
});
const fetchPosts = category => {
  return dispatch => {
    dispatch(requestPosts(category));
    Api.getPostsByCategory(category).then(posts => {
      dispatch(receivePosts(category, posts));
    });
  };
};

const shouldFetchPosts = state => {
  const { didInvalidate } = state;
  const { isFetching, items } = state.posts;
  if (!items.length) {
    return true;
  } else if (isFetching) {
    return false;
  } else {
    return didInvalidate;
  }
};

export const fetchPostsIfNeeded = (category = 'all') => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      dispatch(fetchPosts(category));
    }
  };
};

//////////////////////////////////////////////////////////////////////////////
// 帖子详情
//////////////////////////////////////////////////////////////////////////////
const requestPostsDetail = postsId => ({
  type: REQUEST_POSTS_DETAIL,
  postsId
});

const receivePostsDetail = (postsId, posts) => ({
  type: RECEIVE_POSTS_DETAIL,
  postsId,
  fetchAt: Date.now(),
  posts
});

const fetchPostsDetail = postsId => {
  return dispatch => {
    dispatch(requestPostsDetail(postsId));
    Api.getPostsDetail(postsId).then(posts => {
      dispatch(receivePostsDetail(postsId, posts));
    });
  };
};

const shouldFetchPostsDetail = state => {
  const { didInvalidate } = state;
  const { isFetching, posts } = state.postsDetail;
  if (!posts.title) {
    return true;
  } else if (isFetching) {
    return false;
  } else {
    return didInvalidate;
  }
};

export const fetchPostsDetailIfNeeded = postsId => {
  return (dispatch, getState) => {
    if (shouldFetchPostsDetail(getState())) {
      dispatch(fetchPostsDetail(postsId));
    }
  };
};

//////////////////////////////////////////////////////////////////////////////
// 评论
//////////////////////////////////////////////////////////////////////////////
