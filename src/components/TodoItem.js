import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
    // load theme context
    const { theme } = useContext(ThemeContext);

    // load todo context
    const { deleteTodo } = useContext(TodoContext);

    const { isLightTheme, light, dark } = theme;

    // style
    const style = isLightTheme ? light : dark;

    return (
        <li
            // deleteTodo.bind(this, todo.id)
            onClick={() => {
                deleteTodo(todo.id);
            }}
            style={style}
        >
            {todo.title}
        </li>
    );
};

export default TodoItem;
