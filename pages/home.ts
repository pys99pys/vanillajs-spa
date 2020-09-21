import { PageComponentType } from '../interface/component';
import { createElements } from '../js/utils.js';

const Home: PageComponentType = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1500);
  });

  return createElements('div', { text: 'Home page' });
};

export default Home;
