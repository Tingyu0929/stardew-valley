
import React from 'react';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Section } from './components/Section';
import { InfoBox, TipBox, WarningBox, CheatBox } from './components/InfoBox';
import { ResponsiveTable } from './components/ResponsiveTable';
import { Footer } from './components/Footer';
import { CropData, NPCData, Season, BookItem, SkillBookItem, BundleData, HatItem, TailoredClothingBase, TailoredHatRecipe, TailoredShirtRecipe, TailoredPantsRecipe, WeaponBase, SlingshotItem, SlingshotAmmo, BootItem, RingItem, ForgeGemEffect, CombatEnchantment, InnateEnchantment, ToolEnchantmentItem, CraftingItemBase, ArtisanGoodItem, DehydratedSmokedFoodItem, OtherIngredientItem, CookingRecipeItem, EdibleCraftable, DetailedCropData, FruitTreeData, UniquePlantData, FertilizerDetails, CropQualityRatio } from './types';
import { SEASON_COLORS } from './constants';
import { powerBooks, skillBooks } from './data/booksData';
import { craftsRoomBundles, pantryBundles, fishTankBundles, bulletinBoardBundles, vaultBundles, boilerRoomBundles, abandonedJojaMartBundles } from './data/bundlesData';
import { hats, tailoredHats, tailoredShirts, tailoredPants } from './data/clothingData';
import { swords, daggers, clubs, miscMeleeWeapons, slingshots, slingshotAmmunition, boots, rings, forgeGemEffects, combatEnchantments, innateEnchantments, toolEnchantments, combatThingsOfNote } from './data/combatData';
import { bombs, sprinklers, fences, artisanEquipment, fertilizersCrafting, seedsCrafting, decorFlooring, consumables, edibleCraftables, tackleBait, lighting, refiningEquipment, furniture, miscellaneousCrafting, artisanGoods, dehydratedSmokedFoods, otherIngredients, cookingRecipes } from './data/craftingCookingData';
import { springCropsDetailed, summerCropsDetailed, fallCropsDetailed, springFruitTrees, summerFruitTrees, fallFruitTrees, uniquePlants, fertilizerDetails, cropQualityRatios } from './data/cropsFruitTreesData';

