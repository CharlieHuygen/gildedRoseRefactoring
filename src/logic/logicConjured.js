import { decreaseSellIn, decreaseQuality } from "../itemUtils";

export const isConjured = function(item) {
  return item.name === 'Conjured Mana Cake'; 
};

export const updateConjuredItem = function(item) {
    decreaseSellIn(item); 
    decreaseQuality(item, 2);
    return item; 
}