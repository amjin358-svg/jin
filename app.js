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

const CAMERA_DISTRICT_NEAR_POINT = "near-point";
const CAMERA_DISTRICT_ALL_CITY = "all-city";
const CAMERA_TOWN_RADIUS_KM = 6; // retained for map focus fallback only

const FREEWAY_CAMERA_REGIONS = [
  { id: "n1", label: "國道1號", lat: 24.5, lon: 120.9, radiusKm: 9999, routes: ["N1", "N1H", "N1K"] },
  { id: "n3", label: "國道3號", lat: 24.5, lon: 120.9, radiusKm: 9999, routes: ["N3", "N3A", "N3K", "N3N"] },
  { id: "n5", label: "國道5號", lat: 24.8, lon: 121.8, radiusKm: 9999, routes: ["N5"] },
  { id: "n2-n4", label: "國道2／4號", lat: 24.9, lon: 121.2, radiusKm: 9999, routes: ["N2", "N2A", "N4"] },
  { id: "n6-n8-n10", label: "國道6／8／10號", lat: 23.8, lon: 120.6, radiusKm: 9999, routes: ["N6", "N8", "N10"] },
  { id: "all-freeway", label: "全部國道", lat: 23.7, lon: 120.96, radiusKm: 9999, routes: null }
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
const windyLocateBtn = document.querySelector("#windyLocateBtn");
const windyLocateBtnLabel = windyLocateBtn?.querySelector(".windy-locate-btn-label");
const LOCATE_BTN_LABEL = "依設備定位選區";
const WINDY_LOCATE_BTN_LABEL = "定位";
const locateBtnLabel = locateBtn?.querySelector(".locate-btn-label");
const locateStatus = document.querySelector("#locateStatus");
let windyLocateFocus = null;

function setLocateButtonsDisabled(disabled) {
  if (locateBtn) {
    locateBtn.disabled = Boolean(disabled);
  }
  if (windyLocateBtn) {
    windyLocateBtn.disabled = Boolean(disabled);
  }
}

function setLocateButtonText(text = LOCATE_BTN_LABEL) {
  if (locateBtnLabel) {
    locateBtnLabel.textContent = text;
  } else if (locateBtn) {
    locateBtn.textContent = text;
  }
  if (windyLocateBtnLabel) {
    windyLocateBtnLabel.textContent = text === LOCATE_BTN_LABEL ? WINDY_LOCATE_BTN_LABEL : "定位中";
  }
}

function setLocateStatus(message, { isError = false } = {}) {
  if (locateStatus) {
    locateStatus.textContent = message || "";
    locateStatus.classList.toggle("locate-status-error", Boolean(isError && message));
  }
  if (regionMemoryMeta && message) {
    regionMemoryMeta.textContent = message.startsWith("區域偏好：") ? message : `區域偏好：${message}`;
  }
}
const regionMemoryMeta = document.querySelector("#regionMemoryMeta");
const refreshBtn = document.querySelector("#refreshBtn");
const lastUpdated = document.querySelector("#lastUpdated");
const weatherSummary = document.querySelector("#weatherSummary");
const tempValue = document.querySelector("#tempValue");
const feelValue = document.querySelector("#feelValue");
const weatherIcon = document.querySelector("#weatherIcon");
const humidityValue = document.querySelector("#humidityValue");
const windValue = document.querySelector("#windValue");
const rainValue = document.querySelector("#rainValue");
const rainProbValue = document.querySelector("#rainProbValue");
const cloudValue = document.querySelector("#cloudValue");
const pressureValue = document.querySelector("#pressureValue");
const rainTimeline = document.querySelector("#rainTimeline");
const weeklyForecastSummary = document.querySelector("#weeklyForecastSummary");
const weeklyForecastList = document.querySelector("#weeklyForecastList");
const closureMeta = document.querySelector("#closureMeta");
const closureList = document.querySelector("#closureList");
const cameraMeta = document.querySelector("#cameraMeta");
const cameraList = document.querySelector("#cameraList");
const cameraListMore = document.querySelector("#cameraListMore");
const cameraMoreDetails = document.querySelector("#cameraMoreDetails");
const cameraMoreSummaryText = document.querySelector(".camera-more-summary-text");
const cameraKeyword = document.querySelector("#cameraKeyword");
const cameraRegionSelect = document.querySelector("#cameraRegionSelect");
const cameraCitySelect = document.querySelector("#cameraCitySelect");
const freewayCameraMeta = document.querySelector("#freewayCameraMeta");
const freewayCameraList = document.querySelector("#freewayCameraList");
const freewayCitySelect = document.querySelector("#freewayCitySelect");
const freewayRegionSelect = document.querySelector("#freewayRegionSelect");
const freewayInterchangeSelect = document.querySelector("#freewayInterchangeSelect");
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
const visitorCounterValue = document.querySelector("#visitorCounterValue");
const likeBtn = document.querySelector("#likeBtn");
const likeBtnLabel = likeBtn?.querySelector(".like-btn-label");
const likeCountValue = document.querySelector("#likeCountValue");
const powerOutageMeta = document.querySelector("#powerOutageMeta");
const mapFloodCountBtn = document.querySelector("#mapFloodCountBtn");
const mapFloodCountValue = document.querySelector("#mapFloodCountValue");
const aiAlertList = document.querySelector("#aiAlertList");
const rainProjection = document.querySelector("#rainProjection");
const subscriptionForm = document.querySelector("#subscriptionForm");
const subscriberEmail = document.querySelector("#subscriberEmail");
const subscriptionStatus = document.querySelector("#subscriptionStatus");
const testNotificationBtn = document.querySelector("#testNotificationBtn");
const notificationHint = document.querySelector("#notificationHint");
const inPageAlertHost = document.querySelector("#inPageAlertHost");
const autoRefreshMeta = document.querySelector("#autoRefreshMeta");
const autoRefreshIntervalSelect = document.querySelector("#autoRefreshInterval");

let cityCameraDataset = null;
let freewayCameraDataset = null;
let freewayInterchangeIndex = null;
let blackScreenCameraIds = new Set();
let utilityAlertTimers = [];
const DISABLED_CAMERA_HOSTS = new Set([]);
let warningMap = null;
let mapFloodLayer = null;
let mapCameraLayer = null;
let mapCityFocusLayer = null;
let mapPowerOutageLayer = null;
const mapLegendMarkers = {
  "flood-4": [],
  "flood-3": [],
  "flood-2": [],
  "flood-1": [],
  "power-disaster": [],
  "power-planned": [],
  cctv: [],
  "city-focus": []
};
const mapLayerOrder = ["city-focus", "flood-warning", "power-outage", "cctv-points"];
const mapLayerVisibility = {
  "power-outage": true,
  "flood-warning": true,
  "cctv-points": true,
  "city-focus": true
};
const mapLayerConfig = {
  "power-outage": { label: "停電區域標示", pane: "outagePane", hiddenInControl: true },
  "flood-warning": { label: "即時積淹水感測", pane: "floodPane", hiddenInControl: true },
  "cctv-points": { label: "縣市路口 CCTV", pane: "cameraPane", hiddenInControl: true },
  "city-focus": { label: "所選位置焦點範圍", pane: "focusPane", hiddenInControl: true }
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
const DAILY_WEATHER_EMAIL_DATE_KEY = "dailyWeatherEmailDateV1";
const SUBSCRIPTION_TOPIC_ORDER = ["weather", "air", "closure", "flood", "power-outage", "water-outage"];
const SITE_PUBLIC_URL = "https://amjin358-svg.github.io/jin/";
const SUBSCRIBE_OWNER_INBOX = "amjin358@gmail.com";
const VAPID_PUBLIC_KEY =
  "BJXXT1l-q5eu0Obt6DDDndh1NeVqGL9jR3mS8aoH1-cB6W3Cqk_UM9jLLF9PLyc1RguSVPmki1bxbOsNcYeOVbI";
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
const MAP_FOCUS_CIRCLE_RADIUS_M = 28000;
const WINDY_EMBED_HEIGHT = 560;
const WINDY_EMBED_WIDTH = 560;
const RAIN_FORECAST_HOURS = 8;
const VISITOR_COUNTER_NAMESPACE = "jin-weather-tw-v1";
const VISITOR_COUNTER_KEY = "visits";
const VISITOR_COUNTER_STORAGE_KEY = "siteVisitCountV1";
const LIKE_COUNTER_KEY = "likes";
const LIKE_COUNTER_STORAGE_KEY = "siteLikeCountV1";
const LIKE_VOTED_STORAGE_KEY = "siteLikedV1";
const CITY_CCTV_RADIUS_KM = 2;
const CITY_CCTV_PREVIEW_LIMIT = 6;
const CITY_CCTV_MORE_LIMIT = 16;
const FREEWAY_CCTV_RADIUS_KM = 40;
const FREEWAY_INTERCHANGE_BASE_RADIUS_KM = 40;
const FREEWAY_CCTV_PREVIEW_LIMIT = 8;
const WINDY_TAIWAN_VIEW = { lat: 23.7, lon: 121.0, zoom: 5 };
const POWER_OUTAGE_NOTIFY_RADIUS_KM = 10;
const FLOOD_NOTIFY_RADIUS_KM = 80;
const FLOOD_SUBSCRIPTION_RADIUS_KM = 20;
const FLOOD_SAFE_DEPTH_CM = 15;
const UTILITY_ALERT_REPEAT_MS = 15 * 60 * 1000;
const UTILITY_ALERT_REPEAT_COUNT = 2;
const PENDING_UTILITY_ALERT_STORAGE_KEY = "pendingUtilityAlertNotificationsV1";
const WATER_OUTAGE_STATE_STORAGE_KEY = "waterOutageTrackingStateV1";
const BLACK_SCREEN_CCTV_STORAGE_KEY = "blackScreenCctvIdsV1";
const CCTV_BLACK_LUMINANCE_THRESHOLD = 28;
const CCTV_VISIBLE_LIMIT = 8;
const CCTV_VERIFY_POOL_SIZE = 48;
let cityCameraRenderToken = 0;
let freewayCameraRenderToken = 0;
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
  waterOutageItems: [],
  waterOutageMetaText: "",
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
  mapLegendMarkers["power-disaster"] = [];
  mapLegendMarkers["power-planned"] = [];
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
    if (type === "disaster") {
      mapLegendMarkers["power-disaster"].push(marker);
    } else {
      mapLegendMarkers["power-planned"].push(marker);
    }
  });

  syncMapLayerVisibility("power-outage");
  syncMapLegendState();
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
  syncCameraRegionToLocatorArea();
}

function getCameraCityForDistrictSelect() {
  return getSelectedCameraCityName() || citySelect?.value || "";
}

function fillCameraDistrictSelect(preferredTown = "") {
  if (!cameraRegionSelect) {
    return;
  }
  const cityName = getCameraCityForDistrictSelect();
  const previous = cameraRegionSelect.value;
  const preferred = String(preferredTown || townshipSelect?.value || "").trim();
  cameraRegionSelect.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = CAMERA_DISTRICT_ALL_CITY;
  allOption.textContent = cityName ? `${cityName}全部` : "本縣市全部";
  cameraRegionSelect.append(allOption);

  TOWNSHIP_LOCATIONS.filter((item) => item.city === cityName).forEach((item) => {
    const option = document.createElement("option");
    option.value = `town:${item.town}`;
    option.textContent = item.town;
    option.title = `${cityName}${item.town}（地政行政區）`;
    cameraRegionSelect.append(option);
  });

  const preferredValue = preferred ? `town:${preferred}` : "";
  const previousValid =
    previous &&
    previous !== CAMERA_DISTRICT_NEAR_POINT &&
    [...cameraRegionSelect.options].some((option) => option.value === previous);

  if (preferredValue && [...cameraRegionSelect.options].some((option) => option.value === preferredValue)) {
    cameraRegionSelect.value = preferredValue;
  } else if (previousValid) {
    cameraRegionSelect.value = previous;
  } else {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
  }
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
  syncCityCameraScopeToLocator();
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
  freewayRegionSelect.value = "n1";
}

function initFreewayCitySelect() {
  fillCameraCitySelectOptions(freewayCitySelect, "all");
  // Prefer nationwide interchange browsing for freeway CCTV.
  if (freewayCitySelect) {
    freewayCitySelect.value = "all";
  }
}

function fillFreewayInterchangeSelect(preferred = "") {
  if (!freewayInterchangeSelect) {
    return;
  }
  const previous = preferred || freewayInterchangeSelect.value || "all";
  const options = getFreewayInterchangeOptions();
  freewayInterchangeSelect.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "全部交流道／路段";
  freewayInterchangeSelect.append(allOption);

  options.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.city ? `${item.name}（${item.city}）` : item.name;
    freewayInterchangeSelect.append(option);
  });

  if ([...freewayInterchangeSelect.options].some((option) => option.value === previous)) {
    freewayInterchangeSelect.value = previous;
  } else {
    freewayInterchangeSelect.value = "all";
  }
}

function getSelectedFreewayInterchangeName() {
  const value = freewayInterchangeSelect?.value || "all";
  return value === "all" ? "" : value;
}

function cameraMatchesFreewayRoute(camera, region) {
  if (!region?.routes?.length) {
    return true;
  }
  return region.routes.includes(getCameraRouteCode(camera.id));
}

