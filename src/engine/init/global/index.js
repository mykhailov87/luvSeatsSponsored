import { initStyles } from './styles';

const global = Object.freeze({
  run() {
    initStyles();
  },
});

export { global };
