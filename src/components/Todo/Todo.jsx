import styles from './Todo.module.css';

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../../features/todo/todoSlice";

const Todo = () => {
    const [tasks, setTasks] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTasks(e.target.value);
    };

    const handleAddTodo = () => {
        if (tasks) {
            dispatch(addTodo(tasks));
            setTasks("");
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <section>
            <p className={styles['todo-text']}>Todo component</p>

            <input type="text" value={tasks} onChange={handleInputChange} />
            <button onClick={handleAddTodo}> Add Todo </button>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                    >
                        {todo.name}
                        <button onClick={() => handleToggleComplete(todo.id)}>
                            {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                        </button>
                        <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Todo;
