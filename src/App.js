import React, { Component } from 'react';
import './App.css';

import InputForm from './components/InputForm';
import ListTodo from './components/ListTodo';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: JSON.parse(localStorage.getItem('localData'))
    };
  }

  addTodo = () => {
    let inputValue = this.input.value;
    if (localStorage.getItem('localData') === null) {
      let item = [];
      item.push(inputValue);
      localStorage.setItem('localData', JSON.stringify(item));
    } else {
      let item = JSON.parse(localStorage.getItem('localData'));
      item.push(inputValue);
      localStorage.setItem('localData', JSON.stringify(item));
    }
    this.setState({
      items: JSON.parse(localStorage.getItem('localData'))
    });
    this.input.value = '';
    this.input.focus();
  };

  onRemove = id => {
    let updatedTodo = this.state.items.filter((todo, index) => {
      return id !== index;
    });
    localStorage.setItem('localData', JSON.stringify(updatedTodo));
    this.setState({
      items: updatedTodo
    });
  };

  setRef = el => {
    this.input = el;
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5">My Todo Lists</h1>
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <ListTodo items={this.state.items} onClick={this.onRemove} />
            <InputForm onClick={this.addTodo} setRef={this.setRef} />
          </div>
        </div>
      </div>
    );
  }
}