function getFreewayInterchangeOptions() {
  if (!freewayInterchangeIndex?.all?.length) {
    return [];
  }
  const region = getSelectedFreewayRegion();
  const selectedCity = getSelectedFreewayCityName();
  const routeCameras = (freewayCameraDataset?.cameras || []).filter((camera) =>
    cameraMatchesFreewayRoute(camera, region)
  );
  const namesOnRoute = new Set();
  routeCameras.forEach((camera) => {
    extractFreewayInterchangeNames(camera.stakenumber).forEach((name) => namesOnRoute.add(name));
  });

  return freewayInterchangeIndex.all
    .filter((item) => namesOnRoute.has(item.name))
    .filter((item) => !selectedCity || item.city === selectedCity)
    .sort((a, b) => a.name.localeCompare(b.name, "zh-Hant"));
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

function getGeolocationErrorMessage(error) {
  const code = error?.code;
  if (code === 1 || /denied/i.test(error?.message || "")) {
    return "定位權限未允許。請到瀏覽器「網站設定／權限」開啟位置存取，或重新整理後再按一次並選擇「允許」。";
  }
  if (code === 2) {
    return "目前無法取得位置資訊，請確認手機定位（GPS／定位服務）已開啟後再試。";
  }
  if (code === 3) {
    return "定位逾時，請移至空曠處或確認定位服務已開啟後再試。";
  }
  return `定位失敗（${error?.message || "未知錯誤"}）`;
}

async function readGeolocationPermissionState() {
  if (!navigator.permissions?.query) {
    return "unknown";
  }
  try {
    const status = await navigator.permissions.query({ name: "geolocation" });
    return status?.state || "unknown";
  } catch {
    return "unknown";
  }
}

function requestDevicePosition(options) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation?.getCurrentPosition) {
      reject(Object.assign(new Error("unsupported"), { code: 0 }));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function ensureGeolocationPermission() {
  if (!window.isSecureContext) {
    return { ok: false, message: "請以 HTTPS（或本機安全環境）開啟本站後再使用定位功能。" };
  }
  if (!navigator.geolocation) {
    return { ok: false, message: "此裝置瀏覽器不支援衛星定位。" };
  }
  // Never hard-block on Permissions API "denied" alone: some mobile browsers
  // mis-report state, and only getCurrentPosition can surface the system prompt.
  const state = await readGeolocationPermissionState();
  return { ok: true, state };
}

function syncSelectValue(selectEl, value) {
  if (!selectEl || value == null || value === "") {
    return;
  }
  const hasOption = [...selectEl.options].some((option) => option.value === value);
  if (hasOption) {
    selectEl.value = value;
  }
}

async function locateByDevice() {
  if (!locateBtn && !windyLocateBtn) {
    return;
  }

  if (!window.isSecureContext) {
    const message = "請以 HTTPS（或本機安全環境）開啟本站後再使用定位功能。";
    setLocateStatus(message, { isError: true });
    showInPageAlert("定位無法啟用", message, { timeoutMs: 9000 });
    return;
  }
  if (!navigator.geolocation?.getCurrentPosition) {
    const message = "此裝置瀏覽器不支援衛星定位。";
    setLocateStatus(message, { isError: true });
    showInPageAlert("定位無法啟用", message, { timeoutMs: 9000 });
    return;
  }

  setLocateButtonsDisabled(true);
  setLocateButtonText("定位中...");
  setLocateStatus("正在強制開啟裝置定位，請在系統提示中選擇「允許」…");

  const applySuccess = (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    const nearest = findNearestTownship(latitude, longitude);
    if (!nearest) {
      const message = "定位成功，但找不到對應鄉鎮，請改以手動選取縣市／鄉鎮。";
      setLocateStatus(message, { isError: true });
      setLocateButtonsDisabled(false);
      setLocateButtonText();
      return;
    }

    applyRegionSelection(getRegionForCity(nearest.city), nearest.city, nearest.town, { persist: true });
    syncCityCameraScopeToLocator();
    syncSelectValue(freewayCitySelect, nearest.city);
    windyLocateFocus = {
      lat: latitude,
      lon: longitude,
      zoom: resolveWindyLocateZoom(accuracy),
      precision: 6
    };
    updateWindyTrackEmbed({ force: true });

    const message = `定位完成：${nearest.city}${nearest.town}`;
    setLocateStatus(message);
    showInPageAlert("定位完成", message, { timeoutMs: 3500 });

    setLocateButtonsDisabled(false);
    setLocateButtonText();
    performFullRefresh("manual");
    renderAllCameraLists();
    updateMapForCityChange();
  };

  const failWith = (error) => {
    const message = getGeolocationErrorMessage(error);
    setLocateStatus(message, { isError: true });
    showInPageAlert("定位無法啟用", message, { timeoutMs: 10000 });
    setLocateButtonsDisabled(false);
    setLocateButtonText();
  };

  // Must call getCurrentPosition directly inside the user gesture (click).
  // Awaiting Permissions API first can break the activation chain on mobile Safari/Chrome.
  navigator.geolocation.getCurrentPosition(
    (position) => applySuccess(position),
    (firstError) => {
      navigator.geolocation.getCurrentPosition(
        (position) => applySuccess(position),
        (secondError) => failWith(secondError || firstError),
        {
          enableHighAccuracy: true,
          timeout: 30000,
          maximumAge: 0
        }
      );
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );
}

function getCameraRouteCode(cameraId = "") {
  const match = String(cameraId).match(/CCTV-([A-Z0-9]+)-/i);
  return match ? match[1].toUpperCase() : "";
}

function getSelectedCameraDistrict() {
  const cityName = getCameraCityForDistrictSelect();
  const location = getCctvLocationFocus();
  const locatorTown = String(townshipSelect?.value || "").trim();
  let value = cameraRegionSelect?.value || "";

  if (!value || value === CAMERA_DISTRICT_NEAR_POINT) {
    value = locatorTown ? `town:${locatorTown}` : CAMERA_DISTRICT_ALL_CITY;
  }

  if (value === CAMERA_DISTRICT_ALL_CITY) {
    const city = CITY_LOCATIONS.find((item) => item.name === cityName);
    return {
      id: CAMERA_DISTRICT_ALL_CITY,
      label: cityName ? `${cityName}全部` : "本縣市全部",
      lat: city?.lat ?? location?.lat,
      lon: city?.lon ?? location?.lon,
      radiusKm: 9999,
      town: ""
    };
  }
  if (value.startsWith("town:")) {
    const town = value.slice(5);
    const record = TOWNSHIP_LOCATIONS.find((item) => item.city === cityName && item.town === town);
    return {
      id: value,
      label: town,
      lat: record?.lat ?? location?.lat,
      lon: record?.lon ?? location?.lon,
      radiusKm: CAMERA_TOWN_RADIUS_KM,
      town
    };
  }

  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  return {
    id: CAMERA_DISTRICT_ALL_CITY,
    label: cityName ? `${cityName}全部` : "本縣市全部",
    lat: city?.lat ?? location?.lat,
    lon: city?.lon ?? location?.lon,
    radiusKm: 9999,
    town: ""
  };
}

function getSelectedCameraRegion() {
  return getSelectedCameraDistrict();
}

function getActiveCityCctvRadiusKm() {
  return Number(getSelectedCameraDistrict()?.radiusKm) || CITY_CCTV_RADIUS_KM;
}

function syncCameraRegionToLocatorArea() {
  const town = String(townshipSelect?.value || "").trim();
  fillCameraDistrictSelect(town);
  if (!cameraRegionSelect) {
    return;
  }
  const townValue = town ? `town:${town}` : "";
  if (townValue && [...cameraRegionSelect.options].some((option) => option.value === townValue)) {
    cameraRegionSelect.value = townValue;
  } else {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
  }
}

function syncCityCameraScopeToLocator() {
  const city = String(citySelect?.value || "").trim();
  if (cameraCitySelect && city) {
    syncSelectValue(cameraCitySelect, city);
  } else if (cameraCitySelect) {
    syncSelectValue(cameraCitySelect, "follow");
  }
  syncCameraRegionToLocatorArea();
}

function getSelectedFreewayRegion() {
  return (
    FREEWAY_CAMERA_REGIONS.find((item) => item.id === freewayRegionSelect?.value) ?? FREEWAY_CAMERA_REGIONS[0]
  );
}

function getCameraFocusPoint(region, selectedCityName) {
  const city = CITY_LOCATIONS.find((item) => item.name === selectedCityName);
  const location = getCctvLocationFocus();
  if (region?.id === CAMERA_DISTRICT_NEAR_POINT || region?.id === "near-city") {
    return {
      lat: location?.lat ?? city?.lat,
      lon: location?.lon ?? city?.lon
    };
  }
  return {
    lat: region?.lat ?? location?.lat ?? city?.lat,
    lon: region?.lon ?? location?.lon ?? city?.lon
  };
}

function getCityCameraFocusPoint() {
  return getCameraFocusPoint(getSelectedCameraDistrict(), getSelectedCameraCityName() || citySelect.value);
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
  return `${lat},${lon}|${freewayRegion.id}`;
}

function getFreewayCamerasBeforeRadiusFilter() {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const freewayRegion = getSelectedFreewayRegion();

  return freewayCameraDataset.cameras
    .filter((camera) => isCameraUrlUsable(camera.html))
    .filter((camera) => {
      const routeCode = getCameraRouteCode(camera.id);
      if (freewayRegion.routes?.length) {
        return freewayRegion.routes.includes(routeCode);
      }
      return true;
    });
}

function resolveFreewayCctvRadiusKm() {
  return FREEWAY_CCTV_RADIUS_KM;
}

function extractFreewayInterchangeNames(stakenumber = "") {
  const text = String(stakenumber || "");
  const names = [];
  const matches = text.matchAll(/([^()到＋+、，,\s]{1,20}?交流道)/g);
  for (const match of matches) {
    const name = String(match[1] || "").trim();
    if (name && !names.includes(name)) {
      names.push(name);
    }
  }
  return names;
}

function buildFreewayInterchangeIndex(cameras = []) {
  const byName = new Map();
  cameras.forEach((camera) => {
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return;
    }
    const names = extractFreewayInterchangeNames(camera.stakenumber);
    if (!names.length) {
      return;
    }
    names.forEach((name) => {
      if (!byName.has(name)) {
        byName.set(name, { name, latSum: 0, lonSum: 0, count: 0 });
      }
      const row = byName.get(name);
      row.latSum += lat;
      row.lonSum += lon;
      row.count += 1;
    });
  });

  const interchanges = [...byName.values()].map((row) => {
    const lat = row.latSum / row.count;
    const lon = row.lonSum / row.count;
    let nearestCity = CITY_LOCATIONS[0]?.name || "";
    let best = Infinity;
    CITY_LOCATIONS.forEach((city) => {
      const distance = getDistanceKm(lat, lon, city.lat, city.lon);
      if (distance < best) {
        best = distance;
        nearestCity = city.name;
      }
    });
    return {
      name: row.name,
      lat,
      lon,
      city: nearestCity,
      cityDistanceKm: best
    };
  });

  return {
    all: interchanges,
    byCity: interchanges.reduce((acc, item) => {
      if (!acc[item.city]) {
        acc[item.city] = [];
      }
      acc[item.city].push(item);
      return acc;
    }, {})
  };
}

function getFreewayInterchangesForCity(cityName) {
  if (!freewayInterchangeIndex) {
    return [];
  }
  if (!cityName) {
    return freewayInterchangeIndex.all;
  }
  const exact = freewayInterchangeIndex.byCity[cityName] || [];
  if (exact.length) {
    return exact;
  }
  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  if (!city) {
    return [];
  }
  return freewayInterchangeIndex.all.filter(
    (item) => getDistanceKm(item.lat, item.lon, city.lat, city.lon) <= 35
  );
}

function getMinDistanceToPointsKm(lat, lon, points = []) {
  let best = Infinity;
  points.forEach((point) => {
    const distance = getDistanceKm(lat, lon, point.lat, point.lon);
    if (distance < best) {
      best = distance;
    }
  });
  return best;
}

function resolveCameraLandDistrict(camera = {}) {
  const city = String(camera.city || "").trim();
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!city || !Number.isFinite(lat) || !Number.isFinite(lon)) {
    return "";
  }
  const towns = TOWNSHIP_LOCATIONS.filter((item) => item.city === city);
  if (!towns.length) {
    return "";
  }
  let best = null;
  towns.forEach((town) => {
    const distanceKm = getDistanceKm(lat, lon, town.lat, town.lon);
    if (!best || distanceKm < best.distanceKm) {
      best = { town: town.town, distanceKm };
    }
  });
  return best?.town || "";
}

function getFilteredSortedCityCameras() {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return [];
  }
  const selectedCity = getSelectedCameraCityName();
  const district = getSelectedCameraDistrict();
  const keyword = cameraKeyword.value.trim().toLowerCase();
  const normalize = (text) => text.toLowerCase().replaceAll("臺", "台");
  const focusPoint = getCityCameraFocusPoint();
  const focusLabel = getCctvLocationFocus().label;
  const focus = {
    lat: Number(focusPoint?.lat),
    lon: Number(focusPoint?.lon),
    label: focusLabel
  };
  const locatorCity = selectedCity || citySelect?.value || "";

  return dedupeCamerasByIdentity(
    cityCameraDataset.cameras
      .filter((camera) => isCameraUrlUsable(camera.html))
      .filter((camera) => !isCameraMarkedBlackScreen(camera))
      .filter((camera) => !isCameraMaintenanceText(camera))
      .filter((camera) => {
        // Always scope monitors to the locator / selected city area.
        if (!locatorCity) {
          return true;
        }
        return camera.city === locatorCity;
      })
      .filter((camera) => {
        if (!keyword) {
          return true;
        }
        const haystack = normalize(
          `${camera.id ?? ""} ${camera.stakenumber ?? ""} ${camera.roadName ?? ""} ${camera.crossRoad ?? ""} ${camera.description ?? ""} ${camera.city ?? ""} ${district.town || ""}`
        );
        return haystack.includes(normalize(keyword));
      })
      .map((camera) => {
        const distanceKm =
          Number.isFinite(focus.lat) && Number.isFinite(focus.lon)
            ? getDistanceKm(focus.lat, focus.lon, Number(camera.gisy), Number(camera.gisx))
            : Infinity;
        const landTown = resolveCameraLandDistrict(camera);
        return {
          ...camera,
          distanceKm,
          landTown,
          focusLabel: focus.label,
          areaLabel: landTown ? `${camera.city || ""}${landTown}` : camera.city || focus.label
        };
      })
      .filter((camera) => {
        // Partition by Taiwan land-admin township/district (nearest official 鄉鎮市區).
        if (district.id === CAMERA_DISTRICT_ALL_CITY || !district.town) {
          return true;
        }
        return camera.landTown === district.town;
      })
      .sort((a, b) => a.distanceKm - b.distanceKm)
  );
}

function getCityCamerasForDisasterMap() {
  // Match the CCTV list shown above the disaster map (selected city + focus radius).
  return getFilteredSortedCityCameras().filter(
    (camera) => Number.isFinite(Number(camera.gisy)) && Number.isFinite(Number(camera.gisx))
  );
}

function dedupeCamerasByIdentity(cameras = []) {
  const seenIds = new Set();
  const seenUrls = new Set();
  return cameras.filter((camera) => {
    const id = String(camera?.id || "").trim();
    const url = String(camera?.html || "").trim().toLowerCase();
    if (id && seenIds.has(id)) {
      return false;
    }
    if (url && seenUrls.has(url)) {
      return false;
    }
    if (id) {
      seenIds.add(id);
    }
    if (url) {
      seenUrls.add(url);
    }
    return Boolean(id || url);
  });
}

function getFilteredSortedFreewayCameras() {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const selectedCity = getSelectedFreewayCityName();
  const region = getSelectedFreewayRegion();
  const interchangeName = getSelectedFreewayInterchangeName();
  const interchanges = getFreewayInterchangesForCity(selectedCity).filter((item) => {
    if (!interchangeName) {
      return true;
    }
    return item.name === interchangeName;
  });
  const radiusKm = interchangeName
    ? 8
    : selectedCity
      ? FREEWAY_INTERCHANGE_BASE_RADIUS_KM
      : 9999;
  const weatherFocus = getCctvLocationFocus();
  const normalize = (text) => String(text || "").toLowerCase().replaceAll("臺", "台");
  const targetInterchange = normalize(interchangeName);

  return dedupeCamerasByIdentity(
    getFreewayCamerasBeforeRadiusFilter()
      .filter((camera) => !isCameraMarkedBlackScreen(camera))
      .filter((camera) => !isCameraMaintenanceText(camera))
      .filter((camera) => cameraMatchesFreewayRoute(camera, region))
      .map((camera) => {
        const lat = Number(camera.gisy);
        const lon = Number(camera.gisx);
        const names = extractFreewayInterchangeNames(camera.stakenumber);
        const nameHit = targetInterchange
          ? names.some((name) => normalize(name) === targetInterchange)
          : false;
        const interchangeDistanceKm = interchanges.length
          ? getMinDistanceToPointsKm(lat, lon, interchanges)
          : Number.isFinite(weatherFocus.lat) && Number.isFinite(weatherFocus.lon)
            ? getDistanceKm(weatherFocus.lat, weatherFocus.lon, lat, lon)
            : Infinity;
        return {
          ...camera,
          distanceKm: nameHit ? 0 : interchangeDistanceKm,
          routeCode: getCameraRouteCode(camera.id),
          focusLabel: interchangeName
            ? interchangeName
            : selectedCity
              ? `${selectedCity}交流道｜${region.label}`
              : `公路局即時｜${region.label}`,
          interchangeNames: names
        };
      })
      .filter((camera) => {
        if (interchangeName) {
          return (
            camera.interchangeNames.some((name) => normalize(name) === targetInterchange) ||
            camera.distanceKm <= radiusKm
          );
        }
        if (!selectedCity) {
          return true;
        }
        return Number.isFinite(camera.distanceKm) && camera.distanceKm <= radiusKm;
      })
      .sort((a, b) => a.distanceKm - b.distanceKm)
  );
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

const CCTV_ROAD_CACHE_KEY = "cctv-cross-road-cache-v1";
const CCTV_MISSING_CROSS_LABEL = "交叉路名待補";
const CCTV_CROSS_LOOKUP_LABEL = "交叉路名查詢中…";
let cctvRoadCache = null;
let cctvRoadLookupQueue = Promise.resolve();
let cityCameraRoadIndex = null;

function normalizeRoadToken(text = "") {
  return String(text)
    .replace(/[()（）\[\]【】].*$/g, "")
    .replace(/(交叉口|路口|街口|巷口|口)$/g, "")
    .replace(/\s+/g, "")
    .trim();
}

function areRelatedRoadNames(a = "", b = "") {
  const left = normalizeRoadToken(a);
  const right = normalizeRoadToken(b);
  if (!left || !right) {
    return true;
  }
  if (left === right) {
    return true;
  }
  if (left.includes(right) || right.includes(left)) {
    return true;
  }
  const n = Math.min(4, left.length, right.length);
  return n >= 2 && left.slice(0, n) === right.slice(0, n);
}

function loadCctvRoadCache() {
  if (cctvRoadCache) {
    return cctvRoadCache;
  }
  try {
    cctvRoadCache = JSON.parse(localStorage.getItem(CCTV_ROAD_CACHE_KEY) || "{}");
  } catch {
    cctvRoadCache = {};
  }
  return cctvRoadCache;
}

function saveCctvRoadCache() {
  try {
    localStorage.setItem(CCTV_ROAD_CACHE_KEY, JSON.stringify(loadCctvRoadCache()));
  } catch {
    /* ignore quota */
  }
}

function getCameraCoordKey(camera) {
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return "";
  }
  return `${lat.toFixed(5)},${lon.toFixed(5)}`;
}

function buildCityCameraRoadIndex(cameras = []) {
  const cell = 0.001;
  const grid = new Map();
  cameras.forEach((camera, index) => {
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return;
    }
    const key = `${Math.floor(lat / cell)}:${Math.floor(lon / cell)}`;
    if (!grid.has(key)) {
      grid.set(key, []);
    }
    grid.get(key).push(index);
  });
  return { cameras, grid, cell };
}

