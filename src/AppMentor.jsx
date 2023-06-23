import React, { useCallback, useReducer } from "react";
import {useImmer} from 'use-immer';
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
    // const [person, dispatch] = useReducer(personReducer, initialPerson);
    const [person, updatedPerson] = useImmer(initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`Whose name do you want to change`);
        const current = prompt(`what do you want to change mentor name to`);
        // dispatch({type: 'updated', prev, current});
        updatedPerson((person) => {
            const mentor = person.mentors.find(m=>m.name === prev);
            mentor.name = current;
        });
    };

    const handleAdd = () => {
        console.log('🔥 Add!');
        const name = prompt(`add a new mentor name`);
        const title = prompt(`add a new mentor title`);
        console.log(`🔥 Added! ${name} ${title}`);
        // dispatch({type: 'added', newMentorName, newMentorTitle});
        updatedPerson((person) => {
            person.mentors.push({ name, title });
        });
    }; 

    const handleDelete = () => {
        console.log('⭐️ Remove!');
        const removedMentor = prompt(`whose do you want to remove?`);
        console.log(`⭐️ Removed ${removedMentor}`);
        // dispatch({type: 'deleted', removedMentor});
        updatedPerson((person) => {
            const index = person.mentors.findIndex(m=>m.name === removedMentor);
            person.mentors.splice(index, 1);
        });
    };

    return (
        <div>
            <h1>
                {person.name} is {person.title}
            </h1>

            <p>
                {person.name}: mentor is 
            </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>

            <button onClick={handleUpdate}> 
                change mentor name
            </button>

            <button onClick={handleAdd}>
                add a mentor
            </button>

            <button onClick={handleDelete}>
                remove a mentor
            </button>
            {/* <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);
                    setPerson(
                        prev => ({ ...prev, mentor: { ...prev.mentor, title } })
                    );
                    console.log(title);
                }}
            > 
                change mentor title
            </button> */}
        </div>
    )
}

const initialPerson = {
    name: 'gitaek lee',
    title: 'software engineer',
    mentors: [
         {
             name: 'chris',
             title: 'senior engineer',
         },
         {
             name: 'james',
             title: 'senior product manager',
         },
    ], 
 };