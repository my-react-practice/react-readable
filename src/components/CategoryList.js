import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { cyan600 } from 'material-ui/styles/colors';
class CategoryList extends Component {
  render() {
    const { selectedCategory, onClick, list } = this.props;
    return (
      <Paper style={styles.menu}>
        <Menu>
          {list.map(({ name, path }) => (
            <Link
              to={`/category/${name}`}
              key={name}
              style={{
                textDecoration: 'none'
              }}
            >
              <MenuItem
                primaryText={name}
                key={name}
                style={
                  name === selectedCategory ? styles.menuItemChecked : {}
                  // containerElement={<NavLink to={`/category/${name}`} />}
                }
                onClick={e => {
                  onClick(name);
                }}
              />
            </Link>
          ))}
        </Menu>
      </Paper>
    );
  }
}

const styles = {
  menu: {
    display: 'inline-block'
  },
  menuItemChecked: {
    color: cyan600
  }
};

export default CategoryList;