function findNeighborCrossRoad(camera, index = cityCameraRoadIndex, maxMeters = 100) {
  if (!index || !Array.isArray(index.cameras)) {
    return "";
  }
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return "";
  }
  const primary =
    normalizeRoadToken(camera.roadName) ||
    normalizeRoadToken(camera.stakenumber) ||
    normalizeRoadToken(camera.description);
  const gi = Math.floor(lat / index.cell);
  const gj = Math.floor(lon / index.cell);
  let best = "";
  let bestDist = Infinity;
  let relatedFallback = "";
  let relatedDist = Infinity;

  for (let di = -1; di <= 1; di += 1) {
    for (let dj = -1; dj <= 1; dj += 1) {
      const bucket = index.grid.get(`${gi + di}:${gj + dj}`) || [];
      for (const idx of bucket) {
        const other = index.cameras[idx];
        if (!other || other === camera || other.id === camera.id) {
          continue;
        }
        const distKm = getDistanceKm(lat, lon, Number(other.gisy), Number(other.gisx));
        const distM = distKm * 1000;
        if (!Number.isFinite(distM) || distM > maxMeters) {
          continue;
        }
        const otherRoad =
          normalizeRoadToken(other.roadName) ||
          normalizeRoadToken(other.stakenumber) ||
          normalizeRoadToken(other.crossRoad);
        if (!otherRoad || otherRoad === primary) {
          continue;
        }
        if (!areRelatedRoadNames(primary, otherRoad)) {
          if (distM < bestDist) {
            bestDist = distM;
            best = otherRoad;
          }
        } else if (distM < relatedDist) {
          relatedDist = distM;
          relatedFallback = otherRoad;
        }
      }
    }
  }
  return best || relatedFallback;
}

function enrichCityCameraCrossRoadsFromNeighbors() {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return;
  }
  cityCameraRoadIndex = buildCityCameraRoadIndex(cityCameraDataset.cameras);
  cityCameraDataset.cameras.forEach((camera) => {
    if (normalizeRoadToken(camera.crossRoad)) {
      return;
    }
    const [roadA, roadB] = getCameraIntersectionRoads(camera, { allowLookup: false });
    if (roadB && roadB !== CCTV_MISSING_CROSS_LABEL) {
      return;
    }
    const neighbor = findNeighborCrossRoad(camera, cityCameraRoadIndex, 100);
    if (neighbor && !areRelatedRoadNames(roadA, neighbor)) {
      camera.crossRoad = neighbor;
      camera.crossRoadSource = camera.crossRoadSource || "neighbor";
    } else if (neighbor) {
      camera.crossRoad = neighbor;
      camera.crossRoadSource = camera.crossRoadSource || "neighbor-related";
    }
  });
}

function getCameraIntersectionRoads(camera, { allowLookup = true } = {}) {
  const parts = [];
  const pushUnique = (value) => {
    const token = normalizeRoadToken(value);
    if (!token) {
      return;
    }
    if (!parts.includes(token)) {
      parts.push(token);
    }
  };

  const candidates = [camera.description, camera.stakenumber, camera.roadName].filter(Boolean);
  for (const raw of candidates) {
    const text = String(raw);
    if (/與/.test(text)) {
      text.split(/與/).forEach((piece) => pushUnique(piece));
      break;
    }
    if (/到/.test(text) && /國道|快速|公路/.test(text)) {
      text
        .replace(/^.*?(國道[^()（）]*)/, "$1")
        .split(/到/)
        .forEach((piece) => pushUnique(piece.replace(/[()（）]/g, " ")));
      break;
    }
    if (/[／\/]/.test(text)) {
      text.split(/[／\/]/).forEach((piece) => pushUnique(piece));
      break;
    }
  }

  pushUnique(camera.roadName);
  pushUnique(camera.description);
  pushUnique(camera.stakenumber);
  pushUnique(camera.crossRoad);

  if (allowLookup && parts.length === 1) {
    const cached = loadCctvRoadCache()[getCameraCoordKey(camera)];
    pushUnique(cached);
  }
  if (allowLookup && parts.length === 1) {
    pushUnique(findNeighborCrossRoad(camera));
  }

  if (!parts.length) {
    return ["未提供路名", "未提供交叉路名"];
  }
  if (parts.length === 1) {
    return [parts[0], CCTV_MISSING_CROSS_LABEL];
  }
  return parts.slice(0, 2);
}

async function lookupCrossRoadFromMap(lat, lon, primaryRoad = "") {
  const cache = loadCctvRoadCache();
  const key = `${Number(lat).toFixed(5)},${Number(lon).toFixed(5)}`;
  if (cache[key]) {
    return cache[key];
  }

  const primary = normalizeRoadToken(primaryRoad);
  const pickFromNames = (names = []) => {
    const unique = [];
    for (const name of names) {
      const token = normalizeRoadToken(name);
      if (!token || unique.includes(token)) {
        continue;
      }
      unique.push(token);
    }
    const preferred = unique.find((name) => !areRelatedRoadNames(primary, name));
    return preferred || unique.find((name) => name !== primary) || "";
  };

  try {
    const query = `[out:json][timeout:20];(way(around:35,${lat},${lon})["highway"~"^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street)$"]["name"];);out tags;`;
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: `data=${encodeURIComponent(query)}`
    });
    if (response.ok) {
      const payload = await response.json();
      const names = (payload.elements || []).map((el) => el?.tags?.name).filter(Boolean);
      const picked = pickFromNames(names);
      if (picked) {
        cache[key] = picked;
        saveCctvRoadCache();
        return picked;
      }
    }
  } catch {
    /* fall through to nominatim */
  }

  try {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lon", String(lon));
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("zoom", "18");
    url.searchParams.set("addressdetails", "1");
    const response = await fetch(url.toString(), {
      headers: { Accept: "application/json" }
    });
    if (response.ok) {
      const payload = await response.json();
      const address = payload.address || {};
      const picked = pickFromNames([
        address.road,
        address.pedestrian,
        address.footway,
        address.residential,
        address.suburb
      ]);
      if (picked && !areRelatedRoadNames(primary, picked)) {
        cache[key] = picked;
        saveCctvRoadCache();
        return picked;
      }
    }
  } catch {
    /* ignore */
  }
  return "";
}

function queueCrossRoadLookup(task) {
  cctvRoadLookupQueue = cctvRoadLookupQueue
    .then(() => new Promise((resolve) => setTimeout(resolve, 1100)))
    .then(task)
    .catch(() => {});
  return cctvRoadLookupQueue;
}

function scheduleCameraCrossRoadEnrichment(card, camera) {
  const roadEl = card.querySelector("[data-cross-roads]");
  if (!roadEl || roadEl.dataset.lookupState === "done") {
    return;
  }
  const [roadA, roadB] = getCameraIntersectionRoads(camera);
  if (roadB !== CCTV_MISSING_CROSS_LABEL) {
    roadEl.dataset.lookupState = "done";
    return;
  }
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    roadEl.dataset.lookupState = "done";
    return;
  }

  roadEl.textContent = `交叉路口：${roadA} × ${CCTV_CROSS_LOOKUP_LABEL}`;
  roadEl.dataset.lookupState = "pending";
  queueCrossRoadLookup(async () => {
    const found = await lookupCrossRoadFromMap(lat, lon, roadA);
    if (found) {
      camera.crossRoad = found;
      camera.crossRoadSource = camera.crossRoadSource || "map-lookup";
      roadEl.textContent = `交叉路口：${roadA} × ${found}`;
    } else {
      roadEl.textContent = `交叉路口：${roadA} × ${CCTV_MISSING_CROSS_LABEL}`;
    }
    roadEl.dataset.lookupState = "done";
  });
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

function loadBlackScreenCameraIds() {
  try {
    const raw = JSON.parse(localStorage.getItem(BLACK_SCREEN_CCTV_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(raw) ? raw.map(String) : []);
  } catch {
    return new Set();
  }
}

function saveBlackScreenCameraIds() {
  try {
    localStorage.setItem(BLACK_SCREEN_CCTV_STORAGE_KEY, JSON.stringify([...blackScreenCameraIds]));
  } catch {
    /* ignore */
  }
}

function markCameraAsBlackScreen(cameraId) {
  if (!cameraId) {
    return;
  }
  blackScreenCameraIds.add(String(cameraId));
  saveBlackScreenCameraIds();
}

function isCameraMarkedBlackScreen(camera) {
  return blackScreenCameraIds.has(String(camera?.id || ""));
}

function isCameraMaintenanceText(camera = {}) {
  const text = `${camera.description || ""} ${camera.stakenumber || ""} ${camera.roadName || ""} ${camera.id || ""} ${camera.html || ""}`;
  return /維修|維護中|影像維護|施工中|暫停|故障|無訊號|黑畫面|無畫面|測試中|停用|關閉|無法顯示|offline|off[\s_-]?line|out[\s_-]?of[\s_-]?service|maintenance|under[\s_-]?construction/i.test(
    text
  );
}

function analyzeImageDarkness(img) {
  try {
    const canvas = document.createElement("canvas");
    const size = 64;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      return null;
    }
    ctx.drawImage(img, 0, 0, size, size);
    const { data } = ctx.getImageData(0, 0, size, size);
    let total = 0;
    let sumSq = 0;
    let darkPixels = 0;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 8) {
        continue;
      }
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      total += luminance;
      sumSq += luminance * luminance;
      if (luminance <= 22) {
        darkPixels += 1;
      }
      count += 1;
    }
    if (!count) {
      return null;
    }
    const average = total / count;
    return {
      average,
      darkRatio: darkPixels / count,
      variance: sumSq / count - average * average
    };
  } catch {
    return null;
  }
}

function isLikelyBlackFrame(analysis) {
  if (!analysis) {
    return false;
  }
  return analysis.average <= CCTV_BLACK_LUMINANCE_THRESHOLD || analysis.darkRatio >= 0.92;
}

function isLikelyNonLiveFrame(analysis) {
  if (!analysis) {
    return false;
  }
  if (isLikelyBlackFrame(analysis)) {
    return true;
  }
  // Near-uniform frames usually mean maintenance placeholders, not live traffic.
  return Number.isFinite(analysis.variance) && analysis.variance <= 48;
}

function probeImageStream(url, { timeoutMs = 8000 } = {}) {
  return new Promise((resolve) => {
    if (!url) {
      resolve({ ok: false, reason: "empty" });
      return;
    }
    const img = new Image();
    let settled = false;
    const finish = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timer);
      resolve(result);
    };
    const timer = window.setTimeout(() => finish({ ok: false, reason: "timeout" }), timeoutMs);
    img.decoding = "async";
    img.referrerPolicy = "no-referrer-when-downgrade";
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) {
        finish({ ok: false, reason: "empty-frame" });
        return;
      }
      // Allow one frame paint before sampling.
      window.setTimeout(() => {
        const analysis = analyzeImageDarkness(img);
        if (isLikelyNonLiveFrame(analysis)) {
          finish({ ok: false, reason: "black", analysis });
          return;
        }
        // CORS-tainted frames cannot be sampled; accept only if image dimensions are valid.
        finish({ ok: true, analysis });
      }, 120);
    };
    img.onerror = () => finish({ ok: false, reason: "error" });
    img.src = url;
  });
}

async function probeCameraStream(url, { timeoutMs = 4500 } = {}) {
  if (!url || !isCameraUrlUsable(url)) {
    return { ok: false, reason: "unusable" };
  }
  if (isLikelyDirectImageStream(url)) {
    return probeImageStream(url, { timeoutMs });
  }

  // HTML / HLS player pages: confirm the endpoint is reachable, then show via iframe.
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      signal: controller.signal,
      cache: "no-store",
      redirect: "follow"
    });
    window.clearTimeout(timer);
    if (response.ok) {
      return { ok: true, reason: "player-page", via: "cors" };
    }
  } catch {
    /* fall through to no-cors reachability check */
  }

  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      signal: controller.signal,
      cache: "no-store"
    });
    window.clearTimeout(timer);
    return { ok: true, reason: "player-page-opaque", via: "no-cors" };
  } catch {
    return { ok: false, reason: "unreachable" };
  }
}

function createCameraCard(camera, scopeLabel, { forceImage = false } = {}) {
  const card = document.createElement("article");
  card.className = "camera-item camera-item-pending";
  card.hidden = true;
  card.dataset.cameraId = camera.id || "";
  const streamUrl = camera.html;
  const [roadA, roadB] = getCameraIntersectionRoads(camera);
  const useImage = forceImage || isLikelyDirectImageStream(streamUrl);
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  const mapsUrl =
    Number.isFinite(lat) && Number.isFinite(lon)
      ? `https://www.google.com/maps?q=${lat},${lon}&z=18`
      : "";

  const mediaHtml = useImage
    ? `<img src="${streamUrl}" alt="${camera.id} 即時影像" loading="eager" referrerpolicy="no-referrer-when-downgrade" />`
    : `<iframe class="camera-frame" src="${streamUrl}" title="${camera.id} 即時影像" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  card.innerHTML = `
    ${mediaHtml}
    <div class="camera-body">
      <h3>${camera.id}</h3>
      <p data-cross-roads>交叉路口：${roadA} × ${roadB}</p>
      <p>定位點：${scopeLabel}</p>
      <div class="camera-links">
        <a href="${streamUrl}" target="_blank" rel="noopener noreferrer">即時影像</a>
        ${
          mapsUrl
            ? `<a class="camera-maps-link" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">地圖位置</a>`
            : ""
        }
      </div>
    </div>
  `;

  const revealCard = () => {
    card.hidden = false;
    card.classList.remove("camera-item-pending");
    card.classList.add("camera-item-live");
  };
  const hideDeadCard = (reason = "dead") => {
    markCameraAsBlackScreen(camera.id);
    card.dataset.deadReason = reason;
    card.remove();
  };

  const img = card.querySelector("img");
  if (img) {
    img.addEventListener("error", () => hideDeadCard("img-error"));
    img.addEventListener("load", () => {
      window.setTimeout(() => {
        if (!img.naturalWidth || !img.naturalHeight) {
          hideDeadCard("empty-frame");
          return;
        }
        const analysis = analyzeImageDarkness(img);
        if (isLikelyNonLiveFrame(analysis)) {
          hideDeadCard("black");
          return;
        }
        revealCard();
      }, 180);
    });
  }

  const frame = card.querySelector("iframe");
  if (frame) {
    let settled = false;
    const finishOk = () => {
      if (settled) {
        return;
      }
      settled = true;
      revealCard();
    };
    const fail = (reason) => {
      if (settled) {
        return;
      }
      settled = true;
      hideDeadCard(reason);
    };
    frame.addEventListener("error", () => fail("iframe-error"));
    frame.addEventListener("load", () => finishOk());
    // Player pages often load slowly; keep the card if the iframe remains attached.
    window.setTimeout(() => {
      if (!settled && card.isConnected) {
        finishOk();
      }
    }, 6000);
  }

  scheduleCameraCrossRoadEnrichment(card, camera);
  return card;
}

async function appendVerifiedCameraCards(
  listEl,
  cameras,
  scopeLabel,
  { limit = CCTV_VISIBLE_LIMIT, isCurrent = () => true, onFirstCard = null } = {}
) {
  if (!listEl) {
    return { shown: 0, liveCameras: [] };
  }
  let shown = 0;
  const liveCameras = [];
  const seenIds = new Set();
  let firstCardEmitted = false;
  for (const camera of cameras) {
    if (!isCurrent()) {
      return { shown, liveCameras };
    }
    if (shown >= limit) {
      break;
    }
    const cameraId = String(camera.id || "");
    if (cameraId && seenIds.has(cameraId)) {
      continue;
    }
    if (isCameraMarkedBlackScreen(camera) || isCameraMaintenanceText(camera) || !isCameraUrlUsable(camera.html)) {
      continue;
    }

    const probe = await probeCameraStream(camera.html, { timeoutMs: 4500 });
    if (!isCurrent()) {
      return { shown, liveCameras };
    }
    if (!probe.ok) {
      markCameraAsBlackScreen(camera.id);
      continue;
    }

    const card = createCameraCard(camera, scopeLabel, {
      forceImage: isLikelyDirectImageStream(camera.html)
    });
    if (cameraId) {
      seenIds.add(cameraId);
    }
    if (!firstCardEmitted) {
      firstCardEmitted = true;
      try {
        onFirstCard?.();
      } catch {
        /* ignore */
      }
    }
    listEl.append(card);
    const ok = await waitForCameraCardDecision(card, 8000);
    if (!isCurrent()) {
      return { shown, liveCameras };
    }
    if (ok) {
      shown += 1;
      liveCameras.push(camera);
    }
  }
  return { shown, liveCameras };
}

async function collectVerifiedLiveCameras(
  cameras,
  { isCurrent = () => true, limit = Infinity, onProgress = null } = {}
) {
  const liveCameras = [];
  const seenIds = new Set();
  const total = Math.max(1, cameras.length);
  let checked = 0;

  const reportProgress = () => {
    if (typeof onProgress !== "function") {
      return;
    }
    const byScan = Math.round((checked / total) * 100);
    const byFound =
      Number.isFinite(limit) && limit > 0 && limit < Infinity
        ? Math.round((liveCameras.length / limit) * 100)
        : 0;
    const pct = Math.max(0, Math.min(99, Math.max(byScan, byFound)));
    try {
      onProgress({
        pct,
        checked,
        total,
        found: liveCameras.length,
        limit
      });
    } catch {
      /* ignore */
    }
  };

  reportProgress();
  for (const camera of cameras) {
    if (!isCurrent()) {
      return liveCameras;
    }
    if (liveCameras.length >= limit) {
      break;
    }
    const cameraId = String(camera.id || "");
    if (cameraId && seenIds.has(cameraId)) {
      continue;
    }
    if (isCameraMarkedBlackScreen(camera) || isCameraMaintenanceText(camera) || !isCameraUrlUsable(camera.html)) {
      checked += 1;
      reportProgress();
      continue;
    }
    const probe = await probeCameraStream(camera.html, { timeoutMs: 4500 });
    checked += 1;
    if (!isCurrent()) {
      return liveCameras;
    }
    if (!probe.ok) {
      markCameraAsBlackScreen(camera.id);
      reportProgress();
      continue;
    }
    if (cameraId) {
      seenIds.add(cameraId);
    }
    liveCameras.push(camera);
    reportProgress();
  }
  if (typeof onProgress === "function") {
    try {
      onProgress({
        pct: 100,
        checked,
        total,
        found: liveCameras.length,
        limit
      });
    } catch {
      /* ignore */
    }
  }
  return liveCameras;
}

function waitForCameraCardDecision(card, timeoutMs = 10000) {
  return new Promise((resolve) => {
    if (!card) {
      resolve(false);
      return;
    }
    if (!card.hidden && card.classList.contains("camera-item-live")) {
      resolve(true);
      return;
    }
    if (!card.isConnected) {
      resolve(false);
      return;
    }
    const started = Date.now();
    const timer = window.setInterval(() => {
      if (!card.isConnected) {
        window.clearInterval(timer);
        resolve(false);
        return;
      }
      if (!card.hidden && card.classList.contains("camera-item-live")) {
        window.clearInterval(timer);
        resolve(true);
        return;
      }
      if (Date.now() - started >= timeoutMs) {
        window.clearInterval(timer);
        if (card.isConnected && card.hidden) {
          markCameraAsBlackScreen(card.dataset.cameraId);
          card.remove();
        }
        resolve(false);
      }
    }, 200);
  });
}

function updateCameraMetaText() {
  if (!cameraMeta || !cityCameraDataset) {
    return;
  }
  const cityFetchedAt = cityCameraDataset.fetchedAt ? formatDateTime(cityCameraDataset.fetchedAt) : "未提供";
  const focusLabel = getCctvLocationFocus().label || "所選位置";
  cameraMeta.textContent = `定位點：${focusLabel}｜快照：${cityFetchedAt}`;
}

function resetCityCameraLists() {
  if (cameraList) {
    cameraList.innerHTML = "";
  }
  if (cameraListMore) {
    cameraListMore.innerHTML = "";
  }
  if (cameraMoreDetails) {
    cameraMoreDetails.hidden = true;
    cameraMoreDetails.open = false;
  }
  if (cameraMoreSummaryText) {
    cameraMoreSummaryText.textContent = "收合更多監控";
  }
}

function syncCityCameraMorePanel(extraCount) {
  if (!cameraMoreDetails || !cameraMoreSummaryText) {
    return;
  }
  if (extraCount > 0) {
    cameraMoreDetails.hidden = false;
    cameraMoreSummaryText.textContent = `收合更多監控（另 ${extraCount} 支）`;
    return;
  }
  cameraMoreDetails.hidden = true;
  cameraMoreDetails.open = false;
  cameraMoreSummaryText.textContent = "收合更多監控";
}

async function renderCameraList() {
  const token = ++cityCameraRenderToken;
  const isCurrent = () => token === cityCameraRenderToken;
  resetCityCameraLists();

  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    if (cameraList) {
      cameraList.innerHTML = `<p class="status-warn">目前無法載入各縣市市區路口監控資料。</p>`;
    }
    updateCameraMapLayer();
    return;
  }

  updateCameraMetaText();
  updateCameraMapLayer();
  const rows = getFilteredSortedCityCameras().slice(0, CCTV_VERIFY_POOL_SIZE);
  const district = getSelectedCameraDistrict();
  const scopeLabel = district?.label || getCctvLocationFocus().label || "所選位置";
  if (!rows.length) {
    if (cameraList) {
      cameraList.innerHTML = `<p class="status-warn">所選地區範圍內查無市區路口監控點，請更換縣市、地區範圍或關鍵字。</p>`;
    }
    return;
  }

  if (cameraList) {
    const loading = document.createElement("p");
    loading.className = "timestamp camera-switching";
    loading.dataset.cameraLoading = "1";
    loading.innerHTML = `正在偵測監控串流：${scopeLabel}｜正在讀取畫面中 <strong data-cctv-progress>0%</strong>`;
    cameraList.append(loading);
  }

  const verifyLimit = CITY_CCTV_PREVIEW_LIMIT + CITY_CCTV_MORE_LIMIT;
  const liveCameras = await collectVerifiedLiveCameras(rows, {
    isCurrent,
    limit: verifyLimit,
    onProgress: ({ pct }) => {
      if (!isCurrent()) {
        return;
      }
      const progressEl = cameraList?.querySelector("[data-cctv-progress]");
      if (progressEl) {
        progressEl.textContent = `${pct}%`;
      }
    }
  });
  if (!isCurrent()) {
    return;
  }

  cameraList?.querySelector("[data-camera-loading]")?.remove();
  if (!liveCameras.length) {
    if (cameraList) {
      cameraList.innerHTML = `<p class="status-warn">附近監控目前多為維修／無畫面，暫無正常顯示的路口影像。</p>`;
    }
    syncCityCameraMorePanel(0);
    updateCameraMetaText();
    updateCameraMapLayer();
    return;
  }

  const previewCameras = liveCameras.slice(0, CITY_CCTV_PREVIEW_LIMIT);
  const extraCameras = liveCameras.slice(CITY_CCTV_PREVIEW_LIMIT);

  for (const camera of previewCameras) {
    if (!isCurrent()) {
      return;
    }
    const card = createCameraCard(camera, scopeLabel, {
      forceImage: isLikelyDirectImageStream(camera.html)
    });
    cameraList.append(card);
    await waitForCameraCardDecision(card, 8000);
  }
  if (!isCurrent()) {
    return;
  }

  if (extraCameras.length && cameraListMore) {
    syncCityCameraMorePanel(extraCameras.length);
    for (const camera of extraCameras) {
      if (!isCurrent()) {
        return;
      }
      const card = createCameraCard(camera, scopeLabel, {
        forceImage: isLikelyDirectImageStream(camera.html)
      });
      cameraListMore.append(card);
      await waitForCameraCardDecision(card, 8000);
    }
  } else {
    syncCityCameraMorePanel(0);
  }

  if (!isCurrent()) {
    return;
  }
  updateCameraMetaText();
  updateCameraMapLayer();
  if (!cameraList?.querySelector(".camera-item-live")) {
    cameraList.innerHTML = `<p class="status-warn">附近監控目前多為維修／無畫面，暫無正常顯示的路口影像。</p>`;
    syncCityCameraMorePanel(0);
  }
}

function updateFreewayCameraMetaText() {
  if (!freewayCameraMeta || !freewayCameraDataset) {
    return;
  }
  const freewayFetchedAt = freewayCameraDataset.fetchedAt
    ? formatDateTime(freewayCameraDataset.fetchedAt)
    : "未提供";
  const region = getSelectedFreewayRegion();
  freewayCameraMeta.textContent = `${region.label}｜快照：${freewayFetchedAt}`;
}

async function renderFreewayCameraList() {
  if (!freewayCameraList) {
    return;
  }
  const token = ++freewayCameraRenderToken;
  const isCurrent = () => token === freewayCameraRenderToken;
  freewayCameraList.innerHTML = "";
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    freewayCameraList.innerHTML = `<p class="status-warn">目前無法載入國道監控資料。</p>`;
    return;
  }
  const rows = dedupeCamerasByIdentity(getFilteredSortedFreewayCameras()).slice(0, CCTV_VERIFY_POOL_SIZE);
  updateFreewayCameraMetaText();
  const selectedCity = getSelectedFreewayCityName();
  const region = getSelectedFreewayRegion();
  const interchangeName = getSelectedFreewayInterchangeName();
  const scopeLabel = interchangeName
    ? `${region.label}｜${interchangeName}`
    : selectedCity
      ? `${region.label}｜${selectedCity}交流道`
      : `公路局即時｜${region.label}`;
  if (!rows.length) {
    freewayCameraList.innerHTML = `<p class="status-warn">目前範圍查無國道監控點，請更換國道路段、縣市或交流道。</p>`;
    return;
  }

  const loading = document.createElement("p");
  loading.className = "timestamp camera-switching";
  loading.dataset.cameraLoading = "1";
  loading.innerHTML = `正在偵測國道監控：${scopeLabel}｜正在讀取畫面中 <strong data-cctv-progress>0%</strong>`;
  freewayCameraList.append(loading);

  const liveCameras = await collectVerifiedLiveCameras(rows, {
    isCurrent,
    limit: FREEWAY_CCTV_PREVIEW_LIMIT,
    onProgress: ({ pct }) => {
      if (!isCurrent()) {
        return;
      }
      const progressEl = freewayCameraList.querySelector("[data-cctv-progress]");
      if (progressEl) {
        progressEl.textContent = `${pct}%`;
      }
    }
  });
  if (!isCurrent()) {
    return;
  }

  freewayCameraList.querySelector("[data-camera-loading]")?.remove();
  if (!liveCameras.length) {
    freewayCameraList.innerHTML = `<p class="status-warn">附近國道監控目前多為維修／無畫面，暫無正常顯示影像。</p>`;
    updateFreewayCameraMetaText();
    return;
  }

  for (const camera of liveCameras) {
    if (!isCurrent()) {
      return;
    }
    const card = createCameraCard(camera, scopeLabel, {
      forceImage: isLikelyDirectImageStream(camera.html)
    });
    freewayCameraList.append(card);
    await waitForCameraCardDecision(card, 8000);
  }
  if (!isCurrent()) {
    return;
  }
  updateFreewayCameraMetaText();
  if (!freewayCameraList.querySelector(".camera-item-live")) {
    freewayCameraList.innerHTML = `<p class="status-warn">附近國道監控目前多為維修／無畫面，暫無正常顯示影像。</p>`;
  }
}

async function renderAllCameraLists() {
  await renderCameraList();
  await renderFreewayCameraList();
}

function getWeatherIconSvg(code) {
  const weatherCode = Number(code);
  if ([95, 96, 99].includes(weatherCode)) {
    return `
      <svg viewBox="0 0 64 64" role="img" aria-label="雷雨">
        <ellipse class="cloud-body" cx="30" cy="28" rx="16" ry="10" fill="#dce7f8"/>
        <ellipse class="cloud-body" cx="40" cy="30" rx="12" ry="8" fill="#c9d8f0"/>
        <path class="bolt" d="M34 34 L28 46 H34 L30 56 L44 40 H36 L40 34 Z" fill="#ffd166"/>
        <path class="rain-drop" d="M18 40 l2 8" stroke="#8ecae6" stroke-width="2" stroke-linecap="round"/>
        <path class="rain-drop" d="M24 42 l2 8" stroke="#8ecae6" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
  }
  if ([61, 63, 65, 80, 81, 82, 51, 53, 55, 56, 57, 66, 67].includes(weatherCode)) {
    return `
      <svg viewBox="0 0 64 64" role="img" aria-label="雨天">
        <circle cx="44" cy="18" r="8" fill="#ffd166"/>
        <ellipse class="cloud-body" cx="28" cy="28" rx="16" ry="10" fill="#e8eef8"/>
        <ellipse class="cloud-body" cx="38" cy="30" rx="12" ry="8" fill="#d5e0f2"/>
        <path class="rain-drop" d="M20 40 l2 9" stroke="#7db7e8" stroke-width="2.2" stroke-linecap="round"/>
        <path class="rain-drop" d="M28 42 l2 9" stroke="#7db7e8" stroke-width="2.2" stroke-linecap="round"/>
        <path class="rain-drop" d="M36 40 l2 9" stroke="#7db7e8" stroke-width="2.2" stroke-linecap="round"/>
      </svg>`;
  }
  if ([45, 48, 3].includes(weatherCode)) {
    return `
      <svg viewBox="0 0 64 64" role="img" aria-label="陰天">
        <ellipse class="cloud-body" cx="26" cy="30" rx="15" ry="10" fill="#cfd8e6"/>
        <ellipse class="cloud-body" cx="38" cy="28" rx="14" ry="11" fill="#b7c4d8"/>
        <ellipse class="cloud-body" cx="34" cy="34" rx="16" ry="9" fill="#a9b7cd"/>
      </svg>`;
  }
  if ([1, 2].includes(weatherCode)) {
    return `
      <svg viewBox="0 0 64 64" role="img" aria-label="多雲">
        <g class="sun-core">
          <circle cx="42" cy="20" r="8" fill="#ffd166"/>
          <g stroke="#ffd166" stroke-width="2" stroke-linecap="round">
            <path d="M42 8 v3"/><path d="M42 29 v3"/><path d="M30 20 h3"/><path d="M51 20 h3"/>
            <path d="M33 11 l2 2"/><path d="M49 27 l2 2"/><path d="M49 11 l-2 2"/><path d="M33 27 l-2 2"/>
          </g>
        </g>
        <ellipse class="cloud-body" cx="26" cy="34" rx="15" ry="10" fill="#f2f6ff"/>
        <ellipse class="cloud-body" cx="38" cy="36" rx="12" ry="8" fill="#e2eaf8"/>
      </svg>`;
  }
  return `
    <svg viewBox="0 0 64 64" role="img" aria-label="晴朗">
      <g class="sun-core">
        <circle cx="32" cy="32" r="12" fill="#ffd166"/>
        <g stroke="#ffd166" stroke-width="2.4" stroke-linecap="round">
          <path d="M32 10 v5"/><path d="M32 49 v5"/><path d="M10 32 h5"/><path d="M49 32 h5"/>
          <path d="M16 16 l3.5 3.5"/><path d="M44.5 44.5 l3.5 3.5"/>
          <path d="M44.5 16 l3.5 -3.5"/><path d="M16 48 l3.5 -3.5"/>
        </g>
      </g>
    </svg>`;
}

