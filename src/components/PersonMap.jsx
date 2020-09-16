import React from 'react'

function PersonMap({ person }) {
    return (
        <div>
            <h3>My name is {person.name} and i know {person.skill}</h3>
        </div>
    )
}

export default PersonMap
