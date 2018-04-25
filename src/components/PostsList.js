import React, { Component } from 'react';
import { connect } from 'react-redux';
class PostsList extends Component {
  render() {
    const { currentCategory } = this.props;
    return <div>{currentCategory}</div>;
  }
}

function mapStateToProps(state, props) {
  return {
    currentCategory: state.categories.current
  };
}

function mapDispatchToProps(dispatch, props) {
  console.log('props:::', props);
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
