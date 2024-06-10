import { useSelector } from "react-redux";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// TODO: todos 상태를 리덕스를 이용한 전역상태로 관리한 투두리스트를 작성해 보세요.
function App() {
  const todo = useSelector((state) => state.todo);

  const yetCompleted = todo.filter((el) => !el.isDone);
  const completed = todo.filter((el) => el.isDone);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList title={"Working"} todo={yetCompleted} />
      <TodoList title={"Done"} todo={completed} />
    </>
  );
}

export default App;
