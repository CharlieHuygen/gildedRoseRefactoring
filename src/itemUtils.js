import { maxQuality, minQuality } from "./gilded_rose";
import { isConjured } from "./logic/logicConjured";

export const increaseQuality = function (item) {
  if (item.quality < maxQuality) {
    item.quality++;
  }
};

export const decreaseQuality = function (item, amount = 1) {
  if (item.quality > minQuality) {
      item.quality -= amount;
  }
};

export const decreaseSellIn = function (item) {
  item.sellIn--;
};

export const hasExpired = function (item) {
  return item.sellIn < 0;
};
