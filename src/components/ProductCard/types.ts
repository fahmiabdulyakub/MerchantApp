export interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
  description: string;
  image: string;
}
