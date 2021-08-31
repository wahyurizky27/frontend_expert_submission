/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helper/testFactories';

const addFavoriteContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Like Restaurant', () => {
  beforeEach(() => {
    addFavoriteContainer();
  });
  it('should show the favorite restaurant button when the restaurant never add to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('should not show the unFavorite restaurant button when the restaurant never add to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="remove restaurant from favorite"]'))
      .toBeFalsy();
  });

  it('should able to add restaurant to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when it already added to favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();

    expect(allFavoriteRestaurant).toEqual([{ id: 1 }]);

    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allFavoriteRestaurant = await FavoriteRestaurantIdb.getAllRestaurant();

    expect(allFavoriteRestaurant).toEqual([]);
  });
});
