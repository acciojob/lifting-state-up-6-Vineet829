import React from 'react';

function ToDoList({ toDo, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {toDo.map((t, i) => (
          <li key={i}>
            {t.text}
            {!t.completed && (
              <button onClick={() => handleComplete(t.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;