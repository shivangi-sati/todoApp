import styles from "./todoitem.module.css"
export default function TodoItem({item,todos,setTodos}){
    function deleteButton(item){
       setTodos(todos.filter((todo)=>todo.name !==item)) ;

    }
    function handleClicked(item){
       setTodos(todos.map((todo)=>todo.name===item?{ ...todo ,done: !todo.done}:todo))
    
    }
    const Done=item.done?styles.completed:"";
    return(
        <>
         <div className={styles.div}>
        <span className={Done} style={{display:"inline", padding:"5px"}} onClick={()=>handleClicked(item.name)}>{item.name}</span>
       <button className={styles.button}
       onClick={()=>deleteButton(item.name)}
       
       >*</button>
       
        </div></>
    )

}