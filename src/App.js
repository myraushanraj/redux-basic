
import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class App extends Component {

  render() {
    //console.log(this.propsstate)
    return (
      <div>
        Age:<span>{this.props.age}</span>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>

        <Link to="app2">App2</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    age: state.age
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: 'AGE_UP' }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN' })
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
