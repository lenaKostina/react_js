import React, {Component} from "react";


export default class Button extends Component {
    constructor (props) {
        super (props)
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler () {
        alert(this.props.name)
    }
    render () {
        return <button onClick={this.clickHandler}>{this.props.name}</button>
    }

}