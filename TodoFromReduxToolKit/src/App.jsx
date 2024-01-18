import { useState } from 'react'
import {Provider}from 'react-redux'
import { store } from './StoreFile/Store'
import AddTodo from './component/AddTodo'
import Todo from './component/Todo'


function App() {
 

  return (
    <Provider store={store} >
   <AddTodo/>
   <Todo/>
    </Provider>
  )
}

export default App
