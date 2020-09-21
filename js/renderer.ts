import { StoreType } from '../interface/store';
import { hash, empty, createElements } from './utils.js';
import routes from './routes.js';

export default class Renderer {
  $app;
  $main!: HTMLDivElement;
  store: StoreType;

  constructor(store: StoreType) {
    this.$app = document.getElementById('app') as HTMLDivElement;
    this.store = store;

    this.renderLayout();
  }

  renderLayout() {
    this.$main = createElements('main', {
      id: 'main',
    }) as HTMLDivElement;

    this.$app.appendChild(
      createElements('header', {}, [
        createElements('a', {
          classNames: ['logo'],
          href: `${hash(routes.home.path)}`,
          text: 'logo',
        }),
        createElements(
          'nav',
          {},
          Object.keys(routes)
            .filter((key) => key !== 'home')
            .map((key) =>
              createElements('a', {
                href: `${hash(routes[key].path)}`,
                text: key,
              }),
            ),
        ),
      ]),
    );

    this.$app.appendChild(this.$main);

    this.$app.appendChild(
      createElements('footer', {
        text: 'footer',
      }),
    );
  }

  async renderAction(path: string) {
    this.store.setLoading(true);
    const $element = await routes[path].component(this.store);

    empty(this.$main);
    this.store.setLoading(false);
    this.$main.appendChild($element);
  }
}
