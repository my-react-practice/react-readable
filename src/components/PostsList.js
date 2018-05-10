import React, { Component, Fragment } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import { NavLink, Route } from 'react-router-dom';
class PostsList extends Component {
  render() {
    const { list, onClick } = this.props;
    // console.log(posts);
    return (
      <div>
        {/* <List> */}
        {list.map(p => (
          <Fragment key={p.id}>
            {/* <NavLink
              to={`/postdetail/${p.id}`}
              style={{
                textDecoration: 'none'
              }}
            > */}
            {/* <h3>{p.title}</h3>
              <p>{p.body}</p> */}
            <ListItem
              // containerElement={<NavLink to={`/postdetail/${p.id}`} />}
              primaryText={p.title}
              secondaryText={<p>{p.body}</p>}
              secondaryTextLines={2}
              onClick={e => {
                onClick(p.id);
              }}
            />
            {/* </NavLink> */}
            <Divider />
          </Fragment>
        ))}
        {/* </List> */}
      </div>
    );
  }
}

export default PostsList;
