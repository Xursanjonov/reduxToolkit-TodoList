import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, delet, edit } from './Redux/reducer/todoList';

function App() {
  const [input, setInput] = useState('');
  const [editTodo, setEditTodo] = useState({ id: null, text: '' });
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(add({
      id: Date.now(),
      text: input
    }));
    setInput('');
  };

  const handleEdit = (id) => {
    if (!editTodo.text.trim()) return;
    dispatch(edit({
      id,
      text: editTodo.text
    }));
    setEditTodo({ id: null, text: '' });
  };

  return (
    <section className='w-[800px] mt-4 mx-auto py-4 flex flex-col items-center justify-center gap-4 rounded-xl bg-blue-500'>
      <h1 className='my-4 text-5xl font-extrabold text-black'>TodoList</h1>
      <div className='py-4'>
        <form onSubmit={handleSubmit} className='w-[700px] flex items-center justify-center gap-6'>
          <input value={input} onChange={e => setInput(e.target.value)}
            className='w-[88%] input input-secondary px-4 py-2 rounded-xl italic font-bold text-black bg-white' />
          <button type="submit" className='px-6 py-3 font-bold rounded-lg text-black bg-green-500'>Submit</button>
        </form>
        <img src="" alt="" />
      </div>
      <ul className='mb-4 flex flex-col items-center gap-4'>
        {todos?.map(todo => (
          <li key={todo.id} className='w-[700px] px-6 py-2 font-bold italic flex items-center justify-between rounded-3xl text-black bg-white'>
            {editTodo.id === todo.id ? (
              <input className='w-[550px] input input-secondary italic input-sm px-2 bg-transparent'
                type="text"
                value={editTodo.text}
                onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
              />
            ) : <h1 className='w-[550px]'>{todo.text}</h1>}
            {editTodo.id === todo.id ? (<button onClick={() => handleEdit(todo.id, editTodo.text)}
              className='mx-1 py-2 px-3 rounded-md text-black bg-green-500'>
              <i class="fa-solid fa-floppy-disk text-md"></i>
            </button>) :
              (<button onClick={() => setEditTodo({ id: todo.id, text: todo.text })}
                className='mx-1 py-2 px-3 rounded-md text-black bg-yellow-500'>
                <i className="fa-solid fa-pen-to-square text-md"></i>
              </button>)}
            <button onClick={() => dispatch(delet(todo.id))}
              className='mx-1 py-2 px-3 rounded-md text-black bg-red-500'>
              <i className="fa-solid fa-trash-can text-md"></i>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
