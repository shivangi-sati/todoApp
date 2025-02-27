import styles from "./footer.module.css"
export default function Footer({todosLength,completedTodos}){
    return(
        <div className={styles.items}>
            <span className={styles.item}>Completed Tasks:{completedTodos}</span>
            <span className={styles.item}>Total tasks:{todosLength}</span>
        </div>
    )
}