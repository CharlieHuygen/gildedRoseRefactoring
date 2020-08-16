import { Shop, Item } from "../src/gilded_rose";

describe("Gilded Rose", function() {
  it("should update item quality", function() {
    const gildedRose = new Shop([new Item("item", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("item");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  it("should not have an item with negative quality", function() {
    const gildedRose = new Shop([new Item("item", 0, 0)]);
    const items = gildedRose.updateQuality(); 
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  }); 

  it("should update item with negative sell date", function() {
    const gildedRose = new Shop([new Item("item", -1, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2); 
  }); 

  it("should update quality of Aged Brie", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  })

  it("should not update an item with quality 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50); 
  })

  it("should have a quality of 80", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  })

  it("should increase in quality", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
  });

  it("should decrease quality twice as fast", function(){
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8); 
  });

});
