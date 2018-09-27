export default (request, sender, sendResponse) => {
  if (request.type === 'referalHutBackground' && request.action) {
    switch (request.action) {
      case 'prompt_for_code':
        this.setState({});
        break;
      case 'prompt_for_discount':
        this.setState({});
        break;
      default:
        break;
    }
  }
  sendResponse(Object.assign({ status: 'ok' }, request));
};
