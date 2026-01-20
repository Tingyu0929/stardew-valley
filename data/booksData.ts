import { BookItem, SkillBookItem } from '../types';

export const powerBooks: BookItem[] = [
  {
    name: '巷道美食',
    locationAndPrice: '鐵匠鋪與JoJa超市間的金垃圾桶中找到；書商 (第三年): 20,000金',
    effect: '垃圾桶中找到物品的機會增加',
    subsequentReadingEffect: '100 採集經驗',
  },
  {
    name: '動物圖鑑',
    locationAndPrice: '瑪妮 (第二年): 5,000金',
    effect: '瑪妮不在時也能進入她的商店',
    subsequentReadingEffect: '不適用',
  },
  {
    name: '捕蟹的藝術',
    locationAndPrice: '魷魚節銥級獎勵；書商 (第三年): 20,000金',
    effect: '蟹籠有25%機會雙倍收穫',
    subsequentReadingEffect: '100 釣魚經驗',
  },
  {
    name: '神秘之書',
    locationAndPrice: '從神秘盒子或金色神秘盒子中找到',
    effect: '找到神秘盒子的機會略微增加',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '鑽石獵人',
    locationAndPrice: '火山地牢的矮人: 10顆鑽石',
    effect: '用手採礦時，所有石頭都有機會掉落鑽石',
    subsequentReadingEffect: '100 採礦經驗',
  },
  {
    name: '矮人安全手冊',
    locationAndPrice: '矮人: 4,000金；書商 (第三年): 20,000金',
    effect: '炸彈對你造成的傷害減少20%',
    subsequentReadingEffect: '100 採礦經驗',
  },
  {
    name: '友誼101',
    locationAndPrice: '劉易斯鎮長家機器中的獎品；書商 (第三年): 20,000金',
    effect: '友誼增長增加10%',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '馬: 這本書',
    locationAndPrice: '書商: 25,000金',
    effect: '騎馬時速度增加+0.5',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '敏捷與堅韌的傑克', // Jack Be Nimble, Jack Be Thick - 意譯
    locationAndPrice: '在文物點找到；書商 (第三年): 20,000金',
    effect: '獲得+1防禦',
    subsequentReadingEffect: '100 戰鬥經驗',
  },
  {
    name: '海洋寶石',
    locationAndPrice: '釣魚寶藏的獎勵；書商 (第三年): 20,000金',
    effect: '釣魚寶箱有約2%機會產出魚卵',
    subsequentReadingEffect: '100 釣魚經驗',
  },
  {
    name: '繪製洞穴系統圖',
    locationAndPrice: '擊殺1000隻怪物後在冒險家公會後面的箱子中找到；書商 (第三年): 20,000金',
    effect: '馬龍的物品找回服務可獲得50%折扣',
    subsequentReadingEffect: '100 戰鬥經驗',
  },
  {
    name: '怪物圖鑑',
    locationAndPrice: '從擊殺的怪物身上掉落；書商 (第三年): 20,000金',
    effect: '怪物有小機率掉落雙倍戰利品',
    subsequentReadingEffect: '100 戰鬥經驗',
  },
  {
    name: '滑腳老手', // Ol' Slitherlegs - 意譯
    locationAndPrice: '書商: 25,000金',
    effect: '穿過作物時的速度懲罰減少2/3',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '價格目錄',
    locationAndPrice: '書商: 3,000金',
    effect: '你現在可以看到物品價值',
    subsequentReadingEffect: '不適用',
  },
  {
    name: '浣熊日記',
    locationAndPrice: '第二個浣熊任務獎勵；在浣熊商店用999纖維交易；書商 (第三年): 20,000金',
    effect: '雜草有4%機會產出混合種子',
    subsequentReadingEffect: '100 採集經驗',
  },
  {
    name: '寶藏鑑定指南',
    locationAndPrice: '在文物寶藏中找到；書商 (第三年): 20,000金',
    effect: '文物出售價格增加三倍',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '風之道的秘密, 上',
    locationAndPrice: '書商: 15,000金',
    effect: '玩家移動速度增加+0.25',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '風之道的秘密, 下',
    locationAndPrice: '書商: 35,000金 (獲得上篇後)',
    effect: '玩家移動速度增加+0.25',
    subsequentReadingEffect: '各項技能20經驗',
  },
  {
    name: '伍迪的秘密',
    locationAndPrice: '砍伐樹木時掉落；書商 (第三年): 20,000金',
    effect: '砍伐的樹木有5%機會產出雙倍木材',
    subsequentReadingEffect: '100 採集經驗',
  },
];

export const skillBooks: SkillBookItem[] = [
  {
    name: '魚餌與浮標',
    locationAndPrice: '書商：5,000-10,000金；從神秘盒子和金色神秘盒子中找到；在文物點和釣魚寶箱中找到；搖晃/砍伐種植的樹木獲得；礦井中怪物/箱子掉落；劉易斯獎品機器中的獎品；旅行商人隨機出售',
    effect: '250 釣魚經驗',
  },
  {
    name: '星辰之書',
    locationAndPrice: '書商：15,000金；完成第五個浣熊任務後可能的獎勵；從神秘盒子和金色神秘盒子中找到',
    effect: '1,125 精通點數 (每項250點，農業125點)',
  },
  {
    name: '戰鬥季刊',
    locationAndPrice: '書商：5,000-10,000金；從神秘盒子和金色神秘盒子中找到；在文物點和釣魚寶箱中找到；搖晃/砍伐種植的樹木獲得；礦井中怪物/箱子掉落；劉易斯獎品機器中的獎品；旅行商人隨機出售',
    effect: '250 戰鬥經驗',
  },
  {
    name: '採礦月刊',
    locationAndPrice: '書商：5,000-10,000金；從神秘盒子和金色神秘盒子中找到；在文物點和釣魚寶箱中找到；搖晃/砍伐種植的樹木獲得；礦井中怪物/箱子掉落；劉易斯獎品機器中的獎品；旅行商人隨機出售',
    effect: '250 採礦經驗',
  },
  {
    name: '醬料女王食譜',
    locationAndPrice: '書商：50,000金 (獲得100個金核桃後)',
    effect: '學習你尚未學會的任何醬料女王食譜',
  },
  {
    name: '星露谷年鑑',
    locationAndPrice: '書商：5,000-10,000金；從神秘盒子和金色神秘盒子中找到；在文物點和釣魚寶箱中找到；搖晃/砍伐種植的樹木獲得；礦井中怪物/箱子掉落；劉易斯獎品機器中的獎品；旅行商人隨機出售',
    effect: '250 農業經驗',
  },
  {
    name: '伐木工週刊',
    locationAndPrice: '書商：5,000-10,000金；花布蛋商人：100個花布蛋；從神秘盒子和金色神秘盒子中找到；在文物點和釣魚寶箱中找到；搖晃/砍伐種植的樹木獲得；礦井中怪物/箱子掉落；劉易斯獎品機器中的獎品；旅行商人隨機出售',
    effect: '250 採集經驗',
  },
];