import { BundleData } from '../types';

export const craftsRoomBundles: BundleData[] = [
  {
    name: '春季採集收集包',
    requirements: [
      { name: '野生辣根', source: '春季採集' },
      { name: '水仙花', source: '春季採集, 花舞節在皮埃爾處購買' },
      { name: '韭蔥', source: '春季採集' },
      { name: '蒲公英', source: '春季採集, 花舞節在皮埃爾處購買' },
    ],
    rewards: ['春季種子 (30)'],
  },
  {
    name: '夏季採集收集包',
    requirements: [
      { name: '葡萄', source: '夏季採集, 秋季種植' },
      { name: '香料莓', source: '夏季採集, 農場洞穴 (水果選項)' },
      { name: '香豌豆', source: '夏季採集' },
    ],
    rewards: ['夏季種子 (30)'],
  },
  {
    name: '秋季採集收集包',
    requirements: [
      { name: '普通蘑菇', source: '秋季採集, 秘密森林春/秋季採集, 農場洞穴 (蘑菇選項), 樹液採集蘑菇樹' },
      { name: '野生梅子', source: '秋季採集, 農場洞穴 (果蝠選項)' },
      { name: '榛子', source: '秋季採集' },
      { name: '黑莓', source: '秋季採集, 農場洞穴 (果蝠選項)' },
    ],
    rewards: ['秋季種子 (30)'],
  },
  {
    name: '冬季採集收集包',
    requirements: [
      { name: '冬季根', source: '翻土/文物點, 藍色史萊姆掉落 (41-79層)' },
      { name: '水晶果', source: '冬季採集, 塵精掉落 (41-79層)' },
      { name: '雪山藥', source: '翻土/文物點' },
      { name: '番紅花', source: '冬季採集' },
    ],
    rewards: ['冬季種子 (30)'],
  },
  {
    name: '建築收集包',
    requirements: [
      { name: '木材', quantity: '99', source: '砍樹/樹枝' },
      { name: '木材', quantity: '99', source: '砍樹/樹枝' },
      { name: '石頭', quantity: '99', source: '砸碎石頭' },
      { name: '硬木', quantity: '10', source: '用升級斧頭砍伐大樹樁/圓木, 礦井中砸碎箱子, 紅木樹' },
    ],
    rewards: ['木炭窯 (1)'],
  },
  {
    name: '異國採集收集包',
    note: '(9種中任選5種完成)',
    requirements: [
      { name: '椰子', source: '沙漠採集, 姜島採集' },
      { name: '仙人掌果實', source: '沙漠採集' },
      { name: '洞穴蘿蔔', source: '礦井, 砸碎箱子/翻土' },
      { name: '紅蘑菇', source: '礦井採集, 秘密森林夏/秋季採集, 農場洞穴 (蘑菇選項), 樹液採集蘑菇樹' },
      { name: '紫蘑菇', source: '礦井, 農場洞穴 (蘑菇選項), 森林農場地圖秋季採集' },
      { name: '楓糖漿', source: '樹液採集楓樹' },
      { name: '橡樹脂', source: '樹液採集橡樹' },
      { name: '松焦油', source: '樹液採集松樹' },
      { name: '羊肚菌', source: '秘密森林春季採集, 農場洞穴 (蘑菇選項)' },
    ],
    rewards: ['秋日豐收 (5)'],
  },
];

