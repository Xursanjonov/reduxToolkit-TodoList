import React from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../Redux/reducer/todoList';

export const Form = () => {
  const dispatch = useDispatch()
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(add({
      id: Date.now(),
      text: input
    }));
    setInput('');
  };

  
  return (
    <>
    <div className="py-4">
        <form onSubmit={handleSubmit} className='w-[700px] flex items-center justify-center gap-6'>
          <input value={input} onChange={e => setInput(e.target.value)}
            className='w-[88%] input input-secondary px-4 py-2 rounded-xl italic font-bold text-black bg-white' />
          <button type="submit" className='px-6 py-3 font-bold rounded-lg text-black bg-green-500'>Submit</button>
        </form>
    </div>
    
    </>
  )
}
