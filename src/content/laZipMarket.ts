import type { Language, LocalizedText } from '../types'

export type LaZipOverview = {
  zip: string
  district: LocalizedText
  averagePricePerSqft: string
  averageListPrice: string
  activeListings: string
  annualChange: string
  overview: LocalizedText
}

export type LaZipListing = {
  id: string
  zip: string
  title: LocalizedText
  address: string
  status: LocalizedText
  propertyType: LocalizedText
  price: string
  pricePerSqft: string
  beds: string
  baths: string
  interior: string
  lot: string
  yearBuilt: string
  hoa: string
  image: string
  summary: LocalizedText
  description: LocalizedText
  highlights: LocalizedText[]
}

const text = (en: string, zh: string): LocalizedText => ({ en, zh })

export const laZipOverviews: LaZipOverview[] = [
  {
    zip: '90049',
    district: text('Brentwood', 'Brentwood'),
    averagePricePerSqft: '$1,420 / ft²',
    averageListPrice: '$5.8M',
    activeListings: '34 active',
    annualChange: '+6.2% YoY',
    overview: text(
      'A family-office favorite for estate inventory, school access, and westside prestige with lower turnover.',
      '兼具學區、地位感與低周轉率，是家族辦公室偏好的 Westside 長期配置區域。',
    ),
  },
  {
    zip: '90024',
    district: text('Westwood', 'Westwood'),
    averagePricePerSqft: '$1,185 / ft²',
    averageListPrice: '$3.1M',
    activeListings: '29 active',
    annualChange: '+4.9% YoY',
    overview: text(
      'University-adjacent housing, luxury condos, and executive residences that balance liquidity with durable renter depth.',
      '鄰近 UCLA 的高端公寓與住宅供給兼具流動性與穩定租賃深度，適合配置型買方。',
    ),
  },
  {
    zip: '90272',
    district: text('Pacific Palisades', 'Pacific Palisades'),
    averagePricePerSqft: '$1,688 / ft²',
    averageListPrice: '$7.4M',
    activeListings: '22 active',
    annualChange: '+7.1% YoY',
    overview: text(
      'Coastal estates and view residences where scarcity and lifestyle positioning keep luxury pricing resilient.',
      '以海景宅與稀缺地段為核心，生活品質與地段稀缺性共同支撐高端定價。',
    ),
  },
  {
    zip: '90077',
    district: text('Bel Air / Holmby Hills', 'Bel Air / Holmby Hills'),
    averagePricePerSqft: '$1,965 / ft²',
    averageListPrice: '$13.6M',
    activeListings: '27 active',
    annualChange: '+8.4% YoY',
    overview: text(
      'Iconic trophy-home territory for ultra-high-end capital looking for privacy, lot scale, and legacy ownership.',
      '超高端隱私型資產的代表區，適合重視地坪尺度、隱密性與世代持有的資本。',
    ),
  },
]