export const pantryBundles: BundleData[] = [
  {
    name: '春季作物收集包',
    requirements: [
      { name: '防風草', source: '春季作物' },
      { name: '青豆', source: '春季作物' },
      { name: '花椰菜', source: '春季作物' },
      { name: '馬鈴薯', source: '春季作物' },
    ],
    rewards: ['速生肥 (20)'],
  },
  {
    name: '夏季作物收集包',
    requirements: [
      { name: '番茄', source: '夏季作物' },
      { name: '辣椒', source: '夏季作物' },
      { name: '藍莓', source: '夏季作物' },
      { name: '甜瓜', source: '夏季作物' },
    ],
    rewards: ['品質灑水器 (1)'],
  },
  {
    name: '秋季作物收集包',
    requirements: [
      { name: '玉米', source: '夏季/秋季作物' },
      { name: '茄子', source: '秋季作物' },
      { name: '南瓜', source: '秋季作物' },
      { name: '山藥', source: '秋季作物' },
    ],
    rewards: ['蜂箱 (1)'],
  },
  {
    name: '品質作物收集包',
    note: '(需要3種)',
    requirements: [
      { name: '防風草', quantity: '5', quality: '金色品質', source: '春季作物' },
      { name: '甜瓜', quantity: '5', quality: '金色品質', source: '夏季作物' },
      { name: '南瓜', quantity: '5', quality: '金色品質', source: '秋季作物' },
      { name: '玉米', quantity: '5', quality: '金色品質', source: '夏季/秋季作物' },
    ],
    rewards: ['醃製罐 (1)'],
  },
  {
    name: '動物收集包',
    note: '(6種中任選5種完成)',
    requirements: [
      { name: '大牛奶', source: '牛' },
      { name: '大棕蛋', source: '雞' },
      { name: '大蛋', source: '雞' },
      { name: '大山羊奶', source: '山羊' },
      { name: '羊毛', source: '綿羊, 兔子' },
      { name: '鴨蛋', source: '鴨' },
    ],
    rewards: ['起司壓製機 (1)'],
  },
  {
    name: '工匠收集包',
    note: '(12種中任選6種完成)',
    requirements: [
      { name: '松露油', source: '用製油機將松露製成' },
      { name: '布料', source: '織布機, 回收濕報紙' },
      { name: '山羊起司', source: '起司壓製機' },
      { name: '起司', source: '起司壓製機' },
      { name: '蜂蜜', source: '蜂箱' },
      { name: '果凍', source: '醃製罐' },
      { name: '蘋果', source: '蘋果樹 (秋季), 農場洞穴 (果蝠選項)' },
      { name: '杏子', source: '杏子樹 (春季), 農場洞穴 (果蝠選項)' },
      { name: '橘子', source: '橘子樹 (夏季), 農場洞穴 (果蝠選項)' },
      { name: '桃子', source: '桃子樹 (夏季), 農場洞穴 (果蝠選項)' },
      { name: '石榴', source: '石榴樹 (秋季), 農場洞穴 (果蝠選項)' },
      { name: '櫻桃', source: '櫻桃樹 (春季), 農場洞穴 (果蝠選項)' },
    ],
    rewards: ['釀酒桶 (1)'],
  },
];

