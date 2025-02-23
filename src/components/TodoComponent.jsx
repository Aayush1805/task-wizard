import PropTypes from 'prop-types';
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

TodoComponent.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  delTodo: PropTypes.func.isRequired,
};

