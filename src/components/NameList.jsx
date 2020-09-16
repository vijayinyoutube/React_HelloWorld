import React from 'react'
import PersonMap from './PersonMap';

function NameList() {
    const Person = [
        {
            name: "Vijay",
            skill: "Flutter",
        },
        {
            name: "Santy",
            skill: "React",
        },
    ];

    const PersonList = Person.map(person => <PersonMap person={person}></PersonMap>)
    return (
        <div>
            <div>{PersonList}</div>
        </div>
    )
}

export default NameList
