import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
  shouldPromptForCode: false,
  shouldPromptForReferal: false,
}];

const actionsMap = {
  [ActionTypes.TOGGLE_CODE_PROMPT](state, action) {
    return [{
      shouldPromptForCode: action.newState
    }, ...state];
  },
  [ActionTypes.TOGGLE_REFER_PROMPT](state, action) {
    return [{
      shouldPromptForReferal: action.newState
    }, ...state];
  }
};

export default function prompts(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
