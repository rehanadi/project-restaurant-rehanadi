export interface Menu {
  id: number;
  foodName: string;
  price: number;
  type: 'food' | 'drink';
  image?: string;
}