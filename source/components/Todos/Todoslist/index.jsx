import React, { Component } from 'react';
import Todo from '../Todoitem/index';
import './style.scss';

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      checked: false,
      todosList: [],
    };
    this.keyCount = 0;
  }

  handleChange = (event) => {
    this.setState({
      label: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {label, checked, todosList} = this.state;
    const object = {
      label,checked
    };
    console.log(todosList);
    todosList.push(object);
    this.setState({ label: '', checked: false, todosList });
  }



  getKey() {
    return this.keyCount++;
  }

  toggleCheckBox = (item) => {
    item.checked = !item.checked;
    console.log('test' )
  }

  deleteThisTodo = (item) => {
    console.log("delete")
    let {todosList} = this.state;
    const index = todosList.indexOf(item);
    console.log(todosList);
    todosList.splice(index, 1);

    this.setState({
      todosList
    });
    console.log(todosList);
  }

  render() {
    const {todosList} = this.state;
    const todoElements = todosList.map((todo) => {
      const onClick = () => this.toggleCheckBox(todo);
      const deleteThisTodo = () => this.deleteThisTodo(todo);
      return (
        <li key={this.getKey()}>
          <Todo todo={todo}
                onClick={onClick}
                onButtonClick={deleteThisTodo}
          />

        </li>
      );
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="todos">
          <div className="todos-input-field">
            <input type="text" value={this.state.label} onChange={this.handleChange} />
          </div>
          <div className="todos-list">
            <label onClick={this.handleInputChangeAll}>All</label>
            <ul>{todoElements}</ul>
          </div>
          <div className="todos-sorting">
            <div className="todos-sorting__count">

            </div>
            <div className="todos-sorting__filter">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <div className="todos-sorting__clear-filter">
              <button>Clear completed</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
