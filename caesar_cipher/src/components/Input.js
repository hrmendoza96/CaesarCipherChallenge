import React, { Component} from 'react'

export default class Input extends Component {
    render() {
        const {value, handleChange, handleSubmit} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <h5>Text to Cipher</h5>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-secondary text-white">
                                <i className="fas fa-keyboard"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Input Text to Cipher" value={value} onChange={handleChange}></input>
                    </div>
                    <button type="submit" className="btn btn-block btn-primary mt-3">Encrypt</button>
                </form>
            </div>
        )
    }
}
