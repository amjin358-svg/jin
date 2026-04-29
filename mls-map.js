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

const t = (key, fallback) => {
  if (window.SiteI18n && typeof window.SiteI18n.t === "function") {
    return window.SiteI18n.t(key, fallback);
  }
  return fallback;
};

const map = L.map("map").setView([34.0522, -118.2437], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const markers = [];
const listingGrid = document.getElementById("listingGrid");
const searchInput = document.getElementById("listingSearch");
const listingDetailModal = document.getElementById("listingDetailModal");
const detailImage = document.getElementById("detailImage");
const detailPrice = document.getElementById("detailPrice");
const detailTitle = document.getElementById("detailTitle");
const detailAddress = document.getElementById("detailAddress");
const detailHighlights = document.getElementById("detailHighlights");
const detailGrid = document.getElementById("detailGrid");
const detailDescription = document.getElementById("detailDescription");
const detailMapBtn = document.getElementById("detailMapBtn");
const detailContactBtn = document.getElementById("detailContactBtn");
let activeDetailId = null;
let filteredListings = listings;

const formatPopup = (listing) =>
  `<strong>${listing.title}</strong><br>${listing.district}<br><b>${t("totalPrice", "Total Price")}: ${listing.price}</b><br>${listing.beds} ${t("beds", "Beds")} · ${listing.baths} ${t("baths", "Baths")} · ${listing.area}`;

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
        <p>${t("districtLabel", "District")}: ${listing.district}</p>
        <p>${t("layoutLabel", "Layout")}: ${listing.beds} ${t("beds", "Beds")} / ${listing.baths} ${t("baths", "Baths")}</p>
        <p>${t("areaLabel", "Area")}: ${listing.area}</p>
        <p>${t("yearLabel", "Year")}: ${listing.yearBuilt}</p>
        <p>${t("parkingLabel", "Parking")}: ${listing.parking}</p>
        <p>${t("communityLabel", "Community")}: ${listing.community}</p>
      </div>
      <div class="listing-actions">
        <button type="button" class="btn btn-solid card-btn map-btn">${t("viewOnMap", "View on Map")}</button>
        <button type="button" class="btn btn-outline card-btn detail-btn">${t("viewDetails", "View Details")}</button>
      </div>
    </div>
  `;
  card.querySelector(".map-btn").addEventListener("click", () => {
    map.setView([listing.lat, listing.lng], 13);
    const target = markers.find((item) => item.id === listing.id);
    if (target) {
      target.marker.openPopup();
    }
  });
  card.querySelector(".detail-btn").addEventListener("click", () => openDetail(listing.id));
  card.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    openDetail(listing.id);
  });
  return card;
};

const syncMarkers = (visibleListings) => {
  markers.forEach((item) => {
    const isMatch = visibleListings.some((listing) => listing.id === item.id);
    if (isMatch) {
      if (!map.hasLayer(item.marker)) {
        item.marker.addTo(map);
      }
    } else if (map.hasLayer(item.marker)) {
      map.removeLayer(item.marker);
    }
  });
};

const renderCards = () => {
  if (!listingGrid) return;
  listingGrid.innerHTML = "";
  filteredListings.forEach((listing) => {
    listingGrid.appendChild(createCard(listing));
  });
};

const formatCurrencyValue = (priceText) => Number(priceText.replace(/[$,]/g, ""));

const renderDetail = (listing) => {
  if (!listingDetailModal) return;
  activeDetailId = listing.id;
  if (detailImage) {
    detailImage.src = listing.image;
    detailImage.alt = listing.title;
  }
  if (detailPrice) detailPrice.textContent = listing.price;
  if (detailTitle) detailTitle.textContent = listing.title;
  if (detailAddress) detailAddress.textContent = listing.district;
  if (detailHighlights) {
    detailHighlights.textContent = `${listing.beds} ${t("beds", "Beds")} · ${listing.baths} ${t("baths", "Baths")} · ${listing.area}`;
  }
  if (detailGrid) {
    const pricePerSqft = Math.round(formatCurrencyValue(listing.price) / Number(listing.area.replace(/[^\d]/g, "")));
    detailGrid.innerHTML = `
      <p><strong>${t("layoutLabel", "Layout")}:</strong> ${listing.beds} ${t("beds", "Beds")} / ${listing.baths} ${t("baths", "Baths")}</p>
      <p><strong>${t("areaLabel", "Area")}:</strong> ${listing.area}</p>
      <p><strong>${t("yearLabel", "Year")}:</strong> ${listing.yearBuilt}</p>
      <p><strong>${t("parkingLabel", "Parking")}:</strong> ${listing.parking}</p>
      <p><strong>${t("communityLabel", "Community")}:</strong> ${listing.community}</p>
      <p><strong>${t("propertyIdLabel", "Property ID")}:</strong> ${listing.id.toUpperCase()}</p>
      <p><strong>${t("statusLabel", "Status")}:</strong> ${t("statusActive", "Active")}</p>
      <p><strong>${t("pricePerSqft", "Price / sqft")}:</strong> $${pricePerSqft.toLocaleString()}</p>
      <p><strong>${t("estMortgageLabel", "Est. Mortgage")}:</strong> $${Math.round(formatCurrencyValue(listing.price) * 0.0049).toLocaleString()}/mo</p>
      <p><strong>${t("agentLabel", "Listing Agent")}:</strong> Olivia Chen</p>
    `;
  }
  if (detailDescription) {
    detailDescription.textContent = t(
      "detailNote",
      "Elegant turnkey residence with premium finishes, curated interiors, and strong long-term value potential."
    );
  }
  if (detailMapBtn) detailMapBtn.textContent = t("viewOnMap", "View on Map");
  if (detailContactBtn) detailContactBtn.textContent = t("contactAgent", "Contact Agent");
  listingDetailModal.classList.add("is-open");
  listingDetailModal.setAttribute("aria-hidden", "false");
};

const openDetail = (listingId) => {
  const listing = listings.find((item) => item.id === listingId);
  if (!listing) return;
  renderDetail(listing);
};

const closeDetail = () => {
  if (!listingDetailModal) return;
  listingDetailModal.classList.remove("is-open");
  listingDetailModal.setAttribute("aria-hidden", "true");
};

const applyFilter = (keyword) => {
  const normalizedKeyword = keyword.trim().toLowerCase();
  filteredListings = listings.filter((listing) =>
    `${listing.title} ${listing.district}`.toLowerCase().includes(normalizedKeyword)
  );
  renderCards();
  syncMarkers(filteredListings);
};

listings.forEach((listing) => {
  const marker = L.marker([listing.lat, listing.lng]).addTo(map);
  marker.bindPopup(
    formatPopup(listing)
  );
  markers.push({ id: listing.id, marker, searchKey: `${listing.title} ${listing.district}`.toLowerCase() });

});

renderCards();

if (searchInput && listingGrid) {
  searchInput.addEventListener("input", (event) => {
    applyFilter(event.target.value);
  });
}

window.addEventListener("site-language-changed", () => {
  markers.forEach((item) => {
    const listing = listings.find((entry) => entry.id === item.id);
    if (listing) {
      item.marker.setPopupContent(formatPopup(listing));
    }
  });
  renderCards();
  if (listingDetailModal && listingDetailModal.classList.contains("is-open")) {
    const openListing = listings.find((item) => item.id === activeDetailId);
    if (openListing) renderDetail(openListing);
  }
});

if (listingDetailModal) {
  listingDetailModal.addEventListener("click", (event) => {
    if (event.target instanceof HTMLElement && event.target.dataset.closeDetail === "1") {
      closeDetail();
    }
  });
}

if (detailMapBtn) {
  detailMapBtn.addEventListener("click", () => {
    const listing = listings.find((item) => item.id === activeDetailId);
    if (!listing) return;
    map.setView([listing.lat, listing.lng], 13);
    const target = markers.find((item) => item.id === listing.id);
    if (target) target.marker.openPopup();
  });
}
