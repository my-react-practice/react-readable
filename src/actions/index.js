export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const GET_POSTS = 'GET_POSTS';

export const setCurrentCategory = category => ({
  type: SET_CURRENT_CATEGORY,
  category
});

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories
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
