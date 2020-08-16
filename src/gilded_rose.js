import { decreaseQuality, hasExpired, decreaseSellIn} from "./itemUtils";
import { isBrie, updateBrieItem } from "./logic/logicBrie";
import { isBackstagePass, updateBackstageItem } from "./logic/logicBackstagePass";
import { isConjured, updateConjuredItem } from "./logic/logicConjured";

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export const isSulfuras = function(item){
  return item.name === 'Sulfuras, Hand of Ragnaros'
}

export const maxQuality = 50;
export const minQuality = 0; 

export const updateItemQuality = function(item) {
  if(isSulfuras(item)){
    return item; 
  } else if(isBrie(item)){
    return updateBrieItem(item); 
  } else if (isBackstagePass(item)) {
    return updateBackstageItem(item); 
  } else if(isConjured(item)) {
    return updateConjuredItem(item); 
  } else {
    decreaseQuality(item);
    decreaseSellIn(item);
  }

  if(hasExpired(item)){
    decreaseQuality(item);
  }

}

class Shop {

  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItemQuality);

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}

