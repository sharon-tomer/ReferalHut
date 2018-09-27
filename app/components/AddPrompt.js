import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import classnames from 'classnames';
export default class AddPrompt extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    return (
      <button onClick={() => this.props.onClick(true)}>Show me the money!</button>
    );
  }
}
