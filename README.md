# 🌾 星露谷物語 完整攻略 - 多檔案版本

## 📱 如何使用

### 在手機上使用：
1. **下載整個資料夾**到手機
2. 用瀏覽器（Safari或Chrome）打開 `index.html`
3. 點擊卡片進入各個章節
4. **完全離線可用！**

### 在iPhone上像APP一樣使用：
1. 用Safari打開 `index.html`
2. 點擊下方的「分享」按鈕 📤
3. 選擇「加入主畫面」
4. 攻略就會出現在桌面上，像APP一樣！

## ✅ 目前已完成的檔案

### 1. index.html ✅
**首頁目錄頁**
- 美觀的卡片式導覽（11個章節）
- 使用說明和推薦閱讀順序
- 響應式設計（手機/平板/電腦）

### 2. fishing.html ✅ 
**釣魚完整指南（示例頁面）**
- 🐟 完整魚類圖鑑（海洋、河流、特殊地點）
- ⭐ 傳說魚王詳細攻略（5種傳說魚）
- 🎣 魚竿升級指南
- 🦀 蟹籠捕獲物
- 🌙 冬季夜市特殊魚類
- 💡 漁具選擇和釣魚技巧
- **表格標題固定功能**（滾動時標題保持在上方）

### 3. style.css ✅
**共用樣式檔案**
- 🔍 **固定表格標題**（position: sticky，解決你的困擾！）
- 📱 響應式設計
- 🎨 美觀配色
- 📦 資訊提示框（tip-box, warning-box等）

## 📁 完整檔案規劃

```
stardew_guide/
├── index.html              ✅ 首頁目錄（已完成）
├── style.css               ✅ 共用樣式（已完成）
├── fishing.html            ✅ 釣魚指南（已完成 - 完整示例）
│
├── getting-started.html    ⏳ 新手入門（待創建）
├── map.html                ⏳ 地圖指南（待創建）
├── farming.html            ⏳ 種植指南（待創建）
├── characters.html         ⏳ 人物關係+生日（待創建）
├── seasons.html            ⏳ 四季活動（待創建）
├── bundles.html            ⏳ 社區中心收集包（待創建）
├── mining-combat.html      ⏳ 挖礦+戰鬥裝備（待創建）
├── books.html              ⏳ 書籍系統（待創建）
├── buildings.html          ⏳ 建築升級（待創建）
└── tips.html               ⏳ 進階技巧+小秘技（待創建）
```

## 🎯 已完成的核心功能

### ✨ 表格固定標題（重點功能！）
- 滾動長表格時，標題列（th）會固定在導航欄下方
- 再也不會搞混欄位是什麼！
- 在所有頁面的所有表格都有效

### 📱 完美的行動裝置支援
- 自動適應手機、平板螢幕
- 觸控友好的按鈕大小
- 清晰易讀的字體

### 🔗 智慧導航系統
- 每個頁面都有導航欄
- 點擊「🏠 返回首頁」回到目錄
- 可以在章節間快速跳轉

### 📶 完全離線使用
- 所有檔案都在本地
- 不需要網路連線
- 隨時隨地查閱

## 🚀 下一步：如何擴展

目前已經提供了：
1. 完整的基礎架構
2. 一個完整的示例頁面（fishing.html）
3. 統一的樣式系統

你可以：

### 選項A：請我繼續創建其他頁面
告訴我你最需要哪些頁面，我可以依序創建：
- mining-combat.html（挖礦+武器裝備）
- bundles.html（社區中心收集包）
- characters.html（人物關係+生日）
- 其他...

### 選項B：自己擴展
參考 `fishing.html` 的結構，複製並修改內容即可。

## 📋 頁面模板結構

每個頁面都遵循這個結構：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>章節名稱 - 星露谷物語攻略</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 章節標題</h1>
            <p>副標題</p>
        </div>
        
        <div class="nav">
            <a href="index.html" class="home">🏠 返回首頁</a>
            <a href="#section1">段落1</a>
            <a href="#section2">段落2</a>
            <!-- 更多導航連結 -->
        </div>
        
        <div class="content">
            <section id="section1" class="section">
                <h2>主要標題</h2>
                <!-- 內容 -->
            </section>
        </div>
        
        <div class="footer">
            <p><a href="index.html">🏠 返回首頁</a></p>
            <p>頁面標題</p>
        </div>
    </div>
</body>
</html>
```

## 💡 使用技巧

### 表格的正確寫法（固定標題）
```html
<table>
    <thead>
        <tr>
            <th>欄位1</th>
            <th>欄位2</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>資料1</td>
            <td>資料2</td>
        </tr>
    </tbody>
</table>
```

### 資訊提示框
```html
<div class="tip-box">
    <strong>💡 提示：</strong>
    <p>這是一個提示框</p>
</div>

<div class="warning-box">
    <strong>⚠️ 注意：</strong>
    <p>這是一個警告框</p>
</div>

<div class="info-box">
    <strong>ℹ️ 資訊：</strong>
    <p>這是一個資訊框</p>
</div>

<div class="cheat-box">
    <strong>🎯 秘技：</strong>
    <p>這是一個秘技框</p>
</div>
```

## ⚠️ 重要注意事項

1. **所有檔案必須在同一個資料夾**
   - HTML檔案需要讀取 `style.css`
   - 不要移動或刪除任何檔案

2. **檔案命名要一致**
   - 連結中的檔名要跟實際檔名完全一樣
   - 例如：`href="fishing.html"` 對應 `fishing.html`

3. **分享給朋友**
   - 整個資料夾打包成ZIP檔
   - 解壓縮後即可使用

## 📊 目前進度

✅ 基礎架構完成（100%）
✅ 首頁完成（100%）
✅ 樣式系統完成（100%）
✅ 示例頁面完成（fishing.html，100%）
⏳ 其他10個頁面待創建（0%）

**總體完成度：約 25%**

## 🎮 接下來要做什麼？

**建議：**告訴我你最需要哪幾個頁面，我會優先創建那些！

例如：
- "請幫我創建挖礦戰鬥頁面（mining-combat.html）"
- "請幫我創建社區中心頁面（bundles.html）"
- "請幫我創建人物關係頁面（characters.html）"

或者一次全部：
- "請幫我把所有頁面都創建完成"

---

**製作日期：** 2026年1月20日  
**版本：** v1.0 - 基礎架構版  
**遊戲版本：** 星露谷物語 iOS 1.6+

🌾 祝你在星露谷玩得開心！🌾
