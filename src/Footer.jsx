import styles from "./footer.module.css"
export default function Footer({todosLength,completedTodos}){
    return(
        <div className={styles.items}>
            <p className={styles.item}>Completed Tasks:{completedTodos}</p>
            <p className={styles.item}>Total tasks:{todosLength}</p>
        </div>
    )
}