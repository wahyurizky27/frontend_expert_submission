import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorites Restaurant</h2>
        <h1 id="nothing-favorite">No Favorite</h1>
        <div id="restaurantFav" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantFav = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurantFav');
    const nothingFavorite = document.querySelector('#nothing-favorite');
    if (restaurantFav.length !== 0) {
      nothingFavorite.remove();
      restaurantFav.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default Favorite;
