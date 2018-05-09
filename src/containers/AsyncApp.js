import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home';

class AsyncApp extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          {/* 默认视图/分类视图 */}
          <Route exact path="/" component={Home} />
          {/* <Route
            path="/category/:category"
            render={({ match }) => <Home category={match.params.category} />}
          /> */}
          {/* 帖子详情 */}
          {/* <Route path="/postdetail/:id" component={PostDetail} /> */}
          {/* 帖子编辑 */}
          {/* <Route path="/postedit" component={PostEdit} /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  container: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff'
  }
};

export default AsyncApp;
