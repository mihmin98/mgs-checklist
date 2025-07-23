export interface CodecFrequencyJSON {
  name: string;
  frequency: string;
  imgPath?: string;
}

export class CodecFrequency {
  public name: string;
  public frequency: string;
  public imgPath?: string;

  constructor(name: string, frequency: string, imgPath?: string) {
    this.name = name;
    this.frequency = frequency;
    this.imgPath = imgPath;
  }

  public static fromJSON(json: CodecFrequencyJSON): CodecFrequency {
    return new CodecFrequency(json.name, json.frequency, json.imgPath);
  }
}