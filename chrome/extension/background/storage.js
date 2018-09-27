export async function getServicesFromStorage() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get('services', (obj) => {
      let services = obj.services;
      if (services) {
        services = JSON.parse(services);
        if (services && services.length > 0) {
          resolve(services);
        } else {
          reject();
        }
      } else {
        chrome.storage.sync.set({ services: [] }, () => {
          resolve([]);
        });
      }
    });
  });
}
