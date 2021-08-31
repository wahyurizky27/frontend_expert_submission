// eslint-disable-next-line import/no-unresolved
import RestaurantDbSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    const html = `
    <div>
   
    <div class="hero">
    <div class="container">
      <h1 class="hero__title">Welcome to Zomato Apps</h1>
        <p class="hero__tagline">You Can choose your Favorite Restaurant in Indonesia !</p>
     </div>
  </div>
      <div class="content">
        <h2 class="content__heading">Explore Your Favorite Restaurant !</h2>
        <div id="restaurant" class="restaurants">
        </div>
      </div>
      </div>
    `;
    return html;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
