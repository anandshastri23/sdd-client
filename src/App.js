import React, {Component} from 'react'
import axios from 'axios'
import './App.css'

class App extends Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        axios.get("http://localhost:8080/hello")
            .then(response => console.log(response))
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

export default App
