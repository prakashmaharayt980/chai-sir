import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatetodo, removeTodo } from '../StoreFile/TodosliceFunction';

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [editmode, seteditmode] = useState({});
  const [edittext, setedittext] = useState({});

  const handleDataChange = (id, newtext) => {
    setedittext({ ...edittext, [id]: newtext });
  };

  const handleSave = (id) => {
    dispatch(updatetodo({ id, text: edittext[id] }));
    seteditmode({ ...editmode, [id]: false });
  };

  const handleEdit = (id) => {
    seteditmode((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="bg-gray-200 p-4 mb-4 rounded-md">
          {editmode[todo.id] ? (
            <>
              <input
                type="text"
                value={edittext[todo.id] || todo.text}
                onChange={(e) => handleDataChange(todo.id, e.target.value)}
                className="border rounded-md p-2 mr-2"
              />
              <button
                onClick={() => handleSave(todo.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <p className="text-lg font-semibold">{todo.text}</p>
              <div className="flex mt-2">
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(todo.id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Todo;
