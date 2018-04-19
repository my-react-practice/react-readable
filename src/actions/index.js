export const SET_CATEGORY = 'SET_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const GET_POSTS = 'GET_POSTS';

export const setCategory = id => ({
  type: SET_CATEGORY,
  id
});

export const getCategories = () => ({
  type: GET_CATEGORIES
});

export const getPostsByCategory = category => ({
  type: GET_POSTS_BY_CATEGORY,
  category
});

export const getPosts = () => ({
  type: GET_POSTS
});
