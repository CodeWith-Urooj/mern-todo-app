import axios from 'axios'
import React, { useState } from 'react'

function TodoList({ refresh, todos }) {
  const [editingId, setEditingId] = useState(null)
  const [newText, setNewText] = useState("")

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/todo/${id}`)
    refresh()
  }

  const handleEdit = (todo) => {
    setEditingId(todo._id)
    setNewText(todo.text)   
  }

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:8000/todo/${id}`, { text: newText }) 
    setEditingId(null)
    setNewText("")
    refresh()
  }

  return (
    <ul className='w-96 space-y-2 mt-4'>
      {todos.map((todo) => (
        <li key={todo._id} className="flex justify-between items-center bg-gray-800 text-white px-4 py-2 rounded">
          
          {editingId === todo._id ? (
            <input
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="px-2 py-1 text-white rounded"
            />
          ) : (
           <span>{todo.text}</span>
          )}

          <div className='space-x-2'>
            {editingId === todo._id ? (
              <button
                onClick={() => handleUpdate(todo._id)}
                className='bg-green-500 px-3 py-1 rounded'
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className='bg-yellow-500 px-3 py-1 rounded'
              >
                Edit
              </button>
            )}

            <button
              onClick={() => handleDelete(todo._id)}
              className='bg-red-500 px-3 py-1 rounded'
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
