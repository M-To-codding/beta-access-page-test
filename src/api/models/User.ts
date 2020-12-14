import {Photo} from "./Photo";


export class User {
  public id: string;
  public name: string;
  public surname: string;
  public gender: string;
  public dateOfBirth: string;
  public photo?: Photo;
  public phone: string;
  public email: string;

  constructor(
    id: string,
    name: string,
    surname: string,
    gender: string,
    dateOfBirth: string,
    photo: Photo,
    phone: string,
    email: string,
  ) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.dateOfBirth = dateOfBirth;
    this.photo = new Photo(photo.large, photo.medium, photo.thumbnail);
    this.phone = phone;
    this.email = email;
  }
}
