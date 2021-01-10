export class Product implements IProduct {
  public id: string;
  public title: string;
  public description: string;
  public gallery: Array<string>;
  public isBestPrice: boolean;
  public isNew: boolean;
  public rate: number;
  public dateCreated: string;

  constructor (id: string, title: string,
              description: string, gallery: Array<string>,
              isBestPrice: boolean, isNew: boolean,
              rate: number,
              dateCreated: string) {

    this.id = id;
    this.title = title;
    this.description = description;
    this.gallery = gallery;
    this.isBestPrice = isBestPrice;
    this.isNew = isNew;
    this.rate = rate;
    this.dateCreated = dateCreated;
  }

}