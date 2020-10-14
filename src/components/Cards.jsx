import React, { Component } from 'react'

export class CardsClass extends Component {
    render() {
        return (
            <div>
                <div class="card" style={{ width: "300px" }}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <button className="btn btn-primary" type="submit" >click me</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardsClass
