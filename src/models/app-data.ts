import type { CodecFrequency } from "./codec-frequency";
import type { Item } from "./item";

export class AppData {
  public items: Item[];
  public codecFrequencies: CodecFrequency[];

  constructor(items: Item[], codecFrequencies: CodecFrequency[]) {
    this.items = items;
    this.codecFrequencies = codecFrequencies;
  }
}