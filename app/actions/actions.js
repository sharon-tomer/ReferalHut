import * as types from '../constants/ActionTypes';

export function toggleReferPrompt(newState) {
  return { type: types.TOGGLE_REFER_PROMPT, newState };
}

export function toggleCodePrompt(newState) {
  return { type: types.TOGGLE_CODE_PROMPT, newState };
}

