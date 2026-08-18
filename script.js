const menus = [
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Espresso",
    price: "5K",
    description: "Espresso, water & optional sugar",
    image: "assets/Espresso.jpe"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Americano",
    price: "16K",
    description: "Espresso, water & optional sugar",
    image: "assets/Americano.jpe"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Coffee Latte",
    price: "19K",
    description: "Espresso, full cream milk & optional sugar",
    image: "assets/Coffee Latte.jpe"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Susu Caramel",
    price: "22K",
    description: "Espresso, full cream milk & caramel syrup",
    image: "assets/Kopi Susu Caramel.jpe"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Susu Vanilla",
    price: "22K",
    description: "Espresso, full cream milk & vanilla syrup",
    image: "assets/Kopi Susu Vanila1.jpg"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Susu Mocha",
    price: "23K",
    description: "Espresso, full cream milk, chocolate & sugar",
    image: "assets/Kopi Susu Mocha.jpe"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Sea Salt Aren Latte",
    price: "25K",
    description: "Espresso, full cream milk, palm sugar & sea salt cream",
    image: "assets/Sea Salt Aren Latte.jpe"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Milo",
    price: "18K",
    description: "Espresso & Milo",
    image: "assets/Kopi Milo.jpe"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Coconut",
    price: "20K",
    description: "Espresso, coconut milk & sugar",
    image: "assets/Kopi Susu Coconut.jpe"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Gula Aren",
    price: "20K",
    description: "Espresso, full cream milk & palm sugar",
    image: "assets/Kopi Susu Gula Aren.jpe"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Hazelnut",
    price: "22K",
    description: "Espresso, full cream milk & hazelnut syrup",
    image: "assets/Kopi Susu Hazelnut.jpe"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Butterscotch",
    price: "22K",
    description: "Espresso, full cream milk & butterscotch syrup",
    image: "assets/Kopi Susu Butterscotch.jpe"
  },
  {
    category: "refreshing",
    categoryName: "Refreshing",
    name: "Mango Breeze",
    price: "18K",
    description: "Mango syrup, soda, ice & basil seeds",
    image: "assets/Mango Breeze.jpe"
  },
  {
    category: "refreshing",
    categoryName: "Refreshing",
    name: "Mango Fresh Mild",
    price: "19K",
    description: "Mango syrup, full cream milk, ice & basil seeds",
    image: "assets/Mango Fresh Mild.jpe"
  },
  {
    category: "noncoffee",
    categoryName: "Non Coffee",
    name: "Milo",
    price: "18K",
    description: "Milo & fresh milk",
    image: "assets/Milo.jpe"
  },
  {
    category: "noncoffee",
    categoryName: "Non Coffee",
    name: "Matcha Latte",
    price: "22K",
    description: "Matcha, fresh milk & ice",
    image: "assets/Matcha Latte.jpe"
  },
  {
    category: "noncoffee",
    categoryName: "Non Coffee",
    name: "Chocolate Latte",
    price: "25K",
    description: "Chocolate, fresh milk & ice",
    image: "assets/Chocolate Latte.jpe"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Tedar",
    price: "18K",
    image: "assets/Nasi Tedar"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Teplok",
    price: "18K",
    image: "assets/Nasi Teplok.jpe"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Rebus",
    price: "18K",
    image: "assets/Mie Rebus.jpe"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Goreng",
    price: "18K",
    image: "assets/Mie Goreng.jpe"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Becek",
    price: "20K",
    image: "assets/Mie Becek.webp"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "MieNas",
    price: "20K",
    image: "assets/Mie Nas.jpe"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Goreng Kampung",
    price: "20K",
    image: "assets/Nasi Goreng Kampung.jpe"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Ayam Crispy",
    price: "20K",
    image: "assets/Nasi Ayam Crispy.jpe"
  },
  {
    category: "snack",
    categoryName: "Snack",
    name: "French Fries",
    price: "15K",
    image: "assets/French Fries.jpe"
  },
  {
    category: "snack",
    categoryName: "Snack",
    name: "Martabak Mie",
    price: "15K",
    image: "assets/Martabak Mie.jpe"
  },
  {
    category: "snack",
    categoryName: "Snack",
    name: "Pempek",
    price: "15K",
    image: "assets/Pempek.jpe"
  }
];

const grid = document.getElementById("menuGrid");
const sectionTitle = document.getElementById("sectionTitle");
const itemCount = document.getElementById("itemCount");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

let activeCategory = "all";

const categoryLabels = {
  all: "All Menu",
  coffee: "Coffee",
  signature: "Signature",
  refreshing: "Refreshing",
  noncoffee: "Non Coffee",
  maincourse: "Main Course",
  snack: "Snack"
};

function renderMenus() {
  const keyword = searchInput.value.trim().toLowerCase();

  const filtered = menus.filter(item => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const searchMatch =
      item.name.toLowerCase().includes(keyword) ||
      (item.description || "").toLowerCase().includes(keyword) ||
      item.categoryName.toLowerCase().includes(keyword);
    return categoryMatch && searchMatch;
  });

  sectionTitle.textContent =
    activeCategory === "all"
      ? "All Menu"
      : categoryLabels[activeCategory];

  itemCount.textContent = `${filtered.length} item`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="empty">Menu yang kamu cari belum tersedia.</div>`;
    return;
  }

  grid.innerHTML = filtered.map((item, index) => `
  <article class="menu-card" data-index="${menus.indexOf(item)}">
    <img src="${item.image}" alt="${item.name}" loading="${index < 4 ? "eager" : "lazy"}">

    <div class="menu-info">
      <span class="menu-category">${item.categoryName}</span>
      <h3 class="menu-name">${item.name}</h3>

      ${item.description ? `<p class="menu-desc">${item.description}</p>` : ""}

      <div class="menu-bottom">
        <strong class="price">${item.price}</strong>
        <span class="detail-link">Detail →</span>
      </div>
    </div>
  </article>
`).join("");

  document.querySelectorAll(".menu-card").forEach(card => {
    card.addEventListener("click", () => openModal(Number(card.dataset.index)));
  });
}

function openModal(index) {
  const item = menus[index];

  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalImage").alt = item.name;
  document.getElementById("modalCategory").textContent = item.categoryName;
  document.getElementById("modalName").textContent = item.name;

  const modalDescription = document.getElementById("modalDescription");

  if (item.description) {
    modalDescription.textContent = item.description;
    modalDescription.style.display = "block";
  } else {
    modalDescription.textContent = "";
    modalDescription.style.display = "none";
  }

  document.getElementById("modalPrice").textContent = item.price;

  document.getElementById("detailModal").classList.add("show");
  document.getElementById("detailModal").setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("detailModal").classList.remove("show");
  document.getElementById("detailModal").setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderMenus();
    window.scrollTo({ top: document.querySelector(".menu-section").offsetTop - 15, behavior: "smooth" });
  });
});

searchInput.addEventListener("input", renderMenus);

document.querySelectorAll("[data-close='true']").forEach(el => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

renderMenus();
