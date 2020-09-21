import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            topic: "",
        }
    }

    handleChangeEvent = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleTopicChangeEvent = (event) => {
        this.setState({
            topic: event.target.value,
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.topic}`);
        event.preventDefault(); //  <----|
        // To avoid the entered data being lost when the page refresh after closing that alert
        // box
    }
    render() {
        const { username, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleChangeEvent} />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChangeEvent}>
                        <option>React</option>
                        <option>Angular</option>
                        <option>Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
