import { PageComponentType } from '../interface/component';
import { createElements } from '../js/utils.js';

const About: PageComponentType = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

  return createElements('div', { text: 'About page' });
};

export default About;
