import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList';
// import PostsList from './PostsList';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { selectCategory, fetchCategoriesIfNeeded } from '../actions';

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategoriesIfNeeded());
  }
  handleChange = nextCategory => {
    const { dispatch } = this.props;
    dispatch(selectCategory(nextCategory));
  };
  render() {
    const { selectedCategory, categories } = this.props;
    return (
      <div className="home" style={styles.home}>
        {/* 类别列表 */}
        <div className="ctg-list-wrap" style={styles.ctgListWrap}>
          {categories.isFetching &&
            categories.items.length === 0 && <p>Loading...</p>}
          {!categories.isFetching &&
            categories.items.length === 0 && <p>Empty.</p>}
          {categories.items.length > 0 && (
            <CategoryList
              selectedCategory={selectedCategory}
              onChange={this.handleChange}
              list={categories.items}
            />
          )}
        </div>
        <div className="main" style={styles.main}>
          {/* 排序、新增操作 */}
          <div className="opt-wrap">
            <FlatButton label="按票数" />
            <FlatButton label="按时间" />
          </div>

          {/* 帖子列表 */}
          <div className="post-list-wrap">
            posts list...
            {/* <PostsList {...this.props} /> */}
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

function mapStateToProps(state) {
  return {
    selectedCategory: state.selectedCategory,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Home);
