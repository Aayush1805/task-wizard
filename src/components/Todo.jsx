export default function Todo({ todo, index, delTodo }) {
  return (
    <div className="todo">
      <div className="todo-items">
        <h2>{todo?.title}</h2>
        <p>{todo?.description}</p>
      </div>
      
      <div className="action">
          <input type="checkbox" />
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}



