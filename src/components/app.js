import React from 'react';
import {actions} from '../store/stuff.store';
import { connect } from 'react-redux';

class App extends React.Component {



  render() {
    return (
      <div onClick={() => this.props.handleChange(15)}>
        {this.props.stuff.foo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stuff: state.foo
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changer(num)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);