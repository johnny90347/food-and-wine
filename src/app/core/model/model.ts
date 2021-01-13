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

export interface WineList {
  Type: string;
  WineInfo: WineInfo[];
}

export interface WineInfo {
  Recommend: boolean,
  Name: string;
  Price: string; // 有瓶.壺,杯 就乾脆用文字
}
