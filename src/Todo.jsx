import { useState } from "react"
import Todoslist from "./Todoslist";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo(){

  

  const [todos, setTodos] = useState([]);
  const todosLength=todos.length;
  const completedTodos=(todos.filter((todo)=>todo.done)).length;

    

    return(
        <div>
         <Form  todos={todos} setTodos={setTodos}/>
          <Todoslist  todos={todos} setTodos={setTodos}/>
          <Footer todosLength={todosLength} completedTodos={completedTodos}/>
          
        </div>
    )

}