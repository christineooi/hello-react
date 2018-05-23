import React, { Component } from 'react';

export default class Text extends Component {
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