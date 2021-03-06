import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import PostsList from './PostsList';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { updateCurrentCategory } from '../actions';

class Home extends Component {
  render() {
    // console.log('Home render...', this.props);
    return (
      // 默认视图
      <div className="home" style={styles.home}>
        {/* 类别列表 */}
        <div className="ctg-list-wrap" style={styles.ctgListWrap}>
          <CategoryList {...this.props} />
        </div>
        <div className="main" style={styles.main}>
          {/* 排序、新增操作 */}
          <div className="opt-wrap">
            <FlatButton label="按票数" />
            <FlatButton label="按时间" />
          </div>

          {/* 帖子列表 */}
          <div className="post-list-wrap">
            <PostsList {...this.props} />
          </div>
          <FloatingActionButton
            containerElement={<Link to="/postedit/new" />}
            mini={true}
            style={styles.new}
          >
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    );
  }
}

const styles = {
  home: {
    display: 'flex'
  },
  ctgListWrap: {
    // flex: 'auto'
  },
  main: {
    position: 'relative',
    flex: 1,
    marginLeft: 15,
    overflow: 'hidden'
  },
  new: {
    position: 'absolute',
    right: 0,
    top: 0
  }
};

export default connect()(Home);
