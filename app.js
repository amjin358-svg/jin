const CITY_LOCATIONS = [
  { name: "臺北市", lat: 25.033, lon: 121.5654 },
  { name: "新北市", lat: 25.012, lon: 121.4657 },
  { name: "基隆市", lat: 25.1276, lon: 121.7392 },
  { name: "桃園市", lat: 24.9936, lon: 121.301 },
  { name: "新竹市", lat: 24.8138, lon: 120.9675 },
  { name: "新竹縣", lat: 24.8387, lon: 121.0177 },
  { name: "苗栗縣", lat: 24.5602, lon: 120.8214 },
  { name: "臺中市", lat: 24.1477, lon: 120.6736 },
  { name: "彰化縣", lat: 24.0838, lon: 120.5384 },
  { name: "南投縣", lat: 23.9609, lon: 120.9719 },
  { name: "雲林縣", lat: 23.7092, lon: 120.4313 },
  { name: "嘉義市", lat: 23.4801, lon: 120.4491 },
  { name: "嘉義縣", lat: 23.4518, lon: 120.2555 },
  { name: "臺南市", lat: 22.9997, lon: 120.227 },
  { name: "高雄市", lat: 22.6273, lon: 120.3014 },
  { name: "屏東縣", lat: 22.5519, lon: 120.5488 },
  { name: "宜蘭縣", lat: 24.7021, lon: 121.7378 },
  { name: "花蓮縣", lat: 23.9872, lon: 121.6015 },
  { name: "臺東縣", lat: 22.7583, lon: 121.1444 },
  { name: "澎湖縣", lat: 23.5712, lon: 119.5793 },
  { name: "金門縣", lat: 24.4492, lon: 118.3765 },
  { name: "連江縣", lat: 26.1543, lon: 119.9517 }
];

