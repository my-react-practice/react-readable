import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    console.log(this.props);
    const { match } = this.props;
    return <div>{'PostDetail ' + match.params.id}</div>;
  }
}

export default PostDetail;
