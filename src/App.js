import React, { Component } from 'react';
import QuoteBox from './QuoteBox/QuoteBox';
import './App.css';
import quotes from './quotes';

class App extends Component {
  // Setting up the constructor function so we can set up our default state.
  constructor(props) {
    super(props);
    this.state = {
        quote: '"' + quotes[0].quote + '"',
        author: '- ' + quotes[0].author
    }
  }

  getRandomQuote = () => {
    var random = Math.floor(Math.random() * quotes.length);
    var authorLength = quotes[random].author.length;
    if (authorLength > 0 ) {
      this.setState({
        quote: '"' + quotes[random].quote + '"',
        author: '- ' + quotes[random].author
      });
    } else {
      this.setState({
        quote: '"' + quotes[random].quote + '"',
        author: '- Unknown'
      });
    }
  };

  // function ro generate a random color from R: 0-154, G: 0-154, B: 0-154
  getRandomColor(upperBound) {
    const color = `rgb(
      ${Math.floor(Math.random() * upperBound)},
      ${Math.floor(Math.random() * upperBound)},
      ${Math.floor(Math.random() * upperBound)}
    )`;
    return color;
  }

  render() {
    return (
      <div>
        <QuoteBox
          color={this.getRandomColor(155)}
          quote={this.state.quote} 
          author={this.state.author} 
          onClick={this.getRandomQuote}
        />
      </div>
    );
  }
}

export default App;
