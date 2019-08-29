import React, { Component } from 'react'
import CipheredText from './CipheredText';

export default class TextList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">
                        Ciphered Text List
                    </h3>
                    <CipheredText/>
                    <button type="button" className="btn btn-danger btn-block mt-5">
                        Clear
                    </button>
                </ul>
            </div>
            
        )
    }
}
