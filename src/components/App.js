
import React, {useState} from "react";
import './../styles/App.css';
import ToDoList from "./ToDoList.js";

const App = () => {
  const [toDo, setToDo] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
    { id: 3, text: "Deploy to production", completed: false },
  ])
  
  const handleComplete = (id) => {
    setToDo(toDo.map((t) => t.id === id? {...t, completed:true}: t))
  }
  return (
    <div>
        <h1>Parent Component</h1>
        <ToDoList toDo={toDo} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
