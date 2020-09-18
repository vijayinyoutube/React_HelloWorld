import React from 'react'
import PersonMap from './PersonMap';

function NameList() {
    const Person = [
        {
            id:1,
            name: "Vijay",
            skill: "Flutter and React",
        },
        {
            id:2,
            name: "Santy",
            skill: "React",
        },
    ];

    const PersonList = Person.map(person => <PersonMap key={person.id} person={person}></PersonMap>)
    return (
        <div>
            <div>{PersonList}</div>
        </div>
    )
}

export default NameList
