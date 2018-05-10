import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CategoryList from '../components/CategoryList';
import PostsList from '../components/PostsList';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {
  selectCategory,
  fetchCategoriesIfNeeded,
  fetchPostsIfNeeded,
  invalidateCategory
} from '../actions';

class Home extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(selectCategory(match.params.category));
    dispatch(fetchCategoriesIfNeeded(match.params.category));
    dispatch(fetchPostsIfNeeded());
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      const { dispatch, selectedCategory } = nextProps;
      dispatch(invalidateCategory());
      dispatch(fetchPostsIfNeeded(selectedCategory));
    }
  }
  handlePostsClick = postId => {
    // const {dispatch} = this.props
    console.log('postId::', postId);
  };
  handleCategoryClick = nextCategory => {
    const { dispatch } = this.props;
    dispatch(selectCategory(nextCategory));
  };
  render() {
    const { selectedCategory, categories, posts } = this.props;
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
              onClick={this.handleCategoryClick}
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
            <PostsList onClick={this.handlePostsClick} list={posts.items} />
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
    categories: state.categories,
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Home);
