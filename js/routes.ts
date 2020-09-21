import Home from '../pages/home.js';
import About from '../pages/about.js';
import Posts from '../pages/posts.js';
import Etc from '../pages/etc.js';
import { PageComponentType } from '../interface/component';

interface Routes {
  [key: string]: {
    path: string;
    component: PageComponentType;
  };
}

const routes: Routes = {
  home: {
    path: '/',
    component: Home,
  },
  about: {
    path: '/about',
    component: About,
  },
  posts: {
    path: '/posts',
    component: Posts,
  },
  etc: {
    path: '/etc',
    component: Etc,
  },
};

export default routes;
