import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTodo } from "../redux/todos/todosSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newTodo({ id:nanoid(), title, completed: false }));
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default Form;
