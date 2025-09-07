import { useState , useEffect } from 'react'
import axios from 'axios'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



import './index.css'

function App() {
const [todos , setTodos]=useState([])

const fetchTodos=async()=>{
  const res=await axios.get('http://localhost:8000/todo')
  setTodos(res.data)
}

useEffect( ()=>{
  fetchTodos()
 } , [])

  return (
    <>
      
    <div className='bg-gray-900 flex flex-col space-y-4 justify-center items-center min-h-screen'>
      <h1 className='text-white text-3xl'>MERN TODO APP</h1>
       <TodoForm refresh={fetchTodos} />
       <TodoList todos={todos} refresh={fetchTodos}/>
      </div>  
 
    </>
  )
}

export default App
