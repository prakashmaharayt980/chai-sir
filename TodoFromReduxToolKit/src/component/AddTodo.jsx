import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../StoreFile/TodosliceFunction';

const AddTodo = () => {
  const [inputdata, setinputdata] = useState('');
  const dispatch = useDispatch();

  const handledata = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputdata));
    setinputdata('');
  };

  return (
    <form onSubmit={handledata} className="mb-4">
      <input
        value={inputdata}
        type="text"
        placeholder="Enter your todo"
        onChange={(e) => setinputdata(e.target.value)}
        className="border p-2 rounded-md mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
