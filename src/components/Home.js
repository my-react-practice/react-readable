import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import PostsList from './PostsList';

class Home extends Component {
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

export default connect()(Home);
