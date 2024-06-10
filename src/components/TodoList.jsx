import TodoItem from "./TodoItem";

export default function TodoList({ title, todo }) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todo.map((el) => {
          return <TodoItem key={el.id} el={el} />;
        })}
      </ul>
    </section>
  );
}