const TOWNSHIP_LOCATIONS = [
  { city: "臺北市", town: "中正區", lat: 25.0324, lon: 121.5183 },
  { city: "臺北市", town: "大同區", lat: 25.0627, lon: 121.5113 },
  { city: "臺北市", town: "中山區", lat: 25.0689, lon: 121.5337 },
  { city: "臺北市", town: "松山區", lat: 25.0542, lon: 121.5638 },
  { city: "臺北市", town: "大安區", lat: 25.0263, lon: 121.5435 },
  { city: "臺北市", town: "萬華區", lat: 25.0358, lon: 121.4997 },
  { city: "臺北市", town: "信義區", lat: 25.0335, lon: 121.5627 },
  { city: "臺北市", town: "士林區", lat: 25.0928, lon: 121.5244 },
  { city: "臺北市", town: "北投區", lat: 25.1323, lon: 121.5015 },
  { city: "臺北市", town: "內湖區", lat: 25.0697, lon: 121.5891 },
  { city: "臺北市", town: "南港區", lat: 25.0546, lon: 121.6068 },
  { city: "臺北市", town: "文山區", lat: 24.9898, lon: 121.5705 },
  { city: "新北市", town: "板橋區", lat: 25.0119, lon: 121.4628 },
  { city: "新北市", town: "三重區", lat: 25.062, lon: 121.487 },
  { city: "新北市", town: "中和區", lat: 24.999, lon: 121.499 },
  { city: "新北市", town: "永和區", lat: 25.007, lon: 121.514 },
  { city: "新北市", town: "新莊區", lat: 25.0359, lon: 121.432 },
  { city: "新北市", town: "新店區", lat: 24.9674, lon: 121.5417 },
  { city: "新北市", town: "土城區", lat: 24.9722, lon: 121.443 },
  { city: "新北市", town: "蘆洲區", lat: 25.0847, lon: 121.4737 },
  { city: "新北市", town: "汐止區", lat: 25.0617, lon: 121.6617 },
  { city: "新北市", town: "樹林區", lat: 24.99, lon: 121.424 },
  { city: "新北市", town: "淡水區", lat: 25.1695, lon: 121.4441 },
  { city: "新北市", town: "三峽區", lat: 24.934, lon: 121.369 },
  { city: "新北市", town: "瑞芳區", lat: 25.108, lon: 121.805 },
  { city: "新北市", town: "五股區", lat: 25.083, lon: 121.433 },
  { city: "新北市", town: "泰山區", lat: 25.059, lon: 121.43 },
  { city: "新北市", town: "林口區", lat: 25.077, lon: 121.388 },
  { city: "新北市", town: "鶯歌區", lat: 24.954, lon: 121.353 },
  { city: "新北市", town: "三芝區", lat: 25.258, lon: 121.501 },
  { city: "基隆市", town: "中正區", lat: 25.151, lon: 121.774 },
  { city: "基隆市", town: "七堵區", lat: 25.095, lon: 121.713 },
  { city: "基隆市", town: "暖暖區", lat: 25.08, lon: 121.745 },
  { city: "基隆市", town: "仁愛區", lat: 25.127, lon: 121.741 },
  { city: "基隆市", town: "中山區", lat: 25.149, lon: 121.73 },
  { city: "基隆市", town: "安樂區", lat: 25.141, lon: 121.723 },
  { city: "基隆市", town: "信義區", lat: 25.129, lon: 121.753 },
  { city: "桃園市", town: "桃園區", lat: 24.9936, lon: 121.301 },
  { city: "桃園市", town: "中壢區", lat: 24.9536, lon: 121.2258 },
  { city: "桃園市", town: "平鎮區", lat: 24.944, lon: 121.216 },
  { city: "桃園市", town: "八德區", lat: 24.928, lon: 121.284 },
  { city: "桃園市", town: "楊梅區", lat: 24.908, lon: 121.145 },
  { city: "桃園市", town: "蘆竹區", lat: 25.049, lon: 121.291 },
  { city: "桃園市", town: "大溪區", lat: 24.884, lon: 121.287 },
  { city: "桃園市", town: "龍潭區", lat: 24.864, lon: 121.212 },
  { city: "桃園市", town: "龜山區", lat: 25.019, lon: 121.365 },
  { city: "桃園市", town: "大園區", lat: 25.064, lon: 121.197 },
  { city: "桃園市", town: "觀音區", lat: 25.036, lon: 121.082 },
  { city: "桃園市", town: "新屋區", lat: 24.972, lon: 121.105 },
  { city: "桃園市", town: "復興區", lat: 24.816, lon: 121.351 },
  { city: "新竹市", town: "東區", lat: 24.8018, lon: 120.9716 },
  { city: "新竹市", town: "北區", lat: 24.805, lon: 120.968 },
  { city: "新竹市", town: "香山區", lat: 24.771, lon: 120.959 },
  { city: "新竹縣", town: "竹北市", lat: 24.8387, lon: 121.0177 },
  { city: "新竹縣", town: "竹東鎮", lat: 24.736, lon: 121.088 },
  { city: "新竹縣", town: "新埔鎮", lat: 24.827, lon: 121.074 },
  { city: "新竹縣", town: "關西鎮", lat: 24.792, lon: 121.177 },
  { city: "新竹縣", town: "湖口鄉", lat: 24.903, lon: 121.045 },
  { city: "新竹縣", town: "新豐鄉", lat: 24.9, lon: 120.986 },
  { city: "新竹縣", town: "芎林鄉", lat: 24.776, lon: 121.078 },
  { city: "新竹縣", town: "橫山鄉", lat: 24.718, lon: 121.137 },
  { city: "新竹縣", town: "北埔鄉", lat: 24.698, lon: 121.056 },
  { city: "新竹縣", town: "寶山鄉", lat: 24.743, lon: 120.999 },
  { city: "新竹縣", town: "峨眉鄉", lat: 24.688, lon: 121.017 },
  { city: "新竹縣", town: "尖石鄉", lat: 24.705, lon: 121.281 },
  { city: "新竹縣", town: "五峰鄉", lat: 24.632, lon: 121.119 },
  { city: "苗栗縣", town: "苗栗市", lat: 24.5602, lon: 120.8214 },
  { city: "苗栗縣", town: "頭份市", lat: 24.688, lon: 120.907 },
  { city: "苗栗縣", town: "竹南鎮", lat: 24.686, lon: 120.873 },
  { city: "苗栗縣", town: "後龍鎮", lat: 24.615, lon: 120.789 },
  { city: "苗栗縣", town: "通霄鎮", lat: 24.491, lon: 120.679 },
  { city: "苗栗縣", town: "苑裡鎮", lat: 24.443, lon: 120.651 },
  { city: "苗栗縣", town: "卓蘭鎮", lat: 24.311, lon: 120.853 },
  { city: "苗栗縣", town: "大湖鄉", lat: 24.422, lon: 120.868 },
  { city: "苗栗縣", town: "公館鄉", lat: 24.502, lon: 120.828 },
  { city: "苗栗縣", town: "銅鑼鄉", lat: 24.487, lon: 120.786 },
  { city: "苗栗縣", town: "南庄鄉", lat: 24.597, lon: 121.0 },
  { city: "苗栗縣", town: "三義鄉", lat: 24.354, lon: 120.773 },
  { city: "臺中市", town: "中區", lat: 24.1417, lon: 120.68 },
  { city: "臺中市", town: "東區", lat: 24.137, lon: 120.697 },
  { city: "臺中市", town: "南區", lat: 24.121, lon: 120.664 },
  { city: "臺中市", town: "西區", lat: 24.143, lon: 120.662 },
  { city: "臺中市", town: "北區", lat: 24.158, lon: 120.681 },
  { city: "臺中市", town: "西屯區", lat: 24.1769, lon: 120.6399 },
  { city: "臺中市", town: "南屯區", lat: 24.141, lon: 120.637 },
  { city: "臺中市", town: "北屯區", lat: 24.1892, lon: 120.6863 },
  { city: "臺中市", town: "豐原區", lat: 24.252, lon: 120.72 },
  { city: "臺中市", town: "東勢區", lat: 24.258, lon: 120.828 },
  { city: "臺中市", town: "大里區", lat: 24.099, lon: 120.678 },
  { city: "臺中市", town: "太平區", lat: 24.124, lon: 120.721 },
  { city: "臺中市", town: "清水區", lat: 24.268, lon: 120.569 },
  { city: "臺中市", town: "沙鹿區", lat: 24.234, lon: 120.569 },
  { city: "臺中市", town: "大甲區", lat: 24.349, lon: 120.622 },
  { city: "臺中市", town: "烏日區", lat: 24.104, lon: 120.623 },
  { city: "臺中市", town: "大雅區", lat: 24.227, lon: 120.647 },
  { city: "臺中市", town: "潭子區", lat: 24.209, lon: 120.705 },
  { city: "彰化縣", town: "彰化市", lat: 24.0685, lon: 120.5575 },
  { city: "彰化縣", town: "員林市", lat: 23.959, lon: 120.572 },
  { city: "彰化縣", town: "和美鎮", lat: 24.114, lon: 120.494 },
  { city: "彰化縣", town: "鹿港鎮", lat: 24.057, lon: 120.435 },
  { city: "彰化縣", town: "溪湖鎮", lat: 23.962, lon: 120.479 },
  { city: "彰化縣", town: "田中鎮", lat: 23.861, lon: 120.581 },
  { city: "彰化縣", town: "北斗鎮", lat: 23.871, lon: 120.525 },
  { city: "彰化縣", town: "二林鎮", lat: 23.899, lon: 120.367 },
  { city: "彰化縣", town: "線西鄉", lat: 24.131, lon: 120.467 },
  { city: "彰化縣", town: "伸港鄉", lat: 24.146, lon: 120.486 },
  { city: "彰化縣", town: "福興鄉", lat: 24.047, lon: 120.431 },
  { city: "彰化縣", town: "花壇鄉", lat: 24.03, lon: 120.547 },
  { city: "南投縣", town: "南投市", lat: 23.908, lon: 120.6853 },
  { city: "南投縣", town: "埔里鎮", lat: 23.966, lon: 120.968 },
  { city: "南投縣", town: "草屯鎮", lat: 23.974, lon: 120.683 },
  { city: "南投縣", town: "竹山鎮", lat: 23.757, lon: 120.675 },
  { city: "南投縣", town: "集集鎮", lat: 23.829, lon: 120.785 },
  { city: "南投縣", town: "名間鄉", lat: 23.838, lon: 120.703 },
  { city: "南投縣", town: "鹿谷鄉", lat: 23.745, lon: 120.752 },
  { city: "南投縣", town: "中寮鄉", lat: 23.879, lon: 120.766 },
  { city: "南投縣", town: "魚池鄉", lat: 23.896, lon: 120.94 },
  { city: "南投縣", town: "國姓鄉", lat: 24.041, lon: 120.858 },
  { city: "南投縣", town: "水里鄉", lat: 23.811, lon: 120.855 },
  { city: "南投縣", town: "信義鄉", lat: 23.567, lon: 120.987 },
  { city: "南投縣", town: "仁愛鄉", lat: 24.023, lon: 121.133 },
  { city: "雲林縣", town: "斗六市", lat: 23.7119, lon: 120.5442 },
  { city: "雲林縣", town: "斗南鎮", lat: 23.679, lon: 120.477 },
  { city: "雲林縣", town: "虎尾鎮", lat: 23.708, lon: 120.433 },
  { city: "雲林縣", town: "西螺鎮", lat: 23.798, lon: 120.462 },
  { city: "雲林縣", town: "土庫鎮", lat: 23.677, lon: 120.393 },
  { city: "雲林縣", town: "北港鎮", lat: 23.575, lon: 120.302 },
  { city: "雲林縣", town: "古坑鄉", lat: 23.644, lon: 120.562 },
  { city: "雲林縣", town: "大埤鄉", lat: 23.646, lon: 120.43 },
  { city: "雲林縣", town: "莿桐鄉", lat: 23.761, lon: 120.502 },
  { city: "雲林縣", town: "林內鄉", lat: 23.759, lon: 120.615 },
  { city: "雲林縣", town: "二崙鄉", lat: 23.771, lon: 120.415 },
  { city: "雲林縣", town: "崙背鄉", lat: 23.76, lon: 120.354 },
  { city: "雲林縣", town: "麥寮鄉", lat: 23.754, lon: 120.252 },
  { city: "雲林縣", town: "東勢鄉", lat: 23.675, lon: 120.253 },
  { city: "雲林縣", town: "褒忠鄉", lat: 23.697, lon: 120.311 },
  { city: "雲林縣", town: "臺西鄉", lat: 23.702, lon: 120.199 },
  { city: "雲林縣", town: "元長鄉", lat: 23.649, lon: 120.316 },
  { city: "雲林縣", town: "四湖鄉", lat: 23.637, lon: 120.226 },
  { city: "雲林縣", town: "口湖鄉", lat: 23.583, lon: 120.185 },
  { city: "雲林縣", town: "水林鄉", lat: 23.573, lon: 120.248 },
  { city: "嘉義市", town: "東區", lat: 23.4786, lon: 120.4586 },
  { city: "嘉義市", town: "西區", lat: 23.479, lon: 120.434 },
  { city: "嘉義縣", town: "太保市", lat: 23.459, lon: 120.332 },
  { city: "嘉義縣", town: "朴子市", lat: 23.465, lon: 120.247 },
  { city: "嘉義縣", town: "布袋鎮", lat: 23.378, lon: 120.158 },
  { city: "嘉義縣", town: "大林鎮", lat: 23.604, lon: 120.454 },
  { city: "嘉義縣", town: "民雄鄉", lat: 23.551, lon: 120.429 },
  { city: "嘉義縣", town: "溪口鄉", lat: 23.603, lon: 120.395 },
  { city: "嘉義縣", town: "新港鄉", lat: 23.555, lon: 120.348 },
  { city: "嘉義縣", town: "六腳鄉", lat: 23.493, lon: 120.29 },
  { city: "嘉義縣", town: "東石鄉", lat: 23.459, lon: 120.154 },
  { city: "嘉義縣", town: "義竹鄉", lat: 23.336, lon: 120.244 },
  { city: "嘉義縣", town: "鹿草鄉", lat: 23.408, lon: 120.309 },
  { city: "嘉義縣", town: "水上鄉", lat: 23.429, lon: 120.398 },
  { city: "嘉義縣", town: "中埔鄉", lat: 23.425, lon: 120.523 },
  { city: "嘉義縣", town: "竹崎鄉", lat: 23.524, lon: 120.551 },
  { city: "嘉義縣", town: "梅山鄉", lat: 23.545, lon: 120.644 },
  { city: "嘉義縣", town: "番路鄉", lat: 23.465, lon: 120.555 },
  { city: "嘉義縣", town: "大埔鄉", lat: 23.296, lon: 120.591 },
  { city: "嘉義縣", town: "阿里山鄉", lat: 23.508, lon: 120.805 },
  { city: "臺南市", town: "中西區", lat: 22.992, lon: 120.205 },
  { city: "臺南市", town: "東區", lat: 22.981, lon: 120.228 },
  { city: "臺南市", town: "南區", lat: 22.961, lon: 120.188 },
  { city: "臺南市", town: "北區", lat: 23.01, lon: 120.207 },
  { city: "臺南市", town: "安平區", lat: 22.9997, lon: 120.1615 },
  { city: "臺南市", town: "安南區", lat: 23.047, lon: 120.185 },
  { city: "臺南市", town: "永康區", lat: 23.0265, lon: 120.2531 },
  { city: "臺南市", town: "歸仁區", lat: 22.967, lon: 120.294 },
  { city: "臺南市", town: "新化區", lat: 23.038, lon: 120.311 },
  { city: "臺南市", town: "左鎮區", lat: 23.057, lon: 120.407 },
  { city: "臺南市", town: "玉井區", lat: 23.124, lon: 120.461 },
  { city: "臺南市", town: "楠西區", lat: 23.179, lon: 120.485 },
  { city: "臺南市", town: "南化區", lat: 23.043, lon: 120.477 },
  { city: "臺南市", town: "仁德區", lat: 22.972, lon: 120.252 },
  { city: "臺南市", town: "關廟區", lat: 22.963, lon: 120.328 },
  { city: "臺南市", town: "龍崎區", lat: 22.966, lon: 120.371 },
  { city: "臺南市", town: "官田區", lat: 23.194, lon: 120.315 },
  { city: "臺南市", town: "麻豆區", lat: 23.182, lon: 120.248 },
  { city: "臺南市", town: "佳里區", lat: 23.165, lon: 120.177 },
  { city: "臺南市", town: "西港區", lat: 23.124, lon: 120.203 },
  { city: "臺南市", town: "七股區", lat: 23.141, lon: 120.101 },
  { city: "臺南市", town: "將軍區", lat: 23.199, lon: 120.127 },
  { city: "臺南市", town: "學甲區", lat: 23.232, lon: 120.181 },
  { city: "臺南市", town: "北門區", lat: 23.268, lon: 120.125 },
  { city: "臺南市", town: "新營區", lat: 23.31, lon: 120.317 },
  { city: "臺南市", town: "後壁區", lat: 23.366, lon: 120.362 },
  { city: "臺南市", town: "白河區", lat: 23.351, lon: 120.415 },
  { city: "臺南市", town: "東山區", lat: 23.326, lon: 120.404 },
  { city: "臺南市", town: "六甲區", lat: 23.232, lon: 120.348 },
  { city: "臺南市", town: "下營區", lat: 23.236, lon: 120.265 },
  { city: "臺南市", town: "柳營區", lat: 23.278, lon: 120.312 },
  { city: "臺南市", town: "鹽水區", lat: 23.32, lon: 120.267 },
  { city: "臺南市", town: "善化區", lat: 23.132, lon: 120.297 },
  { city: "臺南市", town: "大內區", lat: 23.119, lon: 120.359 },
  { city: "臺南市", town: "山上區", lat: 23.104, lon: 120.351 },
  { city: "臺南市", town: "新市區", lat: 23.078, lon: 120.295 },
  { city: "臺南市", town: "安定區", lat: 23.121, lon: 120.237 },
  { city: "高雄市", town: "新興區", lat: 22.631, lon: 120.31 },
  { city: "高雄市", town: "前金區", lat: 22.627, lon: 120.294 },
  { city: "高雄市", town: "苓雅區", lat: 22.622, lon: 120.313 },
  { city: "高雄市", town: "鹽埕區", lat: 22.624, lon: 120.284 },
  { city: "高雄市", town: "鼓山區", lat: 22.65, lon: 120.274 },
  { city: "高雄市", town: "旗津區", lat: 22.589, lon: 120.289 },
  { city: "高雄市", town: "前鎮區", lat: 22.5908, lon: 120.3076 },
  { city: "高雄市", town: "三民區", lat: 22.65, lon: 120.31 },
  { city: "高雄市", town: "楠梓區", lat: 22.727, lon: 120.328 },
  { city: "高雄市", town: "小港區", lat: 22.565, lon: 120.353 },
  { city: "高雄市", town: "左營區", lat: 22.6876, lon: 120.2944 },
  { city: "高雄市", town: "仁武區", lat: 22.701, lon: 120.348 },
  { city: "高雄市", town: "大社區", lat: 22.73, lon: 120.347 },
  { city: "高雄市", town: "岡山區", lat: 22.797, lon: 120.296 },
  { city: "高雄市", town: "路竹區", lat: 22.854, lon: 120.262 },
  { city: "高雄市", town: "阿蓮區", lat: 22.883, lon: 120.327 },
  { city: "高雄市", town: "田寮區", lat: 22.87, lon: 120.363 },
  { city: "高雄市", town: "燕巢區", lat: 22.793, lon: 120.36 },
  { city: "高雄市", town: "橋頭區", lat: 22.758, lon: 120.306 },
  { city: "高雄市", town: "梓官區", lat: 22.761, lon: 120.259 },
  { city: "高雄市", town: "彌陀區", lat: 22.783, lon: 120.248 },
  { city: "高雄市", town: "永安區", lat: 22.818, lon: 120.225 },
  { city: "高雄市", town: "湖內區", lat: 22.885, lon: 120.212 },
  { city: "高雄市", town: "鳳山區", lat: 22.627, lon: 120.357 },
  { city: "高雄市", town: "大寮區", lat: 22.606, lon: 120.395 },
  { city: "高雄市", town: "林園區", lat: 22.508, lon: 120.395 },
  { city: "高雄市", town: "鳥松區", lat: 22.659, lon: 120.364 },
  { city: "高雄市", town: "大樹區", lat: 22.693, lon: 120.431 },
  { city: "高雄市", town: "旗山區", lat: 22.888, lon: 120.483 },
  { city: "高雄市", town: "美濃區", lat: 22.898, lon: 120.541 },
  { city: "高雄市", town: "六龜區", lat: 22.998, lon: 120.633 },
  { city: "高雄市", town: "甲仙區", lat: 23.083, lon: 120.591 },
  { city: "高雄市", town: "杉林區", lat: 22.971, lon: 120.54 },
  { city: "高雄市", town: "內門區", lat: 22.942, lon: 120.463 },
  { city: "高雄市", town: "茂林區", lat: 22.886, lon: 120.663 },
  { city: "高雄市", town: "桃源區", lat: 23.159, lon: 120.764 },
  { city: "高雄市", town: "那瑪夏區", lat: 23.273, lon: 120.695 },
  { city: "屏東縣", town: "屏東市", lat: 22.669, lon: 120.488 },
  { city: "屏東縣", town: "潮州鎮", lat: 22.55, lon: 120.543 },
  { city: "屏東縣", town: "東港鎮", lat: 22.4653, lon: 120.4493 },
  { city: "屏東縣", town: "恆春鎮", lat: 22.002, lon: 120.746 },
  { city: "屏東縣", town: "萬丹鄉", lat: 22.59, lon: 120.485 },
  { city: "屏東縣", town: "長治鄉", lat: 22.676, lon: 120.53 },
  { city: "屏東縣", town: "麟洛鄉", lat: 22.65, lon: 120.527 },
  { city: "屏東縣", town: "九如鄉", lat: 22.74, lon: 120.49 },
  { city: "屏東縣", town: "里港鄉", lat: 22.779, lon: 120.495 },
  { city: "屏東縣", town: "鹽埔鄉", lat: 22.755, lon: 120.574 },
  { city: "屏東縣", town: "高樹鄉", lat: 22.827, lon: 120.601 },
  { city: "屏東縣", town: "萬巒鄉", lat: 22.572, lon: 120.567 },
  { city: "屏東縣", town: "內埔鄉", lat: 22.614, lon: 120.567 },
  { city: "屏東縣", town: "竹田鄉", lat: 22.584, lon: 120.544 },
  { city: "屏東縣", town: "新埤鄉", lat: 22.47, lon: 120.55 },
  { city: "屏東縣", town: "枋寮鄉", lat: 22.366, lon: 120.595 },
  { city: "屏東縣", town: "新園鄉", lat: 22.544, lon: 120.462 },
  { city: "屏東縣", town: "崁頂鄉", lat: 22.515, lon: 120.515 },
  { city: "屏東縣", town: "林邊鄉", lat: 22.434, lon: 120.515 },
  { city: "屏東縣", town: "南州鄉", lat: 22.49, lon: 120.51 },
  { city: "屏東縣", town: "佳冬鄉", lat: 22.418, lon: 120.548 },
  { city: "屏東縣", town: "琉球鄉", lat: 22.34, lon: 120.37 },
  { city: "屏東縣", town: "車城鄉", lat: 22.073, lon: 120.713 },
  { city: "屏東縣", town: "滿州鄉", lat: 22.021, lon: 120.838 },
  { city: "屏東縣", town: "枋山鄉", lat: 22.261, lon: 120.656 },
  { city: "屏東縣", town: "三地門鄉", lat: 22.713, lon: 120.654 },
  { city: "屏東縣", town: "霧臺鄉", lat: 22.745, lon: 120.733 },
  { city: "屏東縣", town: "瑪家鄉", lat: 22.671, lon: 120.644 },
  { city: "屏東縣", town: "泰武鄉", lat: 22.591, lon: 120.632 },
  { city: "屏東縣", town: "來義鄉", lat: 22.526, lon: 120.633 },
  { city: "屏東縣", town: "春日鄉", lat: 22.371, lon: 120.629 },
  { city: "屏東縣", town: "獅子鄉", lat: 22.202, lon: 120.706 },
  { city: "屏東縣", town: "牡丹鄉", lat: 22.126, lon: 120.775 },
  { city: "宜蘭縣", town: "宜蘭市", lat: 24.757, lon: 121.753 },
  { city: "宜蘭縣", town: "羅東鎮", lat: 24.6786, lon: 121.7669 },
  { city: "宜蘭縣", town: "蘇澳鎮", lat: 24.594, lon: 121.851 },
  { city: "宜蘭縣", town: "頭城鎮", lat: 24.859, lon: 121.823 },
  { city: "宜蘭縣", town: "礁溪鄉", lat: 24.821, lon: 121.771 },
  { city: "宜蘭縣", town: "壯圍鄉", lat: 24.747, lon: 121.793 },
  { city: "宜蘭縣", town: "員山鄉", lat: 24.742, lon: 121.723 },
  { city: "宜蘭縣", town: "冬山鄉", lat: 24.635, lon: 121.792 },
  { city: "宜蘭縣", town: "五結鄉", lat: 24.685, lon: 121.798 },
  { city: "宜蘭縣", town: "三星鄉", lat: 24.661, lon: 121.654 },
  { city: "宜蘭縣", town: "大同鄉", lat: 24.677, lon: 121.605 },
  { city: "宜蘭縣", town: "南澳鄉", lat: 24.465, lon: 121.801 },
  { city: "花蓮縣", town: "花蓮市", lat: 23.9877, lon: 121.6014 },
  { city: "花蓮縣", town: "鳳林鎮", lat: 23.745, lon: 121.448 },
  { city: "花蓮縣", town: "玉里鎮", lat: 23.336, lon: 121.315 },
  { city: "花蓮縣", town: "新城鄉", lat: 24.127, lon: 121.648 },
  { city: "花蓮縣", town: "吉安鄉", lat: 23.973, lon: 121.568 },
  { city: "花蓮縣", town: "壽豐鄉", lat: 23.871, lon: 121.509 },
  { city: "花蓮縣", town: "光復鄉", lat: 23.669, lon: 121.424 },
  { city: "花蓮縣", town: "豐濱鄉", lat: 23.602, lon: 121.521 },
  { city: "花蓮縣", town: "瑞穗鄉", lat: 23.497, lon: 121.376 },
  { city: "花蓮縣", town: "富里鄉", lat: 23.179, lon: 121.298 },
  { city: "花蓮縣", town: "秀林鄉", lat: 24.158, lon: 121.62 },
  { city: "花蓮縣", town: "萬榮鄉", lat: 23.715, lon: 121.319 },
  { city: "花蓮縣", town: "卓溪鄉", lat: 23.346, lon: 121.183 },
  { city: "臺東縣", town: "臺東市", lat: 22.7553, lon: 121.15 },
  { city: "臺東縣", town: "成功鎮", lat: 23.101, lon: 121.38 },
  { city: "臺東縣", town: "關山鎮", lat: 23.048, lon: 121.163 },
  { city: "臺東縣", town: "卑南鄉", lat: 22.783, lon: 121.087 },
  { city: "臺東縣", town: "大武鄉", lat: 22.341, lon: 120.904 },
  { city: "臺東縣", town: "太麻里鄉", lat: 22.615, lon: 121.007 },
  { city: "臺東縣", town: "東河鄉", lat: 22.97, lon: 121.302 },
  { city: "臺東縣", town: "長濱鄉", lat: 23.315, lon: 121.455 },
  { city: "臺東縣", town: "鹿野鄉", lat: 22.914, lon: 121.136 },
  { city: "臺東縣", town: "池上鄉", lat: 23.122, lon: 121.215 },
  { city: "臺東縣", town: "綠島鄉", lat: 22.662, lon: 121.49 },
  { city: "臺東縣", town: "蘭嶼鄉", lat: 22.057, lon: 121.551 },
  { city: "臺東縣", town: "延平鄉", lat: 22.902, lon: 121.086 },
  { city: "臺東縣", town: "海端鄉", lat: 23.102, lon: 121.017 },
  { city: "臺東縣", town: "達仁鄉", lat: 22.295, lon: 120.884 },
  { city: "臺東縣", town: "金峰鄉", lat: 22.595, lon: 120.952 },
  { city: "澎湖縣", town: "馬公市", lat: 23.5662, lon: 119.5666 },
  { city: "澎湖縣", town: "湖西鄉", lat: 23.589, lon: 119.659 },
  { city: "澎湖縣", town: "白沙鄉", lat: 23.666, lon: 119.598 },
  { city: "澎湖縣", town: "西嶼鄉", lat: 23.6, lon: 119.508 },
  { city: "澎湖縣", town: "望安鄉", lat: 23.358, lon: 119.504 },
  { city: "澎湖縣", town: "七美鄉", lat: 23.208, lon: 119.424 },
  { city: "金門縣", town: "金城鎮", lat: 24.4321, lon: 118.3186 },
  { city: "金門縣", town: "金湖鎮", lat: 24.441, lon: 118.434 },
  { city: "金門縣", town: "金沙鎮", lat: 24.488, lon: 118.413 },
  { city: "金門縣", town: "金寧鄉", lat: 24.456, lon: 118.334 },
  { city: "金門縣", town: "烈嶼鄉", lat: 24.429, lon: 118.247 },
  { city: "金門縣", town: "烏坵鄉", lat: 24.992, lon: 119.453 },
  { city: "連江縣", town: "南竿鄉", lat: 26.1543, lon: 119.9517 },
  { city: "連江縣", town: "北竿鄉", lat: 26.224, lon: 119.998 },
  { city: "連江縣", town: "莒光鄉", lat: 25.973, lon: 119.939 },
  { city: "連江縣", town: "東引鄉", lat: 26.366, lon: 120.49 },
];


const REGION_GROUPS = [
  { name: "北部", cities: ["臺北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"] },
  { name: "中部", cities: ["苗栗縣", "臺中市", "彰化縣", "南投縣", "雲林縣"] },
  { name: "南部", cities: ["嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣"] },
  { name: "東部", cities: ["花蓮縣", "臺東縣"] },
  { name: "離島", cities: ["澎湖縣", "金門縣", "連江縣"] }
];

const CITY_CAMERA_REGIONS = [
  { id: "all", label: "全台", lat: 23.7, lon: 120.96, radiusKm: 9999 },
  { id: "north", label: "北部地區", lat: 25.05, lon: 121.5, radiusKm: 55 },
  { id: "taoyuan-hsinchu", label: "桃竹苗地區", lat: 24.8, lon: 121.0, radiusKm: 55 },
  { id: "central", label: "中部地區", lat: 24.15, lon: 120.67, radiusKm: 60 },
  { id: "south", label: "南部地區", lat: 22.9, lon: 120.4, radiusKm: 70 },
  { id: "east", label: "東部地區", lat: 23.8, lon: 121.5, radiusKm: 90 },
  { id: "near-city", label: "靠近所選位置（3km）", lat: null, lon: null, radiusKm: 3 }
];

const FREEWAY_CAMERA_REGIONS = [
  { id: "all-freeway", label: "全部國道", lat: 23.7, lon: 120.96, radiusKm: 9999, routes: null },
  { id: "n1", label: "國道1號", lat: 24.5, lon: 120.9, radiusKm: 9999, routes: ["N1", "N1H", "N1K"] },
  { id: "n3", label: "國道3號", lat: 24.5, lon: 120.9, radiusKm: 9999, routes: ["N3", "N3A", "N3K", "N3N"] },
  { id: "n5", label: "國道5號", lat: 24.8, lon: 121.8, radiusKm: 9999, routes: ["N5"] },
  { id: "n2-n4", label: "國道2／4號", lat: 24.9, lon: 121.2, radiusKm: 9999, routes: ["N2", "N2A", "N4"] },
  { id: "n6-n8-n10", label: "國道6／8／10號", lat: 23.8, lon: 120.6, radiusKm: 9999, routes: ["N6", "N8", "N10"] },
  { id: "near-city", label: "靠近所選位置（自動半徑）", lat: null, lon: null, radiusKm: null, routes: null }
];

const REGION_STORAGE_KEY = "weatherRegionPreferenceV1";
const KNOWN_CITIES = new Set(CITY_LOCATIONS.map((city) => city.name));
const WEATHER_CODE_LABEL = {
  0: "晴朗",
  1: "大致晴",
  2: "局部多雲",
  3: "陰天",
  45: "有霧",
  48: "霧凇",
  51: "毛毛雨",
  53: "小雨",
  55: "中雨",
  56: "凍毛雨",
  57: "凍毛雨偏強",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "凍雨",
  67: "凍雨偏強",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "陣雨",
  81: "陣雨偏強",
  82: "強烈陣雨",
  85: "陣雪",
  86: "強烈陣雪",
  95: "雷雨",
  96: "雷雨伴冰雹",
  99: "強雷雨伴冰雹"
};

const regionSelect = null;
const citySelect = document.querySelector("#citySelect");
const townshipSelect = document.querySelector("#townshipSelect");
const locateBtn = document.querySelector("#locateBtn");
const LOCATE_BTN_LABEL = "依設備定位選區";
const locateBtnLabel = locateBtn?.querySelector(".locate-btn-label");

function setLocateButtonText(text = LOCATE_BTN_LABEL) {
  if (locateBtnLabel) {
    locateBtnLabel.textContent = text;
    return;
  }
  if (locateBtn) {
    locateBtn.textContent = text;
  }
}
const regionMemoryMeta = document.querySelector("#regionMemoryMeta");
const refreshBtn = document.querySelector("#refreshBtn");
const lastUpdated = document.querySelector("#lastUpdated");
const weatherSummary = document.querySelector("#weatherSummary");
const tempValue = document.querySelector("#tempValue");
const feelValue = document.querySelector("#feelValue");
const humidityValue = document.querySelector("#humidityValue");
const windValue = document.querySelector("#windValue");
const rainValue = document.querySelector("#rainValue");
const rainProbValue = document.querySelector("#rainProbValue");
const cloudValue = document.querySelector("#cloudValue");
const pressureValue = document.querySelector("#pressureValue");
const rainTimeline = document.querySelector("#rainTimeline");
const closureMeta = document.querySelector("#closureMeta");
const closureList = document.querySelector("#closureList");
const cameraMeta = document.querySelector("#cameraMeta");
const cameraList = document.querySelector("#cameraList");
const cameraKeyword = document.querySelector("#cameraKeyword");
const cameraRegionSelect = document.querySelector("#cameraRegionSelect");
const cameraCitySelect = document.querySelector("#cameraCitySelect");
const freewayCameraMeta = document.querySelector("#freewayCameraMeta");
const freewayCameraList = document.querySelector("#freewayCameraList");
const freewayCitySelect = document.querySelector("#freewayCitySelect");
const freewayRegionSelect = document.querySelector("#freewayRegionSelect");
const freewayKeyword = document.querySelector("#freewayKeyword");
const mapLayerList = document.querySelector("#mapLayerList");
const airSummary = document.querySelector("#airSummary");
const aqiMetric = document.querySelector("#aqiMetric");
const pm25Metric = document.querySelector("#pm25Metric");
const pm10Metric = document.querySelector("#pm10Metric");
const ozoneMetric = document.querySelector("#ozoneMetric");
const aqiValue = document.querySelector("#aqiValue");
const pm25Value = document.querySelector("#pm25Value");
const pm10Value = document.querySelector("#pm10Value");
const ozoneValue = document.querySelector("#ozoneValue");
const typhoonRiskBadge = document.querySelector("#typhoonRiskBadge");
const typhoonAnalysisList = document.querySelector("#typhoonAnalysisList");
const windyEmbed = document.querySelector("#windyEmbed");
const windyExternalLink = document.querySelector("#windyExternalLink");
const visitorCounter = document.querySelector("#visitorCounter");
const powerOutageMeta = document.querySelector("#powerOutageMeta");
const aiAlertList = document.querySelector("#aiAlertList");
const rainProjection = document.querySelector("#rainProjection");
const subscriptionForm = document.querySelector("#subscriptionForm");
const subscriberEmail = document.querySelector("#subscriberEmail");
const subscriptionStatus = document.querySelector("#subscriptionStatus");
const testNotificationBtn = document.querySelector("#testNotificationBtn");
const autoRefreshMeta = document.querySelector("#autoRefreshMeta");
const autoRefreshToggle = document.querySelector("#autoRefreshToggle");
const autoRefreshIntervalSelect = document.querySelector("#autoRefreshInterval");

let cityCameraDataset = null;
let freewayCameraDataset = null;
const DISABLED_CAMERA_HOSTS = new Set(["cctvs.freeway.gov.tw"]);
let warningMap = null;
let mapFloodLayer = null;
let mapCameraLayer = null;
let mapCityFocusLayer = null;
let mapPowerOutageLayer = null;
const mapLayerOrder = ["flood-warning", "power-outage", "cctv-points", "city-focus"];
const mapLayerVisibility = {
  "power-outage": true,
  "flood-warning": true,
  "cctv-points": true,
  "city-focus": true
};
const mapLayerConfig = {
  "power-outage": { label: "停電區域標示", pane: "outagePane" },
  "flood-warning": { label: "即時積淹水感測", pane: "floodPane" },
  "cctv-points": { label: "縣市路口 CCTV", pane: "cameraPane" },
  "city-focus": { label: "縣市焦點圈", pane: "focusPane", hiddenInControl: true }
};
const AUTO_REFRESH_OPTIONS = {
  15: { ms: 15 * 60 * 1000, label: "15 分鐘" },
  30: { ms: 30 * 60 * 1000, label: "30 分鐘" },
  60: { ms: 60 * 60 * 1000, label: "1 小時" }
};
const AUTO_REFRESH_STORAGE_KEY = "autoRefreshIntervalMinutesV1";
const DEFAULT_AUTO_REFRESH_MINUTES = 15;
const SUBSCRIPTION_STORAGE_KEY = "weatherMemberSubscriptionV1";
const NOTIFICATION_DIGEST_STORAGE_KEY = "subscriptionNotificationDigestV1";
const SUBSCRIPTION_TOPIC_ORDER = ["closure", "flood", "power-outage", "weather", "air"];
const RECOVERY_STATE_STORAGE_KEY = "subscriptionRecoveryStateV1";
const FLOOD_LATEST_API =
  "https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON";
const TAIPOWER_DISASTER_OUTAGE_URL =
  "https://service.taipower.com.tw/data/opendata/apply/file/d006012/001.xml";
const TAIPOWER_PLANNED_OUTAGE_ZIP_URL =
  "https://service.taipower.com.tw/data/opendata/apply/file/d077004/001.zip";
const TYPHOON_NEWS_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html";
const TYPHOON_WARN_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html";
const CLOSURE_OFFICIAL_URL = "https://www.dgpa.gov.tw/typh/daily/nds.html";
const CLOSURE_REGION_LABELS = ["北部地區", "中部地區", "南部地區", "東部地區", "外島地區"];
const MAP_FOCUS_CIRCLE_RADIUS_M = 12000;
const WINDY_EMBED_HEIGHT = 820;
const RAIN_FORECAST_HOURS = 8;
const VISITOR_COUNTER_NAMESPACE = "jin-weather-tw-v1";
const VISITOR_COUNTER_KEY = "visits";
const VISITOR_COUNTER_STORAGE_KEY = "siteVisitCountV1";
const CITY_CCTV_RADIUS_KM = 3;
const FREEWAY_CCTV_RADIUS_STEPS_KM = [3, 5, 8, 10, 15, 20, 30, 50];
const FREEWAY_CCTV_RADIUS_MAX_KM = 50;
const FREEWAY_CCTV_RADIUS_FALLBACK_KM = 30;
const WINDY_TAIWAN_VIEW = { lat: 23.7, lon: 121.0, zoom: 5 };
const freewayRadiusCache = new Map();
const POWER_OUTAGE_NOTIFY_RADIUS_KM = 10;
const FLOOD_NOTIFY_RADIUS_KM = 80;
const FLOOD_SUBSCRIPTION_RADIUS_KM = 20;
const FLOOD_SAFE_DEPTH_CM = 15;
let jsZipModulePromise = null;
const appState = {
  weather: null,
  airQuality: null,
  closureRows: [],
  floodStations: [],
  floodLivePoints: [],
  floodFeatures: [],
  floodMetaText: "",
  powerOutagePoints: [],
  powerOutageMetaText: "",
  typhoon: null,
  typhoonOfficial: null,
  aiAlerts: [],
  autoRefreshEnabled: true,
  autoRefreshIntervalMinutes: DEFAULT_AUTO_REFRESH_MINUTES,
  nextAutoRefreshAt: Date.now() + AUTO_REFRESH_OPTIONS[DEFAULT_AUTO_REFRESH_MINUTES].ms,
  autoRefreshRunning: false,
  subscription: null,
  lastNotifiedAt: 0
};
let autoRefreshTickTimer = null;
let notificationRegistration = null;

function getRegionForCity(cityName) {
  return REGION_GROUPS.find((region) => region.cities.includes(cityName))?.name ?? REGION_GROUPS[0].name;
}

function getSelectedTownship() {
  const city = citySelect.value;
  const town = townshipSelect.value;
  return TOWNSHIP_LOCATIONS.find((item) => item.city === city && item.town === town) ?? null;
}

function getActiveWeatherLocation() {
  const township = getSelectedTownship();
  if (township) {
    return {
      label: `${township.city}${township.town}`,
      cityName: township.city,
      townName: township.town,
      lat: township.lat,
      lon: township.lon
    };
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  return city
    ? { label: city.name, cityName: city.name, townName: "", lat: city.lat, lon: city.lon }
    : null;
}

function getCctvLocationFocus() {
  const location = getActiveWeatherLocation();
  if (location && Number.isFinite(location.lat) && Number.isFinite(location.lon)) {
    return {
      lat: location.lat,
      lon: location.lon,
      label: location.label
    };
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  if (city) {
    return { lat: city.lat, lon: city.lon, label: city.name };
  }
  return { lat: 23.7, lon: 121.0, label: "台灣中部" };
}

function normalizeTaiwanPlaceText(text) {
  return String(text ?? "").replace(/臺/g, "台").trim();
}

function getTaiwanDateSlash() {
  return new Date()
    .toLocaleDateString("sv-SE", { timeZone: "Asia/Taipei" })
    .replace(/-/g, "/");
}

function geocodeOutageArea(areaText) {
  const normalizedArea = normalizeTaiwanPlaceText(areaText);
  if (!normalizedArea) {
    return null;
  }
  const townshipCandidates = [...TOWNSHIP_LOCATIONS].sort(
    (a, b) => `${b.city}${b.town}`.length - `${a.city}${a.town}`.length
  );
  for (const township of townshipCandidates) {
    const key = normalizeTaiwanPlaceText(`${township.city}${township.town}`);
    if (normalizedArea.includes(key)) {
      return {
        lat: township.lat,
        lon: township.lon,
        label: `${township.city}${township.town}`
      };
    }
  }
  for (const city of CITY_LOCATIONS) {
    if (normalizedArea.includes(normalizeTaiwanPlaceText(city.name))) {
      return { lat: city.lat, lon: city.lon, label: city.name };
    }
  }
  return null;
}

function parseSimpleCsv(text) {
  return String(text ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(1)
    .map((line) => {
      const columns = line.split(",");
      return {
        office: columns[0] ?? "",
        requestId: columns[1] ?? "",
        summary: columns[2] ?? "",
        firstTime: columns[3] ?? "",
        secondTime: columns[4] ?? "",
        area: columns[5] ?? "",
        phone: columns[6] ?? ""
      };
    });
}

async function loadJsZipModule() {
  if (!jsZipModulePromise) {
    jsZipModulePromise = import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm").then((module) => module.default);
  }
  return jsZipModulePromise;
}

function parseDisasterOutageXml(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const placemarks = [...doc.querySelectorAll("Placemark")];
  return placemarks
    .map((placemark) => {
      const fields = {};
      placemark.querySelectorAll("SimpleData").forEach((node) => {
        const key = node.getAttribute("name");
        if (key) {
          fields[key] = node.textContent?.trim() ?? "";
        }
      });
      placemark.querySelectorAll("Data").forEach((node) => {
        const key = node.getAttribute("name");
        if (key) {
          fields[key] = node.querySelector("value")?.textContent?.trim() ?? "";
        }
      });
      const coordinates = placemark.querySelector("coordinates")?.textContent?.trim() ?? "";
      const [lonText, latText] = coordinates.split(",").map((part) => part.trim());
      const lat = Number(latText);
      const lon = Number(lonText);
      const area = fields["停電區域"] || fields.area || "";
      const geocoded = Number.isFinite(lat) && Number.isFinite(lon) ? null : geocodeOutageArea(area);
      return {
        type: "disaster",
        area: area || fields["行政區"] || "未提供區域",
        district: fields["行政區"] ?? "",
        info: fields["停電資訊"] ?? "災害性停電",
        affectedHouseholds: fields["影響戶數"] ?? "",
        eta: fields["預計修復時間"] ?? "",
        updatedAt: fields["資料更新時間"] ?? "",
        lat: Number.isFinite(lat) ? lat : geocoded?.lat,
        lon: Number.isFinite(lon) ? lon : geocoded?.lon,
        label: geocoded?.label ?? area
      };
    })
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
}

async function fetchPlannedOutagePoints() {
  const todaySlash = getTaiwanDateSlash();
  const selectedCity = normalizeTaiwanPlaceText(citySelect.value);

  const buildPointsFromRows = (rows) => {
    const points = [];
    const seen = new Set();
    rows.forEach((row) => {
      if (!row.firstTime?.includes(todaySlash)) {
        return;
      }
      const normalizedArea = normalizeTaiwanPlaceText(row.area);
      if (selectedCity && !normalizedArea.includes(selectedCity)) {
        return;
      }
      const geocoded = geocodeOutageArea(row.area);
      if (!geocoded) {
        return;
      }
      const dedupeKey = `${row.requestId}|${row.area}|${row.firstTime}`;
      if (seen.has(dedupeKey)) {
        return;
      }
      seen.add(dedupeKey);
      points.push({
        type: "planned",
        area: row.area,
        office: row.office,
        summary: row.summary,
        firstTime: row.firstTime,
        secondTime: row.secondTime,
        phone: row.phone,
        lat: geocoded.lat,
        lon: geocoded.lon,
        label: geocoded.label
      });
    });
    return points.slice(0, 260);
  };

  try {
    const JSZip = await loadJsZipModule();
    const response = await fetch(TAIPOWER_PLANNED_OUTAGE_ZIP_URL);
    if (!response.ok) {
      throw new Error(`計畫性停電資料讀取失敗：${response.status}`);
    }
    const zip = await JSZip.loadAsync(await response.arrayBuffer());
    const rows = [];
    await Promise.all(
      Object.keys(zip.files).map(async (filename) => {
        if (!/^\d{3}\.csv$/i.test(filename)) {
          return;
        }
        const csvText = await zip.files[filename].async("string");
        rows.push(...parseSimpleCsv(csvText));
      })
    );
    return buildPointsFromRows(rows);
  } catch {
    const snapshotResponse = await fetch("./data/power_outage_snapshot.json");
    if (!snapshotResponse.ok) {
      throw new Error("計畫性停電資料與本地快照皆無法讀取");
    }
    const snapshot = await snapshotResponse.json();
    if (snapshot.dateKey && snapshot.dateKey !== todaySlash) {
      return [];
    }
    return buildPointsFromRows(snapshot.planned ?? []);
  }
}

async function fetchPowerOutageData() {
  const [disasterResult, plannedResult] = await Promise.allSettled([
    fetch(TAIPOWER_DISASTER_OUTAGE_URL).then(async (response) => {
      if (!response.ok) {
        throw new Error(`災害停電資料讀取失敗：${response.status}`);
      }
      return parseDisasterOutageXml(await response.text());
    }),
    fetchPlannedOutagePoints()
  ]);

  const disasterPoints = disasterResult.status === "fulfilled" ? disasterResult.value : [];
  const plannedPoints = plannedResult.status === "fulfilled" ? plannedResult.value : [];
  appState.powerOutagePoints = [...disasterPoints, ...plannedPoints];

  const disasterCount = disasterPoints.length;
  const plannedCount = plannedPoints.length;
  const cityLabel = citySelect.value || "所選縣市";
  if (disasterCount || plannedCount) {
    appState.powerOutageMetaText = `停電標示：災害性 ${disasterCount} 處、${cityLabel} 今日計畫性 ${plannedCount} 處。`;
  } else {
    appState.powerOutageMetaText = `目前無災害性停電通報，${cityLabel} 今日亦無計畫性停電標示。`;
  }
  if (powerOutageMeta) {
    powerOutageMeta.textContent = appState.powerOutageMetaText;
  }
  updatePowerOutageMapLayer();
}

function buildPowerOutageMarkerStyle(type) {
  if (type === "disaster") {
    return {
      radius: 8,
      color: "#9d0208",
      fillColor: "#d00000",
      fillOpacity: 0.86,
      weight: 2
    };
  }
  return {
    radius: 7,
    color: "#7b2cbf",
    fillColor: "#c77dff",
    fillOpacity: 0.82,
    weight: 2
  };
}

function updatePowerOutageMapLayer() {
  if (!warningMap) {
    return;
  }
  if (mapPowerOutageLayer && warningMap.hasLayer(mapPowerOutageLayer)) {
    warningMap.removeLayer(mapPowerOutageLayer);
  }
  mapPowerOutageLayer = L.layerGroup();
  const grouped = new Map();

  appState.powerOutagePoints.forEach((point) => {
    const key = `${point.type}|${point.lat.toFixed(4)}|${point.lon.toFixed(4)}`;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(point);
  });

  grouped.forEach((items, key) => {
    const [type] = key.split("|");
    const sample = items[0];
    const marker = L.circleMarker([sample.lat, sample.lon], {
      pane: "outagePane",
      ...buildPowerOutageMarkerStyle(type)
    });
    const popupLines = items
      .slice(0, 4)
      .map((item) => {
        if (item.type === "disaster") {
          return `<strong>${item.info}</strong><br/>${item.area}<br/>影響戶數：${item.affectedHouseholds || "-"}<br/>預計修復：${item.eta || "-"}`;
        }
        return `<strong>計畫性停電</strong><br/>${item.area}<br/>時段：${item.firstTime}<br/>工作：${item.summary || "-"}`;
      })
      .join("<hr/>");
    marker.bindPopup(`${popupLines}<br/>來源：台灣電力公司開放資料`);
    mapPowerOutageLayer.addLayer(marker);
  });

  syncMapLayerVisibility("power-outage");
}

function saveRegionPreference() {
  const region = getRegionForCity(citySelect.value);
  const payload = {
    region,
    city: citySelect.value,
    town: townshipSelect.value,
    savedAt: new Date().toISOString()
  };
  localStorage.setItem(REGION_STORAGE_KEY, JSON.stringify(payload));
  regionMemoryMeta.textContent = `區域偏好：已記住 ${payload.region}／${payload.city}${payload.town}（下次開啟自動套用）`;
}

function readRegionPreference() {
  try {
    const raw = localStorage.getItem(REGION_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function fillCitySelect(preferredCity) {
  citySelect.innerHTML = "";
  CITY_LOCATIONS.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelect.append(option);
  });
  if (preferredCity && CITY_LOCATIONS.some((city) => city.name === preferredCity)) {
    citySelect.value = preferredCity;
  }
}

function fillTownshipSelect(cityName, preferredTown) {
  const towns = TOWNSHIP_LOCATIONS.filter((item) => item.city === cityName);
  townshipSelect.innerHTML = "";
  towns.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.town;
    option.textContent = item.town;
    townshipSelect.append(option);
  });
  if (preferredTown && towns.some((item) => item.town === preferredTown)) {
    townshipSelect.value = preferredTown;
  } else if (towns.length) {
    townshipSelect.value = towns[0].town;
  }
}

function applyRegionSelection(regionName, cityName, townName, { persist = true } = {}) {
  const city = cityName || "臺北市";
  fillCitySelect(city);
  fillTownshipSelect(citySelect.value, townName);
  if (persist) {
    saveRegionPreference();
  }
}

function initRegionSelectors() {
  const saved = readRegionPreference();
  if (saved?.city) {
    applyRegionSelection(saved.region || getRegionForCity(saved.city), saved.city, saved.town, {
      persist: false
    });
    regionMemoryMeta.textContent = `區域偏好：已套用上次選取 ${saved.region || getRegionForCity(saved.city)}／${saved.city}${saved.town || ""}`;
  } else {
    applyRegionSelection("北部", "臺北市", "信義區", { persist: false });
    regionMemoryMeta.textContent = "區域偏好：尚未儲存（選取後會自動記住）";
  }
}

function initCameraRegionSelect() {
  cameraRegionSelect.innerHTML = "";
  CITY_CAMERA_REGIONS.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = region.label;
    cameraRegionSelect.append(option);
  });
  cameraRegionSelect.value = "near-city";
}

