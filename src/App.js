import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/layout/header';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo'

class App extends Component {

  state = {
    todos: [
        {
            id: 1,
            title: 'Take out the trash',
            completed: false
        },
        {
            id: 2,
            title: 'Learn React',
            completed: false
        },
        {
            id: 3,
            title: 'Get good Job',
            completed: false
        }
    ]
  }


    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }


    // DELETE
    deleteTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    render() {
        return (
          <div className="App">
            <Header/>
            <AddTodo/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
          </div>
    );
  }
}

export default App;
