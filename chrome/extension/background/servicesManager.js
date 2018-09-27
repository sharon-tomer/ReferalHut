import getServicesFromStorage from './storage';

export default class ServicesManager {
  async init() {
    this.services = await getServicesFromStorage();
  }

  getServiceFromUrl(url) {
    return this.services.filter(service => !!url.match(service.regex))[0] || false;
  }

  // isServiceSupported(/*serviceToCheck*/) {
  //   //todo
  // }

  hasAccount(serviceToCheck) {
    return !!this.services.filter(service => service.id === serviceToCheck.id)[0];
  }
}

