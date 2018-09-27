import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as appActions from '../actions/actions';
import style from './App.css';
import messageHandler from '../utils/handleMessage';

export default class App extends Component {

  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  constructor() {
    super();
    chrome.runtime.onMessage.addListener(messageHandler);
  }

  render() {
    const { actions } = this.props;

    return (
      <div className={style.normal}>
        <MainSection actions={actions} />
      </div>
    );
  }
}

connect(
  App,
  state => ({
    prompts: state.prompts
  }),
  dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
  })
);
