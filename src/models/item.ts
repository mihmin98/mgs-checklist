import type { ItemLocation } from "./item-location";
import type { ItemType } from "./item-type";

export class Item {
  public name: string;
  public type: ItemType;
  public locations: ItemLocation[];
  public imgPath?: string;

  constructor(name: string,
              type: ItemType,
              locations: ItemLocation[],
              imgPath?: string) {
    this.name = name;
    this.type = type;
    this.locations = locations;
    this.imgPath = imgPath;
  }
}