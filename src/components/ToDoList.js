import React, { useEffect } from 'react';

function TodoList({ todos, handleComplete }) {
    console.log(todos);
    useEffect(()=>{},[todos])
  return (
    <div>
      <h2>Todo Items:</h2>
      <ul>
       
        {todos.map(todo => (
          <li key={todo.id}>
   
            {todo.text}
  
            <button style={{display: todo.completed?"none":"inline-block"}} onClick={() => handleComplete(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;