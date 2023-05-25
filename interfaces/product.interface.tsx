export interface IProduct {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  image: string;
  description: string;
  link: string;
  price: number;
  credit: number;
  oldPrice: number;
  characteristics: IProductCharacteristic[];
  advantages?: string;
  initialRating: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  html: string;
  blog: IBlog;
  companyId: string;
  clicks: number;
  reviews: IReview[];
  reviewCount: number;
  reviewAvg?: number;
  disadvantages: string;
}

export interface IProductCharacteristic {
  name: string;
  value: string;
}

export interface IBlog {
  text: string;
  _id: string;
  bigImage?: string;
}

export interface IReview {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  productId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
