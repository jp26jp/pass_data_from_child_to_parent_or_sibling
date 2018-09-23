import React, {Component} from "react"

export default class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {inputValue: ""}
    }
    
    update = e => {
        console.log(e.target.value)
        this.props.onUpdate(e.target.value)
        this.setState({inputValue: e.target.value})
    }
    
    render() {
        return (
            <React.Fragment>
                <h3>Child</h3>
                <input type="text" placeholder="type here" onChange={this.update} value={this.state.inputValue}/>
            </React.Fragment>
        )
    }
}