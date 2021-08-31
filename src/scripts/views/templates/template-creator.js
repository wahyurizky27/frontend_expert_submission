import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div>
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" />
     <div class="restaurant__info">
          <h3>Information</h3>
          <h4>Categories</h4>
          <p>${restaurant.categories[1].name}</p>
          <h4>Rating</h4>
          <p>${restaurant.rating}</p>
          <h4>City</h4>
          <p>${restaurant.city}</p>
          <h4>Address</h4>
          <p>${restaurant.address}</p>
      <div>

    <h4 class="menu-table-title">Menus</h4>
        <div class="table-menus">
            <table>
            <tr>
            <th>Foods</th>
            </tr>
            ${restaurant.menus.foods.map((menu) => `
            <tr>
            <td>${menu.name}</td>
            </tr>
            `).join('')}
            </table>
            <table>
            <tr>
            <th>Drinks</th>
            </tr>
            ${restaurant.menus.drinks.map((menu) => `
            <tr>
            <td>${menu.name}</td>
            </tr>
            `).join('')}
            </table>
        </div>
    </div>

    
  </div>

  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>

  <h1 class="review-title">Reviews</h1>
  <div class="restaurant-reviews">
  ${restaurant.customerReviews.map((review, index) => `
  <div class="card" key=${index}>
  <h1>${review.name}</h1>
  <h2>${review.date}</h2>
  <p>${review.review}</p>
  </div>
  `).join('')}
  </div>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant_item__header">
        <img class="restaurant_item__header__poster lazyload" alt="${restaurant.name}"
        data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
    </div>
    <div class="restaurant_item__content">
        <p>Rating: <span class="restaurant_item__header__rating__score">${restaurant.rating}⭐️</span></p>
        <h1><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
        <h2>${restaurant.city}</h2>
        <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
