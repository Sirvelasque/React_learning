import React from "react"
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          changeProp={this.props.changeProp}
          delete={this.props.delete}
          />
        ))}
      </ul>
    )
  }
}

export default TodosList