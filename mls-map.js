const listings = [
  {
    id: "la-001",
    title: "Bel Air Crest Villa",
    district: "Bel Air, Los Angeles",
    price: "$8,950,000",
    beds: 6,
    baths: 7,
    area: "6,420 sqft",
    image:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2021,
    parking: "4-Car Garage",
    community: "Bel Air Crest",
    lat: 34.0907,
    lng: -118.4662
  },
  {
    id: "la-002",
    title: "Beverly Hills Modern Estate",
    district: "Beverly Hills, Los Angeles",
    price: "$12,400,000",
    beds: 7,
    baths: 8,
    area: "8,180 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2022,
    parking: "5-Car Garage",
    community: "Trousdale Estates",
    lat: 34.0736,
    lng: -118.4004
  },
  {
    id: "la-003",
    title: "Santa Monica Ocean View Home",
    district: "Santa Monica, Los Angeles",
    price: "$6,380,000",
    beds: 5,
    baths: 5,
    area: "4,760 sqft",
    image:
      "https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2019,
    parking: "3-Car Garage",
    community: "North of Montana",
    lat: 34.0195,
    lng: -118.4912
  },
  {
    id: "la-004",
    title: "Hollywood Hills Glass Mansion",
    district: "Hollywood Hills, Los Angeles",
    price: "$9,200,000",
    beds: 6,
    baths: 6,
    area: "5,980 sqft",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2020,
    parking: "4-Car Garage",
    community: "Sunset Plaza",
    lat: 34.1177,
    lng: -118.352,
  },
  {
    id: "la-005",
    title: "Downtown LA Sky Residence",
    district: "Downtown, Los Angeles",
    price: "$3,450,000",
    beds: 3,
    baths: 3,
    area: "2,410 sqft",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2018,
    parking: "2 Reserved",
    community: "South Park District",
    lat: 34.0407,
    lng: -118.2468
  },
  {
    id: "la-006",
    title: "Pasadena Heritage Retreat",
    district: "Pasadena, Los Angeles",
    price: "$2,980,000",
    beds: 4,
    baths: 4,
    area: "3,260 sqft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2016,
    parking: "3-Car Garage",
    community: "Linda Vista",
    lat: 34.1478,
    lng: -118.1445
  },
  {
    id: "la-007",
    title: "Manhattan Beach Coastal Residence",
    district: "Manhattan Beach, Los Angeles",
    price: "$5,760,000",
    beds: 5,
    baths: 5,
    area: "4,180 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2021,
    parking: "3-Car Garage",
    community: "The Strand",
    lat: 33.8847,
    lng: -118.4109
  },
  {
    id: "la-008",
    title: "Silver Lake Design House",
    district: "Silver Lake, Los Angeles",
    price: "$2,260,000",
    beds: 4,
    baths: 3,
    area: "2,020 sqft",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80",
    yearBuilt: 2017,
    parking: "2-Car Garage",
    community: "Moreno Highlands",
    lat: 34.0925,
    lng: -118.2707
  }
];

const map = L.map("map").setView([34.0522, -118.2437], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const markers = [];
const listingGrid = document.getElementById("listingGrid");
const searchInput = document.getElementById("listingSearch");

const formatPopup = (listing) =>
  `<strong>${listing.title}</strong><br>${listing.district}<br><b>Total Price: ${listing.price}</b><br>${listing.beds} Beds · ${listing.baths} Baths · ${listing.area}`;

const createCard = (listing) => {
  const card = document.createElement("article");
  card.className = "listing-card";
  card.dataset.key = `${listing.title} ${listing.district}`.toLowerCase();
  card.innerHTML = `
    <img class="listing-thumb" src="${listing.image}" alt="${listing.title}">
    <div class="listing-body">
      <p class="listing-price">${listing.price}</p>
      <h3 class="listing-title">${listing.title}</h3>
      <div class="listing-meta">
        <p>地區：${listing.district}</p>
        <p>格局：${listing.beds} Beds / ${listing.baths} Baths</p>
        <p>面積：${listing.area}</p>
        <p>屋齡：Built ${listing.yearBuilt}</p>
        <p>車位：${listing.parking}</p>
        <p>社區：${listing.community}</p>
      </div>
      <button type="button" class="btn btn-solid card-btn">View on Map</button>
    </div>
  `;
  card.querySelector("button").addEventListener("click", () => {
    map.setView([listing.lat, listing.lng], 13);
    const target = markers.find((item) => item.id === listing.id);
    if (target) {
      target.marker.openPopup();
    }
  });
  return card;
};

listings.forEach((listing) => {
  const marker = L.marker([listing.lat, listing.lng]).addTo(map);
  marker.bindPopup(
    formatPopup(listing)
  );
  markers.push({ id: listing.id, marker, searchKey: `${listing.title} ${listing.district}`.toLowerCase() });

  if (listingGrid) {
    listingGrid.appendChild(createCard(listing));
  }
});

if (searchInput && listingGrid) {
  searchInput.addEventListener("input", (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const cards = listingGrid.querySelectorAll(".listing-card");

    cards.forEach((card) => {
      const isMatch = card.dataset.key.includes(keyword);
      card.style.display = isMatch ? "block" : "none";
    });

    markers.forEach((item) => {
      const isMatch = item.searchKey.includes(keyword);
      if (isMatch) {
        if (!map.hasLayer(item.marker)) {
          item.marker.addTo(map);
        }
      } else if (map.hasLayer(item.marker)) {
        map.removeLayer(item.marker);
      }
    });
  });
}