function renderWeatherIcon(weatherCode) {
  if (!weatherIcon) {
    return;
  }
  weatherIcon.innerHTML = getWeatherIconSvg(weatherCode);
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
  const airDetails = document.querySelector("#airDetails");
  setAirLevelClass(airSummary, getAirQualityLevelKey(aqi, "aqi"));
  setAirLevelClass(airDetails, getAirQualityLevelKey(aqi, "aqi"));
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

function buildWeeklyForecastDays(daily = {}) {
  const dates = Array.isArray(daily.time) ? daily.time : [];
  return dates.slice(0, 7).map((date, index) => {
    const weekday = new Date(`${date}T12:00:00+08:00`).toLocaleDateString("zh-TW", {
      weekday: "short",
      timeZone: "Asia/Taipei"
    });
    const monthDay = new Date(`${date}T12:00:00+08:00`).toLocaleDateString("zh-TW", {
      month: "numeric",
      day: "numeric",
      timeZone: "Asia/Taipei"
    });
    const weatherCode = Number(daily.weather_code?.[index]);
    return {
      date,
      weekday,
      monthDay,
      weatherCode,
      label: WEATHER_CODE_LABEL[weatherCode] ?? "天氣更新中",
      tempMax: Number(daily.temperature_2m_max?.[index]),
      tempMin: Number(daily.temperature_2m_min?.[index]),
      rainSum: Number(daily.precipitation_sum?.[index] ?? 0),
      rainProb: Number(daily.precipitation_probability_max?.[index] ?? 0)
    };
  });
}

function renderWeeklyForecast(days = [], locationLabel = "") {
  if (weeklyForecastSummary) {
    weeklyForecastSummary.textContent = locationLabel
      ? `${locationLabel}｜一週天氣預報`
      : "定位點一週天氣預報";
  }
  if (!weeklyForecastList) {
    return;
  }
  weeklyForecastList.innerHTML = "";
  if (!days.length) {
    weeklyForecastList.innerHTML = `<p class="rain-empty">暫無一週預報資料</p>`;
    return;
  }

  days.forEach((day, index) => {
    const row = document.createElement("div");
    row.className = "weekly-forecast-row";
    if (index === 0) {
      row.classList.add("is-today");
    }
    const maxText = Number.isFinite(day.tempMax) ? `${Math.round(day.tempMax)}°` : "--";
    const minText = Number.isFinite(day.tempMin) ? `${Math.round(day.tempMin)}°` : "--";
    const rainProbText = Number.isFinite(day.rainProb) ? `${Math.round(day.rainProb)}%` : "--";
    const rainSumText = Number.isFinite(day.rainSum) ? `${day.rainSum.toFixed(1)} mm` : "--";
    row.innerHTML = `
      <div class="weekly-forecast-day">
        <strong>${index === 0 ? "今天" : day.weekday}</strong>
        <span>${day.monthDay}</span>
      </div>
      <div class="weekly-forecast-icon" aria-hidden="true">${getWeatherIconSvg(day.weatherCode)}</div>
      <div class="weekly-forecast-meta">
        <span class="weekly-forecast-label">${day.label}</span>
        <span class="weekly-forecast-temps">${minText} / ${maxText}</span>
        <span class="weekly-forecast-rain">降雨 ${rainProbText}｜${rainSumText}</span>
      </div>
    `;
    weeklyForecastList.append(row);
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
  endpoint.searchParams.set(
    "daily",
    "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max"
  );
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "7");

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
  const weeklyForecast = buildWeeklyForecastDays(payload.daily || {});

  weatherSummary.textContent = `${location.label}・${WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"}`;
  tempValue.textContent = `${Math.round(current.temperature_2m)}°`;
  feelValue.textContent = `${Math.round(current.apparent_temperature)}°`;
  renderWeatherIcon(current.weather_code);
  humidityValue.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  rainValue.textContent = `${current.precipitation.toFixed(1)} mm`;
  rainProbValue.textContent = `${Math.round(rainProb)}%`;
  cloudValue.textContent = `${Math.round(current.cloud_cover)}%`;
  pressureValue.textContent = `${Math.round(current.pressure_msl)} hPa`;
  rainProjection.textContent = `未來 ${RAIN_FORECAST_HOURS} 小時累積降雨預估：${rain24.toFixed(1)} mm`;
  renderRainTimeline(next8Hours);
  renderWeeklyForecast(weeklyForecast, location.label);

  appState.weather = {
    cityName: location.cityName,
    townName: location.townName,
    label: location.label,
    lat: location.lat,
    lon: location.lon,
    current,
    next8Hours,
    next24Hours,
    weeklyForecast,
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
  syncAirDetailsSummaryLabel();

  appState.airQuality = {
    cityName: location.cityName,
    label: location.label,
    aqi,
    pm25,
    pm10,
    ozone
  };
}

function syncAirDetailsSummaryLabel() {
  if (!airSummary || !appState.airQuality) {
    return;
  }
  const label = getAqiLabel(appState.airQuality.aqi);
  airSummary.textContent = `當地空氣品質：${label}`;
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

function buildWindyEmbedUrl(lat, lon, zoom = 5, { precision = 3 } = {}) {
  const digits = Math.min(6, Math.max(3, Number(precision) || 3));
  const fmt = (value) => Number(value).toFixed(digits);
  const params = new URLSearchParams({
    lat: fmt(lat),
    lon: fmt(lon),
    detailLat: fmt(lat),
    detailLon: fmt(lon),
    width: String(WINDY_EMBED_WIDTH),
    height: String(WINDY_EMBED_HEIGHT),
    zoom: String(zoom),
    level: "surface",
    overlay: "wind",
    product: "ecmwf",
    menu: "",
    message: "true",
    marker: "true",
    calendar: "12",
    pressure: "false",
    type: "map",
    location: "coordinates",
    detail: "",
    metricWind: "kt",
    metricTemp: "°C",
    radarRange: "-1"
  });
  return `https://embed.windy.com/embed2.html?${params.toString()}`;
}

function getWindyFocusPoint() {
  const hasTyphoonCenter = Boolean(
    Number.isFinite(appState.typhoonOfficial?.lat) && Number.isFinite(appState.typhoonOfficial?.lon)
  );
  if (
    windyLocateFocus &&
    Number.isFinite(windyLocateFocus.lat) &&
    Number.isFinite(windyLocateFocus.lon)
  ) {
    return {
      lat: windyLocateFocus.lat,
      lon: windyLocateFocus.lon,
      zoom: windyLocateFocus.zoom || 11,
      precision: windyLocateFocus.precision || 6,
      hasTyphoonCenter
    };
  }
  return {
    ...WINDY_TAIWAN_VIEW,
    precision: 3,
    hasTyphoonCenter
  };
}

function updateWindyTrackEmbed({ force = false } = {}) {
  if (!windyEmbed) {
    return;
  }
  const focus = getWindyFocusPoint();
  const embedUrl = buildWindyEmbedUrl(focus.lat, focus.lon, focus.zoom, {
    precision: focus.precision || 3
  });
  const normalizeSrc = (src) => {
    try {
      const url = new URL(src);
      url.searchParams.delete("_replay");
      url.searchParams.delete("_locate");
      return url.toString();
    } catch {
      return src;
    }
  };
  const currentSrc = windyEmbed.getAttribute("src") || "";
  if (force || !currentSrc || normalizeSrc(currentSrc) !== normalizeSrc(embedUrl)) {
    const nextUrl = new URL(embedUrl);
    if (force) {
      nextUrl.searchParams.set("_locate", String(Date.now()));
    }
    windyEmbed.src = nextUrl.toString();
  }
  windyEmbed.style.height = "100%";
  windyEmbed.style.minHeight = "100%";
  if (windyExternalLink) {
    windyExternalLink.href = `https://www.windy.com/?${Number(focus.lat).toFixed(5)},${Number(focus.lon).toFixed(5)},${focus.zoom},i:pressure`;
  }
}

function resolveWindyLocateZoom(accuracyMeters) {
  if (!Number.isFinite(accuracyMeters)) {
    return 11;
  }
  if (accuracyMeters <= 50) {
    return 12;
  }
  if (accuracyMeters <= 150) {
    return 11;
  }
  if (accuracyMeters <= 500) {
    return 10;
  }
  return 9;
}

function locateWindyEmbed() {
  if (!windyLocateBtn || !windyEmbed) {
    return;
  }
  if (!window.isSecureContext) {
    showInPageAlert("定位無法啟用", "請以 HTTPS（或本機安全環境）開啟本站後再使用 Windy 定位。", {
      timeoutMs: 9000
    });
    return;
  }
  if (!navigator.geolocation?.getCurrentPosition) {
    showInPageAlert("定位無法啟用", "此裝置瀏覽器不支援衛星定位。", { timeoutMs: 9000 });
    return;
  }

  windyLocateBtn.disabled = true;
  if (windyLocateBtnLabel) {
    windyLocateBtnLabel.textContent = "定位中";
  }

  const finish = () => {
    windyLocateBtn.disabled = false;
    if (windyLocateBtnLabel) {
      windyLocateBtnLabel.textContent = WINDY_LOCATE_BTN_LABEL;
    }
  };

  const applySuccess = (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    windyLocateFocus = {
      lat: latitude,
      lon: longitude,
      zoom: resolveWindyLocateZoom(accuracy),
      precision: 6
    };
    // Reload Windy embed with high-precision coordinates so its marker/detail
    // point aligns to the browser GPS location (embed geolocation enabled).
    updateWindyTrackEmbed({ force: true });

    const nearest = findNearestTownship(latitude, longitude);
    if (nearest) {
      applyRegionSelection(getRegionForCity(nearest.city), nearest.city, nearest.town, {
        persist: true
      });
      syncCityCameraScopeToLocator();
      syncSelectValue(freewayCitySelect, nearest.city);
      renderAllCameraLists();
      updateMapForCityChange();
    }

    const message = `定位完成：${nearest ? `${nearest.city}${nearest.town}` : "目前位置"}`;
    showInPageAlert("定位完成", message, { timeoutMs: 3500 });
    finish();
  };

  const failWith = (error) => {
    showInPageAlert("Windy 定位失敗", getGeolocationErrorMessage(error), { timeoutMs: 10000 });
    finish();
  };

  // Keep getCurrentPosition inside the click gesture; high-accuracy feeds Windy embed coords.
  navigator.geolocation.getCurrentPosition(applySuccess, failWith, {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  });
}

function formatVisitorCount(count) {
  const value = Math.max(0, Math.floor(Number(count) || 0));
  return String(value).padStart(7, "0");
}

function setVisitorCountDisplay(count) {
  const formatted = formatVisitorCount(count);
  if (visitorCounterValue) {
    visitorCounterValue.textContent = formatted;
    return;
  }
  if (visitorCounter) {
    visitorCounter.textContent = `觀看人數：${formatted}`;
  }
}

function setLikeCountDisplay(count) {
  if (likeCountValue) {
    likeCountValue.textContent = formatVisitorCount(count);
  }
}

function hasUserLiked() {
  return localStorage.getItem(LIKE_VOTED_STORAGE_KEY) === "1";
}

function markUserLiked() {
  localStorage.setItem(LIKE_VOTED_STORAGE_KEY, "1");
}

function syncLikeButtonState(liked = hasUserLiked()) {
  if (!likeBtn) {
    return;
  }
  likeBtn.classList.toggle("is-liked", liked);
  likeBtn.disabled = liked;
  likeBtn.setAttribute("aria-pressed", liked ? "true" : "false");
  if (likeBtnLabel) {
    likeBtnLabel.textContent = liked ? "已按讚" : "按讚";
  }
}

async function fetchCountApi(path, { timeoutMs = 5000 } = {}) {
  const normalized = String(path || "").replace(/^\/+|\/+$/g, "");
  const endpoints = [
    // counterapi.dev requires a trailing slash (otherwise 301 without JSON body)
    `https://api.counterapi.dev/v1/${normalized}/`,
    `https://api.countapi.xyz/${normalized}`
  ];
  for (const endpoint of endpoints) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(endpoint, { signal: controller.signal, redirect: "follow" });
      if (!response.ok) {
        continue;
      }
      const payload = await response.json();
      // counterapi.dev uses { count }, countapi.xyz uses { value }
      const value = Number(payload?.count ?? payload?.value);
      if (Number.isFinite(value)) {
        return value;
      }
    } catch {
      /* try next provider */
    } finally {
      clearTimeout(timeoutId);
    }
  }
  return null;
}

async function initVisitorCounter() {
  if (!visitorCounter) {
    return;
  }
  const previousLocal = Number(localStorage.getItem(VISITOR_COUNTER_STORAGE_KEY) || 0);
  let totalCount = previousLocal + 1;
  localStorage.setItem(VISITOR_COUNTER_STORAGE_KEY, String(totalCount));
  setVisitorCountDisplay(totalCount);

  const remoteCount = await fetchCountApi(
    `${VISITOR_COUNTER_NAMESPACE}/${VISITOR_COUNTER_KEY}/up`
  );
  // Fallback old countapi path style
  const legacyCount = Number.isFinite(remoteCount)
    ? remoteCount
    : await fetchCountApi(`hit/${VISITOR_COUNTER_NAMESPACE}/${VISITOR_COUNTER_KEY}`);
  if (Number.isFinite(legacyCount)) {
    totalCount = Math.max(totalCount, legacyCount);
    localStorage.setItem(VISITOR_COUNTER_STORAGE_KEY, String(totalCount));
    setVisitorCountDisplay(totalCount);
  } else {
    setVisitorCountDisplay(totalCount);
  }
}

async function initLikeCounter() {
  if (!likeBtn || !likeCountValue) {
    return;
  }

  const localCount = Number(localStorage.getItem(LIKE_COUNTER_STORAGE_KEY) || 0);
  setLikeCountDisplay(localCount);
  syncLikeButtonState();

  const remoteGet =
    (await fetchCountApi(`${VISITOR_COUNTER_NAMESPACE}/${LIKE_COUNTER_KEY}`)) ??
    (await fetchCountApi(`get/${VISITOR_COUNTER_NAMESPACE}/${LIKE_COUNTER_KEY}`));
  if (Number.isFinite(remoteGet)) {
    const totalCount = Math.max(localCount, remoteGet);
    localStorage.setItem(LIKE_COUNTER_STORAGE_KEY, String(totalCount));
    setLikeCountDisplay(totalCount);
  }

  likeBtn.addEventListener("click", async () => {
    if (hasUserLiked() || likeBtn.disabled) {
      return;
    }
    likeBtn.disabled = true;
    const previous = Number(localStorage.getItem(LIKE_COUNTER_STORAGE_KEY) || 0);
    let nextCount = previous + 1;
    localStorage.setItem(LIKE_COUNTER_STORAGE_KEY, String(nextCount));
    markUserLiked();
    setLikeCountDisplay(nextCount);
    syncLikeButtonState(true);

    const remoteHit =
      (await fetchCountApi(`${VISITOR_COUNTER_NAMESPACE}/${LIKE_COUNTER_KEY}/up`)) ??
      (await fetchCountApi(`hit/${VISITOR_COUNTER_NAMESPACE}/${LIKE_COUNTER_KEY}`));
    if (Number.isFinite(remoteHit)) {
      nextCount = Math.max(nextCount, remoteHit);
      localStorage.setItem(LIKE_COUNTER_STORAGE_KEY, String(nextCount));
      setLikeCountDisplay(nextCount);
    }
  });
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
    `本地降雨：12 小時平均降雨機率 ${Math.round(rainProbAvg)}%，${RAIN_FORECAST_HOURS} 小時雨量預估 ${rain24.toFixed(1)} mm。`
  ];
  return { level, score, messages, hasWarning: Boolean(official?.hasWarning) };
}

function renderTyphoonAnalysis() {
  const result = calculateTyphoonRisk();
  if (!result) {
    typhoonRiskBadge.textContent = "風險等級：資料不足";
    typhoonRiskBadge.className = "risk-badge risk-low hero-fit-text";
    typhoonAnalysisList.innerHTML = "<li>等待氣象資料。</li>";
    updateWindyTrackEmbed();
    scheduleHeroTextFit();
    return;
  }
  appState.typhoon = result;
  const className = result.level === "高" ? "risk-high" : result.level === "中" ? "risk-medium" : "risk-low";
  typhoonRiskBadge.className = `risk-badge ${className} hero-fit-text`;
  typhoonRiskBadge.textContent = `風險等級：${result.level}（指數 ${result.score}/100）`;
  typhoonAnalysisList.innerHTML = "";
  result.messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message;
    typhoonAnalysisList.append(item);
  });
  updateWindyTrackEmbed();
  scheduleHeroTextFit();
}

function decodeHtmlEntities(text) {
  const raw = String(text ?? "");
  if (!raw || !raw.includes("&")) {
    return raw;
  }
  const textarea = document.createElement("textarea");
  textarea.innerHTML = raw;
  return textarea.value;
}

function formatFloodStationLabel(point = {}) {
  const county = String(point.county || "").trim();
  const town = String(point.town || "").trim();
  const area = `${county}${town}`.trim();
  const name = decodeHtmlEntities(point.name || point.areaName || "")
    .replace(/\s+/g, " ")
    .trim();

  let locationPart = name
    .replace(/[（(]\s*編號\s*[0-9]+\s*[）)]/g, "")
    .replace(/編號\s*[0-9]+/g, "")
    .trim();

  if (town && locationPart.startsWith(town)) {
    locationPart = locationPart.slice(town.length).replace(/^[-－\s]+/, "").trim();
  }
  if (county && locationPart.startsWith(county)) {
    locationPart = locationPart.slice(county.length).replace(/^[-－\s]+/, "").trim();
  }

  const hasOwnHouseNumber = /\d+號/.test(locationPart) || /\d+號/.test(name);
  const nearbyHouse = hasOwnHouseNumber
    ? ""
    : findNearbyFloodHouseNumber(point, {
        excludeSensorId: point.sensorid,
        maxKm: 0.8
      });

  const parts = [];
  if (area) {
    parts.push(area);
  }
  if (locationPart) {
    parts.push(locationPart);
  } else if (nearbyHouse) {
    parts.push(`鄰近門牌${nearbyHouse}`);
  } else if (name) {
    parts.push(name);
  }

  let label = parts.join(" ").replace(/\s+/g, " ").trim();
  if (
    !hasOwnHouseNumber &&
    nearbyHouse &&
    label &&
    !label.includes(nearbyHouse) &&
    !label.includes("鄰近門牌")
  ) {
    label = `${label}（鄰近門牌${nearbyHouse}）`;
  }

  return label || area || "感測點";
}

