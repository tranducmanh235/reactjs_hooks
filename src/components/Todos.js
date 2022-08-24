import React, { useContext, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { GET_TODOS } from "../reducers/types";

const Todos = () => {
    // Load context
    const { todos, dispatch } = useContext(TodoContext);

    // Load auth context
    const { isAuthenticated } = useContext(AuthContext);

    // useEffect
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null,
        });
    }, [dispatch]);

    return (
        <div className="todo-list">
            <TodoForm />
            {isAuthenticated ? (
                <ul>
                    {todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: "center" }}>Not authorised</p>
            )}
        </div>
    );
};

export default Todos;
