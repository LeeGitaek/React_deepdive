import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`Whose name do you want to change`);
    const current = prompt(`what do you want to change mentor name to`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`add a new mentor name`);
    const title = prompt(`add a new mentor title`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`whose do you want to remove?`);
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='change mentor name' onClick={handleUpdate} />
      <Button text='delete' onClick={handleDelete} />
      <Button text='add a mentor' onClick={handleAdd} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering 😜');
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😆');
  }
  return 10;
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