import { useState } from "react";
import styles from "./form.module.css"
export default function form({todos,setTodos}){

    const [todo, setTodo] = useState({name:"",done:false});
    function handleSubmit(e){
        e.preventDefault();
        if(todo.name!=""){
        setTodos([...todos, todo]);}
        setTodo({name:"",done:false});
  
  
      }
    return(

        <form className={styles.form}
        onSubmit={handleSubmit}>
        <input className={styles.input}
        type="text"
        value={todo.name}
        placeholder="Enter your task..."
        onChange={(e)=>setTodo({name:e.target.value,done:false})}        
        />
        <button className={styles.button}type="submit">Add</button>
      </form>
    )
}