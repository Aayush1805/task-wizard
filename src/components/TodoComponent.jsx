import Todo from './Todo';

export default function TodoComponent({ todos, delTodo }) {
  return (
    <div className="todo-container">
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} delTodo={delTodo} />
      ))}
    </div>
  );
}



