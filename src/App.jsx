import { useState } from 'react'
import './App.css'
import InputComponent from './components/InputComponent';
import TodoComponent from './components/TodoComponent';

export default function App() {


  const [ inpVal, setInpVal ] = useState({title: '', description: ''})

  const [todos, setTodos ] = useState([])

  function handleChange(e) {
    const { name, value } = e.target;
    setInpVal((prev) => ({...prev, [name]: value}));
  }

  // function makeTodo() {
  //   setTodos((prev) => [...prev, inpVal]); 
  //   setInpVal({ title: "", description: "" });
  // }

  // // function addTodo() {
  // //   if(inpVal != '') {
  // //     setTodos((prevTodos) => [...prevTodos, inpVal])
  // //   }
  // // }


  function addTodo() {
    if (inpVal.title.trim() !== '' && inpVal.description.trim() !== '') { 
      setTodos((prevTodos) => [...prevTodos, inpVal])
      setInpVal({ title: '', description: '' })
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((xyz, prevTodosIndex) => {
      return prevTodosIndex != todoIndex
    }))
  }


  return (
    <>
    <h1 style={{color: '#2196F3'}}>TASK WIZARD</h1>

    <InputComponent inpVal={inpVal} handleChange={handleChange} addTodo={addTodo}/>
    <TodoComponent todos={todos} delTodo={delTodo}/>
    
    </>
  )
}