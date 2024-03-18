type Rating = {
  rate: number;
  count: number;
};

export class Product {
  private id: number;
  private title: string;
  private price: number;
  private description: string;
  private category: string;
  private image: string;
  private rating: Rating;

  constructor(
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
    this.rating = rating;
  }
}
