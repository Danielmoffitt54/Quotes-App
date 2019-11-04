import React, { Component } from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
    render() {
        return(
            <div className='QuoteBox'>
                <div className='QuoteBox-display'>
                    <h1>{this.props.quote}</h1>
                    {this.props.author}
                </div>
                <button onClick={this.props.onClick}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;