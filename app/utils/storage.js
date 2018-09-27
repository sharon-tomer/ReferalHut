function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// todos unmarked count // not sure what this thing does
// function setBadge(todos) {
//   if (chrome.browserAction) {
//     const count = todos.filter(todo => !todo.marked).length;
//     chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
//   }
// }

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      // setBadge(state.todos);
    });
    return store;
  };
}
