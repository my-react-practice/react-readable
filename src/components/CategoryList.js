import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { updateCurrentCategory } from '../actions';
import Styles from '../styles';
class CategoryList extends Component {
  render() {
    const { currentCategory, categoryList, updateCurrentCategory } = this.props;
    return (
      <Paper style={Styles.menu}>
        <Menu>
          {categoryList.map(({ name, path }) => (
            <MenuItem
              primaryText={name}
              containerElement={<Link to={`/category/${name}`} />}
              key={name}
              style={name === currentCategory ? Styles.menuItemChecked : {}}
              onClick={e => {
                // e.preventDefault();
                updateCurrentCategory(name);
              }}
            />
          ))}
        </Menu>
        {/* <ul className="ctg-list">
          {categoryList.map(({ name, path }) => (
            <li
              key={name}
              className={`ctg-item ${name === currentCategory ? 'active' : ''}`}
            >
              <Link
                to={`/category/${name}`}
                onClick={e => {
                  e.preventDefault();
                  updateCurrentCategory(name);
                }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul> */}
      </Paper>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    currentCategory: state.common.currentCategory,
    categoryList: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentCategory: category => dispatch(updateCurrentCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
