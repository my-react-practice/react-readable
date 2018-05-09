import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { NavLink, Route } from 'react-router-dom';
import PostDetail from './PostDetail';
class PostsList extends Component {
  render() {
    const { posts } = this.props;
    // console.log(posts);
    return (
      <div>
        {/* <List> */}
        {posts.map(p => (
          <Fragment key={p.id}>
            <NavLink
              to={`/postdetail/${p.id}`}
              style={{
                textDecoration: 'none'
              }}
            >
              {/* <h3>{p.title}</h3>
              <p>{p.body}</p> */}
              <ListItem
                // containerElement={<NavLink to={`/postdetail/${p.id}`} />}
                primaryText={p.title}
                secondaryText={<p>{p.body}</p>}
                secondaryTextLines={2}
              />
            </NavLink>
            {/* <Divider /> */}
          </Fragment>
        ))}
        {/* </List> */}
        <Route path="/postdetail/:id" component={PostDetail} />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    currentCategory: state.common.currentCategory,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch, props) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
