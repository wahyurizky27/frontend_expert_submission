const assert = require('assert');

Feature('LikeRestaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Add Restaurant to Favorite restaurant list', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item');

  const firstRestaurantName = locate('.restaurant_item__content a').first();
  const firstCardTitle = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoriteRestaurantName = await I.grabTextFrom('.restaurant_item__content a');

  assert.strictEqual(firstCardTitle, favoriteRestaurantName);
});

Scenario('Add to favorite and unliked restaurant', async ({ I }) => {
  I.see('No Favorite', '#nothing-favorite');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');
  const firstRestaurantName = locate('.restaurant_item__content a').first();
  const firstCardTitle = await I.grabTextFrom(firstRestaurantName);
  I.click(firstRestaurantName);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedCardTitle = await I.grabTextFrom('.restaurant_item__content a');
  assert.strictEqual(firstCardTitle, likedCardTitle);

  I.click(likedCardTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#nothing-favorite');
  const noFavRestaurant = await I.grabTextFrom('#nothing-favorite');

  assert.strictEqual(noFavRestaurant, 'No Favorite');
});
