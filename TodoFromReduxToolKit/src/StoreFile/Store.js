import {configureStore} from '@reduxjs/toolkit'
import TodoSlice  from './TodosliceFunction'

const rootreducer={
    todo:TodoSlice
}
export const store=configureStore({
    reducer: rootreducer
    
})