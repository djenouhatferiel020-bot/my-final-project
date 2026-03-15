document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const state = {
    products: [],
    filtered: [],
    cart: [],
    wishlist: new Set(),
    view: "grid",
    swipeIndex: 0,
  };

  const yearEl = $("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function seedProducts() {
    const base = [
      {
        id: "watch-aurora",
        name: "BVLGARI x Chrome Heart",
        category: "watches",
        image: "images/chrome heart watch.jpg",
        metal: "silver",
        price: 349,
        originalPrice: 399,
        tag: "Spring",
        meta: "34 mm, pavé bezel, mesh strap",
      },
      {
        id: "watch-noir",
        name: "CHANEL Limited Rosé",
        category: "watches",
        image: "images/img1.jpg",
        metal: "gold",
        price: 399,
        originalPrice: 0,
        tag: "New",
        meta: "38 mm, black dial, crystal index",
      },
      {
        id: "watch-lumen",
        name: "PANTHÈRE DE CARTIER ",
        category: "watches",
        image: "images/img2.jpg",
        metal: "rose",
        price: 429,
        originalPrice: 0,
        tag: "Iconic",
        meta: "Rectangular case, crystal links",
      },
      {
        id: "watch-rhein",
        name: "Harry Winston L.E ",
        category: "watches",
        image: "images/img3.jpg",
        metal: "silver",
        price: 459,
        originalPrice: 499,
        tag: "Limited",
        meta: "Multi-dial, steel bracelet",
      },
      {
        id: "watch-licht",
        name: "PANTHÈRE Crash 18 ct ",
        category: "watches",
        image: "images/img4.jpg",
        metal: "gold",
        price: 299,
        originalPrice: 0,
        tag: "Essential",
        meta: "Slim profile, nude strap",
      },
      {
        id: "watch-metro",
        name: "Piaget Haute Couture ",
        category: "watches",
        image: "images/img5.jpg",
        metal: "silver",
        price: 379,
        originalPrice: 0,
        tag: "City",
        meta: "Crystal-set lugs, white dial",
      },
      {
        id: "necklace-vienna",
        name: "DIOR Diamond Delicat ",
        category: "necklaces",
        image: "images/img6.jpg",
        metal: "silver",
        price: 189,
        originalPrice: 0,
        tag: "New",
        meta: "Solitaire crystal, fine chain",
      },
      {
        id: "necklace-halo",
        name: "100,00 ct Riviera Tennis Necklace",
        category: "necklaces",
        image: "images/img7.jpg",
        metal: "gold",
        price: 219,
        originalPrice: 0,
        tag: "Layering",
        meta: "Two-layer, bezel-set stones",
      },
      {
        id: "necklace-licht",
        name: "Camellia Origani by CHANEL",
        category: "necklaces",
        image: "images/img8.jpg",
        metal: "rose",
        price: 199,
        originalPrice: 0,
        tag: "Everyday",
        meta: "Bar pendant, pave crystals",
      },
      {
        id: "necklace-orbit",
        name: "12_69 Ct Diamond Cuff Collar ",
        category: "necklaces",
        image: "images/img9.jpg",
        metal: "gold",
        price: 329,
        originalPrice: 0,
        tag: "Occasion",
        meta: "Oversized links, crystal accents",
      },
      {
        id: "necklace-berlin",
        name: "Haute Joaillerie The Snow Queen",
        category: "necklaces",
        image: "images/img10.jpg",
        metal: "silver",
        price: 169,
        originalPrice: 0,
        tag: "City",
        meta: "Mesh choker, crystal edge",
      },
      {
        id: "necklace-echo",
        name: "PANTHÈRE Cartier Choker 20ct",
        category: "necklaces",
        image: "images/img11.jpg",
        metal: "rose",
        price: 209,
        originalPrice: 0,
        tag: "Fine",
        meta: "Drop pendant, round stones",
      },
      {
        id: "ring-signet",
        name: "Bound Together -Stephen Webster 18k",
        category: "rings",
        image: "images/img12.jpg",
        metal: "gold",
        price: 149,
        originalPrice: 0,
        tag: "Stack",
        meta: "Oval face, pavé top",
      },
      {
        id: "ring-solitaire",
        name: "Designer CHANEL",
        category: "rings",
        image: "images/img13.jpg",
        metal: "silver",
        price: 179,
        originalPrice: 0,
        tag: "Iconic",
        meta: "Round crystal, slim band",
      },
      {
        id: "ring-band",
        name: "Butterfly Diamonds",
        category: "rings",
        image: "images/img14.jpg",
        metal: "rose",
        price: 129,
        originalPrice: 0,
        tag: "Stack",
        meta: "Full pavé, low profile",
      },
      {
        id: "ring-orbit",
        name: "Toi & Moi",
        category: "rings",
        image: "images/img15.jpg",
        metal: "gold",
        price: 199,
        originalPrice: 229,
        tag: "Evening",
        meta: "Oversized stone, halo",
      },
      {
        id: "ring-grid",
        name: "Cartier Emerald and Diamond 'PANTHÈRE' ",
        category: "rings",
        image: "images/img16.jpg",
        metal: "silver",
        price: 159,
        originalPrice: 0,
        tag: "Architect",
        meta: "Openwork metal, crystals",
      },
      {
        id: "ring-duo",
        name: "BVLGARI Twist",
        category: "rings",
        image: "images/img17.jpg",
        metal: "rose",
        price: 189,
        originalPrice: 0,
        tag: "Set",
        meta: "Two rings, mix & match",
      },
      {
        id: "bracelet-link",
        name: "Tiffany & Co Gourmette",
        category: "bracelets",
        image: "images/img18.jpg",
        metal: "gold",
        price: 159,
        originalPrice: 0,
        tag: "New",
        meta: "Polished links, crystal bar",
      },
      {
        id: "bracelet-tennis",
        name: "Au 750 HERMES",
        category: "bracelets",
        image: "images/img19.jpg",
        metal: "silver",
        price: 229,
        originalPrice: 259,
        tag: "Iconic",
        meta: "Full crystal line, clasp",
      },
      {
        id: "bracelet-tennis",
        name: "ONorth-South Pear Sequenced Diamod",
        category: "bracelets",
        image: "images/img20.jpg",
        metal: "rose",
        price: 189,
        originalPrice: 0,
        tag: "Sculpted",
        meta: "Open cuff, crystal tips",
      },
      {
        id: "bracelet-chain",
        name: "Rare Double Rangée De Diamants Roses",
        category: "bracelets",
        image: "images/img21.jpg",
        metal: "gold",
        price: 199,
        originalPrice: 0,
        tag: "Layering",
        meta: "Three chains, mixed textures",
      },
      {
        id: "bracelet-minimal",
        name: "Diana M_ Diamoda 45,00 ct",
        category: "bracelets",
        image: "images/img22.jpg",
        metal: "silver",
        price: 129,
        originalPrice: 0,
        tag: "Everyday",
        meta: "Fine chain, crystal bar",
      },
      {
        id: "bracelet-ribbon",
        name: "Sapphire Amendina",
        image: "images/img23.jpg",
        category: "bracelets",
        metal: "rose",
        price: 149,
        originalPrice: 0,
        tag: "Soft",
        meta: "Wrap design, pavé center",
      },
      {
        id: "set",
        name: "sapphire Drako",
        category: "set",
        image: "images/img24.jpg",
        metal: "silver",
        price: 529,
        originalPrice: 579,
        tag: "Set",
        meta: "Crystal watch with pendant",
      },
      {
        id: "watch",
        name: "Van Cleef temps",
        category: "watch",
        image: "images/imgg.jpg",
        metal: "gold",
        price: 389,
        originalPrice: 0,
        tag: "Gift",
        meta: "Matching pieces, box",
      },
      {
        id: "bracelet",
        name: "BVLGARI Serpenti Viper twist",
        category: "bracelets",
        image: "images/img25.jpg",
        metal: "rose",
        price: 349,
        originalPrice: 0,
        tag: "Set",
        meta: "Coordinated silhouettes",
      },
      {
        id: "set-stack",
        name: "Joséphine by Chaumet",
        category: "rings",
        image: "images/img26.jpg",
        metal: "mixed",
        price: 199,
        originalPrice: 0,
        tag: "Trio",
        meta: "Gold, silver, rose mix",
      },
      {
        id: "set-bracelet-duo",
        name: "Diamond Tennis Bracelet",
        category: "bracelets",
        image: "images/img27.jpg",
        metal: "mixed",
        price: 249,
        originalPrice: 0,
        tag: "Duo",
        meta: "Two textures to mix",
      },
      {
        id: "watch",
        name: "Octagon Crystaline",
        category: "watches",
        image: "images/img28.jpg",
        metal: "rose",
        price: 319,
        originalPrice: 0,
        tag: "Petite",
        meta: "28 mm case, crystal dial",
      },
      {
        id: "necklace-drop",
        name: "BVLGARI Serpenti",
        category: "necklaces",
        image: "images/img29.jpg",
        metal: "silver",
        price: 179,
        originalPrice: 0,
        tag: "Fine",
        meta: "Teardrop pendant, chain",
      },
      {
        id: "ring",
        name: " Matrix Bague ",
        category: "rings",
        image: "images/img30.jpg",
        metal: "gold",
        price: 169,
        originalPrice: 0,
        tag: "Stack",
        meta: "Double band, pavé line",
      },
      {
        id: "bracelet-chain-fine",
        name: "floral croisé",
        category: "bracelets",
        image: "images/img31.jpg",
        metal: "silver",
        price: 119,
        originalPrice: 0,
        tag: "Essential",
        meta: "Delicate chain, charm",
      },
      {
        id: "necklace",
        name: "Diamondia Open Choker",
        category: "necklaces",
        image: "images/img32.jpg",
        metal: "gold",
        price: 489,
        originalPrice: 0,
        tag: "Atelier",
        meta: "Hand-set stones, satin strap",
      },
    ];
    state.products = base.slice(0, 35);
  }

  // Allow overriding product images from hidden HTML section in index.html
  function applyImageOverridesFromDOM() {
    const nodes = document.querySelectorAll("[data-product-image][data-src]");
    nodes.forEach((node) => {
      const id = node.getAttribute("data-product-image");
      const src = node.getAttribute("data-src");
      if (!id || !src || src === "#") return;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.image = src;
      }
    });
  }

  function restoreWishlist() {
    try {
      const raw = sessionStorage.getItem("volska_wishlist");
      if (!raw) return;
      state.wishlist = new Set(JSON.parse(raw));
    } catch {
      state.wishlist = new Set();
    }
  }

  function persistWishlist() {
    sessionStorage.setItem(
      "volska_wishlist",
      JSON.stringify(Array.from(state.wishlist)),
    );
  }

  function applyFilters() {
    const searchInput = $("search-input");
    const q = (searchInput?.value || "").trim().toLowerCase();
    const category = ($("filter-category")?.value || "all").toLowerCase();
    const metal = ($("filter-metal")?.value || "all").toLowerCase();
    const maxPrice = Number($("filter-price")?.value || 999);

    let items = [...state.products];

    if (q) {
      items = items.filter((p) =>
        `${p.name} ${p.meta}`.toLowerCase().includes(q),
      );
    }
    if (category !== "all") {
      items = items.filter((p) => p.category === category);
    }
    if (metal !== "all") {
      items = items.filter((p) => p.metal === metal);
    }
    items = items.filter((p) => p.price <= maxPrice);

    const sort = $("sort-select")?.value || "featured";
    if (sort === "price-asc") {
      items.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      items.sort((a, b) => b.price - a.price);
    }

    state.filtered = items;
    const count = $("catalog-count");
    if (count) count.textContent = `${items.length} pieces`;
    state.swipeIndex = 0;
    renderProducts();
  }

  function renderProducts() {
    const grid = $("products-grid");
    const swipeContainer = $("swipe-item-container");
    const swipeIndicator = $("swipe-indicator");
    if (!grid || !swipeContainer || !swipeIndicator) return;

    grid.innerHTML = "";
    swipeContainer.innerHTML = "";
    swipeIndicator.innerHTML = "";

    state.filtered.forEach((p, index) => {
      const card = document.createElement("article");
      card.className = "product-card fade-in";
      card.dataset.id = p.id;
      const mediaBg = p.image
        ? `style="background-image:url('${p.image}');background-size:cover;background-position:center;"`
        : "";
      card.innerHTML = `
        <div class="product-media" ${mediaBg}>
          <span class="product-tag">${p.tag}</span>
          <button class="wishlist-button ${
            state.wishlist.has(p.id) ? "is-active" : ""
          }" data-id="${p.id}" aria-label="Add to wishlist"></button>
        </div>
        <div class="product-info">
          <h3 class="product-name">${p.name}</h3>
          <p class="product-meta">${p.meta}</p>
          <div class="product-price-row">
            <span class="product-price">$${p.price}</span>
            ${
              p.originalPrice
                ? `<span class="product-price-original">$${p.originalPrice}</span>`
                : ""
            }
          </div>
        </div>
        <div class="product-actions">
          <button class="btn-primary" data-action="add" data-id="${p.id}">
            Add to Cart
          </button>
          <button class="btn-ghost" data-action="quick" data-id="${p.id}">
            Quick View
          </button>
        </div>
      `;
      grid.appendChild(card);

      const swipeCard = card.cloneNode(true);
      swipeCard.classList.remove("fade-in");
      swipeCard.classList.add("swipe-card");
      swipeContainer.appendChild(swipeCard);

      const dot = document.createElement("span");
      if (index === state.swipeIndex) dot.classList.add("is-active");
      swipeIndicator.appendChild(dot);
    });

    updateSwipePosition();
    attachFadeIn();
  }

  function updateSwipePosition() {
    const swipeContainer = $("swipe-item-container");
    const swipeIndicator = $("swipe-indicator");
    if (!swipeContainer || !swipeIndicator) return;

    const total = state.filtered.length || 1;
    if (state.swipeIndex >= total) state.swipeIndex = 0;
    if (state.swipeIndex < 0) state.swipeIndex = total - 1;

    const offset = -state.swipeIndex * 100;
    swipeContainer.style.transform = `translateX(${offset}%)`;
    Array.from(swipeIndicator.children).forEach((dot, i) => {
      dot.classList.toggle("is-active", i === state.swipeIndex);
    });
  }

  function addToCart(id) {
    const product = state.products.find((p) => p.id === id);
    if (!product) return;
    const existing = state.cart.find((c) => c.id === id);
    if (existing) existing.qty += 1;
    else state.cart.push({ ...product, qty: 1 });
    updateCartBadge();
    renderCart();
  }

  function updateCartBadge() {
    const countEl = $("cart-count");
    const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
    if (countEl) countEl.textContent = String(count);
  }

  function renderCart() {
    const list = $("cart-items");
    const empty = $("cart-empty");
    const totalEl = $("cart-total");
    if (!list || !empty || !totalEl) return;

    list.innerHTML = "";
    if (!state.cart.length) {
      empty.style.display = "block";
      totalEl.textContent = "$0";
      return;
    }

    empty.style.display = "none";
    let total = 0;
    state.cart.forEach((item) => {
      total += item.price * item.qty;
      const li = document.createElement("li");
      li.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
          <div>
            <div style="font-size:.85rem;font-weight:500;">${item.name}</div>
            <div style="font-size:.8rem;color:#777;">Qty ${item.qty}</div>
          </div>
          <div style="font-size:.88rem;">$${item.price * item.qty}</div>
        </div>
      `;
      list.appendChild(li);
    });
    totalEl.textContent = `$${total}`;
  }

  function openCart() {
    const drawer = $("cart-drawer");
    if (!drawer) return;
    drawer.classList.add("is-open");
  }

  function closeCart() {
    const drawer = $("cart-drawer");
    if (!drawer) return;
    drawer.classList.remove("is-open");
  }

  function openQuickView(id) {
    const product = state.products.find((p) => p.id === id);
    const modal = $("quickview-modal");
    if (!product || !modal) return;

    $("quickview-title").textContent = product.name;
    $("quickview-category").textContent =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);
    $("quickview-price").textContent = `$${product.price}`;
    $("quickview-meta").textContent = product.meta;
    modal.dataset.id = product.id;
    modal.classList.add("is-open");
  }

  function closeQuickView() {
    const modal = $("quickview-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.dataset.id = "";
  }

  function toggleWishlist(id) {
    if (state.wishlist.has(id)) state.wishlist.delete(id);
    else state.wishlist.add(id);
    persistWishlist();
    applyFilters();
  }

  function setView(view) {
    state.view = view;
    const gridBtn = $("grid-view-btn");
    const listBtn = $("list-view-btn");
    if (gridBtn && listBtn) {
      gridBtn.classList.toggle("is-active", view === "grid");
      listBtn.classList.toggle("is-active", view === "list");
    }
    const grid = $("products-grid");
    const swipe = $("products-swipe");
    if (grid) grid.style.display = view === "grid" ? "grid" : "none";
    if (swipe) swipe.classList.toggle("is-active", view === "list");
  }

  function openCheckout() {
    const modal = $("checkout-modal");
    if (!modal) return;
    modal.classList.add("is-open");
  }

  function closeCheckout() {
    const modal = $("checkout-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
  }

  function attachFadeIn() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  }

  seedProducts();
  applyImageOverridesFromDOM();
  restoreWishlist();
  applyFilters();
  setView("grid");
  updateCartBadge();
  renderCart();

  // Smooth scroll buttons
  document.querySelectorAll("[data-scroll-to]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const target = e.currentTarget.getAttribute("data-scroll-to");
      if (target)
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }),
  );

  // Top bar categories (All, Watches, Necklaces, Rings, Bracelets and hero/featured buttons)
  function setCategoryAndScroll(category) {
    const select = $("filter-category");
    if (select) {
      select.value = category;
    }
    applyFilters();
    document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth" });
  }

  document
    .querySelectorAll("[data-filter-category]")
    .forEach((btn) =>
      btn.addEventListener("click", () =>
        setCategoryAndScroll(btn.getAttribute("data-filter-category") || "all"),
      ),
    );

  // Make search pill clickable
  const searchWrapper = document.querySelector(".search");
  const searchInput = $("search-input");
  const searchButton = $("search-button");
  if (searchWrapper && searchInput) {
    searchWrapper.addEventListener("click", (e) => {
      if (e.target === searchButton) return;
      searchInput.focus();
    });
  }
  if (searchButton && searchInput) {
    searchButton.addEventListener("click", applyFilters);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") applyFilters();
    });
  }

  // Brand click → scroll to top
  const brandHome = $("brand-home");
  if (brandHome) {
    brandHome.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Grid / swipe toggle
  const gridBtn = $("grid-view-btn");
  const listBtn = $("list-view-btn");
  if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => setView("grid"));
    listBtn.addEventListener("click", () => setView("list"));
  }

  // Swipe navigation
  const swipePrev = $("swipe-prev");
  const swipeNext = $("swipe-next");
  if (swipePrev && swipeNext) {
    swipePrev.addEventListener("click", () => {
      state.swipeIndex -= 1;
      updateSwipePosition();
    });
    swipeNext.addEventListener("click", () => {
      state.swipeIndex += 1;
      updateSwipePosition();
    });
  }

  // Grid + swipe card interactions
  const grid = $("products-grid");
  const swipeContainer = $("swipe-item-container");
  function delegateProductClick(container) {
    if (!container) return;
    container.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      const id = btn.dataset.id;
      if (!id) return;
      if (btn.dataset.action === "add") addToCart(id);
      if (btn.dataset.action === "quick") openQuickView(id);
      if (btn.classList.contains("wishlist-button")) toggleWishlist(id);
    });
  }
  delegateProductClick(grid);
  delegateProductClick(swipeContainer);

  // Cart and checkout
  const cartBtn = $("cart-button");
  const cartClose = $("cart-close");
  if (cartBtn) cartBtn.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);

  const checkoutBtn = $("checkout-button");
  const checkoutClose = $("checkout-close");
  const checkoutConfirm = $("checkout-confirm");
  if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckout);
  if (checkoutClose) checkoutClose.addEventListener("click", closeCheckout);
  if (checkoutConfirm)
    checkoutConfirm.addEventListener("click", () => {
      state.cart = [];
      updateCartBadge();
      renderCart();
      closeCart();
      closeCheckout();
    });

  // Quickview buttons and overlay
  const quickClose = $("quickview-close");
  const quickModal = $("quickview-modal");
  if (quickClose) quickClose.addEventListener("click", closeQuickView);
  if (quickModal) {
    quickModal.addEventListener("click", (e) => {
      if (e.target === quickModal) closeQuickView();
    });
  }
  const quickAdd = $("quickview-add");
  const quickWish = $("quickview-wishlist");
  if (quickAdd)
    quickAdd.addEventListener("click", () => {
      const modal = $("quickview-modal");
      const id = modal?.dataset.id;
      if (id) addToCart(id);
    });
  if (quickWish)
    quickWish.addEventListener("click", () => {
      const modal = $("quickview-modal");
      const id = modal?.dataset.id;
      if (id) toggleWishlist(id);
    });

  // Hero carousel
  const heroSlides = document.querySelectorAll(".hero-slide");
  const dotsContainer = $("hero-dots");
  let heroIndex = 0;

  function updateHero() {
    heroSlides.forEach((slide, i) =>
      slide.classList.toggle("is-active", i === heroIndex),
    );
    if (!dotsContainer) return;
    Array.from(dotsContainer.children).forEach((dot, i) =>
      dot.classList.toggle("is-active", i === heroIndex),
    );
  }

  if (heroSlides.length && dotsContainer) {
    heroSlides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.addEventListener("click", () => {
        heroIndex = idx;
        updateHero();
      });
      dotsContainer.appendChild(dot);
    });

    const prev = document.querySelector(".hero-prev");
    const next = document.querySelector(".hero-next");
    if (prev)
      prev.addEventListener("click", () => {
        heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
        updateHero();
      });
    if (next)
      next.addEventListener("click", () => {
        heroIndex = (heroIndex + 1) % heroSlides.length;
        updateHero();
      });

    updateHero();
    setInterval(() => {
      heroIndex = (heroIndex + 1) % heroSlides.length;
      updateHero();
    }, 8000);
  }
});
