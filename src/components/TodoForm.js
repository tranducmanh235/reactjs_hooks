import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
    // load context
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;

    // load context todo
    const { addTodo } = useContext(TodoContext);

    const [title, setTitle] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo({
            id: uuidv4(),
            title,
        });
        setTitle("");
    };

    // style
    const style = isLightTheme ? light : dark;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleTitleChange}
                    value={title}
                    required
                    type="text"
                    name="title"
                    placeholder="Enter a todo..."
                />
                <input type="submit" value="Add" style={style} />
            </form>
        </div>
    );
};

export default TodoForm;
