import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const {
    todo, changeProp, deleteProp,
  } = props;
  const { completed, id, title } = todo;

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => changeProp(id)}
      />
      <button type="button" onClick={() => deleteProp(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
  }).isRequired,
  changeProp: PropTypes.func.isRequired,
  deleteProp: PropTypes.func.isRequired,
};

export default TodoItem;
