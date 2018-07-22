import React from 'react';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todo: '', listTodo: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { listTodo } = this.state;
    let { todo } = this.state;
    const listTodoAdd = [...listTodo, todo];
    todo = "";
    this.setState({
        listTodo: listTodoAdd,
        todo
    })
  }

  handleChange(event) {
    this.setState({todo: event.target.value});
  }


  render() {
    const { todo } = this.state;
    return (
      <div>
        <h1>
            Todo List
        </h1>

        <input value={todo} onChange={this.handleChange} />
        <button type="button" onClick={this.handleClick}>
            Add 
        </button>
      </div>
    );
  }
}


export default TodoList;
