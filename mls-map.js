const listings = [
  {
    title: "Lujiazui Skyline Residence",
    district: "Pudong, Shanghai",
    price: "$4,850,000",
    lat: 31.2388,
    lng: 121.4998
  },
  {
    title: "Bund Heritage Suites",
    district: "Huangpu, Shanghai",
    price: "$3,920,000",
    lat: 31.2401,
    lng: 121.4907
  },
  {
    title: "Jing'an Premium Tower",
    district: "Jing'an, Shanghai",
    price: "$2,760,000",
    lat: 31.2276,
    lng: 121.4457
  },
  {
    title: "Xuhui Garden Penthouse",
    district: "Xuhui, Shanghai",
    price: "$2,340,000",
    lat: 31.1881,
    lng: 121.4373
  }
];

const map = L.map("map").setView([31.2304, 121.4737], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

listings.forEach((listing) => {
  const marker = L.marker([listing.lat, listing.lng]).addTo(map);
  marker.bindPopup(
    `<strong>${listing.title}</strong><br>${listing.district}<br><b>Total Price: ${listing.price}</b>`
  );
});
