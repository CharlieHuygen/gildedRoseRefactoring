import { decreaseSellIn, increaseQuality, hasExpired } from "../itemUtils";
import { minQuality } from "../gilded_rose";

export const isBackstagePass = function (item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
};

export const updateBackstageItem = function (item) {
  decreaseSellIn(item);
  increaseQuality(item);

  if (item.sellIn < 10) {
    increaseQuality(item);
  }

  if (item.sellIn < 5) {
    increaseQuality(item);
  }

  if (hasExpired(item)) {
    item.quality = minQuality;
  }
  return item;
};
