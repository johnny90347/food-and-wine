export interface FoodList {
  Type: string;
  FoodInfo: FoodInfo[];
}

export interface FoodInfo {
  Recommend: boolean,
  Name: string;
  Price: number;
  Taste?: string;
}
