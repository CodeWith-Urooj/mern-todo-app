import React, { useState } from 'react'
import axios from 'axios'

function TodoForm({refresh}) {

const [text , setText]=useState("")

const handleSubmit=async(e)=>{
  e.preventDefault()

await axios.post('http://localhost:8000/todo', { text })
  setText("")
  refresh()
}

  return (
  <>

  <form onSubmit={handleSubmit} className='mb-6 flex'>

<input type="text"  value={text} onChange={(e) => setText(e.target.value)} className=' px-4 py-2 rounded-l-md w-64 text-white border border-amber-800 '/>
<button type='submit' className='bg-pink-500 px-4 py-2 rounded-r-md'>Add</button>
  </form>

  </>
  )
}

export default TodoForm