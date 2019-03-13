import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        title : ''
    }

    render() {
        return (
            <form action="" style={{ display: 'flex' }}>
                <input type="text" name='title' placeholder="Add Todo..."  style={{flex: '10', padding: '0.25rem'}} />
                <input type="submit" value="submit" className="btn" style={{flex: '1'}}/>
            </form>
        );
    }
}

AddTodo.propTypes = {};

export default AddTodo;
