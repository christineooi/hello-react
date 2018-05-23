import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
      value: props.value
    };
  }
  render() {
    return (
      <span style={{color:this.state.color}}>
        {this.state.value}
      </span>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, <Text color="purple" value ="Christine"/>!</h1>
        <h1>Hello, <Text color="pink" value ="Lady"/>!</h1>
      </div>
    );
  }
}

export default App;