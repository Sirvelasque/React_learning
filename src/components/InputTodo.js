import React, { Component } from 'react';

class InputTodo extends Component {
  constructor (props){
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  

  handleSubmit = e => {
    const {title} = this.state.title;
    e.preventDefault()
    if (title.trim()) {
      this.props.addTodoProps(title);
      this.setState({
        title: '',
      })
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo