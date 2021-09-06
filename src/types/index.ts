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
