import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const { todos, changeProp, deleteProp } = this.props;
    const info = todos;
    return (
      <ul>
        {info.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeProp={changeProp}
            deleteProp={deleteProp}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.shape(PropTypes.shape({
    id: PropTypes.string,
    completed: PropTypes.bool,
    title: PropTypes.string,
  })).isRequired,
  changeProp: PropTypes.func.isRequired,
  deleteProp: PropTypes.func.isRequired,
};
export default TodosList;
