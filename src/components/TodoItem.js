import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
      return {
          backgroundColor: '#ebebeb',
          padding: '0.5rem',
          marginBottom: '1rem',
          textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {

        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <div>
                    <input style={{marginRight: '0.5rem'}} onChange={this.props.markComplete.bind(this, id)} type="checkbox"/>
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={{float: 'right'}}>x</button>
                </div>
            </div>

        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};


export default TodoItem;
