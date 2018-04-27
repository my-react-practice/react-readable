import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import PostsList from './PostsList';

import { updateCurrentCategory } from '../actions';

class Home extends Component {
  componentDidMount() {
    const { updateCurrentCategory, match } = this.props;
    updateCurrentCategory(match.params.category || 'all');
  }
  render() {
    return (
      // 默认视图
      <div className="home">
        {/* 类别列表 */}
        <div className="ctg-list-wrap">
          <CategoryList />
        </div>
        <div className="main">
          {/* 排序、新增操作 */}
          <div className="opt-wrap">
            <a href="">按票数</a>
            <a href="">按时间</a>
            <Link to="/postedit/new">新增</Link>
          </div>

          {/* 帖子列表 */}
          <div className="post-list-wrap">
            <PostsList />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentCategory: category => dispatch(updateCurrentCategory(category))
  };
}

export default connect(null, mapDispatchToProps)(Home);
