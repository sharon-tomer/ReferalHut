import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
export default class UsePrompt extends Component {

  static propTypes = {
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  handleClick = () => {
    this.props.toggleCodePrompt;
  }

  render() {
    return (
      <button onClick={this.handleClick}>Show me the money!</button>
    );
  }
}