const App: React.FC = () => {
  const navSections = [
    { id: 'intro', title: '📖 簡介' },
    { id: 'getting-started', title: '🎮 新手入門' },
    { id: 'map', title: '🗺️ 地圖指南' },
    { id: 'farming', title: '🌱 種植指南' },
    { id: 'characters', title: '👥 人物關係' },
    { id: 'birthdays', title: '🎂 生日日曆' },
    { id: 'seasons', title: '📅 四季活動' },
    { id: 'mining', title: '⛏️ 挖礦探險' },
    { id: 'fishing', title: '🎣 釣魚技巧' },
    { id: 'books', title: '📚 書籍與技能書' },
    { id: 'bundles', title: '🎁 社區中心收集包' },
    { id: 'clothing', title: '👕 服裝指南' },
    { id: 'combat-equipment', title: '⚔️ 戰鬥與裝備' },
    { id: 'crafting-cooking', title: '🛠️ 製作與烹飪' },
    { id: 'crops-fruit-trees', title: '🍎 作物與果樹' },
    { id: 'tips', title: '💡 進階技巧' },
    { id: 'cheats', title: '🎯 小秘技' },
    { id: 'summary', title: '🌟 總結建議' },
  ];

  const farmMaps = [
    ['標準農場', '最大可耕地面積，平坦寬敞', '🌟 新手強烈推薦'],
    ['河邊農場', '有河流，方便釣魚', '喜歡釣魚的玩家'],
    ['森林農場', '有採集物和硬木樁', '喜歡採集的玩家'],
    ['山頂農場', '有礦石生成點', '速通玩家'],
    ['荒野農場', '晚上有怪物出現', '喜歡戰鬥的玩家'],
    ['四角農場', '分為四個區域', '喜歡規劃的玩家'],
    ['海灘農場', '有海灘和海洋資源，但不能用灑水器', '旅遊型玩家'],
  ];

  const pelicanTownLocations = [
    ['皮埃爾雜貨店', '購買種子、食譜、背包升級', '週三～日 9:00-17:00（週日/三公休）'],
    ['JoJa超市', '購買種子和物品（較貴）', '每天 9:00-23:00'],
    ['鐵匠鋪', '升級工具、購買礦石', '週一～五 9:00-16:00'],
    ['診所', '治療、購買藥品', '每天 9:00-15:00'],
    ['木匠商店（羅賓）', '建造農場建築、購買家具', '週二～日 9:00-17:00'],
    ['星之果實酒館', '購買食物、玩遊戲', '每天 12:00-24:00'],
    ['海灘魚店（威利）', '購買魚竿、魚餌、升級魚竿', '每天 9:00-17:00'],
    ['博物館/圖書館', '捐贈文物和礦物', '每天 8:00-18:00'],
    ['鎮長家', '記錄本、公告板任務', '隨時'],
    ['社區中心', '完成收集包獲得獎勵', '每天 8:00-22:00'],
  ];

  const mountainLocations = [
    ['礦井', '挖礦、戰鬥怪物、收集資源（120層）'],
    ['冒險者公會', '購買武器和裝備、領取怪物獎勵'],
    ['木匠商店', '建造農場建築、購買材料'],
    ['山上湖泊', '釣魚、採集（傳說魚出沒地）'],
    ['採石場', '採集礦石和寶石'],
    ['鐵路', '季節性採集物品'],
  ];

  const forestLocations = [
    ['瑪妮牧場', '購買動物、動物用品、乾草'],
    ['萊納斯帳篷', 'NPC 萊納斯的住所'],
    ['巫師塔', '學習魔法、改變外觀'],
    ['旅行商人', '週五/日出現，販售稀有物品'],
    ['秘密森林', '需要鋼斧砍大木頭進入，有硬木'],
    ['下水道入口', '需要下水道鑰匙（捐贈60件文物）'],
  ];

  const beachLocations = [
    ['魚店（威利）', '購買魚竿、魚餌、漁具'],
    ['艾略特小屋', 'NPC 艾略特的住所'],
    ['碼頭', '釣魚、某些稀有魚出沒地'],
    ['潮池', '採集貝類、海膽、珊瑚'],
    ['美人魚橋', '雨天可購買美人魚項鍊（5000g）'],
  ];

  const desertLocations = [
    ['骷髏洞穴', '無限層礦洞，主要產銥礦石'],
    ['沙漠商人', '販售稀有種子、食譜'],
    ['賭場', '用遊戲幣兌換稀有物品'],
    ['三柱之謎', '放置彩虹碎片可獲得銀河劍'],
  ];

  const gingerIslandLocations = [
    ['火山地牢', '10層地牢，有獨特礦物和怪物'],
    ['姜島農場', '可以種植全季節作物'],
    ['海盜灣', '釣魚、尋寶'],
    ['核桃房間', '收集金核桃解鎖各種獎勵'],
  ];

  const quickTravelOptions = [
    ['礦車系統', '完成社區中心「礦車」收集包', '可快速前往礦井、巴士站、採石場'],
    ['回程魔杖', '完成社區中心或在巫師塔購買（2,000,000g）', '瞬間傳送回農場'],
    ['圖騰', '採集或製作', '傳送到特定地點（海灘、山區、農場、沙漠）'],
    ['馬', '在羅賓處建造馬廄（10,000g）', '增加30%移動速度'],
  ];

  const springCrops: CropData[] = [
    { name: '防風草', growthDays: '4 天', salePrice: '35g', seedPrice: '20g', recommendation: '⭐⭐⭐ 前期主力' },
    { name: '花椰菜', growthDays: '12 天', salePrice: '175g', seedPrice: '80g', recommendation: '⭐⭐⭐⭐ 前期賺錢' },
    { name: '馬鈴薯', growthDays: '6 天', salePrice: '80g', seedPrice: '50g', recommendation: '⭐⭐⭐⭐⭐ 性價比高' },
    { name: '草莓', growthDays: '8 天（可重複收割）', salePrice: '120g', seedPrice: '100g（春13日彩蛋節）', recommendation: '⭐⭐⭐⭐⭐ 超高收益' },
    { name: '大蔥', growthDays: '4 天', salePrice: '45g', seedPrice: '20g', recommendation: '⭐⭐' },
  ];

  const summerCrops: CropData[] = [
    { name: '藍莓', growthDays: '13 天（可重複收割，每4天一次）', characteristics: '每次收穫3顆，超高收益', recommendation: '⭐⭐⭐⭐⭐ 夏季首選' },
    { name: '甜瓜', growthDays: '12 天', characteristics: '單次高價', recommendation: '⭐⭐⭐⭐' },
    { name: '番茄', growthDays: '11 天（可重複收割）', characteristics: '可做料理', recommendation: '⭐⭐⭐' },
    { name: '辣椒', growthDays: '5 天（可重複收割）', characteristics: '每3天收穫一次', recommendation: '⭐⭐⭐⭐' },
    { name: '星之果實', growthDays: '13 天', characteristics: '增加最大能量', recommendation: '⭐⭐⭐ 種一顆體驗' },
  ];

  const fallCrops: CropData[] = [
    { name: '蔓越莓', growthDays: '7 天（可重複收割，每5天一次）', characteristics: '每次收穫2顆，極高收益', recommendation: '⭐⭐⭐⭐⭐ 秋季首選' },
    { name: '南瓜', growthDays: '13 天', characteristics: '有機會長成巨型南瓜', recommendation: '⭐⭐⭐⭐' },
    { name: '葡萄', growthDays: '10 天（可重複收割）', characteristics: '每3天收穫一次', recommendation: '⭐⭐⭐⭐' },
    { name: '茄子', growthDays: '5 天（可重複收割）', characteristics: '每5天收穫一次', recommendation: '⭐⭐⭐' },
  ];

  const specialCrops: CropData[] = [
    { name: '上古水果', growthDays: '28 天', season: '春夏秋', acquisition: '上古種子（挖掘或圖書館捐贈獎勵）', description: '28天成熟，超高價值，可做果酒' },
    { name: '甜寶石莓', growthDays: '24 天', season: '春夏秋', acquisition: '稀有種子（旅行商人，秋季購買）', description: '24天成熟，最高價格的作物' },
    { name: '咖啡豆', growthDays: '10 天（可重複收割）', season: '春夏', acquisition: '旅行商人或塵精掉落', description: '可做咖啡，增加移動速度' },
  ];

  const femaleMarriageCandidates: NPCData[] = [
    { name: '艾比蓋爾 (Abigail)', birthday: '秋13日', favoriteGifts: '紫水晶、巧克力蛋糕、南瓜布丁', characteristics: '喜歡冒險，會去礦井' },
    { name: '海莉 (Haley)', birthday: '春14日', favoriteGifts: '椰子、粉紅蛋糕、向日葵', characteristics: '外貌協會，喜歡攝影' },
    { name: '莉亞 (Leah)', birthday: '冬23日', favoriteGifts: '山羊起司、松露、石榴沙拉', characteristics: '藝術家，住在森林裡' },
    { name: '瑪魯 (Maru)', birthday: '夏10日', favoriteGifts: '花椰菜起司焗烤、草莓、鑽石', characteristics: '科學家，機械天才' },
    { name: '潘妮 (Penny)', birthday: '秋2日', favoriteGifts: '綠寶石、罌粟花、根菜拼盤', characteristics: '溫柔的老師，喜歡孩子' },
    { name: '艾蜜莉 (Emily)', birthday: '春27日', favoriteGifts: '海藍寶石、布料、羊毛', characteristics: '靈性主義者，裁縫師' },
  ];

  const maleMarriageCandidates: NPCData[] = [
    { name: '亞歷斯 (Alex)', birthday: '夏13日', favoriteGifts: '完全早餐、鮭魚晚餐', characteristics: '運動員，夢想成為職業選手' },
    { name: '艾略特 (Elliott)', birthday: '秋5日', favoriteGifts: '龍蝦、鴨毛、石榴', characteristics: '作家，住在海邊' },
    { name: '哈維 (Harvey)', birthday: '冬14日', favoriteGifts: '咖啡、醃漬品、松露油', characteristics: '醫生，穩重可靠' },
    { name: '山姆 (Sam)', birthday: '夏17日', favoriteGifts: '仙人掌果實、披薩、虎眼石', characteristics: '樂團成員，活潑開朗' },
    { name: '賽巴斯汀 (Sebastian)', birthday: '冬10日', favoriteGifts: '刺身、冷凍淚珠、南瓜湯', characteristics: '程式設計師，內向' },
    { name: '謝恩 (Shane)', birthday: '春20日', favoriteGifts: '披薩、啤酒、辣椒', characteristics: '超市員工，有憂鬱症' },
  ];

  const universalGifts = [
    ['寶石', '鑽石、翡翠、紅寶石等', '挖礦獲得'],
    ['食物', '巧克力蛋糕、粉紅蛋糕', '烹飪或購買'],
    ['花卉', '各種花（除了罌粟）', '季節採集或種植'],
    ['果實', '果樹的水果', '果樹收穫'],
  ];

  const springBirthdays = [
    ['春 4日（四）', '肯特 (Kent)', '❌', '烤魚、煎蛋捲'],
    ['春 7日（日）', '劉易斯 (Lewis)', '❌', '秋麒麟草、蔬菜雜燴'],
    ['春 10日（三）', '文森 (Vincent)', '❌', '粉紅蛋糕、葡萄'],
    ['春 13日（六）', '🎪 彩蛋節', '', '購買草莓種子的重要日子！'],
    ['春 14日（日）', '海莉 (Haley) 💑', '✅', '椰子、粉紅蛋糕、向日葵'],
    ['春 18日（四）', '潘姆 (Pam)', '❌', '仙人掌果實、防風草湯'],
    ['春 20日（六）', '謝恩 (Shane) 💑', '✅', '披薩、啤酒、辣椒'],
    ['春 24日（三）', '🌸 花舞節', '', '4顆心以上可邀請跳舞'],
    ['春 26日（五）', '皮埃爾 (Pierre)', '❌', '炸魷魚、炸鱔魚'],
    ['春 27日（六）', '艾蜜莉 (Emily) 💑', '✅', '海藍寶石、布料、羊毛'],
  ];

  const summerBirthdays = [
    ['夏 4日（四）', '賈斯 (Jas)', '❌', '粉紅蛋糕、梅子布丁'],
    ['夏 8日（一）', '格斯 (Gus)', '❌', '鑽石、橙子、熱帶咖哩'],
    ['夏 10日（三）', '瑪魯 (Maru) 💑', '✅', '花椰菜起司焗烤、草莓、鑽石'],
    ['夏 11日（四）', '🍲 魯奧派對', '', '帶高品質食材參加'],
    ['夏 13日（六）', '亞歷斯 (Alex) 💑', '✅', '完全早餐、鮭魚晚餐'],
    ['夏 17日（三）', '山姆 (Sam) 💑', '✅', '仙人掌果實、披薩、虎眼石'],
    ['夏 19日（五）', '德米特里厄斯 (Demetrius)', '❌', '草莓、豆類熱菜、冰淇淋'],
    ['夏 22日（一）', '矮人 (Dwarf)', '❌', '所有寶石'],
    ['夏 24日（三）', '威利 (Willy)', '❌', '鑽石、金錠、鱘魚'],
    ['夏 26日（五）', '里歐 (Leo)', '❌', '鴨毛、芒果、鸚鵡蛋'],
    ['夏 28日（日）', '🌊 月光水母舞', '', '22:00-24:00 浪漫活動'],
  ];

  const fallBirthdays = [
    ['秋 2日（二）', '潘妮 (Penny) 💑', '✅', '綠寶石、罌粟花、根菜拼盤'],
    ['秋 5日（五）', '艾略特 (Elliott) 💑', '✅', '龍蝦、鴨毛、石榴'],
    ['秋 11日（四）', '喬迪 (Jodi)', '❌', '巧克力蛋糕、煎餅、鑽石'],
    ['秋 13日（六）', '艾比蓋爾 (Abigail) 💑', '✅', '紫水晶、巧克力蛋糕、南瓜布丁'],
    ['秋 15日（一）', '珊迪 (Sandy)', '❌', '芒果黏飯、番茄義大利麵'],
    ['秋 16日（二）', '🎪 星露谷展覽會', '', '展示農產品，玩小遊戲'],
    ['秋 18日（四）', '瑪妮 (Marnie)', '❌', '南瓜派、鑽石'],
    ['秋 21日（日）', '羅賓 (Robin)', '❌', '桃子、山羊起司、西葫蘆'],
    ['秋 24日（三）', '喬治 (George)', '❌', '韭蔥、炒蘑菇'],
    ['秋 27日（六）', '👻 幽靈節', '', '迷宮和稀有物品'],
  ];

  const winterBirthdays = [
    ['冬 1日（一）', '克羅布斯 (Krobus)', '❌（可當室友）', '鑽石、虛空蛋、虛空美乃滋'],
    ['冬 3日（三）', '萊納斯 (Linus)', '❌', '椰子、仙人掌果實、雞魚'],
    ['冬 7日（日）', '卡洛琳 (Caroline)', '❌', '綠茶、熱帶咖哩、蔬菜馬德拉'],
    ['冬 8日（一）', '❄️ 冰雪祭典', '', '釣魚比賽'],
    ['冬 10日（三）', '賽巴斯汀 (Sebastian) 💑', '✅', '刺身、冷凍淚珠、南瓜湯'],
    ['冬 14日（日）', '哈維 (Harvey) 💑', '✅', '咖啡、醃漬品、松露油'],
    ['冬 15-17日', '🌃 冬季夜市', '', '17:00-24:00，連續3天'],
    ['冬 17日（三）', '巫師 (Wizard)', '❌', '紫蘑菇、太陽精華、虛空精華'],
    ['冬 20日（六）', '伊芙琳 (Evelyn)', '❌', '甜菜、巧克力蛋糕、鑽石'],
    ['冬 23日（二）', '莉亞 (Leah) 💑', '✅', '山羊起司、松露、石榴沙拉'],
    ['冬 25日（四）', '🎄 冬日盛宴', '', '交換禮物，送禮×5倍好感度'],
    ['冬 26日（五）', '柯林特 (Clint)', '❌', '海藍寶石、綠寶石、金錠'],
  ];

  const monthlyBirthdays = [
    ['春', '肯特(4)、劉易斯(7)、文森(10)', '海莉💑(14)、潘姆(18)、謝恩💑(20)', '皮埃爾(26)、艾蜜莉💑(27)'],
    ['夏', '賈斯(4)、格斯(8)、瑪魯💑(10)', '亞歷斯💑(13)、山姆💑(17)、德米特里厄斯(19)', '矮人(22)、威利(24)、里歐(26)'],
    ['秋', '潘妮💑(2)、艾略特💑(5)', '喬迪(11)、艾比蓋爾💑(13)、珊迪(15)、瑪妮(18)', '羅賓(21)、喬治(24)'],
    ['冬', '克羅布斯(1)、萊納斯(3)、卡洛琳(7)、賽巴斯汀💑(10)', '哈維💑(14)、巫師(17)、伊芙琳(20)', '莉亞💑(23)、柯林特(26)'],
  ];

  const shopHours = [
    ['皮埃爾雜貨店', '9:00-17:00', '週三、節日'],
    ['JoJa超市', '9:00-23:00', '無（完成社區中心後關閉）'],
    ['鐵匠鋪（柯林特）', '9:00-16:00', '週五、節日'],
    ['木匠商店（羅賓）', '9:00-17:00', '週二'],
    ['牧場（瑪妮）', '9:00-16:00', '週一、週二'],
    ['魚店（威利）', '9:00-17:00', '無'],
    ['診所（哈維）', '9:00-15:00', '無（冬16日後有時關閉）'],
    ['星之果實酒館', '12:00-24:00', '無'],
  ];

  const mineFloorDistribution = [
    ['1-40F', '銅礦石', '史萊姆、蝙蝠', '適合新手練級'],
    ['41-80F', '鐵礦石、金礦石', '幽靈、石魔像', '開始有挑戰性'],
    ['81-120F', '金礦石、鈦礦石', '木乃伊、惡魔', '高難度區域'],
  ];

  const weaponTypes = [
    ['劍', '快速攻擊，連擊', '⭐⭐⭐⭐⭐ 萬用'],
    ['大錘', '範圍攻擊，擊飛', '⭐⭐⭐⭐ 多怪時好用'],
    ['短劍', '攻速最快，範圍小', '⭐⭐⭐ 需要技巧'],
    ['彈弓', '遠程攻擊', '⭐⭐ 輔助用'],
  ];

  const usefulMinerals = [
    ['銅礦石', '初級工具、灑水器', '礦井 1-40F'],
    ['鐵礦石', '中級工具、農場設備', '礦井 20-80F'],
    ['金礦石', '高級工具、品質灑水器', '礦井 40-120F'],
    ['銥礦石', '銥製工具、銥灑水器', '骷髏洞穴 深層'],
    ['煤炭', '熔爐燃料、製作', '打怪、礦車、木炭窯'],
    ['石英', '製作、精煉', '礦井常見'],
  ];

  const fishingRodUpgrades = [
    ['訓練魚竿', '免費', '只能釣一般魚', '威利送的'],
    ['竹釣竿', '500g', '可使用魚餌', '釣魚等級2'],
    ['玻璃纖維魚竿', '1,800g', '可使用魚餌+漁具', '釣魚等級6'],
    ['銥金魚竿', '7,500g', '可使用魚餌+漁具，自動鉤魚', '釣魚等級10'],
  ];

  const springFish = [
    ['太陽魚', '河流', '6:00-19:00', '⭐ 簡單', '30g'],
    ['鯰魚', '河流（雨天）', '6:00-24:00', '⭐⭐⭐ 中等', '200g'],
    ['鱒魚', '河流', '6:00-19:00', '⭐⭐ 容易', '150g'],
    ['傳奇魚-傳說', '山上湖泊', '春季 雨天', '⭐⭐⭐⭐⭐ 極難', '5,000g'],
  ];

  const summerFish = [
    ['鮟鱇魚', '海洋', '6:00-19:00', '100g'],
    ['河豚', '海洋（晴天）', '12:00-16:00', '200g'],
    ['虹鱒魚', '河流（晴天）', '6:00-19:00', '65g'],
    ['章魚', '海洋', '6:00-13:00', '150g'],
  ];

  const fallFish = [
    ['鮭魚', '河流', '6:00-19:00', '75g'],
    ['鱸魚', '湖泊', '6:00-19:00', '100g'],
    ['鰻魚', '海洋（雨天）', '16:00-02:00', '85g'],
  ];

  const winterFish = [
    ['鱘魚', '山上湖泊', '6:00-19:00', '200g'],
    ['沙丁魚', '海洋', '6:00-19:00', '40g'],
    ['鮪魚', '海洋', '6:00-19:00', '100g'],
  ];

  const legendaryFish = [
    ['傳說', '春季', '山上湖泊', '雨天，釣魚等級10'],
    ['遠古魚', '秋季', '森林池塘', '釣魚等級10'],
    ['變種鯉魚', '夏季', '下水道', '有下水道鑰匙'],
    ['深海魚', '冬季', '海洋碼頭盡頭', '釣魚等級10'],
    ['冰柱魚', '冬季', '森林河流', '18:00-02:00'],
  ];

  const moneyMakingItems = [
    ['上古水果果酒', '2,310g'],
    ['星之果實果酒', '2,250g'],
    ['寶石甜莓果酒', '2,100g'],
    ['松露油', '1,065g'],
    ['金星起司', '420g'],
  ];

  const communityCenterVsJoja = [
    ['社區中心', '收集物品獻祭（免費）', '溫室、礦車、修復巴士等', '⭐⭐⭐⭐⭐ 大部分玩家推薦'],
    ['JoJa超市', '花錢購買（總計140,000g）', '相同設施', '⭐⭐ 適合速通或重複遊玩'],
  ];

  const toolUpgradePriority = [
    ['🔥 最高', '升級噴壺', '減少澆水時間'],
    ['🔥 最高', '購買背包升級', '增加庫存空間'],
    ['⭐ 高', '完成社區中心', '獲得溫室等重要設施'],
    ['⭐ 高', '製作灑水器', '自動澆水，解放勞動力'],
    ['✓ 中', '養殖動物', '穩定收入來源'],
    ['✓ 中', '建造加工設施', '提高產品價值'],
    ['○ 低', '農場裝飾', '美觀但不急'],
  ];

  const clothingThingsOfNote: string[] = [
    "服裝指南包含：帽子、購買的衣服、裁縫的衣服。",
    "服裝可以在艾蜜莉和海莉家的裁縫機上製作，使用進料口的布料和紡錘上的另一件物品。稜鏡服裝是隨機的，所以一個稜晶碎片會產生五種稜鏡物品中的任何一種。"
  ];

  const craftingCookingNotes: string[] = [
    "製作和烹飪是星露谷物語中非常重要的技能，可以幫助你提升農場效率、獲取資源、恢復能量和生命值，甚至賺取大量金錢。",
    "許多物品可以自己製作而非購買，這能有效節省金錢。",
    "烹飪的食物不僅能恢復能量和生命值，某些還能提供暫時的增益效果。"
  ];

  const cropsAndFruitTreesNotes: string[] = [
    "作物與果樹指南包含：春季作物、夏季作物、秋季作物、果樹、特殊植物、肥料、作物品質比率。",
    "每種作物都有其獨特的生長週期、季節限制和收益。合理規劃種植能最大化農場利潤。",
    "果樹雖然投入較高，但能長期提供穩定收益，且不需要每天澆水。",
    "肥料能顯著影響作物的生長速度和最終品質，進而影響其售價。",
    "了解作物品質比率能幫助玩家在不同耕作等級下，選擇最合適的肥料，以獲得更高品質的作物。"
  ];


  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title="🌾 星露谷物語 完整攻略 🌾"
        subtitle="iOS 遊戲版本 | 新手友好指南"
        lastUpdated="2026年1月"
      />

      <NavBar sections={navSections} />

      <div className="flex-grow p-4 max-w-7xl mx-auto w-full"> {/* Adjust max-w as needed */}

        {/* 遊戲簡介 */}
        <Section id="intro" title="📖 遊戲簡介">
          <p className="mb-3 text-justify">
            《星露谷物語》（Stardew Valley）是一款開放世界鄉村生活模擬遊戲。你將繼承祖父在星露谷的農場，遠離城市的喧囂，開始全新的農村生活。
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">iOS 版本特色</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>觸控操作:</strong> 專為觸控螢幕優化的操作介面</li>
            <li><strong>自動存檔:</strong> 每天睡覺時自動保存進度</li>
            <li><strong>多語言支援:</strong> 支援繁體中文（2023年1月官方更新）</li>
            <li><strong>版本更新:</strong> 定期與PC版同步更新內容</li>
          </ul>

          <InfoBox>
            <strong>💡 iOS 版本說明:</strong><br />
            目前 iOS 版本已更新至 1.6 版本，包含姜島等最新內容。遊戲售價約 NT$150-200，無內購、無廣告，買斷制遊戲。
          </InfoBox>
        </Section>

        {/* 新手入門 */}
        <Section id="getting-started" title="🎮 新手入門指南">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">角色創建</h3>
          <p className="mb-3 text-justify">
            在開始遊戲時，你需要創建自己的角色:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>外觀:</strong> 可選擇 24 種膚色、74 種髮型、112 款上衣</li>
            <li><strong>性別:</strong> 不限制結婚對象（可與任何單身 NPC 結婚）</li>
            <li><strong>寵物:</strong> 可選擇 5 種狗或 5 種貓</li>
            <li><strong>農場名稱:</strong> 為你的農場取個喜歡的名字</li>
            <li><strong>最喜歡的東西:</strong> 會影響吃星之果實時的訊息</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">農場地圖選擇</h3>
          <ResponsiveTable
            headers={['地圖類型', '特色', '適合玩家']}
            data={farmMaps}
          />

          <TipBox>
            <strong>🌟 新手建議:</strong><br />
            第一次遊玩強烈建議選擇「標準農場」，因為有最大的可耕地面積和最平坦的地形，適合學習遊戲機制。
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">第一天該做什麼？</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li><strong>清理農場:</strong> 用斧頭砍樹、用鋤頭清雜草、用十字鎬敲石頭</li>
            <li><strong>種植防風草:</strong> 鎮長給的 15 顆種子全部種下</li>
            <li><strong>每天澆水:</strong> 作物每天都需要澆水才能生長</li>
            <li><strong>探索小鎮:</strong> 認識村民，了解各個商店位置</li>
            <li><strong>查看電視:</strong> 可獲得天氣預報、烹飪食譜和遊戲提示</li>
          </ol>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">時間管理</h3>
          <InfoBox>
            <strong>⏰ 遊戲時間系統:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>每天從早上 6:00 開始，到凌晨 2:00 結束</li>
              <li>一個遊戲日 = 現實時間約 14 分鐘</li>
              <li>一季 28 天，一年 4 季（春夏秋冬）</li>
              <li>凌晨 2:00 後還不睡覺會昏倒並損失金錢</li>
              <li>晚睡（晚上 12:00 後）會減少恢復的能量</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">基礎操作（iOS 版）</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>移動:</strong> 點擊螢幕任意位置，角色會自動走過去</li>
            <li><strong>使用工具:</strong> 點擊目標物體（樹、石頭、農作物等）</li>
            <li><strong>與 NPC 對話:</strong> 點擊 NPC</li>
            <li><strong>打開背包:</strong> 點擊右上角背包圖示</li>
            <li><strong>切換工具:</strong> 滑動底部工具欄</li>
            <li><strong>跑步:</strong> 長按移動目標處</li>
          </ul>
        </Section>

        {/* 地圖指南 */}
        <Section id="map" title="🗺️ 地圖與重要地點">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">星露谷地圖概覽</h3>
          <p className="mb-3 text-justify">
            星露谷分為多個區域，每個區域都有獨特的資源和 NPC。了解地圖佈局可以幫助你更有效率地規劃行程。
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">主要區域與地點</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">🏘️ 鵜鶘鎮（Pelican Town）</h4>
          <ResponsiveTable
            headers={['地點', '說明', '營業時間/開放時間']}
            data={pelicanTownLocations}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">🏔️ 山區（The Mountain）</h4>
          <ResponsiveTable
            headers={['地點', '說明']}
            data={mountainLocations}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">🌲 煤礦森林（Cindersap Forest）</h4>
          <ResponsiveTable
            headers={['地點', '說明']}
            data={forestLocations}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">🏖️ 海灘（Beach）</h4>
          <ResponsiveTable
            headers={['地點', '說明']}
            data={beachLocations}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">🏜️ 沙漠（需要修復巴士）</h4>
          <ResponsiveTable
            headers={['地點', '說明']}
            data={desertLocations}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">🏝️ 姜島（Ginger Island）- 需要完成社區中心</h4>
          <ResponsiveTable
            headers={['地點', '說明']}
            data={gingerIslandLocations}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">重要提示</h3>
          <TipBox>
            <strong>🗺️ 探索技巧:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>記住商店營業時間:</strong> 錯過時間就白跑一趟</li>
              <li><strong>優先解鎖礦車:</strong> 完成社區中心對應包裹後，可快速移動</li>
              <li><strong>修復巴士:</strong> 完成社區中心或花40,000g，可前往沙漠</li>
              <li><strong>下水道鑰匙:</strong> 捐贈60件文物給博物館獲得</li>
              <li><strong>秘密森林:</strong> 需要至少鋼斧才能進入</li>
              <li><strong>姜島:</strong> 完成社區中心後，威利的魚店會有新任務</li>
            </ul>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">快速移動方式</h3>
          <ResponsiveTable
            headers={['方式', '解鎖條件', '說明']}
            data={quickTravelOptions}
          />
        </Section>

        {/* 種植指南 */}
        <Section id="farming" title="🌱 種植指南">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">基礎種植流程</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li>用鋤頭翻土（變成深色的土地）</li>
            <li>種下種子（點擊翻好的土地）</li>
            <li>每天用噴壺澆水（下雨天可以不用）</li>
            <li>等待作物成熟（天數因作物而異）</li>
            <li>用鐮刀收割成熟的作物</li>
          </ol>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">春季作物（第一年最重要！）</h3>
          <ResponsiveTable
            headers={['作物名稱', '成長天數', '售價', '種子價格', '推薦度']}
            data={springCrops.map(crop => [crop.name, crop.growthDays, crop.salePrice || '', crop.seedPrice || '', crop.recommendation || ''])}
          />

          <TipBox>
            <strong>💰 第一年春季賺錢攻略:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>前兩週種植馬鈴薯和防風草賺取資金</li>
              <li>春13日彩蛋節購買大量草莓種子（建議至少40顆）</li>
              <li>草莓種下後可以收穫3次，是春季最賺錢的作物</li>
              <li>存錢準備夏季購買藍莓種子</li>
            </ol>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">夏季作物</h3>
          <ResponsiveTable
            headers={['作物名稱', '成長天數', '特性', '推薦度']}
            data={summerCrops.map(crop => [crop.name, crop.growthDays, crop.characteristics || '', crop.recommendation || ''])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">秋季作物</h3>
          <ResponsiveTable
            headers={['作物名稱', '成長天數', '特性', '推薦度']}
            data={fallCrops.map(crop => [crop.name, crop.growthDays, crop.characteristics || '', crop.recommendation || ''])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">冬季作物</h3>
          <WarningBox>
            <strong>⚠️ 注意:</strong> 冬季無法在戶外種植普通作物！<br />
            冬季可以做的事:
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>在溫室種植（需要完成社區中心後才有）</li>
              <li>種植冬季種子（採集種子包）</li>
              <li>專心挖礦、釣魚、打怪</li>
              <li>規劃農場佈局</li>
              <li>提升村民好感度</li>
            </ul>
          </WarningBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">特殊作物</h3>
          <ResponsiveTable
            headers={['作物名稱', '季節', '獲得方式', '說明']}
            data={specialCrops.map(crop => [crop.name, crop.season || '', crop.acquisition || '', crop.description || ''])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">肥料使用</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>基礎肥料:</strong> 增加10%作物品質機率</li>
            <li><strong>高級肥料:</strong> 增加25%作物品質機率</li>
            <li><strong>豪華肥料:</strong> 增加33%作物品質機率</li>
            <li><strong>快速生長肥料:</strong> 減少10%成長時間</li>
            <li><strong>豪華快速生長肥料:</strong> 減少25%成長時間</li>
            <li><strong>保濕土壤:</strong> 保持土壤濕潤更久</li>
          </ul>

          <TipBox>
            <strong>💡 肥料使用技巧:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>肥料要在種子種下<strong>之前</strong>使用</li>
              <li>多次收割的作物用肥料最划算（如草莓、藍莓）</li>
              <li>季節結束肥料會消失（除非是連續生長的作物）</li>
              <li>灑水器範圍內的土地也需要單獨施肥</li>
            </ul>
          </TipBox>
        </Section>

        {/* 人物關係 */}
        <Section id="characters" title="👥 人物關係攻略">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">好感度系統</h3>
          <p className="mb-3 text-justify">
            與村民建立良好關係非常重要，可以:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>解鎖劇情事件和對話</li>
            <li>獲得食譜和禮物</li>
            <li>與單身 NPC 結婚</li>
            <li>部分商店有折扣</li>
          </ul>

          <InfoBox>
            <strong>❤️ 好感度計算:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>1 顆心 = 250 點好感度</li>
              <li>每天與 NPC 對話 +20 點</li>
              <li>送禮物（最愛） +80 點（平日）、+640 點（生日）</li>
              <li>每週最多送 2 次禮物（週日重置）</li>
              <li>完成委託任務 +150 點</li>
              <li>不與 NPC 交流每天 -2 點</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">可結婚的 NPC（12位）</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">女性角色</h4>
          <ResponsiveTable
            headers={['角色名稱', '生日', '最愛禮物', '特色']}
            data={femaleMarriageCandidates.map(npc => [npc.name, npc.birthday, npc.favoriteGifts, npc.characteristics])}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">男性角色</h4>
          <ResponsiveTable
            headers={['角色名稱', '生日', '最愛禮物', '特色']}
            data={maleMarriageCandidates.map(npc => [npc.name, npc.birthday, npc.favoriteGifts, npc.characteristics])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">送禮攻略</h3>
          <TipBox>
            <strong>🎁 送禮技巧:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>生日送禮效果最好</strong>（好感度×8）</li>
              <li>優先送最愛的禮物，其次是喜歡的</li>
              <li>金星、銀星品質的禮物加成更多</li>
              <li>不確定喜好時，送萬用禮物最安全</li>
              <li>春14日彩蛋節前多送禮可以在節日跳舞</li>
            </ol>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">萬用禮物（大部分 NPC 都喜歡）</h3>
          <ResponsiveTable
            headers={['類別', '物品', '獲得方式']}
            data={universalGifts}
          />

          <WarningBox>
            <strong>⚠️ 不要送的禮物:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>垃圾類物品（所有人都討厭）</li>
              <li>干草（大部分人不喜歡）</li>
              <li>野生種子（大部分人不喜歡）</li>
              <li>未加工的礦石（除了矮人）</li>
            </ul>
          </WarningBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">結婚流程</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li>將某個單身 NPC 的好感度提升到 8 顆心</li>
            <li>購買「美人魚的項鍊」（雨天海灘老人處，5000g）</li>
            <li>贈送美人魚的項鍊給對象（需要 10 顆心）</li>
            <li>3 天後舉行婚禮</li>
            <li>結婚後對象會搬進你的農舍</li>
          </ol>

          <TipBox>
            <strong>💑 結婚後的變化:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>配偶會幫你澆水、餵動物、修理圍欄</li>
              <li>偶爾會送你禮物</li>
              <li>升級農舍後可以生孩子或領養</li>
              <li>配偶有專屬房間和戶外區域</li>
              <li>記得每天跟配偶親親和送禮，保持好感度</li>
            </ul>
          </TipBox>
        </Section>

        {/* 生日日曆 */}
        <Section id="birthdays" title="🎂 NPC 生日完整日曆">
          <p className="mb-3 text-justify">
            在 NPC 生日當天送禮可獲得 <strong>8倍好感度</strong>（640點），是提升關係的最佳時機！記得提前準備他們最愛的禮物。
          </p>

          <TipBox>
            <strong>🎁 生日送禮技巧:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>生日送禮效果是平時的 8 倍！</li>
              <li>提前一天準備好最愛的禮物</li>
              <li>金星/銀星品質的禮物會有額外加成</li>
              <li>生日當天的禮物不計入每週 2 次的限制</li>
            </ul>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Spring]} px-2 py-1 rounded`}>春季</span> 生日
          </h3>
          <ResponsiveTable
            headers={['日期', 'NPC', '可結婚', '最愛禮物（舉例）']}
            data={springBirthdays}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Summer]} px-2 py-1 rounded`}>夏季</span> 生日
          </h3>
          <ResponsiveTable
            headers={['日期', 'NPC', '可結婚', '最愛禮物（舉例）']}
            data={summerBirthdays}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Fall]} px-2 py-1 rounded`}>秋季</span> 生日
          </h3>
          <ResponsiveTable
            headers={['日期', 'NPC', '可結婚', '最愛禮物（舉例）']}
            data={fallBirthdays}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Winter]} px-2 py-1 rounded`}>冬季</span> 生日
          </h3>
          <ResponsiveTable
            headers={['日期', 'NPC', '可結婚', '最愛禮物（舉例）']}
            data={winterBirthdays}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">特殊說明</h3>
          <InfoBox>
            <strong>📅 節日與生日重疊:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>春13日彩蛋節: 優先存錢買草莓種子</li>
              <li>冬25日冬日盛宴: 送禮效果×5，可與生日禮物疊加</li>
              <li>肯特要到<strong>第二年春季</strong>才會回到小鎮</li>
              <li>里歐要<strong>解鎖姜島</strong>後才能認識</li>
            </ul>
          </InfoBox>

          <TipBox>
            <strong>💝 實用技巧:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>提前準備:</strong> 在生日前一天準備好禮物</li>
              <li><strong>利用日曆:</strong> 家中和皮埃爾商店的日曆會提示生日</li>
              <li><strong>同季集中:</strong> 春季重點攻略海莉、謝恩、艾蜜莉</li>
              <li><strong>批量製作:</strong> 提前做好常用禮物（如咖啡、料理）</li>
              <li><strong>採集利用:</b> 春天的水仙花、冬天的雪花蓮都是萬用禮物</li>
            </ul>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">快速查詢: 依月份排序</h3>
          <ResponsiveTable
            headers={['季節', '上旬（1-10日）', '中旬（11-20日）', '下旬（21-28日）']}
            data={monthlyBirthdays}
          />
        </Section>

        {/* 四季活動 */}
        <Section id="seasons" title="📅 四季活動與節日">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Spring]} px-2 py-1 rounded`}>春季</span> 節日活動
          </h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">春13日 - 彩蛋節</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 鵜鶘鎮廣場（9:00-14:00）</li>
            <li><strong>活動:</strong> 彩蛋狩獵比賽</li>
            <li><strong>重點:</strong> 購買草莓種子（100g/顆）</li>
            <li><strong>獎勵:</b> 找到最多彩蛋可獲得稻草帽</li>
          </ul>
          <TipBox>
            <strong>💡 彩蛋節攻略:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>記得提前存錢，至少準備 5000g 買草莓種子</li>
              <li>草莓是春季最賺錢的作物</li>
              <li>想要贏得比賽需要找到 9 顆以上彩蛋</li>
              <li>彩蛋位置每年固定，可記憶路線</li>
            </ul>
          </TipBox>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">春24日 - 花舞節</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 煤礦森林</li>
            <li><strong>活動:</strong> 與喜歡的單身 NPC 跳舞</li>
            <li><strong>條件:</strong> 好感度達到 4 顆心</li>
            <li><strong>特色:</strong> 美麗的花朵裝飾</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">季節性採集活動</h4>
          <InfoBox>
            <strong>🍓 鮭魚漿果季（春 15-18日）</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>地點: 灌木叢（森林、山區、鎮上到處都有）</li>
              <li>採集: 鮭魚漿果（恢復25能量）</li>
              <li>技巧: 採集等級越高，獲得的品質越好</li>
              <li>用途: 食用恢復能量或送禮（普通禮物）</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Summer]} px-2 py-1 rounded`}>夏季</span> 節日活動
          </h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">夏11日 - 魯奧派對</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 海灘</li>
            <li><strong>活動:</strong> 魯奧湯烹飪、衝浪</li>
            <li><strong>重點:</strong> 貢獻高品質食材可提升好感度</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">夏28日 - 月光水母舞</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 海灘碼頭（22:00-24:00）</li>
            <li><strong>活動:</strong> 觀賞發光水母</li>
            <li><strong>特色:</strong> 浪漫的夜間活動</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">夏季額外活動</h4>
          <InfoBox>
            <strong>🏖️ 夏季海灘採集:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>海膽、珊瑚、海草:</strong> 在潮池區域採集</li>
              <li><strong>彩虹貝殼:</strong> 夏季海灘偶爾出現（稀有）</li>
              <li><strong>螃蟹、蛤蜊:</strong> 使用捕蟹籠捕撈</li>
              <li><strong>水母:</strong> 海灘釣魚可釣到</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Fall]} px-2 py-1 rounded`}>秋季</span> 節日活動
          </h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">秋16日 - 星露谷展覽會</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 鵜鶘鎮</li>
            <li><strong>活動:</strong> 展示農產品、玩小遊戲</li>
            <li><strong>代幣:</strong> 可用代幣兌換獎品</li>
            <li><strong>展示:</strong> 9 種不同類型物品，最高品質</li>
          </ul>
          <TipBox>
            <strong>🎪 展覽會攻略:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>展示金星品質物品可獲得更多代幣</li>
              <li>釣魚小遊戲最容易賺代幣</li>
              <li>用代幣兌換星之掉落、稀有種子</li>
              <li>彈珠機和輪盤靠運氣</li>
            </ul>
          </TipBox>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">秋27日 - 幽靈節</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 鵜鶘鎮廣場</li>
            <li><strong>活動:</strong> 迷宮、購買稀有物品</li>
            <li><strong>商店:</b> 可買到金南瓜、稀有南瓜種子</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">季節性採集活動</h4>
          <InfoBox>
            <strong>🫐 黑莓季（秋 8-11日）</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>地點: 灌木叢（主要在鐵路沿線和山區）</li>
              <li>採集: 黑莓（恢復25能量）</li>
              <li>數量: 每個灌木叢可採集3-4顆</li>
              <li>用途: 食用、烹飪或製作果凍</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            <span className={`${SEASON_COLORS[Season.Winter]} px-2 py-1 rounded`}>冬季</span> 節日活動
          </h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">冬8日 - 冰雪祭典</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 森林</li>
            <li><strong>活動:</strong> 釣魚比賽、商店</li>
            <li><strong>比賽:</strong> 限時釣魚，最多魚獲勝</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">冬15-17日 - 冬季夜市</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 海灘（17:00-24:00，連續3天）</li>
            <li><strong>活動:</strong> 美人魚表演、潛水艇、商店</li>
            <li><strong>特色:</strong> 獨特的夜間市集</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">冬25日 - 冬日盛宴</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>地點:</strong> 鵜鶘鎮</li>
            <li><strong>活動:</strong> 交換禮物</li>
            <li><strong>特別:</strong> 送禮好感度×5</li>
          </ul>
          <TipBox>
            <strong>🎁 冬日盛宴攻略:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>提前查詢你的神秘朋友是誰</li>
              <li>送對方最愛的禮物可獲得大量好感度</li>
              <li>這天送禮效果是平時的5倍！</li>
            </ul>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">其他重要日期與時間表</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">商店營業時間</h4>
          <ResponsiveTable
            headers={['商店', '營業時間', '公休日']}
            data={shopHours}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">每週固定活動</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>週日:</strong> 皮埃爾雜貨店公休</li>
            <li><strong>週三:</strong> 皮埃爾雜貨店公休（可去 JoJa 超市）</li>
            <li><strong>週五:</b> 酒館營業（可玩遊戲機）</li>
            <li><strong>週六:</strong> 酒館營業</li>
            <li><strong>週五/日:</strong> 旅行商人出現在煤礦森林（6:00-20:00）</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">季節性活動時間</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>春 15-18日:</strong> 鮭魚漿果季（灌木叢採集）</li>
            <li><strong>夏 12-14日:</strong> 海灘「額外可採集物」出現率提高</li>
            <li><strong>秋 8-11日:</b> 黑莓季（灌木叢採集）</li>
            <li><strong>冬季:</strong> 無法在戶外種植普通作物</li>
          </ul>

          <WarningBox>
            <strong>⚠️ 重要提醒:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>節日當天商店大多關閉，記得提前購買</li>
              <li>鐵匠升級工具需要2天，建議在冬季或雨天進行</li>
              <li>瑪妮週一週二都不在，要買動物或乾草要注意</li>
              <li>旅行商人的商品會隨機變化，看到稀有種子要買</li>
            </ul>
          </WarningBox>
        </Section>

        {/* 挖礦探險 */}
        <Section id="mining" title="⛏️ 挖礦與探險指南">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">礦井位置</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>礦井:</strong> 位於山上，120 層</li>
            <li><strong>骷髏洞穴:</strong> 沙漠，無限層（需修復巴士）</li>
            <li><strong>火山地牢:</strong> 姜島，10 層</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">礦井攻略（120層）</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">樓層分佈</h4>
          <ResponsiveTable
            headers={['樓層', '主要礦物', '怪物', '注意事項']}
            data={mineFloorDistribution}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">重要樓層</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>第 5 層:</strong> 電梯，之後每 5 層一個電梯</li>
            <li><strong>第 20 層:</strong> 開始出現鐵礦</li>
            <li><strong>第 40 層:</strong> 開始出現金礦</li>
            <li><strong>第 80 層:</strong> 開始出現鈦礦（稀有）</li>
            <li><strong>第 90-110 層:</strong> 史前樓層（多恐龍化石）</li>
            <li><strong>第 120 層:</strong> 礦井底部，有寶箱</li>
          </ul>

          <TipBox>
            <strong>💎 挖礦技巧:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>帶足夠的食物:</strong> 至少 10-20 個回血食物</li>
              <li><strong>尋找樓梯:</strong> 打碎石頭有機率掉落</li>
              <li><strong>製作樓梯:</strong> 99 石頭可做 1 個樓梯</li>
              <li><strong>幸運日挖礦:</strong> 電視看占卜，幸運日找礦更多</li>
              <li><strong>炸彈開路:</strong> 使用炸彈快速清理石頭</li>
              <li><strong>攻擊怪物:</strong> 掉落礦石、食物、樓梯</li>
            </ol>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">骷髏洞穴攻略</h3>
          <InfoBox>
            <strong>💀 骷髏洞穴特色:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>無電梯，每次都從第 1 層開始</li>
              <li>主要產出: 銥礦石（深層）、寶石、棱晶碎片</li>
              <li>建議等級: 戰鬥等級 8 以上</li>
              <li>必備物品: 大量樓梯、炸彈、食物</li>
              <li>最佳時間: 幸運日＋攻擊力加成的日子</li>
            </ul>
          </InfoBox>

          <TipBox>
            <strong>🪜 快速下潛技巧:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>準備 100-200 個樓梯</li>
              <li>用樓梯快速下到 100 層以下</li>
              <li>100 層以下銥礦石大量出現</li>
              <li>找到「寶藏樓層」（綠色全螢幕提示）</li>
              <li>帶回程魔杖可快速返回</li>
            </ol>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">戰鬥與裝備</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">武器類型</h4>
          <ResponsiveTable
            headers={['武器類型', '特點', '推薦']}
            data={weaponTypes}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">有用的礦物</h4>
          <ResponsiveTable
            headers={['礦物名稱', '用途', '獲得方式']}
            data={usefulMinerals}
          />
        </Section>

        {/* 釣魚技巧 */}
        <Section id="fishing" title="🎣 釣魚技巧與魚類指南">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">釣魚基礎</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li>裝備魚竿（第2天威利會送）</li>
            <li>在水邊使用魚竿</li>
            <li>等待魚上鉤（會有咬鉤音效和驚嘆號）</li>
            <li>按住螢幕讓綠色條覆蓋魚的位置</li>
            <li>進度條滿了就釣起來了</li>
          </ol>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">iOS 版釣魚技巧</h3>
          <TipBox>
            <strong>🎮 觸控螢幕釣魚技巧:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>輕點螢幕:</strong> 綠條小幅上升</li>
              <li><strong>連續點擊:</strong> 保持綠條位置</li>
              <li><strong>不點螢幕:</strong> 綠條會下降</li>
              <li><strong>跟隨魚的移動:</strong> 預判魚的方向</li>
              <li><strong>使用鈎針:</strong> 增加釣魚容錯率</li>
            </ul>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">魚竿升級</h3>
          <ResponsiveTable
            headers={['魚竿名稱', '價格', '功能', '解鎖條件']}
            data={fishingRodUpgrades}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">常見魚類與位置</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">春季魚類</h4>
          <ResponsiveTable
            headers={['魚名', '位置', '時間', '難度', '售價']}
            data={springFish}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">夏季魚類</h4>
          <ResponsiveTable
            headers={['魚名', '位置', '時間', '售價']}
            data={summerFish}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">秋季魚類</h4>
          <ResponsiveTable
            headers={['魚名', '位置', '時間', '售價']}
            data={fallFish}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">冬季魚類</h4>
          <ResponsiveTable
            headers={['魚名', '位置', '時間', '售價']}
            data={winterFish}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">五大傳奇魚</h3>
          <WarningBox>
            <strong>🐟 傳奇魚特性:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>每種只能釣一次</li>
              <li>難度極高，需要高等級和好裝備</li>
              <li>售價非常高（每條 5,000g）</li>
              <li>需要特定季節、天氣、位置</li>
            </ul>
          </WarningBox>
          <ResponsiveTable
            headers={['傳奇魚', '季節', '位置', '條件']}
            data={legendaryFish}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">釣魚賺錢攻略</h3>
          <TipBox>
            <strong>💰 釣魚致富技巧:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>升級到釣魚等級10:</strong> 可釣更高價值的魚</li>
              <li><strong>選擇職業「漁夫」:</strong> 魚的售價+25%</li>
              <li><strong>使用魚餌:</strong> 咬鉤速度更快</li>
              <li><strong>裝備鈎針:</strong> 降低難度</li>
              <li><strong>製作捕蟹籠:</strong> 自動捕撈螃蟹、貝類</li>
              <li><strong>雨天出動:</strong> 鯰魚等高價魚只在雨天出現</li>
            </ol>
          </TipBox>
        </Section>

        {/* 書籍與技能書 */}
        <Section id="books" title="📚 書籍與技能書">
          <p className="mb-3 text-justify">
            在星露谷的世界裡，除了勞作和社交，你還可以找到各種書籍，它們能給予你永久性的加成或提升技能經驗。
          </p>
          <InfoBox>
            <strong>📖 書籍注意事項:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>永久效果:</strong> 每本書第一次閱讀時都會給予玩家永久效果。</li>
              <li><strong>重複閱讀:</strong> 之後每次閱讀會給予額外的經驗值或小幅效果。</li>
              <li><strong>成就:</strong> 閱讀所有力量書可以獲得「博學多聞」成就。</li>
              <li><strong>技能書:</strong> 技能書不計入成就。</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">力量書 (Power Books)</h3>
          <ResponsiveTable
            headers={['名稱', '地點與價格', '效果', '後續閱讀效果']}
            data={powerBooks.map((book: BookItem) => [
              book.name,
              book.locationAndPrice,
              book.effect,
              book.subsequentReadingEffect
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">技能書 (Skill Books)</h3>
          <ResponsiveTable
            headers={['名稱', '地點與價格', '效果']}
            data={skillBooks.map((book: SkillBookItem) => [
              book.name,
              book.locationAndPrice,
              book.effect
            ])}
          />
        </Section>

        {/* 社區中心收集包 */}
        <Section id="bundles" title="🎁 社區中心收集包 (Community Center Bundles)">
          <p className="mb-3 text-justify">
            社區中心（Community Center）是星露谷的核心設施之一。透過完成各種收集包（Bundles），可以修復小鎮的設施並解鎖新的遊戲內容。
            每個收集包都需要捐贈特定物品，完成後會獲得獎勵。
          </p>
          <InfoBox>
            <strong>💡 完成社區中心的重要性:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>修復溫室: 全年可種植作物。</li>
              <li>修復礦車: 快速移動到礦井、巴士站、採石場。</li>
              <li>修復巴士: 解鎖沙漠區域。</li>
              <li>解鎖電影院: 與村民互動的新地點。</li>
              <li>改善村民關係和遊戲體驗。</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">工藝室收集包 (Crafts Room Bundles)</h3>
          <p className="mb-3">這些收集包主要要求季節性的採集物。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源', '獎勵']}
            data={craftsRoomBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => `${req.name}${req.quantity ? ` (${req.quantity})` : ''}`).join(', '),
              bundle.requirements.map(req => req.source).join(', '),
              bundle.rewards.join(', ')
            ])}
          />
          <InfoBox>
            <strong>工藝室獎勵:</strong> 修復礦井東邊的橋樑 – 開啟採石場（The Quarry）的通道。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">食品室收集包 (Pantry Bundles)</h3>
          <p className="mb-3">主要與農場作物和動物產品相關。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源', '獎勵']}
            data={pantryBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => `${req.name}${req.quantity ? ` (${req.quantity})` : ''}${req.quality ? ` (${req.quality})` : ''}`).join(', '),
              bundle.requirements.map(req => req.source).join(', '),
              bundle.rewards.join(', ')
            ])}
          />
          <InfoBox>
            <strong>食品室獎勵:</strong> 修復破損的溫室（Greenhouse）。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">魚缸收集包 (Fish Tank Bundles)</h3>
          <p className="mb-3">需要釣到各種魚類以及收集魚類相關物品。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源', '獎勵']}
            data={fishTankBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => `${req.name}${req.quantity ? ` (${req.quantity})` : ''}`).join(', '),
              bundle.requirements.map(req => req.source).join(', '),
              bundle.rewards.join(', ')
            ])}
          />
          <InfoBox>
            <strong>魚缸獎勵:</strong> 移除礦井附近的閃光巨石（Glittering Boulder），並從威利那裡獲得銅質淘金盤（Copper Pan）。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">公告板收集包 (Bulletin Board Bundles)</h3>
          <p className="mb-3">要求多樣化，包括烹飪、採集、動物產品和礦物。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源', '獎勵']}
            data={bulletinBoardBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => `${req.name}${req.quantity ? ` (${req.quantity})` : ''}`).join(', '),
              bundle.requirements.map(req => req.source).join(', '),
              bundle.rewards.join(', ')
            ])}
          />
          <InfoBox>
            <strong>公告板獎勵:</strong> 每個不可結婚的村民友誼等級提升 2。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">保險庫收集包 (Vault Bundles)</h3>
          <p className="mb-3">這些收集包純粹需要金錢來完成。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源', '獎勵']}
            data={vaultBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => req.name).join(', '),
              bundle.requirements.map(req => req.source).join(', '),
              bundle.rewards.join(', ')
            ])}
          />
          <InfoBox>
            <strong>保險庫獎勵:</strong> 修復巴士站（Bus Stop），可前往沙漠（Calico Desert）。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">鍋爐室收集包 (Boiler Room Bundles)</h3>
          <p className="mb-3">這些收集包主要要求礦物和戰鬥相關物品。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源', '獎勵']}
            data={boilerRoomBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => `${req.name}${req.quantity ? ` (${req.quantity})` : ''}`).join(', '),
              bundle.requirements.map(req => req.source).join(', '),
              bundle.rewards.join(', ')
            ])}
          />
          <InfoBox>
            <strong>鍋爐室獎勵:</strong> 修復礦車（Minecarts），可在巴士站、礦井、採石場和城鎮之間快速移動。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">廢棄JoJa超市收集包 (Abandoned JoJaMart Bundles)</h3>
          <p className="mb-3">這個收集包在完成社區中心後才開放，會解鎖電影院。</p>
          <ResponsiveTable
            headers={['收集包', '要求', '來源']}
            data={abandonedJojaMartBundles.map((bundle: BundleData) => [
              bundle.name,
              bundle.requirements.map(req => `${req.name}${req.quality ? ` (${req.quality})` : ''}`).join(', '),
              bundle.requirements.map(req => req.source).join(', ')
            ])}
          />
          <InfoBox>
            <strong>廢棄JoJa超市獎勵:</strong> 在廢棄JoJa超市解鎖電影院（Movie Theater）。注意: 這個收集包只有在社區中心完成後才會開放。
          </InfoBox>
        </Section>

        {/* 服裝指南 */}
        <Section id="clothing" title="👕 服裝指南">
          <p className="mb-3 text-justify">
            在《星露谷物語》中，你可以透過多種方式獲取服裝，包括帽子、購買的衣服和在艾蜜莉的裁縫機製作的服裝。
          </p>
          {clothingThingsOfNote.map((note, index) => (
            <InfoBox key={`clothing-note-${index}`}>
              {note}
            </InfoBox>
          ))}

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">購買/獲得的帽子 (Purchased/Earned Hats)</h3>
          <ResponsiveTable
            headers={['名稱', '來源（及後續地點）', '成就']}
            data={hats.map((item: HatItem) => [
              item.name,
              item.source,
              item.achievement
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">裁縫帽子 (Tailored Hats)</h3>
          <p className="mb-3 text-justify">
            裁縫帽子需要布料和另一件物品才能製作。
          </p>
          <ResponsiveTable
            headers={['名稱', '配方 (布料 +)']}
            data={tailoredHats.map((item: TailoredHatRecipe) => [
              item.name,
              item.recipe
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">裁縫上衣 (Tailored Shirts)</h3>
          <p className="mb-3 text-justify">
            上衣可以在艾蜜莉和海莉的裁縫機上製作，需要布料和一個額外物品。稜鏡服裝是隨機的，所以一個稜晶碎片可以產生五種稜鏡物品中的任何一種。
          </p>
          <ResponsiveTable
            headers={['名稱', '可染色?', '配方 (布料 +)']}
            data={tailoredShirts.map((item: TailoredShirtRecipe) => [
              item.name,
              item.dyeable ? '是' : '否',
              item.recipe
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">裁縫褲子 (Tailored Pants)</h3>
          <p className="mb-3 text-justify">
            褲子也可以在艾蜜莉和海莉的裁縫機上製作。
          </p>
          <ResponsiveTable
            headers={['名稱', '可染色?', '配方 (布料 +)']}
            data={tailoredPants.map((item: TailoredPantsRecipe) => [
              item.name,
              item.dyeable ? '是' : '否',
              item.recipe
            ])}
          />
        </Section>

        {/* 戰鬥與裝備 */}
        <Section id="combat-equipment" title="⚔️ 戰鬥與裝備">
          <p className="mb-3 text-justify">
            戰鬥是星露谷物語的重要組成部分，尤其是在礦井、骷髏洞穴和火山地牢中。正確的武器和裝備能讓你事半功倍。
          </p>
          {combatThingsOfNote.map((note, index) => (
            <InfoBox key={`combat-note-${index}`}>
              {note}
            </InfoBox>
          ))}

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">武器 - 劍 (Swords)</h3>
          <ResponsiveTable
            headers={['名稱 (等級)', '傷害', '暴擊率', '屬性', '地點', '購買價格']}
            data={swords.map((weapon: WeaponBase) => [
              `${weapon.name} (${weapon.level})`,
              weapon.damage,
              weapon.critChance,
              weapon.stats,
              weapon.location,
              weapon.purchasePrice
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">武器 - 短劍 (Daggers)</h3>
          <ResponsiveTable
            headers={['名稱 (等級)', '傷害', '暴擊率', '屬性', '地點', '購買價格']}
            data={daggers.map((weapon: WeaponBase) => [
              `${weapon.name} (${weapon.level})`,
              weapon.damage,
              weapon.critChance,
              weapon.stats,
              weapon.location,
              weapon.purchasePrice
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">武器 - 錘 (Clubs)</h3>
          <ResponsiveTable
            headers={['名稱 (等級)', '傷害', '暴擊率', '屬性', '地點', '購買價格']}
            data={clubs.map((weapon: WeaponBase) => [
              `${weapon.name} (${weapon.level})`,
              weapon.damage,
              weapon.critChance,
              weapon.stats,
              weapon.location,
              weapon.purchasePrice
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">武器 - 其他近戰武器 (Miscellaneous Melee Weapons)</h3>
          <ResponsiveTable
            headers={['名稱 (等級) [類型]', '傷害', '暴擊率', '屬性', '地點', '購買價格']}
            data={miscMeleeWeapons.map((weapon: WeaponBase) => [
              `${weapon.name} (${weapon.level}) [${weapon.type}]`,
              weapon.damage,
              weapon.critChance,
              weapon.stats,
              weapon.location,
              weapon.purchasePrice
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">彈弓 (Slingshots)</h3>
          <ResponsiveTable
            headers={['名稱', '傷害', '暴擊率', '地點']}
            data={slingshots.map((slingshot: SlingshotItem) => [
              slingshot.name,
              slingshot.damage,
              slingshot.critChance,
              slingshot.location
            ])}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">彈弓彈藥 (Slingshot Ammunition)</h4>
          <ResponsiveTable
            headers={['彈藥', '傷害倍數']}
            data={slingshotAmmunition.map((ammo: SlingshotAmmo) => [
              ammo.ammunition,
              ammo.ammoMult
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">靴子 (Footwear)</h3>
          <ResponsiveTable
            headers={['名稱', '屬性', '來源', '購買價格']}
            data={boots.map((boot: BootItem) => [
              boot.name,
              boot.stats,
              boot.source,
              boot.purchasePrice
            ])}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">關於靴子備註:</h4>
          <InfoBox>
            靴子可以將屬性從一雙轉移到另一雙。將帶有所需屬性的物品放在紡錘上，要裁縫的物品放在進料口。紡錘上的物品將被消耗，進料口上的物品將被稱為「定制」。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">戒指 (Rings)</h3>
          <ResponsiveTable
            headers={['名稱', '效果', '在哪裡找到', '購買價格', '出售價格']}
            data={rings.map((ring: RingItem) => [
              ring.name,
              ring.effect,
              ring.location,
              ring.purchasePrice,
              ring.sellPrice
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">熔爐 (The Forge)</h3>
          <p className="mb-3 text-justify">
            在火山地牢頂部解鎖熔爐後，你可以用寶石鍛造武器和戒指，為它們添加強大的屬性。
          </p>
          <ResponsiveTable
            headers={['寶石', '效果']}
            data={forgeGemEffects.map((gem: ForgeGemEffect) => [
              gem.gem,
              gem.effect
            ])}
          />

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">關於熔爐備註:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>你可以鍛造近戰武器最多三次以提升其屬性。每次鍛造花費一顆寶石和 10/15/20 煤炭碎片，取決於之前鍛造的次數。</li>
            <li>鍛造時，紅寶石寶石會將其傷害倍數加到最小和最大傷害屬性上。</li>
            <li>你可以透過鍛造三個銀河之魂和 60 個煤炭碎片來製造無限武器。</li>
            <li>解除鍛造會移除所有升級，但不移除附魔，並重置外觀。</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">戰鬥附魔 (Combat Enchantments)</h3>
          <ResponsiveTable
            headers={['名稱', '效果']}
            data={combatEnchantments.map((enchant: CombatEnchantment) => [
              enchant.name,
              enchant.effect
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">天生附魔 (Innate Enchantments)</h3>
          <ResponsiveTable
            headers={['附魔', '效果', '強制組合']}
            data={innateEnchantments.map((enchant: InnateEnchantment) => [
              enchant.enchantment,
              enchant.effect,
              enchant.mandatorySet || '否'
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">工具附魔 (Tool Enchantments)</h3>
          <p className="mb-3 text-justify">
            工具附魔能為你的工具提供額外的特殊能力，大大提升效率。
          </p>
          <ResponsiveTable
            headers={['名稱', '可用的工具', '效果']}
            data={toolEnchantments.map((enchant: ToolEnchantmentItem) => [
              enchant.name,
              `斧頭: ${enchant.axe ? '✅' : '❌'}, 魚竿: ${enchant.rod ? '✅' : '❌'}, 鋤頭: ${enchant.hoe ? '✅' : '❌'}, 鎬子: ${enchant.pick ? '✅' : '❌'}, 灑水器: ${enchant.can ? '✅' : '❌'}, 淘金盤: ${enchant.pan ? '✅' : '❌'}`,
              enchant.effect
            ])}
          />
          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">關於附魔和熔爐的備註:</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>鍛造時，上述「強制組合」中的一個天生附魔是保證獲得的，而其他則不是。</li>
            <li>每種武器/工具一次只能有一個附魔和一套天生附魔。</li>
            <li>任何近戰武器（除了銀河/無限武器）都可以添加一個隨機天生附魔，需要一個龍牙和 10 個煤炭碎片。</li>
            <li>你可以透過熔爐合併兩個相同類型的近戰武器。結果武器將擁有第一個武器的屬性，以及第二個武器的外觀。</li>
            <li>你可以透過熔爐合併兩個非相同類型的戒指。結果戒指將疊加之前戒指的效果。</li>
            <li>合併後的戒指不能再進一步合併。</li>
            <li>武器和戒指可以解除鍛造以將它們分開。</li>
          </ul>
        </Section>

        {/* 製作與烹飪 */}
        <Section id="crafting-cooking" title="🛠️ 製作與烹飪">
          {craftingCookingNotes.map((note, index) => (
            <InfoBox key={`crafting-cooking-note-${index}`}>
              {note}
            </InfoBox>
          ))}

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 炸彈 (Bombs)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={bombs.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 灑水器 (Sprinklers)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={sprinklers.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />
          <InfoBox>
            <strong>關於灑水器備註:</strong><br />
            灑水器每天早上 6 點自動為作物澆水，但不會為寵物碗或花盆中的植物澆水。<br />
            增效劑可以施肥已澆水的地塊，也可以在齊先生的核桃房用 20 齊幣購買。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 圍欄 (Fences)</h3>
          <ResponsiveTable
            headers={['物品', '腐爛時間（天）', '材料', '配方來源']}
            data={fences.map((item: CraftingItemBase) => [
              item.name,
              item.decayTime || '不適用',
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">工匠設備 (Artisan Equipment)</h3>
          <ResponsiveTable
            headers={['物品', '用途', '材料', '配方來源']}
            data={artisanEquipment.map((item: CraftingItemBase) => [
              item.name,
              item.purpose || '不適用',
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 肥料 (Fertilizer)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={fertilizersCrafting.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 種子 (Seeds)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={seedsCrafting.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 裝飾/地板 (Decor/Flooring)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={decorFlooring.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 消耗品 (Consumables)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={consumables.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">可食用製作物 (Edible Items)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '恢復量', '配方來源']}
            data={edibleCraftables.map((item: EdibleCraftable) => [
              item.name,
              item.ingredients,
              item.restoration,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 釣魚用具和魚餌 (Tackle and Bait)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={tackleBait.filter(item => !item.name.includes('戒指')).map((item: CraftingItemBase) => [ // Filter out rings
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 戒指 (Rings)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={tackleBait.filter(item => item.name.includes('戒指')).map((item: CraftingItemBase) => [ // Filter in only rings
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 照明 (Lighting)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={lighting.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">精煉設備 (Refining Equipment)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={refiningEquipment.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 家具 (Furniture)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={furniture.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">製作 - 雜項 (Miscellaneous)</h3>
          <ResponsiveTable
            headers={['物品', '材料', '配方來源']}
            data={miscellaneousCrafting.map((item: CraftingItemBase) => [
              item.name,
              item.ingredients,
              item.recipeSource
            ])}
          />
          <InfoBox>
            <strong>稻草人範圍說明:</strong><br />
            標準稻草人範圍為 8 格半徑。豪華稻草人範圍加倍。
            <br />
            <br />
            <strong>關於農場外放置物品:</strong><br />
            可以在農場外面放置製作物品，方便儲存。如果村民經過該格子，物品會被摧毀，但寶箱會自動移開。
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">工匠製品 (Artisan Goods)</h3>
          <p className="mb-3 text-justify">
            將農產品加工成工匠製品，可以大幅提升它們的價值。
          </p>
          <ResponsiveTable
            headers={['物品', '製作設備', '備註']}
            data={artisanGoods.map((item: ArtisanGoodItem) => [
              item.name,
              item.madeWith,
              item.notes
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">脫水與煙燻食品 (Dehydrated and Smoked Foods)</h3>
          <ResponsiveTable
            headers={['物品', '製作設備', '使用材料', '售價', '恢復量']}
            data={dehydratedSmokedFoods.map((item: DehydratedSmokedFoodItem) => [
              item.name,
              item.madeWith,
              item.using,
              item.sellPrice,
              item.restoration
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">其他配料 (Other Ingredients)</h3>
          <ResponsiveTable
            headers={['物品', '製作設備', '使用材料', '售價', '恢復量']}
            data={otherIngredients.map((item: OtherIngredientItem) => [
              item.name,
              item.madeWith,
              item.using,
              item.sellPrice,
              item.restoration
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">烹飪 (Cooking)</h3>
          <p className="mb-3 text-justify">
            烹飪食譜可以透過電視、村民好感度、商店購買或特定事件獲得。烹飪食物能恢復大量能量和生命值，部分還能提供增益效果。
          </p>
          <ResponsiveTable
            headers={['菜餚', '材料', '恢復量', '增益', '食譜來源', '售價']}
            data={cookingRecipes.map((recipe: CookingRecipeItem) => [
              recipe.name,
              recipe.ingredients,
              recipe.restoration,
              recipe.buffs,
              recipe.recipeSource,
              recipe.sell
            ])}
          />
          <InfoBox>
            <strong>關於烹飪備註:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>齊先生的調味料（如果存在於你的背包、冰箱或小冰箱中）將使任何烹飪菜餚都變成金色品質。</li>
              <li>這些金色品質的菜餚比普通菜餚多賣 66% 的價格，食用時多恢復 55% 的能量，增加 +1 任何現有的增益（除了速度），並將增益持續時間增加 50%。</li>
              <li>它可以在齊先生的核桃房用 10 齊幣購買。</li>
            </ul>
          </InfoBox>
        </Section>

        {/* 作物與果樹 */}
        <Section id="crops-fruit-trees" title="🍎 作物與果樹">
          {cropsAndFruitTreesNotes.map((note, index) => (
            <InfoBox key={`crops-trees-note-${index}`}>
              {note}
            </InfoBox>
          ))}

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">春季作物 (Spring Crops)</h3>
          <ResponsiveTable
            headers={['作物', '種子價格', '作物售價', '恢復量', '收穫時間']}
            data={springCropsDetailed.map((crop: DetailedCropData) => [
              crop.name,
              crop.seedPrice,
              crop.cropPrice,
              crop.restoration,
              crop.harvestTime
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">夏季作物 (Summer Crops)</h3>
          <ResponsiveTable
            headers={['作物', '種子價格', '作物售價', '恢復量', '收穫時間']}
            data={summerCropsDetailed.map((crop: DetailedCropData) => [
              crop.name,
              crop.seedPrice,
              crop.cropPrice,
              crop.restoration,
              crop.harvestTime
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">秋季作物 (Fall Crops)</h3>
          <ResponsiveTable
            headers={['作物', '種子價格', '作物售價', '恢復量', '收穫時間']}
            data={fallCropsDetailed.map((crop: DetailedCropData) => [
              crop.name,
              crop.seedPrice,
              crop.cropPrice,
              crop.restoration,
              crop.harvestTime
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">果樹 (Fruit Trees)</h3>
          <p className="mb-3 text-justify">
            果樹需要 28 天才能長大並在對應季節結果，不需要每天澆水。
          </p>
          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">春季果樹</h4>
          <ResponsiveTable
            headers={['樹種', '樹苗價格', '果實售價', '恢復量', '成長時間']}
            data={springFruitTrees.map((tree: FruitTreeData) => [
              tree.name,
              tree.saplingPrice,
              tree.fruitPrice,
              tree.restoration,
              tree.growthTime
            ])}
          />
          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">夏季果樹</h4>
          <ResponsiveTable
            headers={['樹種', '樹苗價格', '果實售價', '恢復量', '成長時間']}
            data={summerFruitTrees.map((tree: FruitTreeData) => [
              tree.name,
              tree.saplingPrice,
              tree.fruitPrice,
              tree.restoration,
              tree.growthTime
            ])}
          />
          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">秋季果樹</h4>
          <ResponsiveTable
            headers={['樹種', '樹苗價格', '果實售價', '恢復量', '成長時間']}
            data={fallFruitTrees.map((tree: FruitTreeData) => [
              tree.name,
              tree.saplingPrice,
              tree.fruitPrice,
              tree.restoration,
              tree.growthTime
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">特殊植物 (Unique Plants)</h3>
          <ResponsiveTable
            headers={['作物', '種子價格', '作物售價', '恢復量', '收穫時間']}
            data={uniquePlants.map((plant: UniquePlantData) => [
              plant.name,
              plant.seedPrice,
              plant.cropPrice,
              plant.restoration,
              plant.harvestTime
            ])}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">肥料 (Fertilizers)</h3>
          <ResponsiveTable
            headers={['肥料', '價格', '材料', '產量', '配方來源']}
            data={fertilizerDetails.map((fertilizer: FertilizerDetails) => [
              fertilizer.name,
              fertilizer.price,
              fertilizer.ingredients,
              fertilizer.produced,
              fertilizer.recipeSource
            ])}
          />
          <InfoBox>
            <strong>關於肥料備註:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>肥料會持續整個季節。如果種植多季作物，它甚至可以延續到下個季節。</li>
              <li>速生肥會將生長速度提高至少 10%。高級速生肥會將生長速度提高至少 25%。豪華速生肥會將生長速度提高至少 33%。速生肥不會減少多收穫作物的收穫間隔時間。</li>
              <li>樹木肥料只對野生樹木有效；它不會改變果樹的生長。</li>
            </ul>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">作物品質比率 (Crop Quality Ratios)</h3>
          <p className="mb-3 text-justify">
            下表顯示了在不同耕作等級和使用不同肥料時，作物獲得不同品質（普通、銀星、金星、銥星）的機率。
          </p>
          <ResponsiveTable
            headers={['耕作等級', '普通品質', '基礎肥料', '品質肥料', '豪華肥料', '銀星品質', '基礎肥料', '品質肥料', '豪華肥料', '金星品質', '基礎肥料', '品質肥料', '豪華肥料', '銥星品質']}
            data={cropQualityRatios.map((ratio: CropQualityRatio) => [
              ratio.level,
              ratio.regular.normal, ratio.regular.basic, ratio.regular.quality, ratio.regular.deluxe,
              ratio.silver.normal, ratio.silver.basic, ratio.silver.quality, ratio.silver.deluxe,
              ratio.gold.normal, ratio.gold.basic, ratio.gold.quality, ratio.gold.deluxe,
              ratio.iridium
            ])}
          />
          <InfoBox>
            <strong>關於作物品質比率備註:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>技能等級只能提升到 10 級；14 級以上的等級是透過增益獲得的。</li>
            </ul>
          </InfoBox>
        </Section>

        {/* 進階技巧 */}
        <Section id="tips" title="💡 進階技巧與經驗分享">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">賺錢技巧</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">初期賺錢（第一年春夏）</h4>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li><strong>種植高收益作物:</strong> 春季草莓、夏季藍莓、秋季蔓越莓</li>
            <li><strong>採集與釣魚:</strong> 採集野生食材、釣魚賣錢</li>
            <li><strong>完成任務:</strong> 公告板任務和村民委託</li>
            <li><strong>開寶箱:</strong> 海灘、礦井的寶箱有值錢物品</li>
          </ol>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">中期賺錢（第一年秋冬至第二年）</h4>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li><strong>養殖動物:</strong> 雞、牛、豬等可產蛋、牛奶、松露</li>
            <li><strong>加工產品:</strong> 蛋黃醬機、起司壓製機</li>
            <li><strong>釀酒:</b> 將水果製成果酒（價值×3）</li>
            <li><strong>挖礦:</strong> 賣礦石和寶石</li>
          </ol>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">後期賺錢（第二年以後）</h4>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li><strong>大規模種植上古水果:</strong> 製成果酒每瓶 2,310g</li>
            <li><strong>養豬找松露:</strong> 豬會挖松露（每個 625g）</li>
            <li><strong>溫室種植:</strong> 全年種植高價作物</li>
            <li><strong>養蜂:</strong> 花蜜可製成蜂蜜賣錢</li>
          </ol>

          <InfoBox>
            <strong>💎 最賺錢的物品排行:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>上古水果果酒（2,310g）</li>
              <li>星之果實果酒（2,250g）</li>
              <li>寶石甜莓果酒（2,100g）</li>
              <li>松露油（1,065g）</li>
              <li>金星起司（420g）</li>
            </ol>
          </InfoBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">時間管理技巧</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>使用灑水器:</strong> 節省每天澆水時間</li>
            <li><strong>規劃路線:</strong> 採集、釣魚、挖礦安排在同一趟</li>
            <li><strong>利用下雨天:</strong> 專心挖礦或釣魚</li>
            <li><strong>晚上採集:</strong> 某些物品只在晚上出現</li>
            <li><strong>備用食物:</strong> 隨身帶食物補充能量</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">農場佈局建議</h3>
          <TipBox>
            <strong>🏡 高效農場規劃:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>集中種植區:</strong> 作物集中便於澆水和收割</li>
              <li><strong>灑水器配置:</strong> 使用品質灑水器（3×3範圍）</li>
              <li><strong>加工區:</strong> 集中放置加工機器（釀酒桶、蛋黃醬機等）</li>
              <li><strong>畜舍區:</strong> 靠近草地，方便動物吃草</li>
              <li><strong>倉庫:</strong> 放置常用物品，靠近工作區</li>
            </ul>
          </TipBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">社區中心 vs JoJa超市</h3>
          <ResponsiveTable
            headers={['選項', '完成方式', '獎勵', '推薦']}
            data={communityCenterVsJoja}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">工具升級優先順序</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li><strong>噴壺:</strong> 最優先！銅製噴壺可一次澆3格</li>
            <li><strong>十字鎬:</strong> 挖礦必備，越快升級越好</li>
            <li><strong>斧頭:</strong> 清理農場和採集硬木</li>
            <li><strong>鋤頭:</strong> 可以一次翻多格土</li>
            <li><strong>魚竿:</strong> 釣魚愛好者優先</li>
          </ol>

          <WarningBox>
            <strong>⚠️ 工具升級注意:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>升級需要 2 個工作日（隔天才能取回）</li>
              <li>升級期間無法使用該工具</li>
              <li>建議在冬季或雨天升級</li>
              <li>鐵匠柯林特的商店開放時間: 9:00-16:00</li>
            </ul>
          </WarningBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">能量管理</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>吃食物:</strong> 恢復能量和生命值</li>
            <li><strong>泡溫泉:</strong> 完全恢復（需解鎖）</li>
            <li><strong>升級房屋:</strong> 有廚房可以烹飪</li>
            <li><strong>吃星之果實:</strong> 永久提升最大能量</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">iOS 版本特殊技巧</h3>
          <InfoBox>
            <strong>📱 iOS 專屬提示:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>自動存檔:</strong> 每天睡覺時自動保存</li>
              <li><strong>背包整理:</strong> 長按物品可快速整理</li>
              <li><strong>縮放畫面:</strong> 雙指縮放調整視野</li>
              <li><strong>快速移動:</strong> 點擊小地圖可快速移動視角</li>
              <li><strong>自動攻擊:</strong> 設定中可開啟自動攻擊模式</li>
            </ul>
          </InfoBox>
        </Section>

        {/* 小秘技 */}
        <Section id="cheats" title="🎯 實用小秘技與彩蛋">
          <CheatBox>
            <strong>⚠️ 使用前須知:</strong><br />
            以下技巧有些屬於遊戲設計內的小技巧，有些則是利用遊戲機制。iOS版本無法使用修改器，但可以使用這些合法的遊戲內技巧。建議新手先正常遊玩，熟悉後再使用這些技巧。
          </CheatBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">合法的遊戲內技巧</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">1. 物品命名法（iOS 可用）</h4>
          <p className="mb-3 text-justify">
            這是遊戲內建的彩蛋功能，在某些 NPC 說出你命名的內容時，可以觸發物品生成。
          </p>
          <TipBox>
            <strong>使用方法:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>在瑪妮的牧場購買動物</li>
              <li>給動物命名為物品代碼，例如: <code>[74]</code></li>
              <li>瑪妮說出名字時會獲得對應物品</li>
            </ol>

            <p className="mt-2"><strong>常用物品代碼:</strong></p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li><code>[74]</code> - 彩虹碎片</li>
              <li><code>[163]</code> - 傳說之魚</li>
              <li><code>[166]</code> - 財寶箱</li>
              <li><code>[337]</code> - 銥錠</li>
              <li><code>[347]</code> - 稀有種子</li>
              <li><code>[434]</code> - 星之果實</li>
              <li><code>[645]</code> - 銥灑水器</li>
              <li><code>[789]</code> - 鎮長的短褲（惡搞彩蛋）</li>
            </ul>
          </TipBox>

          <WarningBox>
            <strong>注意:</strong> 1.4 版本後，動物命名不能使用 [] 符號，但可以改用角色名稱的方式。這個方法僅供娛樂參考，可能影響遊戲體驗。
          </WarningBox>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">2. 電視學習</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>週日看「活力廚房」:</strong> 學習免費烹飪食譜</li>
            <li><strong>每天看「生活小技巧」:</strong> 獲得遊戲技巧</li>
            <li><strong>看天氣預報:</strong> 計劃明天的活動</li>
            <li><strong>看占卜:</strong> 幸運日挖礦、釣魚效果更好</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">3. 垃圾桶翻找</h4>
          <p className="mb-3 text-justify">
            雖然會降低村民好感度，但垃圾桶裡有時有好東西:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>喬治和伊芙琳的垃圾桶: 餅乾</li>
            <li>酒館垃圾桶: 食物</li>
            <li>喬迪的垃圾桶: 偶爾有稀有物品</li>
            <li>不要在 NPC 看到時翻垃圾桶</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">4. 種子製造機</h4>
          <p className="mb-3 text-justify">
            將作物放入種子製造機，可以製造該作物的種子（1-3顆）:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>特別適合上古水果和甜寶石莓</li>
            <li>可以無限複製稀有種子</li>
            <li>製造時間: 20-30分鐘遊戲時間</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">5. 採集點固定位置</h4>
          <p className="mb-3 text-justify">
            某些採集物品會在固定位置刷新:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>山頂東側:</strong> 春天有大量水仙花</li>
            <li><strong>下水道:</strong> 每天有機率刷新稀有魚</li>
            <li><strong>鐵軌附近:</strong> 夏天有大量黑莓</li>
            <li><strong>秘密森林:</strong> 全年都有硬木和野生種子</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">6. 幸運日利用</h4>
          <p className="mb-3 text-justify">
            電視占卜顯示「非常幸運」時:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>去骷髏洞穴挖銥礦石</li>
            <li>釣魚更容易釣到寶箱和傳奇魚</li>
            <li>開晶洞更容易出好東西</li>
            <li>在沙漠賭場玩老虎機運氣更好</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">7. 農場快速清理</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>使用炸彈:</strong> 清理大量石頭和樹木</li>
            <li><strong>升級斧頭和十字鎬:</strong> 一次清理更多</li>
            <li><strong>留下部分樹木:</strong> 持續提供木材</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">隱藏內容與彩蛋</h3>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">秘密森林</h4>
          <p className="mb-3 text-justify">
            位於煤礦森林左上角，需要升級斧頭砍斷大木頭進入:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>每天刷新 6 根硬木</li>
            <li>有大樹樁可收集硬木</li>
            <li>可以釣到鯰魚和鯉魚</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">沙漠</h4>
          <p className="mb-3 text-justify">
            完成社區中心或花 40,000g 修復巴士後可前往:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>骷髏洞穴:</strong> 無限層礦洞</li>
            <li><strong>沙漠商人:</strong> 出售稀有種子和物品</li>
            <li><strong>三柱之謎:</strong> 放彩虹碎片獲得銀河劍</li>
            <li><strong>賭場:</strong> 用遊戲幣兌換稀有物品</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">下水道</h4>
          <p className="mb-3 text-justify">
            捐贈 60 件文物給博物館，館長會送你下水道鑰匙:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>可以釣到變種鯉魚（傳奇魚）</li>
            <li>有史萊姆可以打</li>
            <li>可以購買史萊姆蛋</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-600 mt-4 mb-2">巫師塔</h4>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>完成社區中心「魔法物品」包裹後可進入</li>
            <li>可以學習魔法: 變成動物、傳送等</li>
            <li>可以更改角色外觀（花費 500g）</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">省錢小技巧</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>不要買乾草:</strong> 用鐮刀割草可獲得免費乾草</li>
            <li><strong>製作而不是購買:</strong> 很多物品可以自己製作</li>
            <li><strong>利用冬季:</strong> 不用澆水，專心挖礦賺錢</li>
            <li><strong>完成社區中心:</strong> 免費獲得很多設施</li>
            <li><strong>釣魚賺快錢:</strong> 前期最快的賺錢方式</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">iOS 版限制說明</h3>
          <WarningBox>
            <strong>📱 iOS 版本無法使用:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>❌ PC版的修改器（CJB Cheats Menu）</li>
              <li>❌ SMAPI 控制台命令</li>
              <li>❌ 遊戲文件修改</li>
              <li>❌ 第三方MOD</li>
            </ul>

            <p className="mt-2"><strong>替代方案:</strong></p>
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>✅ 使用遊戲內合法技巧</li>
              <li>✅ 利用遊戲機制（如種子製造機）</li>
              <li>✅ 優化農場佈局提高效率</li>
              <li>✅ 如需MOD，可考慮PC版或越獄（不推薦）</li>
            </ul>
          </WarningBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">彩蛋與有趣發現</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>鎮長的短褲:</strong> 可以在瑪妮房間找到，放入展覽會展示會有特殊反應</li>
            <li><strong>矮人卷軸:</strong> 收集四個矮人卷軸可以解鎖矮人語言</li>
            <li><strong>美人魚表演:</strong> 冬季夜市可以看表演</li>
            <li><strong>電影院:</strong> 完成社區中心後可解鎖，帶村民看電影</li>
            <li><strong>帽子老鼠:</strong> 森林廢棄房子裡可以買帽子</li>
          </ul>
        </Section>

        {/* 總結建議 */}
        <Section id="summary" title="🌟 給新手的總結建議">
          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">第一年目標</h3>
          <ol className="list-decimal list-inside space-y-1 mb-4">
            <li><strong>春季:</strong> 種植草莓，存錢買夏季種子</li>
            <li><strong>夏季:</strong> 大量種植藍莓，升級工具</li>
            <li><strong>秋季:</strong> 種植蔓越莓，完成社區中心獻祭</li>
            <li><strong>冬季:</strong> 挖礦、釣魚、提升村民好感度</li>
          </ol>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">優先度排序</h3>
          <ResponsiveTable
            headers={['優先度', '任務', '說明']}
            data={toolUpgradePriority}
          />

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">常見新手錯誤</h3>
          <WarningBox>
            <strong>❌ 避免這些錯誤:</strong>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li><strong>不要在春13日前賣完所有錢:</strong> 留錢買草莓種子</li>
              <li><strong>不要忽視社區中心:</strong> 獎勵非常有價值</li>
              <li><strong>不要把所有能量用完:</strong> 留一些能量回家</li>
              <li><strong>不要隨便送禮:</strong> 先了解村民喜好</li>
              <li><strong>不要忘記每天跟 NPC 對話:</strong> 增加好感度</li>
              <li><strong>不要在季節最後幾天種長週期作物:</strong> 會枯死</li>
              <li><strong>不要急著結婚:</strong> 先享受單身生活</li>
            </ol>
          </WarningBox>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">遊玩建議</h3>
          <InfoBox>
            <strong>💭 享受遊戲的最佳方式:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>這是一個放鬆的遊戲，不需要追求完美</li>
              <li>沒有時間限制，可以慢慢探索</li>
              <li>每個玩家都有自己的節奏和玩法</li>
              <li>不要壓力過大，享受農村生活</li>
              <li>多嘗試不同的活動，找到你喜歡的玩法</li>
              <li>與村民建立關係是遊戲的重要部分</li>
              <li>第一次遊玩建議不要過度依賴攻略</li>
            </ul>
          </InfoBox>
        </Section>

        {/* 結語 */}
        <Section id="conclusion" title="📝 結語">
          <p className="mb-3 text-justify">
            《星露谷物語》是一款內容豐富、玩法多樣的遊戲。這份攻略涵蓋了新手入門到進階技巧的各個方面，希望能幫助你在星露谷開始美好的農村生活。
          </p>

          <p className="mb-3 text-justify">
            記住，這個遊戲沒有所謂的「正確玩法」，最重要的是找到你自己喜歡的遊玩方式。無論是專注農業、熱愛釣魚、喜歡挖礦，還是只想與村民建立關係，都是很棒的遊戲體驗。
          </p>

          <p className="mb-3 text-justify">
            祝你在星露谷有個愉快的農場生活！🌻
          </p>

          <TipBox>
            <strong>💡 最後的小提示:</strong>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>定期備份存檔（iOS 會自動同步 iCloud）</li>
              <li>遊戲會定期更新，注意查看更新內容</li>
              <li>加入星露谷物語社群，與其他玩家交流</li>
              <li>遊戲有豐富的更新內容（1.6版本加入了許多新內容）</li>
              <li>善用遊戲內的百科（按 E 鍵）查詢資訊</li>
            </ul>
          </TipBox>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default App;