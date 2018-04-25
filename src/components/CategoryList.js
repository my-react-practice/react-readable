import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentCategory } from '../actions';
const CategoryList = ({
  currentCategory,
  categoryList,
  setCurrentCategory
}) => {
  return (
    <ul className="ctg-list">
      {categoryList.map(({ name, path }) => (
        <li
          key={name}
          className={`ctg-item ${name === currentCategory ? 'active' : ''}`}
        >
          <Link
            to={`/category/${name}`}
            onClick={e => {
              e.preventDefault();
              setCurrentCategory(name);
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

function mapStateToProps(state, props) {
  return {
    currentCategory: state.categories.current,
    categoryList: state.categories.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentCategory: category => dispatch(setCurrentCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
