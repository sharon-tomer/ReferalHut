import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './MainSection.css';
import AddPrompt from './AddPrompt';

export default class MainSection extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    promptToShow: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      ignore: false
    };
  }


  showPrompt() {
    const { promptToShow } = this.props;
    if (promptToShow === 'add_code') {
      return (
        <AddPrompt
          onClick={this.props.actions.toggleCodePrompt}
        />
      );
    } else if (promptToShow === 'use_code') {
      // todo
    }
  }

// eslint-disable-next-line
  renderFooter() {
    // const { todos } = this.props;
    // const { filter } = this.state;
    // const activeCount = todos.length - completedCount;

    return (
      <div>footer</div>
        // <Footer
        //   completedCount={completedCount}
        //   activeCount={activeCount}
        //   filter={filter}
        //   onClearCompleted={this.handleClearCompleted}
        //   onShow={this.handleShow}
        // />
      );
  }

  render() {
    const { promptToShow } = this.props;
    // const { ignore } = this.state;

    return (
      <section className={style.main}>
        {promptToShow ? this.showPrompt(promptToShow) : ''}
        {this.renderFooter()}
      </section>
    );
  }
}
