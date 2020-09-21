import { PageComponentType } from '../interface/component';
import { createElements } from '../js/utils.js';

const Etc: PageComponentType = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

  return createElements('div', { text: 'Etc page' });
};

export default Etc;
