import React, {Component} from 'react';

class Delete extends Component {
    render() {
        const { counter, onDelete } = this.props
        return (
            <button
                className="btn btn-danger mr-2"
                onClick={() => onDelete(counter.id)}
            >
                Delete
            </button>
        );
    }
}

export default Delete;