function extractFloodHouseNumberHint(text = "") {
  const raw = decodeHtmlEntities(String(text || ""));
  if (!raw) {
    return "";
  }
  const match = raw.match(
    /(?:[\u4e00-\u9fff\w]+)?\d+(?:[-－之]\d+)*(?:巷\d+號|弄\d+號|號(?:[-－之]\d+)?)(?:前|旁|口)?/
  );
  if (!match) {
    return "";
  }
  return match[0].replace(/^[-－\s]+/, "").trim();
}

function findNearbyFloodHouseNumber(point = {}, { excludeSensorId = "", maxKm = 0.8 } = {}) {
  const lat = Number(point.lat);
  const lon = Number(point.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || !appState.floodStations?.length) {
    return "";
  }

  let best = null;
  appState.floodStations.forEach((station) => {
    if (excludeSensorId && station.sensorid === excludeSensorId) {
      return;
    }
    const house = extractFloodHouseNumberHint(station.name);
    if (!house) {
      return;
    }
    const distanceKm = getDistanceKm(lat, lon, station.lat, station.lon);
    if (!(distanceKm <= maxKm)) {
      return;
    }
    if (!best || distanceKm < best.distanceKm) {
      best = { house, distanceKm, county: station.county, town: station.town };
    }
  });

  return best?.house || "";
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
      areaName: formatFloodStationLabel(point),
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
    waterOutages: {},
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
      waterOutages: parsed.waterOutages ?? {},
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
        messages.push({
          kind: "flood-recovery",
          text: `【積淹水消退】${point.areaName} 已消退至安全警戒高度（原水深 ${point.depthCm} cm、等級 ${point.level}），${locationLabel} 周邊約 ${point.distanceKm.toFixed(1)} km，請恢復通行並持續留意。`
        });
      });
      Object.entries(currentWarningSensors).forEach(([sensorid, point]) => {
        if (prev.floodSensors[sensorid]) {
          return;
        }
        messages.push({
          kind: "flood-alert",
          text: `【積淹水警戒】${point.areaName} 水深 ${point.depthCm} cm（等級 ${point.level}），距離約 ${point.distanceKm.toFixed(1)} km。`
        });
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
      messages.push({
        kind: "power-recovery",
        text: `【電力回復】${place}（${typeLabel}）已恢復供電，${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內距離約 ${Number(point.distanceKm).toFixed(1)} km。`
      });
    });
    Object.entries(currentOutages).forEach(([key, point]) => {
      if (prev.powerOutages[key]) {
        return;
      }
      const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
      const place = point.label || point.area || "未提供區域";
      messages.push({
        kind: "power-alert",
        text: `【停電警戒】${place}（${typeLabel}）距離約 ${Number(point.distanceKm).toFixed(1)} km，請留意供電狀況。`
      });
    });
  }
  next.powerOutages = currentOutages;

  const currentWater = {};
  (appState.waterOutageItems || []).forEach((item) => {
    currentWater[item.id] = item;
  });
  if (isSubscribed && topics.has("water-outage")) {
    Object.entries(prev.waterOutages || {}).forEach(([id, item]) => {
      if (currentWater[id]) {
        return;
      }
      messages.push({
        kind: "water-recovery",
        text: `【停水解除】${item.area || item.summary || "所選縣市停水案件"} 已恢復供水／降壓解除，請確認用水恢復正常。`
      });
    });
    Object.entries(currentWater).forEach(([id, item]) => {
      if (prev.waterOutages?.[id]) {
        return;
      }
      messages.push({
        kind: "water-alert",
        text: `【停水警戒】${item.area || "所選縣市"}：${item.summary || "有停水／降壓公告"}（${item.period || "期間詳見台水公告"}）。`
      });
    });
  }
  next.waterOutages = currentWater;

  const hasLandWarning = Boolean(appState.typhoonOfficial?.hasLandWarning);
  if (isSubscribed && prev.hasLandTyphoonWarning && !hasLandWarning) {
    const typhoonName = appState.typhoonOfficial?.name;
    messages.push({
      kind: "typhoon-recovery",
      text: `【解除颱風警報】中央氣象署已解除陸上颱風警報${typhoonName ? `（${typhoonName}）` : ""}，${locationLabel} 請持續留意後續天氣與防災資訊。`
    });
  }
  next.hasLandTyphoonWarning = hasLandWarning;

  saveRecoveryState(next);
  return messages
    .map((item) => (typeof item === "string" ? { kind: "generic", text: item } : item))
    .filter((item) => item?.text);
}

function parseAiAlertPresentation(text) {
  const raw = String(text || "").trim();
  const tagMatch = raw.match(/^【([^】]+)】\s*(.*)$/);
  const tag = tagMatch ? tagMatch[1] : "";
  const body = tagMatch ? tagMatch[2] : raw;
  const levelMatch = raw.match(/等級\s*([1-4])/);
  const floodLevel = levelMatch ? Number(levelMatch[1]) : 0;

  let tone = "neutral";
  if (tag.includes("高風險") || tag.includes("積淹水警戒")) {
    tone = "high";
  } else if (tag.includes("積淹水警示") || tag.includes("積淹水監測")) {
    tone = floodLevel >= 1 ? `flood-${floodLevel}` : "flood-1";
  } else if (tag.includes("注意")) {
    tone = "watch";
  } else if (tag.includes("空品")) {
    tone = "air";
  } else if (tag.includes("停班停課")) {
    tone = "closure";
  } else if (tag.includes("一般") || tag.includes("解除") || tag.includes("消退")) {
    tone = "general";
  } else if (floodLevel >= 1) {
    tone = `flood-${floodLevel}`;
  }

  return {
    tag: tag ? `【${tag}】` : "",
    body,
    tone,
    text: raw
  };
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
  alerts.forEach((text, index) => {
    const presentation = parseAiAlertPresentation(text);
    const item = document.createElement("li");
    item.className = `ai-alert-item ai-alert-${presentation.tone}`;
    if (index === 0) {
      item.classList.add("ai-alert-top");
    }
    if (presentation.tag) {
      const tagEl = document.createElement("span");
      tagEl.className = "ai-alert-tag";
      tagEl.textContent = presentation.tag;
      item.append(tagEl);
    }
    const bodyEl = document.createElement("span");
    bodyEl.className = "ai-alert-body";
    bodyEl.textContent = presentation.body || presentation.text;
    item.append(bodyEl);
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
  if (!subscriptionStatus) {
    return;
  }
  if (message) {
    subscriptionStatus.textContent = message;
    return;
  }
  if (!appState.subscription?.email) {
    subscriptionStatus.textContent = "尚未設定訂閱。";
    return;
  }
  subscriptionStatus.textContent = "訂閱完成。";
}

function clearSubscriptionHint() {
  if (notificationHint) {
    notificationHint.hidden = true;
    notificationHint.textContent = "";
  }
}

function isStandaloneDisplay() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    Boolean(window.navigator.standalone)
  );
}

function isLikelyIosDevice() {
  const ua = navigator.userAgent || "";
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function getNotificationSupport() {
  const secure = Boolean(window.isSecureContext);
  const apiAvailable = secure && "Notification" in window;
  const standalone = isStandaloneDisplay();
  const ios = isLikelyIosDevice();
  let reason = "ok";
  if (!secure) {
    reason = "insecure";
  } else if (!apiAvailable && ios && !standalone) {
    reason = "ios-home-screen";
  } else if (!apiAvailable) {
    reason = "unsupported";
  }
  return {
    secure,
    apiAvailable,
    isStandalone: standalone,
    isIos: ios,
    reason
  };
}

function updateNotificationHint(extraMessage = "") {
  // Keep text under「儲存訂閱」limited to subscription completion status.
  clearSubscriptionHint();
  if (extraMessage) {
    showInPageAlert("訂閱提醒", extraMessage, { timeoutMs: 7000 });
  }
}

function showInPageAlert(title, body, { timeoutMs = 8000 } = {}) {
  if (!inPageAlertHost) {
    return false;
  }
  const alert = document.createElement("article");
  alert.className = "in-page-alert";
  alert.innerHTML = `
    <strong class="in-page-alert-title"></strong>
    <div class="in-page-alert-body"></div>
    <button type="button" class="in-page-alert-close">知道了</button>
  `;
  const titleEl = alert.querySelector(".in-page-alert-title");
  const bodyHost = alert.querySelector(".in-page-alert-body");
  if (titleEl) {
    titleEl.textContent = title;
  }
  const lines = String(body || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  (lines.length ? lines : [""]).forEach((line) => {
    const row = document.createElement("p");
    row.className = "in-page-alert-line";
    row.textContent = line;
    bodyHost?.append(row);
  });
  const close = () => alert.remove();
  alert.querySelector(".in-page-alert-close")?.addEventListener("click", close);
  inPageAlertHost.append(alert);
  window.requestAnimationFrame(() => {
    const width = Math.floor(alert.getBoundingClientRect().width || 0);
    fitSingleLineText(titleEl, {
      maxPx: Math.min(28, Math.max(14, Math.floor(width * 0.08))),
      minPx: 11,
      fillRatio: 0.98
    });
    bodyHost?.querySelectorAll(".in-page-alert-line").forEach((lineEl) => {
      fitSingleLineText(lineEl, {
        maxPx: Math.min(22, Math.max(12, Math.floor(width * 0.065))),
        minPx: 10,
        fillRatio: 0.98
      });
    });
  });
  if (timeoutMs > 0) {
    window.setTimeout(close, timeoutMs);
  }
  return true;
}

async function initServiceWorker() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
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

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  return Uint8Array.from(raw, (char) => char.charCodeAt(0));
}

function buildBackgroundSubscriptionPrefs(subscription = appState.subscription) {
  const location = getSubscriptionWeatherLocation();
  return {
    email: String(subscription?.email || "")
      .trim()
      .toLowerCase(),
    topics: Array.isArray(subscription?.topics) ? subscription.topics : [],
    city: subscription?.city || "",
    township: subscription?.township || "",
    label: location?.label || `${subscription?.city || ""}${subscription?.township || ""}`,
    lat: Number(location?.lat),
    lon: Number(location?.lon),
    updatedAt: new Date().toISOString()
  };
}

async function postToServiceWorker(message) {
  const registration = await getNotificationRegistration();
  const worker = registration?.active || registration?.waiting || registration?.installing;
  if (!worker) {
    return false;
  }
  worker.postMessage(message);
  return true;
}

async function persistSubscriptionForBackground(subscription = appState.subscription) {
  const prefs = buildBackgroundSubscriptionPrefs(subscription);
  await initServiceWorker();
  await postToServiceWorker({ type: "SAVE_SUBSCRIPTION_PREFS", payload: prefs });
  return prefs;
}

async function enableBackgroundNotifications(subscription = appState.subscription) {
  const registration = await initServiceWorker();
  if (!registration) {
    return { enabled: false, reason: "no-sw" };
  }
  await persistSubscriptionForBackground(subscription);

  let pushSubscribed = false;
  try {
    if (registration.pushManager && Notification.permission === "granted") {
      const existing = await registration.pushManager.getSubscription();
      const pushSubscription =
        existing ||
        (await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
        }));
      pushSubscribed = Boolean(pushSubscription);
      await postToServiceWorker({
        type: "SAVE_SUBSCRIPTION_PREFS",
        payload: {
          ...buildBackgroundSubscriptionPrefs(subscription),
          pushSubscription: pushSubscription?.toJSON?.() || null
        }
      });
    }
  } catch {
    pushSubscribed = false;
  }

  let periodicSync = false;
  try {
    if ("periodicSync" in registration) {
      const status = await navigator.permissions?.query?.({ name: "periodic-background-sync" });
      if (!status || status.state === "granted") {
        await registration.periodicSync.register("jin-disaster-check", {
          minInterval: 15 * 60 * 1000
        });
        periodicSync = true;
      }
    }
  } catch {
    periodicSync = false;
  }

  try {
    if ("sync" in registration) {
      await registration.sync.register("jin-disaster-check-once");
    }
  } catch {
    /* one-off sync is best-effort */
  }

  // Kick an immediate background check so SW path is warm after subscribe.
  await postToServiceWorker({ type: "RUN_BACKGROUND_CHECK" });

  return { enabled: true, pushSubscribed, periodicSync };
}

async function getNotificationRegistration() {
  if (notificationRegistration) {
    return notificationRegistration;
  }
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
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
    requireInteraction: true,
    vibrate: [200, 100, 200, 100, 200],
    icon: "./icons/icon-192.svg",
    badge: "./icons/icon-192.svg",
    data: data || {}
  };

  let systemShown = false;
  try {
    await initServiceWorker();
    const registration = await getNotificationRegistration();
    if (registration?.showNotification && "Notification" in window && Notification.permission === "granted") {
      await registration.showNotification(title, payload);
      systemShown = true;
      try {
        registration.active?.postMessage({
          type: "SHOW_NOTIFICATION",
          title,
          body,
          tag: payload.tag,
          data: payload.data
        });
      } catch {
        /* ignore */
      }
    } else if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, payload);
      systemShown = true;
    }
  } catch {
    systemShown = false;
  }

  // Always keep an in-page reminder so alerts still work when system notifications are blocked/unavailable.
  showInPageAlert(title, body, { timeoutMs: systemShown ? 5000 : 10000 });
  return true;
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
  const support = getNotificationSupport();
  if (!support.apiAvailable) {
    updateNotificationHint();
    // Fallback mode: allow subscription alerts via in-page reminders.
    return "fallback";
  }
  if (Notification.permission === "granted") {
    await initServiceWorker();
    updateNotificationHint();
    return "granted";
  }
  if (Notification.permission === "denied") {
    updateNotificationHint();
    return "fallback";
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await initServiceWorker();
      updateNotificationHint();
      return "granted";
    }
  } catch {
    updateNotificationHint("瀏覽器拒絕通知權限請求，已改用頁面內即時提醒。");
    return "fallback";
  }
  updateNotificationHint("尚未允許系統通知，已改用頁面內即時提醒。");
  return "fallback";
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

function getTaipeiDateKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function buildDailyWeatherEmailBody() {
  const weather = appState.weather;
  const locationLabel = weather?.label || getSubscriptionLocationLabel();
  if (!weather?.current) {
    return `【每日天氣預報】${locationLabel}\n目前天氣資料暫時無法讀取，請稍後至平台查看：${SITE_PUBLIC_URL}`;
  }
  const current = weather.current;
  const rain8 = (weather.next8Hours || []).reduce((sum, row) => sum + Number(row.precipitation || 0), 0);
  const rainLines = (weather.next8Hours || [])
    .map((row) => `${row.time} 降雨機率 ${Math.round(row.probability)}%`)
    .join("\n");
  return [
    `【每日天氣預報】${locationLabel}`,
    `日期：${getTaipeiDateKey()}（台北時間）`,
    `天氣：${WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"}`,
    `氣溫：${Math.round(current.temperature_2m)}°C（體感 ${Math.round(current.apparent_temperature)}°C）`,
    `濕度：${Math.round(current.relative_humidity_2m)}%`,
    `風速：${Math.round(current.wind_speed_10m)} km/h`,
    `雲量：${Math.round(current.cloud_cover)}%`,
    `目前降雨機率：${Math.round(weather.rainProb ?? 0)}%`,
    `未來 ${RAIN_FORECAST_HOURS} 小時累積降雨預估：${rain8.toFixed(1)} mm`,
    "",
    "未來 8 小時降雨機率：",
    rainLines || "（暫無預報資料）",
    "",
    `平台：${SITE_PUBLIC_URL}`,
    "本信為每日一次天氣預報。若要停止接收，請於網站取消「每日天氣預報」主題後重新儲存訂閱。"
  ].join("\n");
}

async function sendEmailToInbox(toEmail, subject, message) {
  const email = String(toEmail || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Email 格式不正確");
  }
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _subject: subject,
      _template: "box",
      _captcha: "false",
      _honey: "",
      message: String(message || ""),
      platform: SITE_PUBLIC_URL
    })
  });
  const raw = await response.text();
  let payload = null;
  try {
    payload = JSON.parse(raw);
  } catch {
    payload = null;
  }
  if (!response.ok) {
    throw new Error(payload?.message || `郵件發送失敗（HTTP ${response.status}）`);
  }
  return payload || { success: true };
}

function buildSubscriberRecord(subscription = appState.subscription) {
  const location = getSubscriptionWeatherLocation();
  return {
    email: String(subscription?.email || "")
      .trim()
      .toLowerCase(),
    topics: Array.isArray(subscription?.topics) ? subscription.topics : [],
    city: subscription?.city || "",
    township: subscription?.township || "",
    lat: Number(location?.lat),
    lon: Number(location?.lon),
    updatedAt: new Date().toISOString()
  };
}

