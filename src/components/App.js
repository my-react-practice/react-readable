import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategories, getPosts } from '../actions';
import * as Api from '../api';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Pager from 'material-ui/Paper';
import Home from './Home';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';
import Styles from '../styles';

class App extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }
  render() {
    return (
      <MuiThemeProvider>
        <div style={Styles.container}>
          {/* 默认视图/分类视图 */}
          <Route exact path="/" component={Home} />
          <Route path="/category/:category" component={Home} />
          {/* 帖子详情 */}
          <Route path="/postdetail" component={PostDetail} />
          {/* 帖子编辑 */}
          <Route path="/postedit" component={PostEdit} />
        </div>
      </MuiThemeProvider>
    );
  }
}

// export default App

function mapStateToProps(state, props) {
  return {
    // currentCategory: state.categories.current
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: () => {
      Api.getCategories().then(data => {
        // console.log('getCategories::', data);
        dispatch(getCategories(data.categories));
      });
    },
    getPosts: () => {
      Api.getPosts().then(data => {
        // console.log('getPosts::', data);
        dispatch(getPosts(data));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
