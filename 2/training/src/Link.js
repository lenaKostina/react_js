import React, {Component} from "react";


export default class Link extends Component {
    render() {
        return <a href="index.html">{this.props.name}</a>
    }

}