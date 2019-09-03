import React, { Component } from 'react'
import { connect } from 'react-redux';

class App2 extends Component {
    render() {
        return (
            <div>
                <h2>AGE is {this.props.age}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        age: state.age
    }
}
export default connect(mapStateToProps)(App2);