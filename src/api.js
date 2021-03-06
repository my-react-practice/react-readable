import 'whatwg-fetch';
let token = localStorage.token;
const api = 'http://localhost:3001';

if (!token) {
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);
}

const headers = {
  Accept: 'application/json',
  Authorization: token
};

export const CTG_ALL = 'all';
export const getCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
    .then(res => res.json())
    .then(data => {
      data.categories &&
        data.categories.unshift({
          name: CTG_ALL,
          path: CTG_ALL
        });
      return data.categories;
    });

export const getPosts = () =>
  fetch(`${api}/posts`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);

export const getPostsByCategory = category => {
  if (category === 'all') {
    return getPosts();
  } else {
    return fetch(`${api}/${category}/posts`, {
      headers
    })
      .then(res => res.json())
      .then(data => data);
  }
};

export const getPostsDetail = postsId => {
  return fetch(`${api}/posts/${postsId}`, {
    headers
  })
    .then(res => res.json())
    .then(data => data);
};
