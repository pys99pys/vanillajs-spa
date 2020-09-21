import { createElements } from '../js/utils.js';

export default () => {
  return createElements('div', {
    id: 'loading',
    text: 'loading...',
  });
};
