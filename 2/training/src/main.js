import React from "react";
import { render } from "react-dom";
import Yo from './App'
import Hello from './Hello'
import Tree from './Tree'
import Button from './Button'
import './style.less'

render(
<Yo/>,
    document.getElementById('app')
);
render(
<Hello name="myTree"/>,
    document.getElementById('hello')
);
render(
    <Tree/>,
    document.getElementById("myTree")
);
render(
    <Button name="myButton"/>,
    document.getElementById("button")
)