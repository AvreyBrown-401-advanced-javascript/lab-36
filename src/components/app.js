import React from 'react';
import {actions} from '../store/stuff.store';
import { connect } from 'react-redux';

class App extends React.Component {



  render() {
    return (
      <div onClick={() => this.props.handleChange()}>
        {this.props.stuff.foo}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stuff: state.someStuff
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleChange: num => dispatch(actions.changer(num)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);