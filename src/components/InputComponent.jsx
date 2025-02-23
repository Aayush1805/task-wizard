import PropTypes from 'prop-types';

export default function InputComponent({ inpVal, handleChange, addTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={inpVal.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={inpVal.description}
        onChange={handleChange}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}


InputComponent.propTypes = {
  inpVal: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
  
}