export const fishTankBundles: BundleData[] = [
  {
    name: '河魚收集包',
    requirements: [
      { name: '太陽魚', source: '河流, 早上6點-晚上7點 (春/夏季晴天), 河邊/荒野農場池塘 (雨天)' },
      { name: '鯰魚', source: '河流與秘密森林池塘 (春/秋季雨天)' },
      { name: '美國鯡', source: '河流, 早上9點-凌晨2點 (春/夏/秋季雨天)' },
      { name: '虎紋鱒魚', source: '河流, 早上6點-晚上7點 (秋/冬季)' },
    ],
    rewards: ['豪華魚餌 (30)'],
  },
  {
    name: '湖魚收集包',
    requirements: [
      { name: '大嘴鱸魚', source: '山上湖泊, 早上6點-晚上7點' },
      { name: '鯉魚', source: '秘密森林, 下水道, 變種蟲巢穴, 煤礦森林池塘和山上湖泊 (春/夏/秋季)' },
      { name: '牛頭魚', source: '山上湖泊' },
      { name: '鱘魚', source: '山上湖泊, 早上6點-晚上7點 (夏季/冬季)' },
    ],
    rewards: ['裝飾浮標 (1)'],
  },
  {
    name: '海魚收集包',
    requirements: [
      { name: '沙丁魚', source: '海洋, 早上6點-晚上7點 (春/秋/冬季)' },
      { name: '鮪魚', source: '海洋, 早上6點-晚上7點 (夏季/冬季)' },
      { name: '紅鯛魚', source: '海洋, 早上6點-晚上7點 (夏/秋季雨天)' },
      { name: '羅非魚', source: '海洋, 早上6點-下午2點 (夏/秋季)' },
    ],
    rewards: ['傳送圖騰: 海灘 (5)'],
  },
  {
    name: '夜釣收集包',
    requirements: [
      { name: '白眼魚', source: '河流/湖泊/森林池塘, 中午12點-凌晨2點 (秋季雨天)' },
      { name: '鯛魚', source: '河流, 下午6點-凌晨2點' },
      { name: '鰻魚', source: '海洋, 下午4點-凌晨2點 (春/秋季雨天)' },
    ],
    rewards: ['發光戒指 (1)'],
  },
  {
    name: '蟹籠收集包',
    note: '(10種中任選5種完成)',
    requirements: [
      { name: '龍蝦', source: '在蟹籠中捕獲' },
      { name: '小龍蝦', source: '在蟹籠中捕獲' },
      { name: '螃蟹', source: '在蟹籠中捕獲, 從岩石蟹/熔岩蟹掉落' },
      { name: '鳥蛤', source: '在蟹籠中捕獲, 海灘採集' },
      { name: '淡菜', source: '在蟹籠中捕獲, 海灘採集' },
      { name: '蝦', source: '在蟹籠中捕獲' },
      { name: '蝸牛', source: '在蟹籠中捕獲' },
      { name: '笠螺', source: '在蟹籠中捕獲' },
      { name: '牡蠣', source: '在蟹籠中捕獲, 海灘採集' },
      { name: '蛤蜊', source: '在蟹籠中捕獲, 海灘採集' },
    ],
    rewards: ['蟹籠 (3)'],
  },
  {
    name: '特殊魚類收集包',
    requirements: [
      { name: '河豚', source: '海洋, 中午12點-下午4點 (夏季晴天)' },
      { name: '幽靈魚', source: '礦井20 & 60層的池塘, 從幽靈掉落' },
      { name: '沙魚', source: '沙漠池塘, 早上6點-晚上8點' },
      { name: '木躍魚', source: '秘密森林, 森林農場' },
    ],
    rewards: ['海之美食 (5)'],
  },
];

export const bulletinBoardBundles: BundleData[] = [
  {
    name: '廚師收集包',
    requirements: [
      { name: '楓糖漿', source: '樹液採集楓樹' },
      { name: '蕨菜', source: '秘密森林夏季採集' },
      { name: '松露', source: '豬' },
      { name: '罌粟花', source: '夏季作物' },
      { name: '壽司卷', source: '烹飪 (食譜來自醬料女王，酒館)' },
      { name: '煎蛋', source: '烹飪' },
    ],
    rewards: ['粉紅蛋糕 (3)'],
  },
  {
    name: '染色收集包',
    requirements: [
      { name: '紅蘑菇', source: '礦井採集, 秘密森林夏/秋季採集, 農場洞穴 (蘑菇選項), 樹液採集蘑菇樹' },
      { name: '海膽', source: '海灘採集' },
      { name: '向日葵', source: '夏季/秋季作物' },
      { name: '鴨毛', source: '鴨' },
      { name: '海藍寶石', source: '礦井中的海藍寶石礦點' },
      { name: '紅包菜', source: '夏季作物' },
    ],
    rewards: ['種子製造機 (1)'],
  },
  {
    name: '田野研究收集包',
    requirements: [
      { name: '紫蘑菇', source: '礦井採集, 農場洞穴 (蘑菇選項), 森林農場地圖秋季採集' },
      { name: '鸚鵡螺殼', source: '海灘採集 (冬季)' },
      { name: '胖頭魚', source: '山上湖泊與河流' },
      { name: '冰凍晶洞', source: '礦井 40-79層' },
    ],
    rewards: ['回收機 (1)'],
  },
  {
    name: '飼料收集包',
    requirements: [
      { name: '小麥', quantity: '10', source: '夏季/秋季作物' },
      { name: '乾草', quantity: '10', source: '瑪妮牧場購買, 用鐮刀收割草, 擁有雞舍或穀倉後從乾草料斗中取出' },
      { name: '蘋果', quantity: '3', source: '秋季果樹, 農場洞穴 (果蝠選項)' },
    ],
    rewards: ['加熱器 (1)'],
  },
  {
    name: '附魔師收集包',
    requirements: [
      { name: '橡樹脂', source: '樹液採集橡樹' },
      { name: '酒', source: '釀酒桶' },
      { name: '兔腳', source: '兔子, 骷髏洞穴中的蛇掉落' },
      { name: '石榴', source: '秋季果樹, 農場洞穴 (果蝠選項)' },
    ],
    rewards: ['金錠 (5)'],
  },
];

