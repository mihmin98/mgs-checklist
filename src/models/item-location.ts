export interface ItemLocationJSON {
  location: string;
  requiredCardLevel: number;
  comment?: string;
  imgPath?: string;
};

export class ItemLocation {
  public location: string;
  public requiredCardLevel: number;
  public comment?: string
  public imgPath?: string;

  constructor(location: string,
              requiredCardLevel: number,
              comment?: string,
              imgPath?: string) {
    this.location = location;
    this.requiredCardLevel = requiredCardLevel;
    this.comment = comment;
    this.imgPath = imgPath;
  }

  public static fromJSON(json: ItemLocationJSON): ItemLocation {
    return new ItemLocation(json.location, json.requiredCardLevel, json.comment, json.comment);
  }
}