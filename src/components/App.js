import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategories } from '../actions';
import * as Api from '../api';

import Home from './Home';
import PostDetail from './PostDetail';
import PostEdit from './PostEdit';

class App extends Component {
  componentDidMount() {
    this.props.setCategories();
  }
  render() {
    // const { currentCategory, handleSubmit } = this.props;
    return (
      <div className="App">
        {/* 魔人视图/分类视图 */}
        <Route exact path="/" component={Home} />
        <Route path="/category/:category" component={Home} />
        {/* 帖子详情 */}
        <Route path="/postdetail" component={PostDetail} />
        {/* 帖子编辑 */}
        <Route path="/postedit" component={PostEdit} />
      </div>
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
    setCategories: () => {
      Api.getCategories().then(data => {
        console.log('data::', data);
        dispatch(setCategories(data.categories));
      });
    }
    // handleSubmit: category => dispatch(setCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
