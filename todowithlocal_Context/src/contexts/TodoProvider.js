import React ,{createContext,useContext}from "react";
export const Todo=createContext({
    todos:[
        {
            id:1,
            todo:'todo msg',
            completed:false

    }],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
})

export const TodoProvider=Todo.Provider;

export const useTodo=()=>{
    return useContext(Todo)
}
