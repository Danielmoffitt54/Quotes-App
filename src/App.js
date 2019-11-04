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
    this.setState({
      quote: '"' + quotes[random].quote + '"',
      author: '- ' + quotes[random].author
    });
  };

  render() {
    return (
      <div>
        <QuoteBox 
          quote={this.state.quote} 
          author={this.state.author} 
          onClick={this.getRandomQuote}
        />
      </div>
    );
  }
}

export default App;
