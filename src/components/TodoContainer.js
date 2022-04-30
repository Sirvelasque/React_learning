import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './todosList';
import Header from './Header';
import InputTodo from './InputTodo';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuidv4(),
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: uuidv4(),
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: uuidv4(),
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

   handleChange = (id) => {
     this.setState((prev) => ({
       todos: prev.todos.map((todo) => {
         if (todo.id === id) {
           return {
             ...todo,
             completed: !todo.completed,
           };
         }
         return todo;
       }),
     }));
   };

   delTodo = (id) => {
     this.setState((prev) => ({
       todos: [
         ...prev.todos.filter((todo) => todo.id !== id),
       ],
     }));
   };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prev) => ({
      todos: [...prev.todos, newTodo],
    }));
  };

  render() {
    const { todos } = this.state;
    return (

      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo
            addTodoProps={this.addTodoItem}
          />
          <TodosList
            todos={todos}
            changeProp={this.handleChange}
            deleteProp={this.delTodo}
          />
        </div>
      </div>

    );
  }
}
export default TodoContainer;