async function upsertSubscriberOnServer(record) {
  // Best-effort mirror to repo list used by the daily Actions job.
  // Requires public Contents API write token configured by the site owner.
  const token = String(window.JIN_SUBSCRIBE_GITHUB_TOKEN || "").trim();
  if (!token || !record?.email) {
    return { synced: false, reason: "no-token" };
  }
  const apiBase = "https://api.github.com/repos/amjin358-svg/jin/contents/data/subscribers.json";
  const currentResponse = await fetch(`${apiBase}?ref=main`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`
    }
  });
  if (!currentResponse.ok) {
    throw new Error(`讀取訂閱名單失敗（HTTP ${currentResponse.status}）`);
  }
  const currentPayload = await currentResponse.json();
  const decoded = new TextDecoder().decode(
    Uint8Array.from(atob(String(currentPayload.content || "").replace(/\n/g, "")), (char) =>
      char.charCodeAt(0)
    )
  );
  let parsed;
  try {
    parsed = JSON.parse(decoded);
  } catch {
    parsed = { subscribers: [] };
  }
  const list = Array.isArray(parsed.subscribers) ? parsed.subscribers : [];
  const nextList = [
    ...list.filter((item) => String(item?.email || "").trim().toLowerCase() !== record.email),
    record
  ];
  const nextDoc = {
    updatedAt: new Date().toISOString(),
    subscribers: nextList
  };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(nextDoc, null, 2))));
  const saveResponse = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `chore: upsert weather subscriber ${record.email}`,
      content: encoded,
      sha: currentPayload.sha,
      branch: "main"
    })
  });
  if (!saveResponse.ok) {
    const raw = await saveResponse.text();
    throw new Error(`同步訂閱名單失敗（HTTP ${saveResponse.status}）${raw.slice(0, 120)}`);
  }
  return { synced: true };
}

async function notifyOwnerNewSubscriber(record) {
  try {
    await sendEmailToInbox(
      SUBSCRIBE_OWNER_INBOX,
      `【新訂閱】${record.email}`,
      [
        "有新的每日天氣預報訂閱：",
        `Email：${record.email}`,
        `地區：${record.city}${record.township || ""}`,
        `主題：${(record.topics || []).join(", ")}`,
        `座標：${record.lat}, ${record.lon}`,
        "",
        "請確認 data/subscribers.json 已包含此訂閱者，供 GitHub Actions 每日寄送。"
      ].join("\n")
    );
  } catch {
    // Owner mirror is best-effort only.
  }
}

async function sendDailyWeatherEmail({ force = false } = {}) {
  const subscription = appState.subscription;
  const email = String(subscription?.email || "").trim();
  const topics = new Set(subscription?.topics || []);
  if (!email || !topics.has("weather")) {
    return { sent: false, reason: "not-subscribed" };
  }
  const today = getTaipeiDateKey();
  const lastSent = localStorage.getItem(DAILY_WEATHER_EMAIL_DATE_KEY);
  if (!force && lastSent === today) {
    return { sent: false, reason: "already-sent-today" };
  }
  if (!appState.weather?.current) {
    return { sent: false, reason: "no-weather" };
  }
  const locationLabel = appState.weather.label || getSubscriptionLocationLabel();
  const subject = `【每日天氣預報】${locationLabel}｜${today}`;
  await sendEmailToInbox(email, subject, buildDailyWeatherEmailBody());
  localStorage.setItem(DAILY_WEATHER_EMAIL_DATE_KEY, today);
  return { sent: true, date: today };
}

async function registerSubscriptionEmailDelivery(subscription) {
  const record = buildSubscriberRecord(subscription);
  const results = {
    confirmationSent: false,
    dailySent: false,
    serverSynced: false,
    activationHint: false
  };
  try {
    await sendEmailToInbox(
      record.email,
      `【訂閱確認】每日天氣預報｜${record.city}${record.township || ""}`,
      [
        "感謝訂閱「停班停課+即時災害通報平台」。",
        "已為您啟用【每天一次】天氣預報 Email。",
        "",
        buildDailyWeatherEmailBody(),
        "",
        "若這是第一次收到本平台郵件，請先點選服務商寄出的確認連結，之後即可穩定接收每日預報。"
      ].join("\n")
    );
    results.confirmationSent = true;
    results.dailySent = true;
    localStorage.setItem(DAILY_WEATHER_EMAIL_DATE_KEY, getTaipeiDateKey());
  } catch (error) {
    const message = String(error?.message || error);
    results.activationHint = /confirm|activation|驗證|確認|Make sure you confirm/i.test(message);
    throw error;
  }
  notifyOwnerNewSubscriber(record);
  try {
    const sync = await upsertSubscriberOnServer(record);
    results.serverSynced = Boolean(sync?.synced);
  } catch {
    results.serverSynced = false;
  }
  return results;
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
    "water-outage": getSubscriptionWaterOutageMessage,
    weather: getSubscriptionWeatherMessage,
    air: getSubscriptionAirQualityMessage
  };
  return getSelectedSubscriptionTopics().map((topic) => topicBuilders[topic]?.()).filter(Boolean);
}

async function sendRecoveryNotifications(messages) {
  const normalized = (messages || [])
    .map((item) => (typeof item === "string" ? { kind: "generic", text: item } : item))
    .filter((item) => item?.text);
  if (!normalized.length || !appState.subscription?.email) {
    return false;
  }
  const permissionMode = await ensureNotificationPermission();
  if (!permissionMode) {
    return false;
  }

  const utilityKinds = new Set([
    "power-alert",
    "power-recovery",
    "water-alert",
    "water-recovery",
    "flood-alert",
    "flood-recovery"
  ]);
  const utilityMessages = normalized.filter((item) => utilityKinds.has(item.kind));
  const otherMessages = normalized.filter((item) => !utilityKinds.has(item.kind));

  for (const message of otherMessages) {
    await showAppNotification("災害狀態更新", message.text, {
      tag: `recovery-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    });
    await sleep(700);
  }

  for (const message of utilityMessages) {
    await queueUtilityAlertBurst(message.text, message.kind);
  }
  return true;
}

function loadPendingUtilityAlerts() {
  try {
    const raw = JSON.parse(localStorage.getItem(PENDING_UTILITY_ALERT_STORAGE_KEY) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function savePendingUtilityAlerts(items) {
  try {
    localStorage.setItem(PENDING_UTILITY_ALERT_STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
}

async function queueUtilityAlertBurst(text, kind = "utility") {
  const now = Date.now();
  const burstId = `${kind}-${now}-${Math.random().toString(36).slice(2, 7)}`;
  const pending = loadPendingUtilityAlerts().filter((item) => item.dueAt > now - UTILITY_ALERT_REPEAT_MS);
  for (let i = 0; i < UTILITY_ALERT_REPEAT_COUNT; i += 1) {
    pending.push({
      id: `${burstId}-${i + 1}`,
      kind,
      text,
      dueAt: now + i * UTILITY_ALERT_REPEAT_MS,
      sent: false
    });
  }
  savePendingUtilityAlerts(pending);
  await flushPendingUtilityAlerts();
}

async function flushPendingUtilityAlerts() {
  const now = Date.now();
  const pending = loadPendingUtilityAlerts();
  let changed = false;
  for (const item of pending) {
    if (item.sent || item.dueAt > now) {
      continue;
    }
    await showAppNotification("公用事業警戒通報", `${item.text}\n（自動通報）`, {
      tag: item.id
    });
    item.sent = true;
    changed = true;
    await sleep(500);
  }
  const remaining = pending.filter((item) => !item.sent);
  if (changed || remaining.length !== pending.length) {
    savePendingUtilityAlerts(remaining);
  }
  utilityAlertTimers.forEach((timer) => window.clearTimeout(timer));
  utilityAlertTimers = [];
  remaining.forEach((item) => {
    const delay = Math.max(0, item.dueAt - Date.now());
    const timer = window.setTimeout(() => {
      flushPendingUtilityAlerts().catch(() => {});
    }, delay + 50);
    utilityAlertTimers.push(timer);
  });
}

async function fetchWaterOutageData() {
  const cityName = getSubscriptionCityName() || citySelect.value;
  if (!cityName) {
    appState.waterOutageItems = [];
    return [];
  }
  const encodedCity = encodeURIComponent(cityName);
  const endpoint = `https://r.jina.ai/https://web.water.gov.tw/wateroff/city/${encodedCity}/index.html`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const markdown = await response.text();
    const items = [];
    const cardPattern =
      /停水期間\s*起\s*([0-9/\s:]+)\s*迄\s*([0-9/\s:]+)\s*停水區域\s*([^\n]*?)\s*停水原因\s*([^\n]*?)\s*客服專線[\s\S]*?案件編號\s*([0-9]+)/g;
    let match;
    while ((match = cardPattern.exec(markdown)) && items.length < 20) {
      const area = String(match[3] || "").trim();
      const reason = String(match[4] || "").trim();
      const id = String(match[5] || "").trim();
      const start = String(match[1] || "").trim();
      const end = String(match[2] || "").trim();
      if (!id) {
        continue;
      }
      items.push({
        id,
        city: cityName,
        area,
        reason,
        period: `${start}～${end}`,
        summary: `${area}${reason ? `（${reason.slice(0, 36)}）` : ""}`
      });
    }
    appState.waterOutageItems = items;
    appState.waterOutageMetaText = `${cityName} 停水公告 ${items.length} 筆`;
    return items;
  } catch (error) {
    appState.waterOutageItems = [];
    appState.waterOutageMetaText = `停水資料暫時無法更新：${error.message}`;
    return [];
  }
}

function getSubscriptionWaterOutageMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const items = appState.waterOutageItems || [];
  if (!items.length) {
    return `【停水監測】${locationLabel} 目前未抓到有效停水／降壓公告。`;
  }
  const top = items[0];
  return `【停水公告】${top.area || locationLabel}：${top.summary || "有停水案件"}（${top.period || "期間詳見台水"}）。`;
}

async function sendSubscriptionNotification({ force = false } = {}) {
  if (!appState.subscription?.email) {
    renderSubscriptionStatus("請先輸入 Email 並儲存訂閱。");
    return false;
  }
  const permissionMode = await ensureNotificationPermission();
  if (!permissionMode) {
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
  const channelHint = permissionMode === "granted" ? "系統通知＋頁面提醒" : "頁面內即時提醒";
  const statusHint = hasClosureAlert
    ? `訂閱${messages.length}項通知(停班停課提醒 3 次｜${channelHint})`
    : `訂閱${messages.length}項通知(${channelHint})`;
  renderSubscriptionStatus(statusHint);
  updateNotificationHint();
  return true;
}

async function maybeNotifySubscribers(triggerSource, recoveryMessages = []) {
  if (!appState.subscription?.email) {
    return;
  }
  // Daily weather email: once per Taipei calendar day, independent of browser notifications.
  try {
    await sendDailyWeatherEmail({ force: false });
  } catch (error) {
    console.warn("每日天氣預報 Email 發送失敗：", error);
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
      // Keep focus frame on top so the selection range stays visible.
      pane.style.zIndex = layerKey === "city-focus" ? "680" : String(zIndex);
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
  mapLegendMarkers["flood-4"] = [];
  mapLegendMarkers["flood-3"] = [];
  mapLegendMarkers["flood-2"] = [];
  mapLegendMarkers["flood-1"] = [];

  // Only plot live flooded sensors so legend/badge counts match on-map points.
  appState.floodLivePoints.forEach((point) => {
    const marker = L.circleMarker([point.lat, point.lon], {
      pane: "floodPane",
      ...buildFloodPointStyle(point.depthCm)
    });
    marker.bindPopup(
      `
        <strong>${formatFloodStationLabel(point)}</strong><br/>
        ${point.county || ""}${point.town || ""}<br/>
        警示等級：${point.level}<br/>
        即時水深：${point.depthCm} cm<br/>
        更新時間：${point.updatedAt || "-"}<br/>
        來源：水利署 IoW 即時感測（智慧尺標）
      `
    );
    mapFloodLayer.addLayer(marker);
    const level = Number(point.level) || getFloodLevelByDepth(point.depthCm);
    const key = `flood-${Math.min(4, Math.max(1, level))}`;
    mapLegendMarkers[key]?.push(marker);
  });

  syncMapLayerVisibility("flood-warning");
  updateFloodLayerMetaText();
  syncMapLegendState();
}

function getFloodMarkersOnMap() {
  return [
    ...(mapLegendMarkers["flood-4"] || []),
    ...(mapLegendMarkers["flood-3"] || []),
    ...(mapLegendMarkers["flood-2"] || []),
    ...(mapLegendMarkers["flood-1"] || [])
  ];
}

function updateFloodLayerMetaText() {
  const floodedCount = appState.floodLivePoints.length;
  const stationCount = appState.floodStations.length;
  const mappedCount = getFloodMarkersOnMap().length;
  appState.floodMetaText =
    floodedCount > 0
      ? `即時積水感測點 ${mappedCount} 處（測站總數 ${stationCount}）。`
      : `目前全台 IoW 測站未回報積水（測站總數 ${stationCount}）。`;

  const note = document.querySelector("#floodLayerMeta");
  if (note) {
    note.textContent = `${appState.floodMetaText} 顏色越深代表水深越高。`;
  }
  syncMapFloodCountBadge(mappedCount);
}

function syncMapFloodCountBadge(count) {
  const value = Math.max(0, Number(count) || 0);
  if (mapFloodCountValue) {
    mapFloodCountValue.textContent = String(value);
  }
  if (!mapFloodCountBtn) {
    return;
  }
  mapFloodCountBtn.classList.toggle("is-empty", value <= 0);
  mapFloodCountBtn.disabled = value <= 0;
  mapFloodCountBtn.setAttribute(
    "aria-label",
    value > 0 ? `即時感測點 ${value} 處，點選檢視細節` : "目前無即時感測點"
  );
}

function focusAllFloodMarkers() {
  if (!warningMap) {
    return;
  }
  const markers = getFloodMarkersOnMap();
  if (!markers.length) {
    return;
  }
  const group = L.featureGroup(markers);
  const bounds = group.getBounds?.();
  if (bounds?.isValid?.()) {
    warningMap.fitBounds(bounds, {
      padding: [28, 28],
      maxZoom: 12,
      animate: true
    });
  } else {
    warningMap.setView(markers[0].getLatLng(), Math.max(warningMap.getZoom(), 11), { animate: true });
  }
  window.setTimeout(() => {
    markers[0]?.openPopup?.();
  }, 280);
}

async function loadFloodStations() {
  const response = await fetch("./data/flood_stations.json");
  if (!response.ok) {
    throw new Error(`淹水測站資料讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  appState.floodStations = (payload.stations ?? []).map((station) => ({
    ...station,
    name: decodeHtmlEntities(station?.name)
  }));
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
      areaName: formatFloodStationLabel(point),
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
  const location = getActiveWeatherLocation();
  if (!location || !Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    return;
  }
  warningMap.setView([location.lat, location.lon], 10, { animate: false });
  const bounds = mapCityFocusLayer.getBounds?.();
  if (bounds?.isValid?.()) {
    warningMap.fitBounds(bounds, {
      padding: [10, 10],
      maxZoom: 12,
      animate: false
    });
  }
}

function resolveFocusRadiusMetersForMap() {
  if (!warningMap) {
    return MAP_FOCUS_CIRCLE_RADIUS_M;
  }
  warningMap.invalidateSize();
  const size = warningMap.getSize();
  if (!size || size.x < 40 || size.y < 40) {
    return MAP_FOCUS_CIRCLE_RADIUS_M;
  }
  const bounds = warningMap.getBounds();
  if (!bounds?.isValid?.()) {
    return MAP_FOCUS_CIRCLE_RADIUS_M;
  }
  const center = warningMap.getCenter();
  const north = L.latLng(bounds.getNorth(), center.lng);
  const halfHeightKm = getDistanceKm(center.lat, center.lng, north.lat, north.lng);
  const east = L.latLng(center.lat, bounds.getEast());
  const halfWidthKm = getDistanceKm(center.lat, center.lng, east.lat, east.lng);
  const radiusKm = Math.max(3, Math.min(halfHeightKm, halfWidthKm) * 0.92);
  return Math.round(radiusKm * 1000);
}

function updateCityFocusLayer() {
  if (!warningMap) {
    return;
  }
  const location = getActiveWeatherLocation();
  if (mapCityFocusLayer) {
    try {
      warningMap.removeLayer(mapCityFocusLayer);
    } catch {
      /* ignore */
    }
    mapCityFocusLayer = null;
  }
  if (!location || !Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    return;
  }

  // Anchor the map on the selected place first, then size the ring to the visible frame.
  warningMap.setView([location.lat, location.lon], 10, { animate: false });
  const radiusM = resolveFocusRadiusMetersForMap();

  mapCityFocusLayer = L.featureGroup();
  mapLegendMarkers["city-focus"] = [];
  const ring = L.circle([location.lat, location.lon], {
    radius: radiusM,
    color: "#00d4ff",
    weight: 5,
    opacity: 1,
    fillColor: "#00d4ff",
    fillOpacity: 0.16,
    interactive: false
  });
  const center = L.circleMarker([location.lat, location.lon], {
    radius: 6,
    color: "#ffffff",
    weight: 2,
    fillColor: "#00d4ff",
    fillOpacity: 1,
    interactive: true
  });
  center.bindPopup(`所選位置焦點範圍<br/>${location.label || `${location.lat.toFixed(4)}, ${location.lon.toFixed(4)}`}`);
  mapCityFocusLayer.addLayer(ring);
  mapCityFocusLayer.addLayer(center);
  mapLegendMarkers["city-focus"].push(center);

  mapLayerVisibility["city-focus"] = true;
  mapCityFocusLayer.addTo(warningMap);
  syncMapLayerVisibility("city-focus");
  syncMapLegendState();
  fitMapToFocusArea();
  window.setTimeout(() => {
    // Rebuild once layout/size settles so the ring matches the map frame.
    if (!warningMap) {
      return;
    }
    const settledRadius = resolveFocusRadiusMetersForMap();
    ring.setRadius(settledRadius);
    fitMapToFocusArea();
  }, 350);
}

function getLiveCityCameraIds() {
  const primary = [...(cameraList?.querySelectorAll(".camera-item-live") || [])];
  const extras = [...(cameraListMore?.querySelectorAll(".camera-item-live") || [])];
  return new Set(
    [...primary, ...extras]
      .map((el) => el.dataset.cameraId)
      .filter(Boolean)
  );
}

function updateCameraMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapCameraLayer) {
    mapCameraLayer = L.layerGroup();
  }
  mapCameraLayer.clearLayers();
  mapLegendMarkers.cctv = [];
  // Plot the same city CCTV set used by the monitor section / legend (coords required).
  const camerasToPlot = getCityCamerasForDisasterMap();
  camerasToPlot.forEach((camera) => {
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return;
    }
    const [roadA, roadB] = getCameraIntersectionRoads(camera);
    const distanceText = Number.isFinite(camera.distanceKm)
      ? `約 ${camera.distanceKm.toFixed(1)} km`
      : "--";
    const mapsUrl = `https://www.google.com/maps?q=${lat},${lon}&z=18`;
    const areaText = camera.city || camera.areaLabel || "";
    const marker = L.circleMarker([lat, lon], {
      pane: "cameraPane",
      radius: 8,
      color: "#b8f2ff",
      fillColor: "#0096c7",
      fillOpacity: 0.95,
      weight: 3
    });
    marker.bindPopup(
      `
        <strong>${camera.id}</strong><br/>
        交叉路口：${roadA} × ${roadB}<br/>
        ${areaText ? `所在縣市：${areaText}<br/>` : ""}
        距離定位點：${distanceText}<br/>
        <a href="${camera.html}" target="_blank" rel="noopener noreferrer">即時影像</a>
        ｜
        <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">地圖位置</a>
      `
    );
    mapCameraLayer.addLayer(marker);
    mapLegendMarkers.cctv.push(marker);
  });
  syncMapLayerVisibility("cctv-points");
  syncMapLegendState();
}

function syncMapLegendState() {
  const legend = document.querySelector(".map-legend");
  if (!legend) {
    return;
  }
  // Keep CCTV legend count identical to markers currently drawn on the map layer.
  if (mapCameraLayer?.getLayers) {
    mapLegendMarkers.cctv = mapCameraLayer.getLayers();
  }
  legend.querySelectorAll("[data-legend-key]").forEach((item) => {
    const key = item.dataset.legendKey;
    const markers = mapLegendMarkers[key] || [];
    const countEl = item.querySelector("[data-legend-count]");
    if (countEl) {
      countEl.textContent = String(markers.length);
      countEl.removeAttribute("aria-hidden");
    }
    item.classList.toggle("legend-item-empty", markers.length === 0);
    item.setAttribute("aria-disabled", markers.length === 0 ? "true" : "false");
  });
  // Keep flood badge count identical to markers currently on the map.
  syncMapFloodCountBadge(getFloodMarkersOnMap().length);
}

function focusMapLegendMarkers(legendKey) {
  if (!warningMap) {
    return;
  }
  const markers = mapLegendMarkers[legendKey] || [];
  if (!markers.length) {
    return;
  }
  const group = L.featureGroup(markers);
  const bounds = group.getBounds?.();
  if (bounds?.isValid?.()) {
    warningMap.fitBounds(bounds, {
      padding: [28, 28],
      maxZoom: legendKey === "city-focus" ? 12 : 14,
      animate: true
    });
  } else {
    warningMap.setView(markers[0].getLatLng(), Math.max(warningMap.getZoom(), 13), { animate: true });
  }
  window.setTimeout(() => {
    markers[0]?.openPopup?.();
  }, 280);
}

function initMapLegendInteractions() {
  const legend = document.querySelector(".map-legend");
  if (!legend || legend.dataset.bound === "1") {
    return;
  }
  legend.dataset.bound = "1";
  legend.addEventListener("click", (event) => {
    const item = event.target.closest("[data-legend-key]");
    if (!item || item.classList.contains("legend-item-empty")) {
      return;
    }
    focusMapLegendMarkers(item.dataset.legendKey);
  });
  legend.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const item = event.target.closest("[data-legend-key]");
    if (!item || item.classList.contains("legend-item-empty")) {
      return;
    }
    event.preventDefault();
    focusMapLegendMarkers(item.dataset.legendKey);
  });
  mapFloodCountBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    if (mapFloodCountBtn.disabled) {
      return;
    }
    focusAllFloodMarkers();
  });
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

function addDisasterMapBaseTiles(map) {
  // Disaster-oriented basemaps: dark canvas for overlays, Taiwan NLSC, and terrain topo.
  const darkTiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 20,
    subdomains: "abcd",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  });
  const nlscTiles = L.tileLayer(
    "https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}",
    {
      maxZoom: 19,
      attribution: '圖資 &copy; <a href="https://maps.nlsc.gov.tw/">內政部國土測繪中心</a>'
    }
  );
  const topoTiles = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
  });

  // Default dark basemap keeps flood / outage / CCTV markers highly readable.
  darkTiles.addTo(map);
  L.control
    .layers(
      {
        "災害警示底圖（深色）": darkTiles,
        "台灣通用電子地圖": nlscTiles,
        "地形圖 OpenTopo": topoTiles
      },
      null,
      { position: "topright", collapsed: true }
    )
    .addTo(map);
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
  const focusPane = warningMap.getPane("focusPane");
  if (focusPane) {
    focusPane.style.zIndex = "680";
  }

  addDisasterMapBaseTiles(warningMap);

  renderLayerControl();
  applyMapLayerOrder();
  initMapLegendInteractions();
  syncMapLegendState();
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
  warningMap.whenReady(() => {
    updateCityFocusLayer();
    fitMapToFocusArea();
  });
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
    enrichCityCameraCrossRoadsFromNeighbors();
    blackScreenCameraIds = loadBlackScreenCameraIds();

    if (freewayResponse.ok) {
      freewayCameraDataset = await freewayResponse.json();
      freewayInterchangeIndex = buildFreewayInterchangeIndex(freewayCameraDataset.cameras || []);
      fillFreewayInterchangeSelect();
    } else if (freewayCameraMeta) {
      freewayCameraMeta.textContent = `國道監控資料暫時無法更新：HTTP ${freewayResponse.status}`;
    }

    renderAllCameraLists();
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
    autoRefreshMeta.textContent = "更新倒數：已暫停";
    return;
  }
  if (appState.autoRefreshRunning) {
    autoRefreshMeta.textContent = "更新倒數：更新中…";
    return;
  }
  const remainingMs = Math.max(0, appState.nextAutoRefreshAt - Date.now());
  autoRefreshMeta.textContent = `更新倒數 ${formatAutoRefreshCountdown(remainingMs)}`;
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
      }),
      fetchWaterOutageData().catch(() => {
        appState.waterOutageItems = appState.waterOutageItems || [];
      })
    ]);
    renderTyphoonAnalysis();
    renderAiAlerts();
    updateMapForCityChange();
    const recoveryMessages = updateRecoveryTrackingState();
    await flushPendingUtilityAlerts();
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
  syncCityCameraScopeToLocator();
  performFullRefresh("manual");
  renderAllCameraLists();
  updateMapForCityChange();
});

