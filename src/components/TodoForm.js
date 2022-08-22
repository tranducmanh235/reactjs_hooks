import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
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
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default TodoForm;
