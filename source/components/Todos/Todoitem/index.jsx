import React, { PureComponent } from 'react';
import './style.scss';

export default class Todo extends PureComponent {
  render() {
    const {todo, onClick,  onButtonClick} = this.props;
    return (
      <div className="todo-item" onClick={onClick}>
        <div className="todo-item__icon" />
        <div className="todo-item__description">
          <label>{todo.label}</label>
        </div>
        <div className="todo-item__destroy">
          <button onClick={onButtonClick} type="button">X</button>
        </div>
      </div>
    );
  }
}
