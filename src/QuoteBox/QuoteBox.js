import React, { Component } from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
    render() {
        const html = document.documentElement;
        html.style.background = this.props.color;

        return(
            <div className='QuoteBox'>
                <div className='QuoteBox-display'>
                    <h1>{this.props.quote}</h1>
                    <h3>{this.props.author}</h3>
                </div>
                <button onClick={this.props.onClick} style={{ color: this.props.color }}>New Quote</button>
            </div>
        );
    }
}

export default QuoteBox;