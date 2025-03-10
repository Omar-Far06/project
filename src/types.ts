export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
  description: string;
}