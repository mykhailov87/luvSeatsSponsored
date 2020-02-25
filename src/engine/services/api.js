// Core
import axios from 'axios';

class Api {
  constructor() {
    this.http = axios.create({ baseURL: 'https://picsum.photos/v2/' });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  getMainPostHomeScreenData() {
    return this.http.get('list', {
      params: {
        page: 1,
        limit: 1,
      },
    });
  }
}

export default Api.getInstance();
