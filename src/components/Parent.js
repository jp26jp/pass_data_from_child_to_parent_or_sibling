import React, {Component} from "react"
import Child from "./Child"
import Sibling from "./Sibling"

export default class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    onUpdate = inputValue => this.setState({inputValue})
    
    render() {
        return (
            <React.Fragment>
                <h1>Parent</h1>
                <p>Value in parent state: {this.state.inputValue}</p>
                <Child onUpdate={this.onUpdate}/>
                <Sibling inputValue={this.state.inputValue}/>
            </React.Fragment>
        )
    }
}