import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