export const vaultBundles: BundleData[] = [
  {
    name: '2,500金收集包',
    requirements: [
      { name: '購買', source: '2,500金' },
    ],
    rewards: ['巧克力蛋糕 (3)'],
  },
  {
    name: '5,000金收集包',
    requirements: [
      { name: '購買', source: '5,000金' },
    ],
    rewards: ['品質肥料 (30)'],
  },
  {
    name: '10,000金收集包',
    requirements: [
      { name: '購買', source: '10,000金' },
    ],
    rewards: ['避雷針 (1)'],
  },
  {
    name: '25,000金收集包',
    requirements: [
      { name: '購買', source: '25,000金' },
    ],
    rewards: ['晶石複製機 (1)'],
  },
];

export const boilerRoomBundles: BundleData[] = [
  {
    name: '鐵匠收集包',
    requirements: [
      { name: '銅錠', source: '熔煉銅礦石' },
      { name: '鐵錠', source: '熔煉鐵礦石, 製作「轉化 (鐵)」食譜' },
      { name: '金錠', source: '熔煉金礦石, 製作「轉化 (金)」食譜' },
    ],
    rewards: ['熔爐 (1)'],
  },
  {
    name: '地質學家收集包',
    requirements: [
      { name: '石英', source: '礦井/骷髏洞穴採集' },
      { name: '地晶', source: '礦井1-39層採集, 晶洞, 萬象晶洞, 礦井 (1-29層) 的地鼠掉落' },
      { name: '冷凍淚珠', source: '礦井40-79層採集, 冰凍晶洞, 萬象晶洞, 塵精掉落' },
      { name: '火山石英', source: '礦井80-120層採集, 岩漿晶洞, 萬象晶洞' },
    ],
    rewards: ['萬象晶洞 (5)'],
  },
  {
    name: '冒險家收集包',
    requirements: [
      { name: '史萊姆泥', quantity: '99', source: '從史萊姆掉落' },
      { name: '蝙蝠翅膀', quantity: '10', source: '從礦井中的蝙蝠掉落' },
      { name: '太陽精華', source: '從礦井中的幽靈、魷魚小子或金屬頭掉落, 從骷髏洞穴中的木乃伊掉落' },
      { name: '虛空精華', source: '從礦井中的陰影蠻族掉落, 從骷髏洞穴中的蛇掉落' },
    ],
    rewards: ['小型磁鐵戒指 (1)'],
  },
];

export const abandonedJojaMartBundles: BundleData[] = [
  {
    name: '遺失的收集包',
    requirements: [
      { name: '白銀+品質酒', source: '釀酒桶' },
      { name: '恐龍蛋黃醬', source: '蛋黃醬機' },
      { name: '棱晶碎片', source: '挖礦' },
      { name: '黃金+品質上古水果', source: '作物' },
      { name: '黃金+品質虛空鮭魚', source: '女巫沼澤釣魚' },
      { name: '魚子醬', source: '醃製罐' },
    ],
    rewards: [], // 此收集包主要獎勵是解鎖電影院，而非物品。
    note: '(6種中任選5種完成)'
  },
];