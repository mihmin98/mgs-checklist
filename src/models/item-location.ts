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
}