import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.css'
import {SAY_HELLO} from "./redux/actions";

class App extends Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.props.sayHello();
        // axios.get("http://localhost:8080/hello")
        //     .then(response => console.log(response))
    }

    render() {
        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
  return {
      sayHello() {
          dispatch({type: SAY_HELLO});
      }
  }
};
export default connect(null,mapDispatchToProps) (App)
