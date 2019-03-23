import React, { PureComponent } from 'react';
import './home.scss';
import Todos from '../../components/Todos/Todoslist/index';

export class Home extends PureComponent {
  render() {
    return (
      <>
        <Todos />
      </>
    );
  }
}
