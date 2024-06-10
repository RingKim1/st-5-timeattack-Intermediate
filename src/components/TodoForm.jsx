import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoBtn = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({ id: uuidv4(), title: title, content: content, isDone: false })
    );
  };
  return (
    <form onSubmit={addTodoBtn}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}
