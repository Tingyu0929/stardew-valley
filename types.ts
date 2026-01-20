
export enum Season {
  Spring = 'spring',
  Summer = 'summer',
  Fall = 'fall',
  Winter = 'winter',
}

export interface CropData {
  name: string;
  growthDays: string;
  salePrice?: string;
  seedPrice?: string;
  recommendation?: string;
  characteristics?: string;
  season?: string;
  acquisition?: string;
  description?: string;
}

export interface NPCData {
  name: string;
  birthday: string;
  favoriteGifts: string;
  characteristics: string;
}

export interface BookItem {
  name: string;
  locationAndPrice: string;
  effect: string;
  subsequentReadingEffect: string;
}

export interface SkillBookItem {
  name: string;
  locationAndPrice: string;
  effect: string;
}

export interface BundleRequirement {
  name: string;
  quantity?: string; // e.g., "99"
  quality?: string; // e.g., "Gold+"
  source: string;
}

export interface BundleData {
  name: string;
  requirements: BundleRequirement[];
  rewards: string[]; // e.g., "Charcoal Kiln (1)"
  note?: string; // Additional notes like "Need 5 of 9 to complete"
}

// --- Clothing Types ---
export interface HatItem {
  name: string;
  source: string;
  achievement: string;
}

export interface TailoredClothingBase {
  name: string;
  dyeable: boolean;
  recipe: string;
}

export interface TailoredHatRecipe extends TailoredClothingBase {}
export interface TailoredShirtRecipe extends TailoredClothingBase {}
export interface TailoredPantsRecipe extends TailoredClothingBase {}

// --- Combat & Equipment Types ---
export interface WeaponBase {
  name: string;
  level: number;
  damage: string;
  critChance: number | string; // Some are '0'
  stats: string;
  location: string;
  purchasePrice: string;
  type?: string; // For Miscellaneous Melee Weapons
}

export interface SlingshotItem {
  name: string;
  damage: string;
  critChance: number;
  location: string;
}

export interface SlingshotAmmo {
  ammunition: string;
  ammoMult: number;
}

export interface BootItem {
  name: string;
  stats: string;
  source: string;
  purchasePrice: string;
}

export interface RingItem {
  name: string;
  effect: string;
  location: string;
  purchasePrice: string;
  sellPrice: string;
}

export interface ForgeGemEffect {
  gem: string;
  effect: string;
}

export interface CombatEnchantment {
  name: string;
  effect: string;
}

export interface InnateEnchantment {
  enchantment: string;
  effect: string;
  mandatorySet?: string; // 'X' if mandatory
}

export interface ToolEnchantmentItem {
  name: string;
  axe: boolean;
  rod: boolean;
  hoe: boolean;
  pick: boolean;
  can: boolean;
  pan: boolean;
  effect: string;
}

// --- Crafting & Cooking Types ---
export interface CraftingItemBase {
  name: string;
  ingredients: string;
  recipeSource: string;
  decayTime?: string; // For fences
  purpose?: string; // For Artisan Equipment
}

export interface EdibleCraftable {
  name: string;
  ingredients: string;
  restoration: string;
  recipeSource: string;
}

export interface ArtisanGoodItem {
  name: string;
  madeWith: string;
  notes: string;
}

export interface DehydratedSmokedFoodItem {
  name: string;
  madeWith: string;
  using: string;
  sellPrice: string;
  restoration: string;
}

export interface OtherIngredientItem {
  name: string;
  madeWith: string;
  using: string;
  sellPrice: string;
  restoration: string;
}

export interface CookingRecipeItem {
  name: string;
  ingredients: string;
  restoration: string;
  buffs: string;
  recipeSource: string;
  sell: string;
}


// --- Crops & Fruit Trees Types ---
export interface DetailedCropData {
  name: string;
  seedPrice: string;
  cropPrice: string;
  restoration: string;
  harvestTime: string;
}

export interface FruitTreeData {
  name: string;
  saplingPrice: string;
  fruitPrice: string;
  restoration: string;
  growthTime: string;
}

export interface UniquePlantData {
  name: string;
  seedPrice: string;
  cropPrice: string;
  restoration: string;
  harvestTime: string;
}

export interface FertilizerDetails {
  name: string;
  price: string;
  ingredients: string;
  produced: string;
  recipeSource: string;
}

export interface CropQualityRatio {
  level: number | string; // Can be a number or 'O'
  regular: {
    normal: number | string;
    basic: number | string;
    quality: number | string;
    deluxe: number | string;
  };
  silver: {
    normal: number | string;
    basic: number | string;
    quality: number | string;
    deluxe: number | string;
  };
  gold: {
    normal: number | string;
    basic: number | string;
    quality: number | string;
    deluxe: number | string;
  };
  iridium: number | string;
}