export const laZipListings: LaZipListing[] = [
  {
    id: 'brentwood-architectural-estate',
    zip: '90049',
    title: text('Brentwood Architectural Estate', 'Brentwood 建築名宅'),
    address: '1255 N Bundy Dr, Los Angeles, CA 90049',
    status: text('For sale', '銷售中'),
    propertyType: text('Single-family estate', '獨棟豪宅'),
    price: '$6,850,000',
    pricePerSqft: '$1,436 / ft²',
    beds: '5',
    baths: '6',
    interior: '4,770 ft²',
    lot: '11,842 ft² lot',
    yearBuilt: '2020',
    hoa: 'No HOA',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'Contemporary estate with disciplined indoor-outdoor planning, positioned for school-driven owner-occupier demand.',
      '現代感名宅，兼顧室內外動線與家庭使用機能，對應 Brentwood 學區型買盤需求。',
    ),
    description: text(
      'This Brentwood estate combines architectural clarity with practical family-office ownership logic: strong lot positioning, premium finish level, and proximity to westside schools and private club networks. The layout supports both full-time occupancy and diplomatic-style hosting.',
      '這筆 Brentwood 名宅同時具備建築美學與實用的家族資產邏輯：良好的地坪條件、高級完成度，以及對 Westside 學區與私人會所網絡的接近性。格局適合自住，也能支援高規格接待需求。',
    ),
    highlights: [
      text('Entertaining kitchen with full-height glass walls', '全景玻璃牆宴客型廚房'),
      text('Pool terrace with strong privacy buffer', '泳池露台具良好隱私性'),
      text('Short drive to Brentwood Country Mart and schools', '可快速抵達 Brentwood 核心商圈與學校'),
    ],
  },
  {
    id: 'brentwood-park-family-compound',
    zip: '90049',
    title: text('Brentwood Park Family Compound', 'Brentwood Park 家庭莊園'),
    address: '320 N Carmelina Ave, Los Angeles, CA 90049',
    status: text('For sale', '銷售中'),
    propertyType: text('Legacy compound', '家族型莊園'),
    price: '$9,950,000',
    pricePerSqft: '$1,508 / ft²',
    beds: '6',
    baths: '7',
    interior: '6,600 ft²',
    lot: '16,420 ft² lot',
    yearBuilt: '2016',
    hoa: 'No HOA',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'A larger-lot Brentwood Park property suited to long-hold family occupancy and wealth preservation.',
      '位於 Brentwood Park 的大地坪住宅，適合自住與長期保值型持有。',
    ),
    description: text(
      'Designed for multi-generational use, this compound offers a more classic westside hold profile: lower replacement risk, recognizable address quality, and land value support that appeals to conservative luxury capital.',
      '此物件適合多代同堂與長期持有，屬於典型 Westside 保值型資產：重建替代風險較低、門牌辨識度高，且土地價值支撐明確，對保守型高端資本具吸引力。',
    ),
    highlights: [
      text('Expanded yard with guest pavilion potential', '後院尺度寬裕，可規劃 guest pavilion'),
      text('Formal entertaining rooms plus family wing', '同時具備正式接待與家庭生活分區'),
      text('Institutional-quality landscaping and gates', '具機構級景觀與門禁規劃'),
    ],
  },
  {
    id: 'westwood-skyline-penthouse',
    zip: '90024',
    title: text('Westwood Skyline Penthouse', 'Westwood 天際頂樓宅'),
    address: '10450 Wilshire Blvd PH8, Los Angeles, CA 90024',
    status: text('For sale', '銷售中'),
    propertyType: text('Luxury condominium', '高端公寓'),
    price: '$4,280,000',
    pricePerSqft: '$1,211 / ft²',
    beds: '3',
    baths: '4',
    interior: '3,534 ft²',
    lot: 'Full-floor residence',
    yearBuilt: '2018',
    hoa: '$3,250 / mo',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'High-rise luxury product for buyers prioritizing lock-and-leave convenience, concierge service, and executive occupancy.',
      '適合重視 lock-and-leave 便利性、禮賓服務與高管居住需求的高樓層豪宅產品。',
    ),
    description: text(
      'Westwood remains one of the cleanest entry points for investors who want an institutional-quality residential product with strong leasing depth. This penthouse format is particularly relevant for principals splitting time between Taiwan and Los Angeles.',
      'Westwood 對需要高品質住宅產品與穩定租賃深度的投資人而言，是非常乾淨的進場區域。這類頂樓公寓特別適合在台灣與洛杉磯兩地往返的企業主與高資產客戶。',
    ),
    highlights: [
      text('Private elevator access and west-facing views', '私人電梯直達與西向景觀'),
      text('Full-service building with security staff', '全服務大樓與專職安管'),
      text('Strong proximity to UCLA and Century City', '鄰近 UCLA 與 Century City'),
    ],
  },
  {
    id: 'westwood-executive-residence',
    zip: '90024',
    title: text('Westwood Executive Residence', 'Westwood 高管住宅'),
    address: '1122 Lindbrook Dr, Los Angeles, CA 90024',
    status: text('For sale', '銷售中'),
    propertyType: text('Luxury townhome', '精品聯排住宅'),
    price: '$2,980,000',
    pricePerSqft: '$1,146 / ft²',
    beds: '4',
    baths: '4',
    interior: '2,601 ft²',
    lot: 'Gated enclave',
    yearBuilt: '2019',
    hoa: '$790 / mo',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'A lower-maintenance westside asset with walkability, ideal for executive tenants or newly relocated families.',
      '低維護、高步行便利性的 Westside 資產，適合高管租客與新近搬遷家庭。',
    ),
    description: text(
      'This residence addresses a different mandate than a trophy house: convenience, liquidity, and operational ease. For investors who want westside access without estate-level upkeep, it fits a disciplined hold strategy.',
      '這類住宅對應的是與豪宅不同的投資目標：便利性、流動性與管理效率。若希望擁有 Westside 區位但不承擔莊園級維護成本，這是很有紀律的持有型產品。',
    ),
    highlights: [
      text('Walkable retail and dining access', '步行可達零售與餐飲'),
      text('Efficient plan for part-time occupancy', '適合半自住半往返使用的格局'),
      text('Good fit for premium furnished leasing', '適合高端家具配置出租'),
    ],
  },
  {
    id: 'palisades-view-estate',
    zip: '90272',
    title: text('Palisades View Estate', 'Palisades 景觀莊園'),
    address: '1498 Capri Dr, Pacific Palisades, CA 90272',
    status: text('For sale', '銷售中'),
    propertyType: text('View estate', '景觀豪宅'),
    price: '$8,980,000',
    pricePerSqft: '$1,674 / ft²',
    beds: '5',
    baths: '6',
    interior: '5,364 ft²',
    lot: '13,200 ft² lot',
    yearBuilt: '2021',
    hoa: 'No HOA',
    image:
      'https://images.unsplash.com/photo-1600607687126-8a3414349a51?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'Ocean-adjacent hillside home with view-driven premium and strong lifestyle signaling.',
      '臨海山坡景觀住宅，具備明確景觀溢價與高辨識度生活風格。',
    ),
    description: text(
      'Pacific Palisades remains one of the cleanest examples of scarcity-led pricing in the Los Angeles market. Properties with durable views and newer construction can preserve pricing power even when broader demand slows.',
      'Pacific Palisades 是洛杉磯市場中最典型的稀缺性定價區域之一。具有穩定景觀與較新屋齡的物件，即使在大盤放緩時也較能維持價格支撐。',
    ),
    highlights: [
      text('Ocean corridor views from primary rooms', '主要空間可見海景走廊'),
      text('Strong appeal for lifestyle-driven capital', '對生活品質導向資本具有高吸引力'),
      text('Newer construction lowers capex risk', '較新屋齡降低未來資本支出風險'),
    ],
  },
  {
    id: 'palisades-coastal-modern',
    zip: '90272',
    title: text('Palisades Coastal Modern', 'Palisades 現代海岸宅'),
    address: '875 Swarthmore Ave, Pacific Palisades, CA 90272',
    status: text('For sale', '銷售中'),
    propertyType: text('Modern family estate', '現代家庭宅'),
    price: '$6,450,000',
    pricePerSqft: '$1,592 / ft²',
    beds: '4',
    baths: '5',
    interior: '4,052 ft²',
    lot: '8,940 ft² lot',
    yearBuilt: '2017',
    hoa: 'No HOA',
    image:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'Balanced coastal product for buyers seeking Palisades cachet without ultra-trophy pricing.',
      '適合希望進入 Palisades 區位、但不追求超高總價 trophy product 的買方。',
    ),
    description: text(
      'For principals who want access to Pacific Palisades school and lifestyle positioning while keeping total ticket size below the highest tier, this format offers a more efficient risk-return profile.',
      '若希望擁有 Pacific Palisades 的學區與生活定位，但控制在較有效率的總價帶，這類產品能提供更均衡的風險報酬結構。',
    ),
    highlights: [
      text('Walkable to village retail pocket', '步行可達社區核心零售區'),
      text('Family-scale yard and entertaining flow', '庭院尺度與宴客動線兼具'),
      text('Good replacement-cost support', '具備良好的重置成本支撐'),
    ],
  },
  {
    id: 'bel-air-gated-compound',
    zip: '90077',
    title: text('Bel Air Gated Compound', 'Bel Air 門禁莊園'),
    address: '1098 Stradella Rd, Los Angeles, CA 90077',
    status: text('For sale', '銷售中'),
    propertyType: text('Ultra-prime estate', '超高端莊園'),
    price: '$18,950,000',
    pricePerSqft: '$1,944 / ft²',
    beds: '7',
    baths: '9',
    interior: '9,749 ft²',
    lot: '0.82 acre lot',
    yearBuilt: '2019',
    hoa: 'No HOA',
    image:
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'Private, gated estate addressing the ultra-high-end mandate for privacy, scale, and generational ownership.',
      '兼具隱密性、尺度與世代持有價值的超高端門禁莊園。',
    ),
    description: text(
      'Bel Air remains one of the clearest expressions of legacy luxury ownership in Los Angeles. This property profile is relevant for capital that values discretion, ceremonial arrival, and limited substitute inventory.',
      'Bel Air 是洛杉磯最典型的傳承型豪宅市場之一。這類物件特別適合重視隱私、進場儀式感與稀缺供給的資本。',
    ),
    highlights: [
      text('Long gated arrival and formal motor court', '長距門禁進場與正式車道前庭'),
      text('Guest house and staff-support layout', '具 guest house 與人員支援配置'),
      text('Well-matched to legacy wealth positioning', '對應傳承型資產定位'),
    ],
  },
  {
    id: 'holmby-hills-legacy-home',
    zip: '90077',
    title: text('Holmby Hills Legacy Home', 'Holmby Hills 傳承宅'),
    address: '880 Mapleton Dr, Los Angeles, CA 90077',
    status: text('Private listing preview', '私密委託預覽'),
    propertyType: text('Legacy trophy residence', '傳承型 trophy residence'),
    price: '$24,500,000',
    pricePerSqft: '$2,015 / ft²',
    beds: '8',
    baths: '10',
    interior: '12,160 ft²',
    lot: '1.02 acre lot',
    yearBuilt: '2015',
    hoa: 'No HOA',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80',
    summary: text(
      'Estate-scale Holmby Hills residence with land value, privacy, and prestige positioning at the very top of the market.',
      '具備地坪價值、隱私與高度地位感的 Holmby Hills 超高端住宅。',
    ),
    description: text(
      'This is the type of asset family offices compare against global luxury holdings rather than local housing stock. The investment case is driven by prestige, irreplaceable lot quality, and long-horizon capital preservation.',
      '這類資產更常被家族辦公室拿來和全球高端資產比較，而非一般本地住宅庫存。其投資邏輯來自地位感、不可替代的地坪品質，以及長期資本保全能力。',
    ),
    highlights: [
      text('One-acre scale in a globally recognized enclave', '位於全球知名頂級社區的一英畝等級地坪'),
      text('Statement entertaining program', '具備高規格接待功能'),
      text('Suitable for ultra-long hold strategy', '適合超長期持有策略'),
    ],
  },
]

export function copyText(language: Language, value: LocalizedText) {
  return value[language]
}

export function getZipListings(zip: string) {
  return laZipListings.filter((listing) => listing.zip === zip)
}

export function getListingById(id: string) {
  return laZipListings.find((listing) => listing.id === id)
}
