export interface Product {
  available: number;
  currency: 'zł';
  id: number;
  kategory: string;
  name: string;
  opinions: Array<any>;
  parameters: Array<string>;
  photo: string;
  price: number;
  promotion: number;
  rating: number;
  shortDesc: string;
  unit: 'items';
  variantsId: number | null;
}

export interface ProductVariant {
  id: number;
  productsId: Array<number>;
  shortDesc: Array<string>;
}

export interface FiltersParams {
  [key: string]: any;
}

export interface Category {
  id: number;
  nestedLvl: number;
  name: string;
  parentId: number;
  sub: Array<Category>;
}

export type ProductsSortValues = 'newest' | 'oldest' | 'a-z' | 'z-a' | 'most-bugs' | 'least-bugs' | 'most-members' | 'least-members';