function fillCameraCitySelectOptions(selectElement, defaultValue = "follow") {
  if (!selectElement) {
    return;
  }
  selectElement.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "全部縣市";
  selectElement.append(allOption);

  const followOption = document.createElement("option");
  followOption.value = "follow";
  followOption.textContent = "跟隨上方所選縣市";
  selectElement.append(followOption);

  CITY_LOCATIONS.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    selectElement.append(option);
  });
  selectElement.value = defaultValue;
}

function initCameraCitySelect() {
  fillCameraCitySelectOptions(cameraCitySelect, "follow");
}

function initFreewayRegionSelect() {
  if (!freewayRegionSelect) {
    return;
  }
  freewayRegionSelect.innerHTML = "";
  FREEWAY_CAMERA_REGIONS.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = region.label;
    freewayRegionSelect.append(option);
  });
  freewayRegionSelect.value = "all-freeway";
}

function initFreewayCitySelect() {
  fillCameraCitySelectOptions(freewayCitySelect, "follow");
}

function getSelectedCameraCityNameFrom(selectElement) {
  if (!selectElement) {
    return citySelect.value;
  }
  if (selectElement.value === "all") {
    return null;
  }
  if (selectElement.value === "follow") {
    return citySelect.value;
  }
  return selectElement.value;
}

function getSelectedCameraCityName() {
  return getSelectedCameraCityNameFrom(cameraCitySelect);
}

function getSelectedFreewayCityName() {
  return getSelectedCameraCityNameFrom(freewayCitySelect);
}

function findNearestTownship(lat, lon) {
  let best = null;
  let bestDistance = Infinity;
  TOWNSHIP_LOCATIONS.forEach((item) => {
    const distance = getDistanceKm(lat, lon, item.lat, item.lon);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = item;
    }
  });
  return best ? { ...best, distanceKm: bestDistance } : null;
}

function locateByDevice() {
  if (!navigator.geolocation) {
    regionMemoryMeta.textContent = "區域偏好：此裝置不支援衛星定位";
    return;
  }
  locateBtn.disabled = true;
  setLocateButtonText("定位中...");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const nearest = findNearestTownship(latitude, longitude);
      if (!nearest) {
        regionMemoryMeta.textContent = "區域偏好：定位成功，但找不到對應鄉鎮";
        locateBtn.disabled = false;
        setLocateButtonText();
        return;
      }
      applyRegionSelection(getRegionForCity(nearest.city), nearest.city, nearest.town, { persist: true });
      regionMemoryMeta.textContent = `區域偏好：定位完成，已選 ${nearest.city}${nearest.town}（距離約 ${nearest.distanceKm.toFixed(1)} km）`;
      locateBtn.disabled = false;
      setLocateButtonText();
      performFullRefresh("manual");
      renderAllCameraLists();
      updateMapForCityChange();
    },
    (error) => {
      regionMemoryMeta.textContent = `區域偏好：定位失敗（${error.message}）`;
      locateBtn.disabled = false;
      setLocateButtonText();
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 }
  );
}

function getCameraRouteCode(cameraId = "") {
  const match = String(cameraId).match(/CCTV-([A-Z0-9]+)-/i);
  return match ? match[1].toUpperCase() : "";
}

function getSelectedCameraRegion() {
  return CITY_CAMERA_REGIONS.find((item) => item.id === cameraRegionSelect.value) ?? CITY_CAMERA_REGIONS[0];
}

function getSelectedFreewayRegion() {
  return (
    FREEWAY_CAMERA_REGIONS.find((item) => item.id === freewayRegionSelect?.value) ?? FREEWAY_CAMERA_REGIONS[0]
  );
}

function getCameraFocusPoint(region, selectedCityName) {
  const city = CITY_LOCATIONS.find((item) => item.name === selectedCityName);
  const location = getActiveWeatherLocation();
  if (region.id === "near-city") {
    return {
      lat: location?.lat ?? city?.lat,
      lon: location?.lon ?? city?.lon
    };
  }
  return {
    lat: region.lat ?? location?.lat ?? city?.lat,
    lon: region.lon ?? location?.lon ?? city?.lon
  };
}

function getCityCameraFocusPoint() {
  return getCameraFocusPoint(getSelectedCameraRegion(), getSelectedCameraCityName() || citySelect.value);
}

function getFreewayCameraFocusPoint() {
  return getCameraFocusPoint(getSelectedFreewayRegion(), getSelectedFreewayCityName() || citySelect.value);
}

function isCameraUrlUsable(url) {
  if (!url) {
    return false;
  }
  try {
    const host = new URL(url).hostname;
    return !DISABLED_CAMERA_HOSTS.has(host);
  } catch {
    return false;
  }
}

function getFreewayRadiusCacheKey(focus) {
  const lat = Number.isFinite(focus?.lat) ? focus.lat.toFixed(3) : "na";
  const lon = Number.isFinite(focus?.lon) ? focus.lon.toFixed(3) : "na";
  const freewayRegion = getSelectedFreewayRegion();
  const keyword = (freewayKeyword?.value ?? "").trim().toLowerCase();
  return `${lat},${lon}|${freewayRegion.id}|${keyword}`;
}

function getFreewayCamerasBeforeRadiusFilter() {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const freewayRegion = getSelectedFreewayRegion();
  const keyword = (freewayKeyword?.value ?? "").trim().toLowerCase();
  const normalize = (text) => text.toLowerCase().replaceAll("臺", "台");

  return freewayCameraDataset.cameras
    .filter((camera) => isCameraUrlUsable(camera.html))
    .filter((camera) => {
      if (!keyword) {
        return true;
      }
      const haystack = normalize(
        `${camera.id ?? ""} ${camera.stakenumber ?? ""} ${camera.routeCode ?? getCameraRouteCode(camera.id)}`
      );
      return haystack.includes(normalize(keyword));
    })
    .filter((camera) => {
      const routeCode = getCameraRouteCode(camera.id);
      if (freewayRegion.routes?.length) {
        return freewayRegion.routes.includes(routeCode);
      }
      return true;
    });
}

function resolveFreewayCctvRadiusKm(focus) {
  const cacheKey = getFreewayRadiusCacheKey(focus);
  if (freewayRadiusCache.has(cacheKey)) {
    return freewayRadiusCache.get(cacheKey);
  }

  if (!Number.isFinite(focus?.lat) || !Number.isFinite(focus?.lon)) {
    freewayRadiusCache.set(cacheKey, FREEWAY_CCTV_RADIUS_FALLBACK_KM);
    return FREEWAY_CCTV_RADIUS_FALLBACK_KM;
  }

  const distances = getFreewayCamerasBeforeRadiusFilter()
    .map((camera) => getDistanceKm(focus.lat, focus.lon, Number(camera.gisy), Number(camera.gisx)))
    .filter((distanceKm) => distanceKm <= FREEWAY_CCTV_RADIUS_MAX_KM)
    .sort((a, b) => a - b);

  if (!distances.length) {
    freewayRadiusCache.set(cacheKey, FREEWAY_CCTV_RADIUS_FALLBACK_KM);
    return FREEWAY_CCTV_RADIUS_FALLBACK_KM;
  }

  const nearestDistanceKm = distances[0];
  const radiusKm =
    FREEWAY_CCTV_RADIUS_STEPS_KM.find((step) => step >= nearestDistanceKm) ??
    FREEWAY_CCTV_RADIUS_STEPS_KM[FREEWAY_CCTV_RADIUS_STEPS_KM.length - 1];
  freewayRadiusCache.set(cacheKey, radiusKm);
  return radiusKm;
}

function getFilteredSortedCityCameras() {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return [];
  }
  const selectedCity = getSelectedCameraCityName();
  const keyword = cameraKeyword.value.trim().toLowerCase();
  const normalize = (text) => text.toLowerCase().replaceAll("臺", "台");
  const focus = getCctvLocationFocus();

  return cityCameraDataset.cameras
    .filter((camera) => isCameraUrlUsable(camera.html))
    .filter((camera) => {
      if (!selectedCity) {
        return true;
      }
      return camera.city === selectedCity;
    })
    .filter((camera) => {
      if (!keyword) {
        return true;
      }
      const haystack = normalize(
        `${camera.id ?? ""} ${camera.stakenumber ?? ""} ${camera.roadName ?? ""} ${camera.description ?? ""} ${camera.city ?? ""}`
      );
      return haystack.includes(normalize(keyword));
    })
    .filter((camera) => {
      if (!Number.isFinite(focus.lat) || !Number.isFinite(focus.lon)) {
        return true;
      }
      const distanceKm = getDistanceKm(focus.lat, focus.lon, Number(camera.gisy), Number(camera.gisx));
      return distanceKm <= CITY_CCTV_RADIUS_KM;
    })
    .map((camera) => {
      const distanceKm =
        Number.isFinite(focus.lat) && Number.isFinite(focus.lon)
          ? getDistanceKm(focus.lat, focus.lon, Number(camera.gisy), Number(camera.gisx))
          : Infinity;
      return { ...camera, distanceKm };
    })
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

function getFilteredSortedFreewayCameras() {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const focus = getCctvLocationFocus();
  const radiusKm = resolveFreewayCctvRadiusKm(focus);

  return getFreewayCamerasBeforeRadiusFilter()
    .filter((camera) => {
      if (!Number.isFinite(focus.lat) || !Number.isFinite(focus.lon)) {
        return true;
      }
      const distanceKm = getDistanceKm(focus.lat, focus.lon, Number(camera.gisy), Number(camera.gisx));
      return distanceKm <= radiusKm;
    })
    .map((camera) => {
      const distanceKm =
        Number.isFinite(focus.lat) && Number.isFinite(focus.lon)
          ? getDistanceKm(focus.lat, focus.lon, Number(camera.gisy), Number(camera.gisx))
          : Infinity;
      return {
        ...camera,
        distanceKm,
        routeCode: getCameraRouteCode(camera.id)
      };
    })
    .sort((a, b) => a.distanceKm - b.distanceKm);
}

function isLikelyDirectImageStream(url = "") {
  const lower = String(url).toLowerCase();
  if (!lower) {
    return false;
  }
  if (lower.includes("index.html") || lower.includes("/play/") || lower.includes(".html")) {
    return false;
  }
  if (lower.includes("mjpg") || lower.includes("mjpeg") || lower.includes("jpeg") || lower.includes("jpg")) {
    return true;
  }
  if (lower.includes("bmjpg") || lower.includes("getjpeg") || lower.includes("snapshot")) {
    return true;
  }
  // Many city feeds are player pages; prefer iframe/link preview.
  if (
    lower.includes("showframe") ||
    lower.includes("showcctv") ||
    lower.includes("hls.") ||
    lower.includes("/live/")
  ) {
    return false;
  }
  return true;
}

function createCameraCard(camera, scopeLabel) {
  const card = document.createElement("article");
  card.className = "camera-item";
  const streamUrl = camera.html;
  const safeStake = camera.stakenumber || camera.roadName || "未提供路口資訊";
  const distance = Number.isFinite(camera.distanceKm) ? `${camera.distanceKm.toFixed(1)} km` : "--";
  const cityLabel = camera.city ? `${camera.city}｜` : "";
  const directImage = isLikelyDirectImageStream(streamUrl);

  const mediaHtml = directImage
    ? `<img src="${streamUrl}" alt="${camera.id} 即時影像" loading="lazy" />`
    : `<iframe class="camera-frame" src="${streamUrl}" title="${camera.id} 即時影像" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  card.innerHTML = `
    ${mediaHtml}
    <div class="camera-body">
      <h3>${camera.id}</h3>
      <p>${safeStake}</p>
      <p>${cityLabel}${scopeLabel}｜距離中心：約 ${distance}</p>
      <a href="${streamUrl}" target="_blank" rel="noopener noreferrer">開啟官方即時影像</a>
    </div>
  `;
  const img = card.querySelector("img");
  img?.addEventListener("error", () => {
    img.replaceWith(Object.assign(document.createElement("div"), {
      className: "camera-fallback",
      innerHTML: `<p>影像需於官方頁面開啟</p><a href="${streamUrl}" target="_blank" rel="noopener noreferrer">前往即時影像</a>`
    }));
  });
  const frame = card.querySelector("iframe");
  frame?.addEventListener("error", () => {
    frame.replaceWith(Object.assign(document.createElement("div"), {
      className: "camera-fallback",
      innerHTML: `<p>此鏡頭需於官方頁面開啟</p><a href="${streamUrl}" target="_blank" rel="noopener noreferrer">前往即時影像</a>`
    }));
  });
  return card;
}

function updateCameraMetaText() {
  if (!cameraMeta || !cityCameraDataset) {
    return;
  }
  const cityFetchedAt = cityCameraDataset.fetchedAt ? formatDateTime(cityCameraDataset.fetchedAt) : "未提供";
  const matchedCount = getFilteredSortedCityCameras().length;
  const focus = getCctvLocationFocus();
  cameraMeta.textContent = `${focus.label} 半徑 ${CITY_CCTV_RADIUS_KM} 公里內 ${matchedCount} 支｜快照：${cityFetchedAt}`;
}

function renderCameraList() {
  cameraList.innerHTML = "";

  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    cameraList.innerHTML = `<p class="status-warn">目前無法載入各縣市市區路口監控資料。</p>`;
    return;
  }

  updateCameraMetaText();
  const rows = getFilteredSortedCityCameras().slice(0, 16);
  if (!rows.length) {
    cameraList.innerHTML = `<p class="status-warn">所選位置半徑 ${CITY_CCTV_RADIUS_KM} 公里內查無市區路口監控點，請更換鄉鎮或關鍵字。</p>`;
    return;
  }

  const selectedCity = getSelectedCameraCityName();
  const scopeLabel = selectedCity ? `${selectedCity}市區路口` : "市區路口";
  rows.forEach((camera) => {
    cameraList.append(createCameraCard(camera, scopeLabel));
  });
}

function updateFreewayCameraMetaText() {
  if (!freewayCameraMeta || !freewayCameraDataset) {
    return;
  }
  const freewayFetchedAt = freewayCameraDataset.fetchedAt
    ? formatDateTime(freewayCameraDataset.fetchedAt)
    : "未提供";
  const matchedCount = getFilteredSortedFreewayCameras().length;
  const focus = getCctvLocationFocus();
  const radiusKm = resolveFreewayCctvRadiusKm(focus);
  const regionLabel = getSelectedFreewayRegion().label;
  freewayCameraMeta.textContent = `${focus.label} 半徑 ${radiusKm} 公里內 ${matchedCount} 支｜${regionLabel}｜快照：${freewayFetchedAt}`;
}

function renderFreewayCameraList() {
  if (!freewayCameraList) {
    return;
  }
  freewayCameraList.innerHTML = "";
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    freewayCameraList.innerHTML = `<p class="status-warn">目前無法載入國道監控資料。</p>`;
    return;
  }
  const rows = getFilteredSortedFreewayCameras().slice(0, 16);
  updateFreewayCameraMetaText();
  if (!rows.length) {
    const radiusKm = resolveFreewayCctvRadiusKm(getCctvLocationFocus());
    freewayCameraList.innerHTML = `<p class="status-warn">所選位置半徑 ${radiusKm} 公里內查無國道監控點，請更換鄉鎮、國道或關鍵字。</p>`;
    return;
  }
  const freewayRegion = getSelectedFreewayRegion();
  rows.forEach((camera) => {
    freewayCameraList.append(createCameraCard(camera, freewayRegion.label));
  });
}

function renderAllCameraLists() {
  renderCameraList();
  renderFreewayCameraList();
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("zh-TW", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function findNearestTimeIndex(times, nowIso) {
  const index = times.findIndex((time) => time >= nowIso);
  return index === -1 ? Math.max(times.length - 1, 0) : index;
}

function getAqiLabel(aqi) {
  if (aqi <= 50) return "良好";
  if (aqi <= 100) return "普通";
  if (aqi <= 150) return "對敏感族群不健康";
  if (aqi <= 200) return "不健康";
  return "非常不健康";
}

const AIR_LEVEL_CLASSES = [
  "air-level-good",
  "air-level-moderate",
  "air-level-sensitive",
  "air-level-unhealthy",
  "air-level-very-unhealthy",
  "air-level-hazardous",
  "air-level-unknown"
];

function getAirQualityLevelKey(value, pollutant = "aqi") {
  const reading = Number(value);
  if (!Number.isFinite(reading)) {
    return "unknown";
  }
  if (pollutant === "aqi") {
    if (reading <= 50) return "good";
    if (reading <= 100) return "moderate";
    if (reading <= 150) return "sensitive";
    if (reading <= 200) return "unhealthy";
    if (reading <= 300) return "very-unhealthy";
    return "hazardous";
  }
  if (pollutant === "pm25") {
    if (reading <= 12) return "good";
    if (reading <= 35.4) return "moderate";
    if (reading <= 55.4) return "sensitive";
    if (reading <= 150.4) return "unhealthy";
    if (reading <= 250.4) return "very-unhealthy";
    return "hazardous";
  }
  if (pollutant === "pm10") {
    if (reading <= 54) return "good";
    if (reading <= 154) return "moderate";
    if (reading <= 254) return "sensitive";
    if (reading <= 354) return "unhealthy";
    if (reading <= 424) return "very-unhealthy";
    return "hazardous";
  }
  if (pollutant === "ozone") {
    if (reading <= 100) return "good";
    if (reading <= 160) return "moderate";
    if (reading <= 214) return "sensitive";
    if (reading <= 404) return "unhealthy";
    if (reading <= 504) return "very-unhealthy";
    return "hazardous";
  }
  return "unknown";
}

function setAirLevelClass(element, levelKey) {
  if (!element) {
    return;
  }
  element.classList.remove(...AIR_LEVEL_CLASSES);
  element.classList.add(`air-level-${levelKey || "unknown"}`);
}

function renderAirQualityLevelStyles({ aqi, pm25, pm10, ozone }) {
  setAirLevelClass(airSummary, getAirQualityLevelKey(aqi, "aqi"));
  setAirLevelClass(aqiMetric, getAirQualityLevelKey(aqi, "aqi"));
  setAirLevelClass(pm25Metric, getAirQualityLevelKey(pm25, "pm25"));
  setAirLevelClass(pm10Metric, getAirQualityLevelKey(pm10, "pm10"));
  setAirLevelClass(ozoneMetric, getAirQualityLevelKey(ozone, "ozone"));
}

function renderRainTimeline(hours) {
  rainTimeline.innerHTML = "";
  if (!hours.length) {
    rainTimeline.innerHTML = `<p class="rain-empty">暫無預報資料</p>`;
    return;
  }

  hours.forEach((item) => {
    const row = document.createElement("div");
    row.className = "rain-row";
    row.innerHTML = `
      <span class="rain-row-time">${item.time}</span>
      <div class="bar-bg">
        <div class="bar" style="width:${Math.max(0, Math.min(item.probability, 100))}%"></div>
      </div>
      <strong class="rain-row-probability">${item.probability}%</strong>
    `;
    rainTimeline.append(row);
  });
}

async function fetchWeather() {
  const location = getActiveWeatherLocation();
  if (!location) {
    throw new Error("找不到指定鄉鎮座標");
  }

  const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
  endpoint.searchParams.set("latitude", location.lat.toString());
  endpoint.searchParams.set("longitude", location.lon.toString());
  endpoint.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m,pressure_msl,apparent_temperature,cloud_cover"
  );
  endpoint.searchParams.set("hourly", "precipitation_probability,precipitation");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`氣象資料讀取失敗：${response.status}`);
  }

  const payload = await response.json();
  const current = payload.current;
  const allHours = payload.hourly.time.map((time, index) => ({
    isoTime: time,
    time: new Date(time).toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }),
    probability: Number(payload.hourly.precipitation_probability[index] ?? 0),
    precipitation: Number(payload.hourly.precipitation[index] ?? 0)
  }));
  const nowIndex = allHours.findIndex((row) => row.isoTime >= current.time);
  const startIndex = nowIndex === -1 ? 0 : nowIndex;
  const next8Hours = allHours.slice(startIndex, startIndex + RAIN_FORECAST_HOURS);
  const next24Hours = allHours.slice(startIndex, startIndex + 24);
  const rain24 = next24Hours.reduce((sum, item) => sum + item.precipitation, 0);
  const rainProbIndex = findNearestTimeIndex(payload.hourly.time, current.time);
  const rainProb = Number(payload.hourly.precipitation_probability[rainProbIndex] ?? 0);

  weatherSummary.textContent = `${location.label}・${WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"}`;
  tempValue.textContent = `${Math.round(current.temperature_2m)}°C`;
  feelValue.textContent = `${Math.round(current.apparent_temperature)}°C`;
  humidityValue.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  rainValue.textContent = `${current.precipitation.toFixed(1)} mm`;
  rainProbValue.textContent = `${Math.round(rainProb)}%`;
  cloudValue.textContent = `${Math.round(current.cloud_cover)}%`;
  pressureValue.textContent = `${Math.round(current.pressure_msl)} hPa`;
  rainProjection.textContent = `未來 24 小時累積降雨預估：${rain24.toFixed(1)} mm`;
  renderRainTimeline(next8Hours);

  appState.weather = {
    cityName: location.cityName,
    townName: location.townName,
    label: location.label,
    lat: location.lat,
    lon: location.lon,
    current,
    next8Hours,
    next24Hours,
    rain24,
    rainProb
  };
}

function getClosureCityNamesDescending() {
  return CITY_LOCATIONS.map((city) => city.name).sort((a, b) => b.length - a.length);
}

function resolveClosureCityFromLine(line) {
  let rest = normalizeTaiwanPlaceText(line.trim());
  if (!rest) {
    return null;
  }

  for (const region of CLOSURE_REGION_LABELS) {
    const normalizedRegion = normalizeTaiwanPlaceText(region);
    if (rest.startsWith(normalizedRegion)) {
      rest = rest.slice(normalizedRegion.length).trim();
      break;
    }
  }

  for (const cityName of getClosureCityNamesDescending()) {
    const normalizedCity = normalizeTaiwanPlaceText(cityName);
    if (!rest.startsWith(normalizedCity)) {
      continue;
    }
    const message = rest.slice(normalizedCity.length).trim();
    if (!message || !/(今天|明日|停止|照常)/.test(message)) {
      return null;
    }
    return { city: cityName, message };
  }

  return null;
}

function parseClosureMarkdown(markdownText) {
  const text = String(markdownText ?? "");
  const lines = text.split("\n").map((line) => line.trim());
  const updateLine = lines.find((line) => /更新時間：/.test(line)) ?? "";
  const updateAt = updateLine.replace(/^#+\s*/, "").replace(/更新時間：/, "").trim();
  const noClosure = /無停班停課訊息/.test(text);

  if (noClosure) {
    return { updateAt, rows: [], noClosure: true };
  }

  const rows = [];
  const seenCities = new Set();

  for (const line of lines) {
    if (!line || line.startsWith("#")) {
      continue;
    }
    if (/^備註：?/.test(line) || /^[一二三四五六七八九十]+、/.test(line) || line.startsWith("（")) {
      break;
    }
    if (line.includes("縣市名稱") && line.includes("區域")) {
      continue;
    }

    if (line.startsWith("|")) {
      if (line.includes("---") || line.includes("縣市名稱") || line.includes("無停班停課訊息")) {
        continue;
      }
      const raw = line.split("|").map((cell) => cell.trim()).filter(Boolean);
      if (raw.length < 2) {
        continue;
      }
      const cityCell = raw[0].replace(/^#+/, "").trim();
      const city =
        CITY_LOCATIONS.find((item) => normalizeTaiwanPlaceText(item.name) === normalizeTaiwanPlaceText(cityCell))
          ?.name ?? null;
      if (!city || seenCities.has(city)) {
        continue;
      }
      const message = raw.slice(1).join(" ").trim();
      if (!message) {
        continue;
      }
      seenCities.add(city);
      rows.push({ city, message });
      continue;
    }

    const parsed = resolveClosureCityFromLine(line);
    if (!parsed || seenCities.has(parsed.city)) {
      continue;
    }
    seenCities.add(parsed.city);
    rows.push(parsed);
  }

  return {
    updateAt,
    rows,
    noClosure: rows.length === 0 ? noClosure : false
  };
}

function saveClosureCache(data) {
  localStorage.setItem("closureCacheV1", JSON.stringify(data));
}

function readClosureCache() {
  const text = localStorage.getItem("closureCacheV1");
  if (!text) {
    return null;
  }
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function renderClosureMeta(updateAt, sourceLabel, { cacheSuffix = false } = {}) {
  if (!closureMeta) {
    return;
  }
  const timeText = updateAt || "未提供";
  const linkLabel =
    sourceLabel === "本機快取" ? "行政院人事行政總處" : sourceLabel || "行政院人事行政總處";
  closureMeta.innerHTML = `
    <span class="closure-meta-primary">公告更新時間：${timeText}</span>
    <span class="closure-meta-source">（來源：<a href="${CLOSURE_OFFICIAL_URL}" target="_blank" rel="noopener noreferrer" class="closure-meta-link">${linkLabel}</a>）</span>
  `;
  if (cacheSuffix) {
    const cacheNote = document.createElement("span");
    cacheNote.className = "closure-meta-source";
    cacheNote.textContent = "（目前使用快取，請稍後重試）";
    closureMeta.append(cacheNote);
  }
}

function renderClosure(data, sourceLabel, { cacheSuffix = false } = {}) {
  closureList.innerHTML = "";
  const sorted = [...(data.rows || [])].sort((a, b) => {
    const aStop = Number(a.message.includes("停止上班") || a.message.includes("停止上課"));
    const bStop = Number(b.message.includes("停止上班") || b.message.includes("停止上課"));
    return bStop - aStop;
  });

  if (!sorted.length) {
    const okText = data.noClosure
      ? "目前全台無停班停課訊息。"
      : "目前未讀取到停班停課區域，請點擊最上方按鍵「立即更新資料」重試。";
    closureList.innerHTML = `<p class="status-ok">${okText}</p>`;
    appState.closureRows = [];
    renderClosureMeta(data.updateAt, sourceLabel, { cacheSuffix });
    return;
  }

  const isClosureStopMessage = (message) =>
    message.includes("停止上班") || message.includes("停止上課");

  const appendClosureGroup = (rows, groupClass, groupLabel) => {
    if (!rows.length) {
      return;
    }
    const group = document.createElement("div");
    group.className = `closure-group ${groupClass}`;
    const heading = document.createElement("p");
    heading.className = "closure-group-label";
    heading.textContent = groupLabel;
    group.append(heading);
    rows.forEach((item) => {
      const entry = document.createElement("article");
      entry.className = `closure-item ${groupClass}`;
      entry.innerHTML = `
        <h3>${item.city}</h3>
        <p>${item.message}</p>
      `;
      group.append(entry);
    });
    closureList.append(group);
  };

  appendClosureGroup(
    sorted.filter((item) => isClosureStopMessage(item.message)),
    "closure-stop",
    "停班停課"
  );
  appendClosureGroup(
    sorted.filter((item) => !isClosureStopMessage(item.message)),
    "closure-normal",
    "照常上班上課"
  );

  appState.closureRows = sorted;
  renderClosureMeta(data.updateAt, sourceLabel, { cacheSuffix });
}

async function fetchClosureNotices() {
  const endpoint = `https://r.jina.ai/${CLOSURE_OFFICIAL_URL}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`停班停課資料讀取失敗：${response.status}`);
    }
    const markdown = await response.text();
    const data = parseClosureMarkdown(markdown);
    if (!data.rows.length && !data.noClosure && !data.updateAt) {
      throw new Error("停班停課資料格式無法解析");
    }
    saveClosureCache(data);
    renderClosure(data, "行政院人事行政總處");
  } catch (error) {
    const cache = readClosureCache();
    if (cache) {
      renderClosure(cache, "本機快取", { cacheSuffix: true });
      appState.closureRows = cache.rows || [];
      return;
    }
    closureMeta.textContent = `停班停課資料暫時無法更新：${error.message}`;
    appState.closureRows = [];
    closureList.innerHTML = `
      <p class="status-warn">
        系統目前無法讀取公告，請改用
        <a href="https://www.dgpa.gov.tw/typh/daily/nds.html" target="_blank" rel="noopener noreferrer">官方頁面</a>
        查詢。
      </p>
    `;
  }
}

async function fetchAirQuality() {
  const location = getActiveWeatherLocation();
  if (!location) {
    throw new Error("找不到空品鄉鎮座標");
  }
  const endpoint = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  endpoint.searchParams.set("latitude", String(location.lat));
  endpoint.searchParams.set("longitude", String(location.lon));
  endpoint.searchParams.set("hourly", "us_aqi,pm2_5,pm10,ozone");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`空氣品質讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  const nowIso = appState.weather?.current?.time ?? payload.hourly.time[0];
  const index = findNearestTimeIndex(payload.hourly.time, nowIso);
  const aqi = Number(payload.hourly.us_aqi[index] ?? 0);
  const pm25 = Number(payload.hourly.pm2_5[index] ?? 0);
  const pm10 = Number(payload.hourly.pm10[index] ?? 0);
  const ozone = Number(payload.hourly.ozone[index] ?? 0);

  airSummary.textContent = `當地空氣品質：${getAqiLabel(aqi)}`;
  aqiValue.textContent = `${Math.round(aqi)}`;
  pm25Value.textContent = `${pm25.toFixed(1)} μg/m³`;
  pm10Value.textContent = `${pm10.toFixed(1)} μg/m³`;
  ozoneValue.textContent = `${ozone.toFixed(1)} μg/m³`;

  renderAirQualityLevelStyles({ aqi, pm25, pm10, ozone });

  appState.airQuality = {
    cityName: location.cityName,
    label: location.label,
    aqi,
    pm25,
    pm10,
    ozone
  };
}

function getFloodLevelByDepth(depthCm) {
  if (depthCm >= 50) return 4;
  if (depthCm >= 30) return 3;
  if (depthCm >= 15) return 2;
  return 1;
}

function parseTyphoonOfficialText(newsMarkdown, warnMarkdown) {
  const warnText = warnMarkdown || "";
  const hasWarning = !/目前無發布颱風警報/.test(warnText);
  const hasLandWarning =
    hasWarning && /陸上颱風警報/.test(warnText) && !/解除陸上颱風警報/.test(warnText);
  const countMatch = (newsMarkdown || "").match(/有\s*(\d+)\s*個颱風/);
  const typhoonCount = countMatch ? Number(countMatch[1]) : 0;
  const nameMatch = (newsMarkdown || "").match(/(強烈颱風|中度颱風|輕度颱風)\s+([^\s]+)\s+編號第\s*(\d+)\s*號\s+國際命名\s+([A-Z]+)/);
  const detailMatch = (newsMarkdown || "").match(
    /中心位置在北緯\s*([0-9.]+)\s*度，東經\s*([0-9.]+)\s*度.*?中心氣壓\s*([0-9]+)\s*百帕，近中心最大風速每秒\s*([0-9]+)\s*公尺，瞬間最大陣風每秒\s*([0-9]+)\s*公尺/
  );

  const messages = [];
  if (nameMatch) {
    messages.push(`${nameMatch[1]} ${nameMatch[2]}（第 ${nameMatch[3]} 號 / ${nameMatch[4]}）`);
  } else if (typhoonCount > 0) {
    messages.push(`太平洋地區目前有 ${typhoonCount} 個颱風活動。`);
  } else {
    messages.push("目前中央氣象署颱風消息未顯示活躍颱風。");
  }

  if (detailMatch) {
    messages.push(
      `中心位置：北緯 ${detailMatch[1]}°、東經 ${detailMatch[2]}°；中心氣壓 ${detailMatch[3]} hPa。`
    );
    messages.push(
      `近中心最大風速 ${detailMatch[4]} m/s，瞬間最大陣風 ${detailMatch[5]} m/s。`
    );
  }

  messages.push(hasWarning ? "官方狀態：已發布颱風警報，請提高警戒。" : "官方狀態：目前無發布颱風警報。");
  messages.push("資料來源：中央氣象署颱風消息／颱風警報頁面。");

  return {
    hasWarning,
    hasLandWarning,
    typhoonCount,
    name: nameMatch ? `${nameMatch[1]} ${nameMatch[2]}` : null,
    lat: detailMatch ? Number(detailMatch[1]) : null,
    lon: detailMatch ? Number(detailMatch[2]) : null,
    pressure: detailMatch ? Number(detailMatch[3]) : null,
    maxWindMs: detailMatch ? Number(detailMatch[4]) : null,
    gustMs: detailMatch ? Number(detailMatch[5]) : null,
    messages
  };
}

function buildWindyEmbedUrl(lat, lon, zoom = 6) {
  const params = new URLSearchParams({
    lat: Number(lat).toFixed(3),
    lon: Number(lon).toFixed(3),
    detailLat: Number(lat).toFixed(3),
    detailLon: Number(lon).toFixed(3),
    width: "900",
    height: String(WINDY_EMBED_HEIGHT),
    zoom: String(zoom),
    level: "surface",
    overlay: "wind",
    product: "ecmwf",
    menu: "false",
    message: "false",
    marker: "true",
    calendar: "6",
    pressure: "false",
    type: "map",
    location: "coordinates",
    detail: "false",
    metricWind: "default",
    metricTemp: "default",
    radarRange: "-1"
  });
  return `https://embed.windy.com/embed2.html?${params.toString()}`;
}

function getWindyFocusPoint() {
  return {
    ...WINDY_TAIWAN_VIEW,
    hasTyphoonCenter: Boolean(
      Number.isFinite(appState.typhoonOfficial?.lat) && Number.isFinite(appState.typhoonOfficial?.lon)
    )
  };
}

function updateWindyTrackEmbed() {
  if (!windyEmbed) {
    return;
  }
  const focus = getWindyFocusPoint();
  const embedUrl = buildWindyEmbedUrl(focus.lat, focus.lon, focus.zoom);
  const normalizeSrc = (src) => {
    try {
      const url = new URL(src);
      url.searchParams.delete("_replay");
      return url.toString();
    } catch {
      return src;
    }
  };
  const currentSrc = windyEmbed.getAttribute("src") || "";
  if (!currentSrc || normalizeSrc(currentSrc) !== normalizeSrc(embedUrl)) {
    windyEmbed.src = embedUrl;
  }
  windyEmbed.style.height = `${WINDY_EMBED_HEIGHT}px`;
  if (windyExternalLink) {
    windyExternalLink.href = `https://www.windy.com/?${focus.lat.toFixed(3)},${focus.lon.toFixed(3)},${focus.zoom},i:pressure`;
  }
}

async function initVisitorCounter() {
  if (!visitorCounter) {
    return;
  }
  const localCount = Number(localStorage.getItem(VISITOR_COUNTER_STORAGE_KEY) || 0) + 1;
  localStorage.setItem(VISITOR_COUNTER_STORAGE_KEY, String(localCount));
  visitorCounter.textContent = `觀看總人數：${localCount.toLocaleString("zh-TW")}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    const response = await fetch(
      `https://api.countapi.xyz/hit/${VISITOR_COUNTER_NAMESPACE}/${VISITOR_COUNTER_KEY}`,
      { signal: controller.signal }
    );
    clearTimeout(timeoutId);
    if (!response.ok) {
      return;
    }
    const payload = await response.json();
    if (Number.isFinite(payload.value)) {
      visitorCounter.textContent = `觀看總人數：${Number(payload.value).toLocaleString("zh-TW")}`;
    }
  } catch {
    visitorCounter.textContent = `觀看總人數：${localCount.toLocaleString("zh-TW")}（本機累計）`;
  }
}

function calculateTyphoonRisk() {
  const weather = appState.weather;
  const official = appState.typhoonOfficial;
  if (!weather && !official) {
    return null;
  }

  const wind = Number(weather?.current?.wind_speed_10m ?? 0);
  const gust = Number(weather?.current?.wind_gusts_10m ?? wind);
  const pressure = Number(weather?.current?.pressure_msl ?? 1015);
  const rainProbAvg = weather
    ? weather.next8Hours.reduce((sum, item) => sum + item.probability, 0) / Math.max(weather.next8Hours.length, 1)
    : 0;
  const rain24 = Number(weather?.rain24 ?? 0);

  let score = 0;
  score += Math.min(wind * 1.2, 30);
  score += Math.min(gust * 0.7, 25);
  score += Math.max(0, 1012 - pressure) * 1.6;
  score += Math.min(rainProbAvg * 0.25, 18);
  score += Math.min(rain24 * 0.45, 20);

  if (official?.hasWarning) {
    score += 35;
  }
  if ((official?.typhoonCount ?? 0) > 0) {
    score += 18;
  }
  if (official?.maxWindMs) {
    score += Math.min(official.maxWindMs * 0.55, 28);
  }
  if (official?.pressure && official.pressure < 970) {
    score += 12;
  }

  score = Math.round(Math.min(score, 100));
  const level = score >= 70 ? "高" : score >= 40 ? "中" : "低";
  const messages = [
    ...(official?.messages ?? []),
    `本地觀測：風速 ${wind.toFixed(1)} km/h，陣風 ${gust.toFixed(1)} km/h，氣壓 ${Math.round(pressure)} hPa。`,
    `本地降雨：12 小時平均降雨機率 ${Math.round(rainProbAvg)}%，24 小時雨量預估 ${rain24.toFixed(1)} mm。`
  ];
  return { level, score, messages, hasWarning: Boolean(official?.hasWarning) };
}

function renderTyphoonAnalysis() {
  const result = calculateTyphoonRisk();
  if (!result) {
    typhoonRiskBadge.textContent = "風險等級：資料不足";
    typhoonRiskBadge.className = "risk-badge risk-low";
    typhoonAnalysisList.innerHTML = "<li>等待氣象資料。</li>";
    updateWindyTrackEmbed();
    return;
  }
  appState.typhoon = result;
  const className = result.level === "高" ? "risk-high" : result.level === "中" ? "risk-medium" : "risk-low";
  typhoonRiskBadge.className = `risk-badge ${className}`;
  typhoonRiskBadge.textContent = `風險等級：${result.level}（指數 ${result.score}/100）`;
  typhoonAnalysisList.innerHTML = "";
  result.messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message;
    typhoonAnalysisList.append(item);
  });
  updateWindyTrackEmbed();
}

