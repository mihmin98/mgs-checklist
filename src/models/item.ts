import type { ItemLocation } from "./item-location";
import type { ItemType } from "./item-type";

export class Item {
  public name: string;
  public type: ItemType;
  public locations: ItemLocation[];
  public imgPath?: string;
  public requiredForProgression?: boolean;

  constructor(name: string,
              type: ItemType,
              locations: ItemLocation[],
              imgPath?: string,
              requiredForProgression?: boolean,) {
    this.name = name;
    this.type = type;
    this.locations = locations;
    this.imgPath = imgPath;
    this.requiredForProgression = requiredForProgression;
  }

  public minimumLevel(): number {
    if (this.locations.length === 0) {
      return 10;
    }
    
    const locationLevels = this.locations.map(location => location.requiredCardLevel);
    return Math.min(...locationLevels);
  }
}