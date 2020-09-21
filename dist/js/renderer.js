var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { hash, empty, createElements } from './utils.js';
import routes from './routes.js';
export default class Renderer {
    constructor(store) {
        this.$app = document.getElementById('app');
        this.store = store;
        this.renderLayout();
    }
    renderLayout() {
        this.$main = createElements('main', {
            id: 'main',
        });
        this.$app.appendChild(createElements('header', {}, [
            createElements('a', {
                classNames: ['logo'],
                href: `${hash(routes.home.path)}`,
                text: 'logo',
            }),
            createElements('nav', {}, Object.keys(routes)
                .filter((key) => key !== 'home')
                .map((key) => createElements('a', {
                href: `${hash(routes[key].path)}`,
                text: key,
            }))),
        ]));
        this.$app.appendChild(this.$main);
        this.$app.appendChild(createElements('footer', {
            text: 'footer',
        }));
    }
    renderAction(path) {
        return __awaiter(this, void 0, void 0, function* () {
            this.store.setLoading(true);
            const $element = yield routes[path].component(this.store);
            empty(this.$main);
            this.store.setLoading(false);
            this.$main.appendChild($element);
        });
    }
}
//# sourceMappingURL=renderer.js.map