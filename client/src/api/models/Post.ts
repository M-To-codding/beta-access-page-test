export class Post implements IPost {
  public id: string;
  public title: string;
  public description: string;
  public gallery: Array<string>;
  public highlighted: boolean;
  public author: string;
  public dateCreated: string;
  public categories: Array<string>;

  constructor(id: string, title: string,
              description: string, gallery: Array<string>,
              highlighted: boolean, author: string, dateCreated: string,
              categories: Array<string>) {

    this.id = id;
    this.title = title;
    this.description = description;
    this.gallery = gallery;
    this.highlighted = highlighted;
    this.author = author;
    this.dateCreated = dateCreated;
    this.categories = categories;
  }

}