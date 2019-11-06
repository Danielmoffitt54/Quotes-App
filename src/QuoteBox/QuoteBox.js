import React, { Component } from 'react';
import './QuoteBox.css';

class QuoteBox extends Component {
    render() {
        const html = document.documentElement;
        html.style.background = this.props.color;

        return(
            <div 
                className='QuoteBox'
                style={{ color: this.props.color }}
            >
                <h1 className='QuoteBox-quote fadeIn'>{this.props.quote}</h1>
                <h3 className='QuoteBox-author fadeIn'>{this.props.author}</h3>
            <button 
                className='QuoteBox-button' 
                onClick={this.props.onClick} 
                style={{ backgroundColor: this.props.color }}
            >
                New Quote
            </button>
            </div>
        );
    }
}

export default QuoteBox;