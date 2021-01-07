import { FoodList } from './../core/model/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  /** 有不同調味的菜單 */
  public foodListPartOne: FoodList[] = [
    {
      Type: "雞(2串)",
      FoodInfo: [
        {
          Recommend: true,
          Name: "去骨雞腿肉",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "塔塔醬里肌肉",
          Price: 100,
          Taste: "鹽",
        },
        {
          Recommend: false,
          Name: "明太子里肌肉",
          Price: 120,
          Taste: "鹽",
        },
        {
          Recommend: true,
          Name: "雞皮",
          Price: 80,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "雞肝",
          Price: 70,
          Taste: "醬",
        },
        {
          Recommend: false,
          Name: "雞翅",
          Price: 100,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "雞三角軟骨",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: true,
          Name: "七里香",
          Price: 100,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "雞心+雞元",
          Price: 100,
          Taste: "醬",
        },
      ]

    },
    {
      Type: "豬(2串)",
      FoodInfo: [
        {
          Recommend: false,
          Name: "麻糬豬肉捲",
          Price: 140,
          Taste: "醬",
        },
        {
          Recommend: false,
          Name: "韓式泡菜豬",
          Price: 130,
          Taste: "醬",
        },
        {
          Recommend: true,
          Name: "松阪豬肉",
          Price: 140,
          Taste: "鹽·醬",
        },
        {
          Recommend: true,
          Name: "上等豬五花",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "特製大腸頭",
          Price: 120,
          Taste: "醬",
        },
        {
          Recommend: true,
          Name: "培根蘆筍捲",
          Price: 100,
          Taste: "鹽",
        },
        {
          Recommend: false,
          Name: "培根番茄捲",
          Price: 100,
          Taste: "鹽",
        },
        {
          Recommend: false,
          Name: "培根金針菇捲",
          Price: 100,
          Taste: "鹽",
        },
      ]
    },
    {
      Type: "牛",
      FoodInfo: [
        {
          Recommend: false,
          Name: "板腱牛排",
          Price: 160,
          Taste: "鹽·醬",
        },
        {
          Recommend: true,
          Name: "牛肋條",
          Price: 180,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "牛板腱蘿蔔酸桔醋",
          Price: 180,
          Taste: "醬",
        },
      ]
    },
    {
      Type: "海鮮",
      FoodInfo: [
        {
          Recommend: false,
          Name: "鹽烤鮭魚頭",
          Price: 380,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "鹽烤中卷",
          Price: 240,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "鹽烤鮭魚肚",
          Price: 140,
          Taste: "鹽·醬",
        },
        {
          Recommend: true,
          Name: "鯖魚",
          Price: 180,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "秋刀魚",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: true,
          Name: "竹莢魚一夜乾",
          Price: 180,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "鹽烤鯛魚下巴",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "烤干貝(兩串)",
          Price: 180,
          Taste: "鹽·醬",
        },
      ]
    },
    {
      Type: "酒餚",
      FoodInfo: [
        {
          Recommend: false,
          Name: "去骨雞腿肉",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "去骨雞腿肉",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "去骨雞腿肉",
          Price: 120,
          Taste: "鹽·醬",
        },
        {
          Recommend: false,
          Name: "去骨雞腿肉",
          Price: 120,
          Taste: "鹽·醬",
        },
      ]
    }
  ]


  /** 單一調味的菜單 */
  public foodListPartTwo: FoodList[] = [
    {
      Type: "野菜",
      FoodInfo: [
        {
          Recommend: false,
          Name: "日式山藥",
          Price: 150,
        },
        {
          Recommend: false,
          Name: "烤蘆筍",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "香菇",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "杏鮑菇",
          Price: 70,
        },
        {
          Recommend: false,
          Name: "烤蔥段",
          Price: 70,
        },
        {
          Recommend: true,
          Name: "烤大蒜",
          Price: 70,
        },
        {
          Recommend: true,
          Name: "明太子山藥",
          Price: 160,
        },
        {
          Recommend: false,
          Name: "起司洋蔥",
          Price: 90,
        },
        {
          Recommend: false,
          Name: "玉米筍",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "四季豆",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "起司櫛瓜",
          Price: 120,
        },
        {
          Recommend: false,
          Name: "烤筊白筍",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "烤青椒",
          Price: 80,
        },
      ]
    },
    {
      Type: "炒物",
      FoodInfo: [
        {
          Recommend: false,
          Name: "培根炒高麗菜",
          Price: 150,
        },
        {
          Recommend: true,
          Name: "日式炒野蔬",
          Price: 180,
        },
        {
          Recommend: true,
          Name: "明太子中卷",
          Price: 320,
        },
        {
          Recommend: false,
          Name: "韭菜炒雞肝",
          Price: 160,
        },
        {
          Recommend: false,
          Name: "鐵板泡菜豬肉",
          Price: 200,
        },
      ]
    },
    {
      Type: "特製雞(1串)",
      FoodInfo: [
        {
          Recommend: true,
          Name: "煎蛋雞肉串",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "月見雞肉串",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "起司雞肉串",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "韓式泡菜雞肉串",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "蘿蔔酸桔醋雞肉串",
          Price: 80,
        },
        {
          Recommend: true,
          Name: "明太子雞肉串",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "大阪燒雞肉串",
          Price: 80,
        },
      ]
    },
    {
      Type: "沙拉",
      FoodInfo: [
        {
          Recommend: false,
          Name: "山藥冷豆腐",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "胡麻醬和風沙拉",
          Price: 100,
        },
        {
          Recommend: true,
          Name: "味噌小黃瓜",
          Price: 120,
        },
        {
          Recommend: false,
          Name: "胡麻山藥",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "麻辣黃瓜",
          Price: 100,
        },
        {
          Recommend: true,
          Name: "雞肉味噌拌豆芽",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "豆腐沙拉",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "和風洋蔥",
          Price: 60,
        },
      ]
    },
    {
      Type: "串揚",
      FoodInfo: [
        {
          Recommend: false,
          Name: "板腱牛排",
          Price: 160,
          Taste: "鹽·醬",
        },
      ]
    },
  ]






  public getFoodListPartOne(): FoodList[] {
    return this.foodListPartOne;
  }
}
