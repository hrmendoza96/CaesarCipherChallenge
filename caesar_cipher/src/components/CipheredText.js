import React, { Component } from 'react'

export default class CipheredText extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6>Title</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-primary">
                        <i className="fas fa-eye-slash"/>
                    </span>
                    <span className="mx-2 text-danger">
                        <i className="fas fa-trash"/>
                    </span> 
                </div>
            </li>
        )
    }
}