townshipSelect.addEventListener("change", () => {
  saveRegionPreference();
  syncCityCameraScopeToLocator();
  performFullRefresh("manual");
  renderAllCameraLists();
  updateMapForCityChange();
});

locateBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  // Keep this handler synchronous so the browser treats geolocation as a user gesture.
  locateByDevice();
});

windyLocateBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  // Keep this handler synchronous so the browser treats geolocation as a user gesture.
  locateWindyEmbed();
});

refreshBtn.addEventListener("click", () => {
  performFullRefresh("manual").catch(() => {
    setRefreshButtonLoading(false);
  });
});

cameraKeyword.addEventListener("input", () => {
  renderAllCameraLists();
});

cameraRegionSelect.addEventListener("change", () => {
  updateCameraMetaText();
  renderCameraList();
  updateCameraMapLayer();
});

cameraCitySelect?.addEventListener("change", () => {
  const selectedCity = getSelectedCameraCityName() || citySelect?.value || "";
  const locatorTown = String(townshipSelect?.value || "").trim();
  const sameAsLocator = !cameraCitySelect || cameraCitySelect.value === "follow" || selectedCity === citySelect?.value;
  fillCameraDistrictSelect(sameAsLocator ? locatorTown : "");
  if (sameAsLocator && locatorTown) {
    const townValue = `town:${locatorTown}`;
    if ([...cameraRegionSelect.options].some((option) => option.value === townValue)) {
      cameraRegionSelect.value = townValue;
    }
  } else {
    const firstTown = TOWNSHIP_LOCATIONS.find((item) => item.city === selectedCity);
    cameraRegionSelect.value = firstTown ? `town:${firstTown.town}` : CAMERA_DISTRICT_ALL_CITY;
  }
  updateCameraMetaText();
  renderAllCameraLists();
  updateCameraMapLayer();
});

freewayRegionSelect?.addEventListener("change", () => {
  fillFreewayInterchangeSelect();
  renderFreewayCameraList();
});

freewayCitySelect?.addEventListener("change", () => {
  fillFreewayInterchangeSelect();
  renderFreewayCameraList();
});

freewayInterchangeSelect?.addEventListener("change", () => {
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
  await ensureNotificationPermission();
  if (topics.includes("weather")) {
    try {
      if (!appState.weather?.current) {
        await fetchWeather();
      }
      await registerSubscriptionEmailDelivery(appState.subscription);
    } catch {
      /* keep status minimal even if mail activation is pending */
    }
  }
  try {
    await enableBackgroundNotifications(appState.subscription);
  } catch {
    /* ignore */
  }
  await sendSubscriptionNotification({ force: true });
  renderSubscriptionStatus("訂閱完成。");
  clearSubscriptionHint();
});

testNotificationBtn?.addEventListener("click", async () => {
  await sendSubscriptionNotification({ force: true });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && appState.subscription?.email && appState.autoRefreshEnabled) {
    performFullRefresh("auto").catch(() => {});
  }
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

function fitSingleLineText(element, { maxPx, minPx, fillRatio = 1 } = {}) {
  if (!element) {
    return;
  }
  const parent = element.parentElement;
  if (!parent) {
    return;
  }
  element.style.whiteSpace = "nowrap";
  element.style.width = "100%";
  element.style.maxWidth = "100%";
  element.style.minWidth = "0";
  element.style.boxSizing = "border-box";
  element.style.letterSpacing = "";
  const parentWidth = Math.floor(parent.getBoundingClientRect().width);
  const selfWidth = Math.floor(element.getBoundingClientRect().width);
  const fullWidth = Math.max(0, selfWidth || parentWidth);
  if (!fullWidth) {
    return;
  }
  const available = Math.max(1, Math.floor(fullWidth * Math.min(1, Math.max(0.9, fillRatio || 1))));
  const upper = Number.isFinite(maxPx) ? maxPx : Math.max(16, Math.floor(available * 0.12));
  const lower = Number.isFinite(minPx) ? minPx : 10;
  let low = lower;
  let high = Math.max(lower, upper);
  let best = lower;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    element.style.fontSize = `${mid}px`;
    if (element.scrollWidth <= available + 0.5) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  element.style.fontSize = `${best}px`;

  // Spread letter-spacing slightly when text still has unused width, for a fuller line.
  const used = element.scrollWidth;
  const leftover = available - used;
  const textLength = Math.max(1, (element.textContent || "").trim().length);
  if (leftover > 4 && textLength > 8) {
    const tracking = Math.min(1.6, leftover / textLength);
    element.style.letterSpacing = `${tracking.toFixed(3)}px`;
    if (element.scrollWidth > available + 0.5) {
      element.style.letterSpacing = "";
    }
  }
}

function fitSubscriptionTopicTexts() {
  document.querySelectorAll(".topic-option .topic-option-text").forEach((element) => {
    const parent = element.parentElement;
    const parentWidth = Math.floor(parent?.getBoundingClientRect().width || 0);
    const checkboxWidth = Math.ceil(parent?.querySelector("input")?.getBoundingClientRect().width || 18);
    const available = Math.max(40, parentWidth - checkboxWidth - 10);
    // Temporarily constrain width so fitSingleLineText measures against one row.
    element.style.width = `${available}px`;
    element.style.maxWidth = `${available}px`;
    fitSingleLineText(element, {
      maxPx: 16,
      minPx: 10,
      fillRatio: 1
    });
  });
}

function fitHeroTexts() {
  const eyebrow = document.querySelector(".hero .eyebrow.hero-fit-text");
  const title = document.querySelector(".hero h1.hero-fit-text");
  const subtitle = document.querySelector(".hero .subtitle.hero-fit-text");
  const riskBadge = document.querySelector("#typhoonRiskBadge.hero-fit-text");
  const content = document.querySelector(".hero-content");
  const width = Math.floor(content?.getBoundingClientRect().width || document.documentElement.clientWidth || 0);
  // English eyebrow: auto-fit one line to full hero width with a larger type size.
  fitSingleLineText(eyebrow, {
    maxPx: Math.min(42, Math.max(14, Math.floor(width * 0.072))),
    minPx: 7,
    fillRatio: 1
  });
  fitSingleLineText(title, {
    maxPx: Math.min(48, Math.floor(width * 0.088)),
    minPx: 11
  });
  fitSingleLineText(subtitle, {
    maxPx: Math.min(18, Math.floor(width * 0.038)),
    minPx: 9
  });
  const riskParentWidth = Math.floor(
    riskBadge?.parentElement?.getBoundingClientRect().width || document.documentElement.clientWidth || 0
  );
  fitSingleLineText(riskBadge, {
    maxPx: Math.min(44, Math.floor(riskParentWidth * 0.14)),
    minPx: 18
  });
  fitSubscriptionTopicTexts();
}

let heroFitRaf = 0;
function scheduleHeroTextFit() {
  window.cancelAnimationFrame(heroFitRaf);
  heroFitRaf = window.requestAnimationFrame(fitHeroTexts);
}

initRegionSelectors();
initCameraRegionSelect();
initCameraCitySelect();
initFreewayRegionSelect();
initFreewayCitySelect();
loadSubscription();
renderSubscriptionStatus();
updateNotificationHint();
updateWindyTrackEmbed();
syncNoticeDetailsOpen();
fitHeroTexts();
window.addEventListener("resize", () => {
  scheduleHeroTextFit();
  if (warningMap) {
    warningMap.invalidateSize();
    fitMapToFocusArea();
  }
});
window.addEventListener("orientationchange", () => {
  scheduleHeroTextFit();
  window.setTimeout(() => {
    if (warningMap) {
      warningMap.invalidateSize();
      fitMapToFocusArea();
    }
  }, 250);
});
if (document.fonts?.ready) {
  document.fonts.ready.then(scheduleHeroTextFit).catch(() => {});
}
window.matchMedia("(min-width: 861px)").addEventListener("change", syncNoticeDetailsOpen);
initServiceWorker()
  .then(() => ensureNotificationPermission())
  .then(async () => {
    updateNotificationHint();
    if (appState.subscription?.email) {
      await enableBackgroundNotifications(appState.subscription).catch(() => {});
    }
    return flushPendingUtilityAlerts();
  })
  .catch(() => updateNotificationHint());
blackScreenCameraIds = loadBlackScreenCameraIds();
document.querySelector("#airDetails")?.addEventListener("toggle", () => {
  syncAirDetailsSummaryLabel();
});
initVisitorCounter();
initLikeCounter();
performFullRefresh("manual");
fetchRoadCameras();
initWarningMap();
startAutoRefreshTimers();
