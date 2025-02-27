import TodoItem from "./TodoItem";
import styles from "./todoslist.module.css"



export default function Todoslist({todos,setTodos}){
    const sortedTodos=todos.slice().sort((a,b)=>a.done -b.done)

    return(
        
        <div className={styles.todoslist}>
        {sortedTodos.map((item)=><TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />)}
        
        </div>
    )
}