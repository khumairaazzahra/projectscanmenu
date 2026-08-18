const menus = [
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Espresso",
    price: "5K",
    description: "Espresso, water & optional sugar",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Americano",
    price: "16K",
    description: "Espresso, water & optional sugar",
    image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Coffee Latte",
    price: "19K",
    description: "Espresso, full cream milk & optional sugar",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Susu Caramel",
    price: "22K",
    description: "Espresso, full cream milk & caramel syrup",
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Susu Vanilla",
    price: "22K",
    description: "Espresso, full cream milk & vanilla syrup",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Susu Mocha",
    price: "23K",
    description: "Espresso, full cream milk, chocolate & sugar",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Sea Salt Aren Latte",
    price: "25K",
    description: "Espresso, full cream milk, palm sugar & sea salt cream",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "coffee",
    categoryName: "Coffee",
    name: "Kopi Milo",
    price: "18K",
    description: "Espresso & Milo",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Coconut",
    price: "20K",
    description: "Espresso, coconut milk & sugar",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Gula Aren",
    price: "20K",
    description: "Espresso, full cream milk & palm sugar",
    image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Hazelnut",
    price: "22K",
    description: "Espresso, full cream milk & hazelnut syrup",
    image: "https://images.unsplash.com/photo-1593443320739-77f74939d0da?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "signature",
    categoryName: "Signature",
    name: "Kopi Susu Butterscotch",
    price: "22K",
    description: "Espresso, full cream milk & butterscotch syrup",
    image: "https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "refreshing",
    categoryName: "Refreshing",
    name: "Mango Breeze",
    price: "18K",
    description: "Mango syrup, soda, ice & basil seeds",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "refreshing",
    categoryName: "Refreshing",
    name: "Mango Fresh Mild",
    price: "19K",
    description: "Mango syrup, full cream milk, ice & basil seeds",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "noncoffee",
    categoryName: "Non Coffee",
    name: "Milo",
    price: "18K",
    description: "Milo & fresh milk",
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "noncoffee",
    categoryName: "Non Coffee",
    name: "Matcha Latte",
    price: "22K",
    description: "Matcha, fresh milk & ice",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "noncoffee",
    categoryName: "Non Coffee",
    name: "Chocolate Latte",
    price: "25K",
    description: "Chocolate, fresh milk & ice",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Tedar",
    price: "18K",
    description: "Nasi dengan lauk khas dan sambal",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi T eplok",
    price: "18K",
    description: "Nasi hangat dengan telur dan pelengkap",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Rebus",
    price: "18K",
    description: "Mie kuah gurih dengan topping pilihan",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Goreng",
    price: "18K",
    description: "Mie goreng gurih dengan sayuran",
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Becek",
    price: "20K",
    description: "Mie dengan kuah kental dan topping",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Mie Ngs",
    price: "20K",
    description: "Mie special dengan cita rasa gurih",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Goreng Kampung",
    price: "20K",
    description: "Nasi goreng kampung dengan telur",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "maincourse",
    categoryName: "Main Course",
    name: "Nasi Ayam Crispy",
    price: "20K",
    description: "Nasi, ayam crispy & sambal",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "snack",
    categoryName: "Snack",
    name: "French Fries",
    price: "15K",
    description: "Kentang goreng crispy",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "snack",
    categoryName: "Snack",
    name: "Martabak Mie",
    price: "15K",
    description: "Martabak mie gurih dan crispy",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=85"
  },
  {
    category: "snack",
    categoryName: "Snack",
    name: "Pempek",
    price: "15K",
    description: "Pempek dengan kuah cuko",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85"
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
      item.description.toLowerCase().includes(keyword) ||
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
        <p class="menu-desc">${item.description}</p>
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
  document.getElementById("modalDescription").textContent = item.description;
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
