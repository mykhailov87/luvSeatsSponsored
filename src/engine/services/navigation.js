// Core
import { createRef } from 'react';

class Navigation {
  constructor() {
    this._navigationRef = createRef(null);
    this._screens = {
      app: 'App',
      home: 'Home',
      post: 'Post',
    };
  }

  static getInstance() {
    if (!Navigation.instance) {
      Navigation.instance = new Navigation();
    }
    return Navigation.instance;
  }

  get screens() {
    return this._screens;
  }

  get navigationRef() {
    return this._navigationRef;
  }

  navigate(name, params) {
    this._navigationRef.current?.navigate(name, params);
  }
}

export default Navigation.getInstance();
