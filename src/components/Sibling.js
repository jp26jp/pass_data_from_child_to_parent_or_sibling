import React, {Component} from "react"

export default class Sibling extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Sibling</h3>
                <p>Value in sibling props: {this.props.inputValue}</p>
            </React.Fragment>
        )
    }
}