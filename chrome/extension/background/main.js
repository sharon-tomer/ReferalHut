import { getServiceFromUrl, isServiceSupported, hasAccount } from './servicesManager';

function sendMessage(tabId, message, options) {
  chrome.tabs.sendMessage(tabId, Object.assign({ type: 'referalHutBackground' }, message), options);
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  const url = tab.url;
  if (changeInfo.status !== 'complete') return;

  const service = getServiceFromUrl(url);
  if (!isServiceSupported(service)) return;
  if (hasAccount(service)) {
    if (service.code) {
      return;
    }
    sendMessage(tabId, { action: 'prompt_for_code' });
  } else {
    sendMessage(tabId, { action: 'prompt_for_discount' });
  }
});

