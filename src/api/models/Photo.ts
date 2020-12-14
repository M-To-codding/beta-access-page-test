export class Photo {
  public large: string;
  public medium: string;
  public thumbnail: string;

  constructor(large: string, medium: string, thumbnail: string) {
    this.large = large;
    this.medium = medium;
    this.thumbnail = thumbnail;

  }
}