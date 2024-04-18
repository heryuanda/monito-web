export interface Products {
  name: string;
  genre?: string;
  age?: number;
  ageUnit?: string;
  price: number;
  image: string;
  type?: string;
  weight?: number | null;
  free?: string;
}

export interface Articles {
  title: string;
  label: string;
  content: string;
  image: string;
}

export interface ProductAttribute {
  label: string;
  key: string;
}
