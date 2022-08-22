import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todos = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "work 1",
        },
        {
            id: 2,
            title: "work 2",
        },
        {
            id: 3,
            title: "work 3",
        },
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-list">
            <TodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Todos;
