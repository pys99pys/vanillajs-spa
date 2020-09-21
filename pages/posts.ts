import { PageComponentType } from '../interface/component';
import { createElements } from '../js/utils.js';

const Posts: PageComponentType = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

  return createElements('div', { text: 'Posts page' });
};

export default Posts;
