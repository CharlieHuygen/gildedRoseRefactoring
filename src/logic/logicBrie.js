import { decreaseSellIn, increaseQuality, hasExpired } from "../itemUtils";

export const isBrie = function (item) {
  return item.name === 'Aged Brie';
};

export const updateBrieItem = function (item) {
  decreaseSellIn(item);
  increaseQuality(item);

  if (hasExpired(item)) {
    increaseQuality(item);
  }
  return item;
};
