export const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY';
export const GET_CATEGORIES = 'GET_CATEGORIES';
// export const GET_POSTS_BY_CATEGORY = 'GET_POSTS_BY_CATEGORY';
export const GET_POSTS = 'GET_POSTS';

export const updateCurrentCategory = currentCategory => ({
  type: UPDATE_CURRENT_CATEGORY,
  currentCategory
});

export const getCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});

// export const getPostsByCategory = category => ({
//   type: GET_POSTS_BY_CATEGORY,
//   category
// });

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
});
