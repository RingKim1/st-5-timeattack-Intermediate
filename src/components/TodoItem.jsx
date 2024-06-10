import { useDispatch } from "react-redux";
import { modifyTodo, removeTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ el }) {
  const dispatch = useDispatch();

  const removeTodoBtn = (id) => {
    dispatch(removeTodo(id));
  };

  const modifyTodoBtn = (id) => {
    dispatch(modifyTodo(id));
  };

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>{el.title}</p>
        <p>{el.content}</p>
      </section>
      <section>
        <button onClick={() => modifyTodoBtn(el.id)}>완료</button>
        <button onClick={() => removeTodoBtn(el.id)}>삭제</button>
      </section>
    </li>
  );
}
