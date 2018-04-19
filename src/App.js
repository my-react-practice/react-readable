import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategory } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   // console.log(this.props);
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.dispatch(setCategory(this.input.value));
  //   this.input.value = '';
  // }
  render() {
    const { currentCategory, handleSubmit } = this.props;
    return (
      <div className="App">
        <form
          action="javascript:;"
          onSubmit={() => {
            handleSubmit(this.input.value);
            this.input.value = '';
          }}
        >
          <input type="text" ref={input => (this.input = input)} />
          <button type="submit">submit</button>
        </form>

        <p>{currentCategory}</p>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  // console.log(state);
  // console.log(props);
  return {
    currentCategory: state.categories.current
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: category => dispatch(setCategory(category))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