function getNearbyFloodWarnings() {
  const location = getActiveWeatherLocation();
  if (!location || !appState.floodLivePoints.length) {
    return [];
  }
  return getNearbyFloodPoints(location, FLOOD_NOTIFY_RADIUS_KM);
}

function getNearbyFloodPoints(location, radiusKm = FLOOD_NOTIFY_RADIUS_KM) {
  if (!location || !appState.floodLivePoints.length) {
    return [];
  }
  return appState.floodLivePoints
    .map((point) => ({
      areaName: `${point.county}${point.town} ${point.name}`,
      sensorid: point.sensorid,
      level: point.level,
      waterDepthCm: point.depthCm,
      depthCm: point.depthCm,
      updatedAt: point.updatedAt,
      lat: point.lat,
      lon: point.lon,
      distanceKm: getDistanceKm(location.lat, location.lon, point.lat, point.lon)
    }))
    .filter((row) => row.distanceKm <= radiusKm)
    .sort((a, b) => b.level - a.level || a.distanceKm - b.distanceKm);
}

function isFloodWarningDepth(depthCm) {
  return Number(depthCm) >= FLOOD_SAFE_DEPTH_CM;
}

function buildPowerOutageTrackingKey(point) {
  const area = normalizeTaiwanPlaceText(point.area || point.label || "");
  const lat = Number(point.lat).toFixed(4);
  const lon = Number(point.lon).toFixed(4);
  return `${point.type}|${area}|${lat}|${lon}`;
}

function createDefaultRecoveryState() {
  return {
    floodSensors: {},
    powerOutages: {},
    hasLandTyphoonWarning: false
  };
}

function loadRecoveryState() {
  try {
    const raw = localStorage.getItem(RECOVERY_STATE_STORAGE_KEY);
    if (!raw) {
      return createDefaultRecoveryState();
    }
    const parsed = JSON.parse(raw);
    return {
      floodSensors: parsed.floodSensors ?? {},
      powerOutages: parsed.powerOutages ?? {},
      hasLandTyphoonWarning: Boolean(parsed.hasLandTyphoonWarning)
    };
  } catch {
    return createDefaultRecoveryState();
  }
}

function saveRecoveryState(state) {
  localStorage.setItem(RECOVERY_STATE_STORAGE_KEY, JSON.stringify(state));
}

function updateRecoveryTrackingState() {
  const prev = loadRecoveryState();
  const next = createDefaultRecoveryState();
  const messages = [];
  const topics = new Set(appState.subscription?.topics ?? []);
  const isSubscribed = Boolean(appState.subscription?.email);
  const location = getSubscriptionWeatherLocation();
  const locationLabel = getSubscriptionLocationLabel();

  if (location) {
    const nearbyFloods = getNearbyFloodPoints(location, FLOOD_SUBSCRIPTION_RADIUS_KM);
    const currentWarningSensors = {};
    nearbyFloods.forEach((point) => {
      if (!isFloodWarningDepth(point.depthCm)) {
        return;
      }
      currentWarningSensors[point.sensorid] = {
        areaName: point.areaName,
        level: point.level,
        depthCm: point.depthCm,
        distanceKm: point.distanceKm
      };
    });

    if (isSubscribed && topics.has("flood")) {
      Object.entries(prev.floodSensors).forEach(([sensorid, point]) => {
        if (currentWarningSensors[sensorid]) {
          return;
        }
        messages.push(
          `【積淹水消退】${point.areaName} 已消退至安全警戒高度（原水深 ${point.depthCm} cm、等級 ${point.level}），${locationLabel} 周邊約 ${point.distanceKm.toFixed(1)} km，請恢復通行並持續留意。`
        );
      });
    }
    next.floodSensors = currentWarningSensors;
  } else {
    next.floodSensors = prev.floodSensors;
  }

  const currentOutages = {};
  getNearbyPowerOutages().forEach((point) => {
    const key = buildPowerOutageTrackingKey(point);
    currentOutages[key] = {
      area: point.area,
      type: point.type,
      label: point.label,
      distanceKm: point.distanceKm
    };
  });

  if (isSubscribed && topics.has("power-outage")) {
    Object.entries(prev.powerOutages).forEach(([key, point]) => {
      if (currentOutages[key]) {
        return;
      }
      const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
      const place = point.label || point.area || "未提供區域";
      messages.push(
        `【電力回復】${place}（${typeLabel}）已恢復供電，${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內距離約 ${Number(point.distanceKm).toFixed(1)} km。`
      );
    });
  }
  next.powerOutages = currentOutages;

  const hasLandWarning = Boolean(appState.typhoonOfficial?.hasLandWarning);
  if (isSubscribed && prev.hasLandTyphoonWarning && !hasLandWarning) {
    const typhoonName = appState.typhoonOfficial?.name;
    messages.push(
      `【解除颱風警報】中央氣象署已解除陸上颱風警報${typhoonName ? `（${typhoonName}）` : ""}，${locationLabel} 請持續留意後續天氣與防災資訊。`
    );
  }
  next.hasLandTyphoonWarning = hasLandWarning;

  saveRecoveryState(next);
  return messages;
}

function renderAiAlerts() {
  const alerts = [];
  const typhoon = appState.typhoon;
  const air = appState.airQuality;
  const cityClosure = appState.closureRows.find((row) => row.city === citySelect.value);
  const nearbyFlood = getNearbyFloodWarnings();

  if (typhoon) {
    if (typhoon.hasWarning || typhoon.level === "高") {
      alerts.push(`【高風險】颱風風險指數 ${typhoon.score}，建議預先備妥防災物資並避免非必要外出。`);
    } else if (typhoon.level === "中") {
      alerts.push(`【注意】颱風風險指數 ${typhoon.score}，請關注地方政府後續警戒資訊。`);
    } else {
      alerts.push("【一般】目前風險偏低，仍建議維持基本防災準備。");
    }
  }

  if (air && air.aqi > 100) {
    alerts.push(`【空品提醒】目前 AQI ${Math.round(air.aqi)}，敏感族群請減少戶外活動。`);
  }

  if (nearbyFlood.length > 0) {
    const top = nearbyFlood[0];
    alerts.push(
      `【積淹水警示】${top.areaName} 距離約 ${top.distanceKm.toFixed(1)} km，水深 ${top.waterDepthCm} cm（等級 ${top.level}）。`
    );
  } else if (appState.floodMetaText) {
    alerts.push(`【積淹水監測】${appState.floodMetaText}`);
  }

  if (cityClosure && cityClosure.message.includes("停止上班")) {
    alerts.push(`【停班停課】${cityClosure.city} 最新公告：${cityClosure.message}`);
  }

  if (!alerts.length) {
    alerts.push("目前未觸發重大災害提醒。");
  }
  appState.aiAlerts = alerts;
  aiAlertList.innerHTML = "";
  alerts.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    aiAlertList.append(item);
  });
}

