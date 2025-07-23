import { ItemLocation, type ItemLocationJSON } from "./item-location";
import type { ItemType } from "./item-type";

export interface ItemJSON {
  name: string;
  type: ItemType;
  requiredForProgression?: boolean;
  locations: ItemLocationJSON[];
  imgPath?: string;
};

export class Item {
  public name: string;
  public type: ItemType;
  public locations: ItemLocation[];
  public imgPath?: string;
  public requiredForProgression?: boolean;
  
  public minimumLevel: number;

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

    this.minimumLevel = this.computeMinimumLevel();
  }

  public static fromJSON(json: ItemJSON): Item {
    const locations = json.locations.map(locationJSON => ItemLocation.fromJSON(locationJSON));
    return new Item(json.name, json.type, locations, json.imgPath, json.requiredForProgression);
  }

  private computeMinimumLevel(): number {
    if (this.locations.length === 0) {
      return 10;
    }
    
    const locationLevels = this.locations.map(location => location.requiredCardLevel);
    return Math.min(...locationLevels);
  }
}