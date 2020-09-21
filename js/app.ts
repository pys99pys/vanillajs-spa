import Store from './store.js';
import Renderer from './renderer.js';

(() => {
  const store = new Store();
  const renderer = new Renderer(store);

  renderer.renderAction('home');
  window.addEventListener('hashchange', (e) => {
    const [, newPath] = e.newURL.split('/#/');
    renderer.renderAction(newPath || 'home');
  });
})();
