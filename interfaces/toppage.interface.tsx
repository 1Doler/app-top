export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface ITopPage {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: TopLevelCategory;
  advantages: IAdvantage[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  hh: IHhData;
  qas: any[];
  addresses: any[];
  categoryOn: string;
  blog: IBlog;
  sravnikus: ISravnikus;
  learningclub: ILearningclub;
}

export interface IAdvantage {
  title: string;
  description: string;
  _id: string;
}

export interface IHhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: string;
  _id: string;
}

export interface IBlog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface ISravnikus {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}

export interface ILearningclub {
  metaTitle: string;
  metaDescription: string;
  qas: any[];
  _id: string;
}