function loadSubscription() {
  try {
    const raw = localStorage.getItem(SUBSCRIPTION_STORAGE_KEY);
    if (!raw) {
      return;
    }
    appState.subscription = JSON.parse(raw);
    if (appState.subscription?.email) {
      subscriberEmail.value = appState.subscription.email;
    }
    const topics = new Set(appState.subscription?.topics ?? []);
    subscriptionForm.querySelectorAll("input[name='topic']").forEach((checkbox) => {
      checkbox.checked = topics.has(checkbox.value);
    });
  } catch {
    appState.subscription = null;
  }
}

function renderSubscriptionStatus(message) {
  if (message) {
    subscriptionStatus.textContent = message;
    return;
  }
  if (!appState.subscription?.email) {
    subscriptionStatus.textContent = "尚未設定訂閱。";
    return;
  }
  const permissionLabel =
    !("Notification" in window)
      ? "此瀏覽器不支援通知"
      : Notification.permission === "granted"
        ? "已允許瀏覽器通知"
        : Notification.permission === "denied"
          ? "通知權限已封鎖"
          : "尚未允許瀏覽器通知";
  subscriptionStatus.textContent = `已訂閱 ${appState.subscription.email}（地區：${appState.subscription.city || "未指定"}｜主題：${getSelectedSubscriptionTopics().join("、")}｜${permissionLabel}）`;
}

async function initServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return null;
  }
  try {
    notificationRegistration = await navigator.serviceWorker.register("./sw.js", { scope: "./" });
    await notificationRegistration.update();
    return notificationRegistration;
  } catch {
    return null;
  }
}

async function getNotificationRegistration() {
  if (notificationRegistration) {
    return notificationRegistration;
  }
  if (!("serviceWorker" in navigator)) {
    return null;
  }
  try {
    notificationRegistration = await navigator.serviceWorker.ready;
    return notificationRegistration;
  } catch {
    return null;
  }
}

async function showAppNotification(title, body, { tag, data } = {}) {
  const payload = {
    body,
    tag: tag || `jin-${Date.now()}`,
    renotify: true,
    vibrate: [200, 100, 200, 100, 200],
    icon: "./icons/icon-192.svg",
    badge: "./icons/icon-192.svg",
    data: data || {}
  };

  const registration = await getNotificationRegistration();
  if (registration?.showNotification) {
    await registration.showNotification(title, payload);
    return true;
  }

  if ("Notification" in window) {
    new Notification(title, payload);
    return true;
  }
  return false;
}

function getNotificationDigest(messages) {
  return messages.join("\n");
}

function shouldSendNotificationDigest(messages, { force = false } = {}) {
  if (force) {
    return true;
  }
  const digest = getNotificationDigest(messages);
  const previous = localStorage.getItem(NOTIFICATION_DIGEST_STORAGE_KEY);
  return previous !== digest;
}

async function ensureNotificationPermission() {
  if (!("Notification" in window)) {
    renderSubscriptionStatus("此瀏覽器不支援通知，無法啟用即時提醒。");
    return false;
  }
  if (Notification.permission === "granted") {
    await initServiceWorker();
    return true;
  }
  if (Notification.permission === "denied") {
    renderSubscriptionStatus("通知權限已封鎖，請在瀏覽器設定中允許本站通知。");
    return false;
  }
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    renderSubscriptionStatus("尚未取得通知權限，因此無法推送提醒。");
    return false;
  }
  await initServiceWorker();
  return true;
}

function getSubscriptionCityName() {
  return appState.subscription?.city || citySelect.value || "";
}

function getSubscriptionWeatherLocation() {
  const city = appState.subscription?.city || citySelect.value;
  const township = appState.subscription?.township || townshipSelect.value;
  if (city && township) {
    const townshipRecord = TOWNSHIP_LOCATIONS.find((item) => item.city === city && item.town === township);
    if (townshipRecord) {
      return {
        label: `${townshipRecord.city}${townshipRecord.town}`,
        cityName: townshipRecord.city,
        townName: townshipRecord.town,
        lat: townshipRecord.lat,
        lon: townshipRecord.lon
      };
    }
  }
  const cityRecord = CITY_LOCATIONS.find((item) => item.name === city);
  if (cityRecord) {
    return {
      label: cityRecord.name,
      cityName: cityRecord.name,
      townName: "",
      lat: cityRecord.lat,
      lon: cityRecord.lon
    };
  }
  return getActiveWeatherLocation();
}

function getSubscriptionLocationLabel() {
  return getSubscriptionWeatherLocation()?.label || "查詢區域";
}

function getNearbyPowerOutages(radiusKm = POWER_OUTAGE_NOTIFY_RADIUS_KM) {
  const location = getSubscriptionWeatherLocation();
  if (!location || !Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    return [];
  }
  if (!appState.powerOutagePoints.length) {
    return [];
  }
  return appState.powerOutagePoints
    .map((point) => ({
      ...point,
      distanceKm: getDistanceKm(location.lat, location.lon, point.lat, point.lon)
    }))
    .filter((row) => row.distanceKm <= radiusKm)
    .sort((a, b) => {
      const typeOrder = { disaster: 0, planned: 1 };
      return (typeOrder[a.type] ?? 2) - (typeOrder[b.type] ?? 2) || a.distanceKm - b.distanceKm;
    });
}

function getSubscriptionClosureMessage() {
  const cityName = getSubscriptionCityName();
  const locationLabel = getSubscriptionLocationLabel();
  const closure = cityName ? appState.closureRows.find((row) => row.city === cityName) : null;
  if (!closure) {
    return `【停班停課】${locationLabel}：目前無停班停課狀態`;
  }
  return `【停班停課】${locationLabel}：${closure.message}`;
}

function isClosureAlertMessage(message) {
  return message.includes("停止上班") || message.includes("停止上課");
}

function getSubscriptionPowerOutageMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const nearby = getNearbyPowerOutages();
  if (!nearby.length) {
    return `【停電區域】${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內目前無停電通報。`;
  }
  const summaries = nearby.slice(0, 3).map((point) => {
    const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
    const place = point.label || point.area || "未提供區域";
    return `${place}（${typeLabel}，約 ${point.distanceKm.toFixed(1)} km）`;
  });
  const suffix = nearby.length > 3 ? `等共 ${nearby.length} 處` : `共 ${nearby.length} 處`;
  return `【停電區域】${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內${suffix}：${summaries.join("；")}`;
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getSelectedSubscriptionTopics() {
  const topics = new Set(appState.subscription?.topics ?? []);
  return SUBSCRIPTION_TOPIC_ORDER.filter((topic) => topics.has(topic));
}

function getSubscriptionFloodMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const location = getSubscriptionWeatherLocation();
  const nearbyFloods = location ? getNearbyFloodPoints(location, FLOOD_SUBSCRIPTION_RADIUS_KM) : [];
  const warningFloods = nearbyFloods.filter((point) => isFloodWarningDepth(point.depthCm));
  if (warningFloods.length) {
    const top = warningFloods[0];
    return `【積淹水警示】${top.areaName} 距離約 ${top.distanceKm.toFixed(1)} km，水深 ${top.waterDepthCm} cm（等級 ${top.level}）。`;
  }
  if (nearbyFloods.length) {
    const top = nearbyFloods[0];
    return `【積淹水監測】${locationLabel} 半徑 ${FLOOD_SUBSCRIPTION_RADIUS_KM} 公里內有 ${nearbyFloods.length} 處感測積水，最近 ${top.areaName} 水深 ${top.waterDepthCm} cm（未達警戒）。`;
  }
  return `【積淹水監測】${locationLabel} 半徑 ${FLOOD_SUBSCRIPTION_RADIUS_KM} 公里內目前無積淹水警戒。`;
}

function getSubscriptionWeatherMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  if (!appState.weather?.current) {
    return `【即時天氣】${locationLabel} 天氣資料暫時無法讀取。`;
  }
  return `【即時天氣】${appState.weather.label} ${Math.round(appState.weather.current.temperature_2m)}°C，降雨機率 ${Math.round(appState.weather.rainProb ?? 0)}%。`;
}

function getSubscriptionAirQualityMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  if (!appState.airQuality) {
    return `【空氣品質】${locationLabel} 空氣品質資料暫時無法讀取。`;
  }
  return `【空氣品質】${locationLabel} AQI ${Math.round(appState.airQuality.aqi)}，${getAqiLabel(appState.airQuality.aqi)}。`;
}

function buildSubscriptionNotificationMessages() {
  const topicBuilders = {
    closure: getSubscriptionClosureMessage,
    flood: getSubscriptionFloodMessage,
    "power-outage": getSubscriptionPowerOutageMessage,
    weather: getSubscriptionWeatherMessage,
    air: getSubscriptionAirQualityMessage
  };
  return getSelectedSubscriptionTopics().map((topic) => topicBuilders[topic]());
}

