import { Injectable } from '@angular/core';
import { FoodList, WineList } from '@core/model/model';

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
    },
    {
      Type: "飽食",
      FoodInfo: [
        {
          Recommend: false,
          Name: "白飯",
          Price: 20,
        },
        {
          Recommend: true,
          Name: "鮭魚烤飯糰",
          Price: 70,
        },
        {
          Recommend: false,
          Name: "明太子烤飯糰",
          Price: 70,
        },
        {
          Recommend: false,
          Name: "鮭魚茶泡飯",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "明太子茶泡飯",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "芝麻烏龍冷面",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "月見烏龍麵",
          Price: 100,
        },
        {
          Recommend: true,
          Name: "海鮮炒烏龍",
          Price: 180,
        },
        {
          Recommend: false,
          Name: "味噌豬肉炒烏龍",
          Price: 180,
        },
        {
          Recommend: false,
          Name: "明太子白醬烏龍麵",
          Price: 180,
        },
      ]
    },
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
          Name: "豬五花四季豆",
          Price: 140,
        },
        {
          Recommend: false,
          Name: "鮮干貝",
          Price: 180,
        },
        {
          Recommend: true,
          Name: "起司竹輪",
          Price: 120,
        },
        {
          Recommend: false,
          Name: "洋蔥",
          Price: 60,
        },
      ]
    },
    {
      Type: "揚物",
      FoodInfo: [
        {
          Recommend: false,
          Name: "日式炸豆腐",
          Price: 80,
        },
        {
          Recommend: false,
          Name: "酥炸龍田炸雞",
          Price: 180,
        },
        {
          Recommend: true,
          Name: "酥炸雞三角軟骨",
          Price: 160,
        },
        {
          Recommend: true,
          Name: "炸起司麻糬(甜)",
          Price: 140,
        },
        {
          Recommend: false,
          Name: "炸牛蒡絲",
          Price: 100,
        },
        {
          Recommend: false,
          Name: "味噌豆腐",
          Price: 100,
        },
      ]
    },
    {
      Type: "湯品",
      FoodInfo: [
        {
          Recommend: true,
          Name: "酒蒸蛤蠣湯",
          Price: 120,
        },
        {
          Recommend: false,
          Name: "魚骨味噌湯",
          Price: 60,
        },
      ]
    },
  ]

  /** 酒類的菜單-partOne */
  public wineListPartOne: WineList[] = [
    {
      Type: "日本酒",
      WineInfo: [
        {
          Recommend: false,
          Name: "獺祭45純米大吟釀",
          Price: '$1450/瓶',
        },
        {
          Recommend: false,
          Name: "獺祭三割九純米大吟釀",
          Price: '$2180/瓶',
        },
        {
          Recommend: false,
          Name: "獺祭二割三純米大吟釀",
          Price: '$3680/瓶',
        },
        {
          Recommend: false,
          Name: "霧峰初露純米吟釀",
          Price: '$1080/瓶',
        },
        {
          Recommend: false,
          Name: "耐燒",
          Price: '$120/杯、1300/瓶',
        },
        {
          Recommend: false,
          Name: "溫清酒",
          Price: '$120/壺',
        },
        {
          Recommend: false,
          Name: "冰清酒",
          Price: '$120/壺',
        },
      ]
    },
    {
      Type: "啤酒",
      WineInfo: [
        {
          Recommend: false,
          Name: "Heineken 海尼根生啤酒",
          Price: '$150/杯',
        },
        {
          Recommend: false,
          Name: "Suntory 三得利生啤酒",
          Price: '$150/杯',
        },
        {
          Recommend: false,
          Name: "台啤十八天生啤酒",
          Price: '$120/瓶',
        },
        {
          Recommend: false,
          Name: "台啤經典",
          Price: '$100/瓶',
        },
        {
          Recommend: false,
          Name: "金牌啤酒",
          Price: '$100/瓶',
        },
        {
          Recommend: false,
          Name: "Heineken 海尼根啤酒",
          Price: '$130/瓶',
        },
        {
          Recommend: false,
          Name: "Sapporo 北海道啤酒",
          Price: '$140/瓶',
        },
        {
          Recommend: false,
          Name: "Asahi 朝日啤酒",
          Price: '$140/瓶',
        },
      ]
    },
  ]

  /** 酒類菜單-partTwo */
  public wineListPartTwo: WineList[] = [
    {
      Type: "威士忌",
      WineInfo: [
        {
          Recommend: false,
          Name: "百富單一麥芽12年/思佩賽區/蘇格蘭",
          Price: '$1700/瓶',
        },
        {
          Recommend: false,
          Name: "拉弗格單一麥芽10年/艾雷島/蘇格蘭",
          Price: '$1400/瓶',
        },
        {
          Recommend: false,
          Name: "布什米爾黑樽威士忌/愛爾蘭",
          Price: '$1100/瓶',
        },
      ]
    },
    {
      Type: "葡萄酒",
      WineInfo: [
        {
          Recommend: false,
          Name: "義大利拿波里白皮諾白酒2018",
          Price: '$800/瓶',
        },
      ]
    },
    {
      Type: "特殊酒",
      WineInfo: [
        {
          Recommend: false,
          Name: "Choya 蝶矢 無添加本格梅酒",
          Price: '$120/壺',
        },
        {
          Recommend: false,
          Name: "Choya 蝶矢 梅酒",
          Price: '$180/壺',
        },
        {
          Recommend: false,
          Name: "Choya 蝶矢 柚子酒",
          Price: '$180/壺',
        },
        {
          Recommend: false,
          Name: "Highball",
          Price: '$120/杯',
        },
      ]
    },
    {
      Type: "無酒精飲料",
      WineInfo: [
        {
          Recommend: false,
          Name: "烏龍茶(冰)(無糖)",
          Price: '$50/杯',
        },
        {
          Recommend: false,
          Name: "可爾必思",
          Price: '$50/杯',
        },
        {
          Recommend: false,
          Name: "蘋果西打",
          Price: '$60/瓶',
        },
        {
          Recommend: false,
          Name: "雪碧",
          Price: '$50/瓶',
        },
        {
          Recommend: false,
          Name: "可樂",
          Price: '$50/瓶',
        },
      ]
    },
  ]

  /** 取得菜單一號 */
  public getFoodListPartOne(): FoodList[] {
    return this.foodListPartOne;
  }

  /** 取得菜單二號 */
  public getFoodListPartTwo(): FoodList[] {
    return this.foodListPartTwo;
  }

  /** 取得酒單一號 */
  public getWineListPartOne(): WineList[] {
    return this.wineListPartOne;
  }

  /** 取得酒單二號 */
  public getWineListPartTwo(): WineList[] {
    return this.wineListPartTwo;
  }
}
