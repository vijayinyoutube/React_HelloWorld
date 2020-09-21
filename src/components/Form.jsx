import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
        }
    }

    handleChangeEvent = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" value={this.state.username} onChange={this.handleChangeEvent} />
                </div>
            </form>
        )
    }
}

export default Form