async function sendRecoveryNotifications(messages) {
  if (!messages.length || !appState.subscription?.email) {
    return false;
  }
  const permissionGranted = await ensureNotificationPermission();
  if (!permissionGranted) {
    return false;
  }
  for (const message of messages) {
    await showAppNotification("災害狀態更新", message, {
      tag: `recovery-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    });
    await sleep(900);
  }
  return true;
}

async function sendSubscriptionNotification({ force = false } = {}) {
  if (!appState.subscription?.email) {
    renderSubscriptionStatus("請先輸入 Email 並儲存訂閱。");
    return false;
  }
  const permissionGranted = await ensureNotificationPermission();
  if (!permissionGranted) {
    return false;
  }
  const messages = buildSubscriptionNotificationMessages();
  if (!messages.length) {
    renderSubscriptionStatus("請先勾選至少一項訂閱主題。");
    return false;
  }
  if (!force && Date.now() - appState.lastNotifiedAt < getAutoRefreshIntervalMs() - 5000) {
    return false;
  }
  if (!shouldSendNotificationDigest(messages, { force })) {
    return false;
  }

  const body = messages.join("\n");
  const hasClosureAlert = messages.some((message) => isClosureAlertMessage(message));
  const repeatCount = hasClosureAlert ? 3 : 1;

  for (let repeat = 0; repeat < repeatCount; repeat += 1) {
    const suffix = repeatCount > 1 ? `\n（第 ${repeat + 1}/${repeatCount} 次提醒）` : "";
    await showAppNotification("預報訂閱通知", `${body}${suffix}`, {
      tag: `subscription-alert-${repeat}-${Date.now()}`
    });
    if (repeat < repeatCount - 1) {
      await sleep(1800);
    }
  }

  localStorage.setItem(NOTIFICATION_DIGEST_STORAGE_KEY, getNotificationDigest(messages));
  appState.lastNotifiedAt = Date.now();
  const statusHint = hasClosureAlert
    ? `已依訂閱順序同步送出 ${messages.length} 項通知（停班停課提醒 3 次）`
    : `已依訂閱順序同步送出 ${messages.length} 項通知`;
  renderSubscriptionStatus(statusHint);
  return true;
}

async function maybeNotifySubscribers(triggerSource, recoveryMessages = []) {
  if (!appState.subscription?.email) {
    return;
  }
  const shouldNotify =
    triggerSource === "auto" || (triggerSource === "manual" && document.hidden) || recoveryMessages.length > 0;
  if (!shouldNotify) {
    return;
  }
  if (recoveryMessages.length) {
    await sendRecoveryNotifications(recoveryMessages);
  }
  if (triggerSource === "auto" || document.hidden) {
    await sendSubscriptionNotification();
  }
}

function getMapLayerInstance(layerKey) {
  if (layerKey === "power-outage") {
    return mapPowerOutageLayer;
  }
  if (layerKey === "flood-warning") {
    return mapFloodLayer;
  }
  if (layerKey === "cctv-points") {
    return mapCameraLayer;
  }
  if (layerKey === "city-focus") {
    return mapCityFocusLayer;
  }
  return null;
}

function applyMapLayerOrder() {
  if (!warningMap) {
    return;
  }
  let zIndex = 660;
  mapLayerOrder.forEach((layerKey) => {
    const paneName = mapLayerConfig[layerKey]?.pane;
    if (!paneName) {
      return;
    }
    const pane = warningMap.getPane(paneName);
    if (pane) {
      pane.style.zIndex = String(zIndex);
      zIndex -= 20;
    }
  });
}

function syncMapLayerVisibility(layerKey) {
  if (!warningMap) {
    return;
  }
  const layer = getMapLayerInstance(layerKey);
  if (!layer) {
    return;
  }
  const shouldShow = Boolean(mapLayerVisibility[layerKey]);
  const hasLayer = warningMap.hasLayer(layer);
  if (shouldShow && !hasLayer) {
    layer.addTo(warningMap);
  }
  if (!shouldShow && hasLayer) {
    warningMap.removeLayer(layer);
  }
}

function renderLayerControl() {
  if (!mapLayerList) {
    return;
  }
  mapLayerList.innerHTML = "";
  mapLayerOrder.forEach((layerKey) => {
    if (mapLayerConfig[layerKey]?.hiddenInControl) {
      return;
    }
    const item = document.createElement("li");
    item.className = "layer-item";
    item.dataset.layerKey = layerKey;
    item.innerHTML = `
      <label>${mapLayerConfig[layerKey].label}</label>
      <input type="checkbox" ${mapLayerVisibility[layerKey] ? "checked" : ""} aria-label="${mapLayerConfig[layerKey].label}" />
    `;

    const checkbox = item.querySelector("input");
    checkbox?.addEventListener("change", (event) => {
      mapLayerVisibility[layerKey] = Boolean(event.target.checked);
      syncMapLayerVisibility(layerKey);
    });
    mapLayerList.append(item);
  });
  applyMapLayerOrder();
}

function buildFloodPointStyle(depthCm) {
  const level = getFloodLevelByDepth(depthCm);
  if (level >= 4) {
    return { color: "#790000", fillColor: "#d00000", fillOpacity: 0.85, radius: 9, weight: 2 };
  }
  if (level === 3) {
    return { color: "#8a1c00", fillColor: "#e85d04", fillOpacity: 0.8, radius: 8, weight: 2 };
  }
  if (level === 2) {
    return { color: "#9c5800", fillColor: "#ffba08", fillOpacity: 0.78, radius: 7, weight: 2 };
  }
  return { color: "#616161", fillColor: "#ffd166", fillOpacity: 0.72, radius: 6, weight: 1 };
}

function updateFloodMapLayer() {
  if (!warningMap) {
    return;
  }
  if (mapFloodLayer && warningMap.hasLayer(mapFloodLayer)) {
    warningMap.removeLayer(mapFloodLayer);
  }
  mapFloodLayer = L.layerGroup();

  const points = appState.floodLivePoints.length
    ? appState.floodLivePoints
    : [];

  if (!points.length && appState.floodStations.length) {
    // Keep a light fallback sample of stations when all depths are zero,
    // so the layer remains inspectable.
    appState.floodStations.slice(0, 40).forEach((station) => {
      const marker = L.circleMarker([station.lat, station.lon], {
        pane: "floodPane",
        ...buildFloodPointStyle(0)
      });
      marker.bindPopup(
        `
          <strong>${station.name}</strong><br/>
          ${station.county}${station.town}<br/>
          目前水深：0 cm<br/>
          來源：水利署 IoW 即時感測
        `
      );
      mapFloodLayer.addLayer(marker);
    });
  } else {
    points.forEach((point) => {
      const marker = L.circleMarker([point.lat, point.lon], {
        pane: "floodPane",
        ...buildFloodPointStyle(point.depthCm)
      });
      marker.bindPopup(
        `
          <strong>${point.name}</strong><br/>
          ${point.county}${point.town}<br/>
          警示等級：${point.level}<br/>
          即時水深：${point.depthCm} cm<br/>
          更新時間：${point.updatedAt || "-"}<br/>
          來源：水利署 IoW 即時感測
        `
      );
      mapFloodLayer.addLayer(marker);
    });
  }

  syncMapLayerVisibility("flood-warning");
  updateFloodLayerMetaText();
}

function updateFloodLayerMetaText() {
  const floodedCount = appState.floodLivePoints.length;
  const stationCount = appState.floodStations.length;
  appState.floodMetaText =
    floodedCount > 0
      ? `即時積水感測點 ${floodedCount} 處（測站總數 ${stationCount}）。`
      : `目前全台 IoW 測站未回報積水（測站總數 ${stationCount}）。`;

  const note = document.querySelector("#floodLayerMeta");
  if (note) {
    note.textContent = `${appState.floodMetaText} 顏色越深代表水深越高。`;
  }
}

async function loadFloodStations() {
  const response = await fetch("./data/flood_stations.json");
  if (!response.ok) {
    throw new Error(`淹水測站資料讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  appState.floodStations = payload.stations ?? [];
}

async function fetchLiveFloodData() {
  if (!appState.floodStations.length) {
    await loadFloodStations();
  }
  const response = await fetch(FLOOD_LATEST_API);
  if (!response.ok) {
    throw new Error(`即時淹水資料讀取失敗：${response.status}`);
  }
  const latestRows = await response.json();
  const stationMap = new Map(appState.floodStations.map((station) => [station.sensorid, station]));
  const livePoints = [];
  const freshnessLimitMs = 36 * 60 * 60 * 1000;
  const nowMs = Date.now();

  latestRows.forEach((row) => {
    const depthCm = Number(row.latestvalue ?? 0);
    if (!(depthCm > 0) || depthCm >= 500) {
      return;
    }
    const updatedMs = Date.parse(row.timestamp || "");
    if (Number.isFinite(updatedMs) && nowMs - updatedMs > freshnessLimitMs) {
      return;
    }
    const station = stationMap.get(row.sensorid);
    if (!station) {
      return;
    }
    livePoints.push({
      sensorid: row.sensorid,
      name: station.name,
      county: station.county,
      town: station.town,
      lat: station.lat,
      lon: station.lon,
      depthCm,
      level: getFloodLevelByDepth(depthCm),
      updatedAt: row.timestamp
    });
  });

  appState.floodLivePoints = livePoints.sort((a, b) => b.depthCm - a.depthCm);
  appState.floodFeatures = livePoints.map((point) => ({
    type: "Feature",
    properties: {
      areaName: `${point.county}${point.town} ${point.name}`,
      level: point.level,
      waterDepthCm: point.depthCm,
      updatedAt: point.updatedAt,
      note: "水利署 IoW 即時感測"
    },
    geometry: {
      type: "Point",
      coordinates: [point.lon, point.lat]
    }
  }));
  updateFloodMapLayer();
}

async function fetchTyphoonOfficial() {
  const [newsResponse, warnResponse] = await Promise.all([
    fetch(TYPHOON_NEWS_MIRROR),
    fetch(TYPHOON_WARN_MIRROR)
  ]);
  if (!newsResponse.ok || !warnResponse.ok) {
    throw new Error("中央氣象署颱風資料讀取失敗");
  }
  const newsMarkdown = await newsResponse.text();
  const warnMarkdown = await warnResponse.text();
  appState.typhoonOfficial = parseTyphoonOfficialText(newsMarkdown, warnMarkdown);
}

function fitMapToFocusArea() {
  if (!warningMap || !mapCityFocusLayer) {
    return;
  }
  warningMap.invalidateSize();
  warningMap.fitBounds(mapCityFocusLayer.getBounds(), {
    padding: [12, 12],
    maxZoom: 15
  });
}

function updateCityFocusLayer() {
  if (!warningMap) {
    return;
  }
  const location = getActiveWeatherLocation();
  if (mapCityFocusLayer && warningMap.hasLayer(mapCityFocusLayer)) {
    warningMap.removeLayer(mapCityFocusLayer);
  }
  if (!location) {
    return;
  }
  mapCityFocusLayer = L.circle([location.lat, location.lon], {
    pane: "focusPane",
    radius: MAP_FOCUS_CIRCLE_RADIUS_M,
    color: "#00b4d8",
    weight: 2,
    fillColor: "#00b4d8",
    fillOpacity: 0.09
  }).bindTooltip(`${location.label} 焦點區`);
  syncMapLayerVisibility("city-focus");
  fitMapToFocusArea();
}

function updateCameraMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapCameraLayer) {
    mapCameraLayer = L.layerGroup();
  }
  mapCameraLayer.clearLayers();
  getFilteredSortedCityCameras()
    .slice(0, 220)
    .forEach((camera) => {
      if (!Number.isFinite(Number(camera.gisy)) || !Number.isFinite(Number(camera.gisx))) {
        return;
      }
      const marker = L.circleMarker([Number(camera.gisy), Number(camera.gisx)], {
        pane: "cameraPane",
        radius: 4,
        color: "#66d9ff",
        fillColor: "#0096c7",
        fillOpacity: 0.7,
        weight: 1
      });
      marker.bindPopup(
        `
          <strong>${camera.id}</strong><br/>
          ${camera.city ? `${camera.city}｜` : ""}${camera.stakenumber ?? "未提供路口資訊"}<br/>
          距離篩選中心：約 ${camera.distanceKm.toFixed(1)} km<br/>
          <a href="${camera.html}" target="_blank" rel="noopener noreferrer">開啟官方即時影像</a>
        `
      );
      mapCameraLayer.addLayer(marker);
    });
  syncMapLayerVisibility("cctv-points");
}

function updateMapForCityChange() {
  if (!warningMap) {
    return;
  }
  updateCityFocusLayer();
  updateCameraMapLayer();
  fetchPowerOutageData().catch((error) => {
    appState.powerOutageMetaText = `停電區域資料暫時無法更新：${error.message}`;
    if (powerOutageMeta) {
      powerOutageMeta.textContent = appState.powerOutageMetaText;
    }
  });
}

function initWarningMap() {
  if (typeof L === "undefined") {
    if (mapLayerList) {
      mapLayerList.innerHTML = `<li class="status-warn">地圖套件載入失敗，請檢查網路連線後重試。</li>`;
    }
    return;
  }
  warningMap = L.map("warningMap", {
    zoomControl: true,
    attributionControl: true
  }).setView([23.7, 120.96], 7);

  warningMap.createPane("outagePane");
  warningMap.createPane("floodPane");
  warningMap.createPane("cameraPane");
  warningMap.createPane("focusPane");

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    className: "high-contrast-tiles",
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(warningMap);

  renderLayerControl();
  applyMapLayerOrder();
  loadFloodStations()
    .then(() => fetchLiveFloodData())
    .then(() => renderAiAlerts())
    .catch((error) => {
      if (mapLayerList) {
        const warn = document.createElement("p");
        warn.className = "status-warn";
        warn.textContent = `積淹水即時圖層載入失敗：${error.message}`;
        mapLayerList.append(warn);
      }
    });
  updateCityFocusLayer();
  updateCameraMapLayer();
  requestAnimationFrame(() => {
    fitMapToFocusArea();
  });
}

async function fetchRoadCameras() {
  try {
    const [cityResponse, freewayResponse] = await Promise.all([
      fetch("./data/city_cctv.json"),
      fetch("./data/freeway_cctv.json")
    ]);
    if (!cityResponse.ok) {
      throw new Error(`市區監控資料讀取失敗：${cityResponse.status}`);
    }
    cityCameraDataset = await cityResponse.json();

    if (freewayResponse.ok) {
      freewayCameraDataset = await freewayResponse.json();
      freewayRadiusCache.clear();
    } else if (freewayCameraMeta) {
      freewayCameraMeta.textContent = `國道監控資料暫時無法更新：HTTP ${freewayResponse.status}`;
    }

    renderAllCameraLists();
    updateCameraMapLayer();
  } catch (error) {
    cameraMeta.textContent = `市區監控資料暫時無法更新：${error.message}`;
    cameraList.innerHTML = `<p class="status-warn">請稍後重試或改用來源網址查詢。</p>`;
  }
}

function setDualLabelText(element, fullText, shortText = fullText) {
  if (!element) {
    return;
  }
  const fullNode = element.querySelector(".text-full");
  const shortNode = element.querySelector(".text-short");
  if (fullNode && shortNode) {
    fullNode.textContent = fullText;
    shortNode.textContent = shortText;
    return;
  }
  element.textContent = fullText;
}

function setRefreshButtonLoading(isLoading) {
  refreshBtn.disabled = isLoading;
  refreshBtn.textContent = isLoading ? "更新中..." : "立即更新資料";
}

function getAutoRefreshIntervalMs() {
  return AUTO_REFRESH_OPTIONS[appState.autoRefreshIntervalMinutes]?.ms ?? AUTO_REFRESH_OPTIONS[15].ms;
}

function getAutoRefreshIntervalLabel() {
  return AUTO_REFRESH_OPTIONS[appState.autoRefreshIntervalMinutes]?.label ?? "15 分鐘";
}

function loadAutoRefreshIntervalPreference() {
  const saved = Number(localStorage.getItem(AUTO_REFRESH_STORAGE_KEY));
  if (AUTO_REFRESH_OPTIONS[saved]) {
    appState.autoRefreshIntervalMinutes = saved;
  }
  if (autoRefreshIntervalSelect) {
    autoRefreshIntervalSelect.value = String(appState.autoRefreshIntervalMinutes);
  }
}

function formatAutoRefreshCountdown(remainingMs) {
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function scheduleNextAutoRefresh() {
  appState.nextAutoRefreshAt = Date.now() + getAutoRefreshIntervalMs();
}

function updateAutoRefreshMeta() {
  if (!autoRefreshMeta) {
    return;
  }
  if (!appState.autoRefreshEnabled) {
    autoRefreshMeta.textContent = "自動更新：已暫停";
    setDualLabelText(autoRefreshToggle, "恢復自動更新", "恢復");
    return;
  }
  if (appState.autoRefreshRunning) {
    autoRefreshMeta.textContent = "自動更新：資料更新中...";
    setDualLabelText(autoRefreshToggle, "暫停自動更新", "暫停");
    return;
  }
  const remainingMs = Math.max(0, appState.nextAutoRefreshAt - Date.now());
  autoRefreshMeta.textContent = `自動更新：啟用中（${formatAutoRefreshCountdown(remainingMs)} 後）`;
  setDualLabelText(autoRefreshToggle, "暫停自動更新", "暫停");
}

async function tickAutoRefreshCountdown() {
  updateAutoRefreshMeta();
  if (!appState.autoRefreshEnabled || appState.autoRefreshRunning) {
    return;
  }
  if (Date.now() < appState.nextAutoRefreshAt) {
    return;
  }
  appState.autoRefreshRunning = true;
  updateAutoRefreshMeta();
  try {
    await performFullRefresh("auto");
  } finally {
    appState.autoRefreshRunning = false;
    if (appState.autoRefreshEnabled) {
      scheduleNextAutoRefresh();
    }
    updateAutoRefreshMeta();
  }
}

function startAutoRefreshTick() {
  if (autoRefreshTickTimer) {
    clearInterval(autoRefreshTickTimer);
  }
  autoRefreshTickTimer = setInterval(() => {
    tickAutoRefreshCountdown();
  }, 1000);
  tickAutoRefreshCountdown();
}

function restartAutoRefreshTimers() {
  scheduleNextAutoRefresh();
  startAutoRefreshTick();
}

function startAutoRefreshTimers() {
  loadAutoRefreshIntervalPreference();
  restartAutoRefreshTimers();
}

async function performFullRefresh(triggerSource) {
  if (triggerSource === "manual") {
    setRefreshButtonLoading(true);
  }
  try {
    await Promise.all([
      fetchWeather(),
      fetchClosureNotices(),
      fetchAirQuality(),
      fetchTyphoonOfficial().catch(() => {
        appState.typhoonOfficial = null;
      }),
      fetchLiveFloodData().catch((error) => {
        appState.floodMetaText = `即時淹水資料暫時無法更新：${error.message}`;
      }),
      fetchPowerOutageData().catch((error) => {
        appState.powerOutageMetaText = `停電區域資料暫時無法更新：${error.message}`;
        if (powerOutageMeta) {
          powerOutageMeta.textContent = appState.powerOutageMetaText;
        }
      })
    ]);
    renderTyphoonAnalysis();
    renderAiAlerts();
    updateMapForCityChange();
    const recoveryMessages = updateRecoveryTrackingState();
    await maybeNotifySubscribers(triggerSource, recoveryMessages);
    lastUpdated.textContent = `資料更新時間：${formatDateTime(Date.now())}${triggerSource === "auto" ? "（自動）" : ""}`;
    if (appState.autoRefreshEnabled) {
      scheduleNextAutoRefresh();
    }
    updateAutoRefreshMeta();
  } catch (error) {
    lastUpdated.textContent = `更新失敗：${error.message}`;
  } finally {
    if (triggerSource === "manual") {
      setRefreshButtonLoading(false);
    }
  }
}

citySelect.addEventListener("change", () => {
  fillTownshipSelect(citySelect.value);
  saveRegionPreference();
  performFullRefresh("manual");
  renderAllCameraLists();
  updateMapForCityChange();
});

townshipSelect.addEventListener("change", () => {
  saveRegionPreference();
  performFullRefresh("manual");
  renderAllCameraLists();
  updateMapForCityChange();
});

locateBtn.addEventListener("click", () => {
  locateByDevice();
});

refreshBtn.addEventListener("click", () => {
  performFullRefresh("manual").catch(() => {
    setRefreshButtonLoading(false);
  });
});

cameraKeyword.addEventListener("input", () => {
  renderAllCameraLists();
  updateCameraMapLayer();
});

cameraRegionSelect.addEventListener("change", () => {
  renderAllCameraLists();
  updateCameraMapLayer();
});

cameraCitySelect?.addEventListener("change", () => {
  renderAllCameraLists();
  updateCameraMapLayer();
});

freewayKeyword?.addEventListener("input", () => {
  renderFreewayCameraList();
});

freewayRegionSelect?.addEventListener("change", () => {
  renderFreewayCameraList();
});

freewayCitySelect?.addEventListener("change", () => {
  renderFreewayCameraList();
});

subscriptionForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const checkedTopics = new Set(
    [...subscriptionForm.querySelectorAll("input[name='topic']:checked")].map((item) => item.value)
  );
  const topics = SUBSCRIPTION_TOPIC_ORDER.filter((topic) => checkedTopics.has(topic));
  appState.subscription = {
    email: subscriberEmail.value.trim(),
    topics,
    city: citySelect.value,
    township: townshipSelect.value
  };
  localStorage.setItem(SUBSCRIPTION_STORAGE_KEY, JSON.stringify(appState.subscription));
  await initServiceWorker();
  const permissionGranted = await ensureNotificationPermission();
  if (permissionGranted) {
    await sendSubscriptionNotification({ force: true });
    renderSubscriptionStatus("訂閱已儲存，所有裝置將自動接收更新通知。");
  } else {
    renderSubscriptionStatus("訂閱設定已儲存，但尚未取得通知權限，請允許通知後重新儲存。");
  }
});

testNotificationBtn?.addEventListener("click", async () => {
  await sendSubscriptionNotification({ force: true });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && appState.subscription?.email && appState.autoRefreshEnabled) {
    performFullRefresh("auto").catch(() => {});
  }
});

autoRefreshToggle.addEventListener("click", () => {
  appState.autoRefreshEnabled = !appState.autoRefreshEnabled;
  if (appState.autoRefreshEnabled) {
    scheduleNextAutoRefresh();
  }
  updateAutoRefreshMeta();
});

autoRefreshIntervalSelect?.addEventListener("change", () => {
  const minutes = Number(autoRefreshIntervalSelect.value);
  if (!AUTO_REFRESH_OPTIONS[minutes]) {
    return;
  }
  appState.autoRefreshIntervalMinutes = minutes;
  localStorage.setItem(AUTO_REFRESH_STORAGE_KEY, String(minutes));
  restartAutoRefreshTimers();
});

function syncNoticeDetailsOpen() {
  const noticeDetails = document.querySelector("#noticeDetails");
  if (!noticeDetails) {
    return;
  }
  noticeDetails.open = window.matchMedia("(min-width: 861px)").matches;
}

initRegionSelectors();
initCameraRegionSelect();
initCameraCitySelect();
initFreewayRegionSelect();
initFreewayCitySelect();
loadSubscription();
renderSubscriptionStatus();
updateWindyTrackEmbed();
syncNoticeDetailsOpen();
window.matchMedia("(min-width: 861px)").addEventListener("change", syncNoticeDetailsOpen);
initServiceWorker();
initVisitorCounter();
performFullRefresh("manual");
fetchRoadCameras();
initWarningMap();
startAutoRefreshTimers();
