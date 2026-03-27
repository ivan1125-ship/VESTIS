/* ============================================================
   VESTIS — Premium Fashion E-Commerce
   script.js — Global JavaScript
   ============================================================ */

'use strict';

/* ── Product Data ────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Oversized Linen Shirt',
    category: 'men',
    price: 89,
    originalPrice: null,
    badge: 'New',
    description: 'Crafted from 100% premium Belgian linen, this oversized shirt drapes beautifully and softens with every wash. A wardrobe cornerstone designed for effortless elegance.',
    images: [ hoddie.jpg
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    unavailableSizes: [],
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: 'Wide-Leg Trousers',
    category: 'women',
    price: 120,
    originalPrice: null,
    badge: null,
    description: 'High-waisted wide-leg trousers in a fluid crepe fabric. The structured waistband and relaxed silhouette create a timeless proportion that elevates any top.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4e82?w=700&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80',
      'https://images.unsplash.com/photo-1560060141-b5e8c2d0f6c4?w=700&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    unavailableSizes: [],
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: 'Structured Tote Bag',
    category: 'accessories',
    price: 165,
    originalPrice: null,
    badge: 'New',
    description: 'Hand-stitched from full-grain vegetable-tanned leather, this tote deepens in character over time. Generous interior with suede lining and magnetic closure.',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=80'
    ],
    sizes: ['One Size'],
    unavailableSizes: [],
    rating: 4.9,
    reviews: 67
  },
  {
    id: 4,
    name: 'Classic Crewneck',
    category: 'men',
    price: 75,
    originalPrice: 110,
    badge: 'Sale',
    description: 'Knitted from an organic cotton-merino blend, this crewneck offers exceptional softness without sacrificing structure. A foundational piece in neutral sand.',
    images: [
      'https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=700&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=700&q=80',
      'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=700&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    unavailableSizes: ['XS'],
    rating: 4.6,
    reviews: 203
  },
  {
    id: 5,
    name: 'Tailored Blazer',
    category: 'women',
    price: 295,
    originalPrice: null,
    badge: null,
    description: 'Cut from a lightweight wool-silk blend, this single-button blazer is the definitive power piece. Fully canvassed for a precise fit that moves with the body.',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=80',
      'https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?w=700&q=80',
      'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=700&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    unavailableSizes: [],
    rating: 4.9,
    reviews: 56
  },
  {
    id: 6,
    name: 'Pleated Midi Skirt',
    category: 'women',
    price: 110,
    originalPrice: 145,
    badge: 'Sale',
    description: 'Fluid satin pleats catch and hold the light as you move. A precisely cut midi length with hidden zip closure and slight A-line flare for graceful movement.',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=700&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80',
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    unavailableSizes: [],
    rating: 4.7,
    reviews: 91
  },
  {
    id: 7,
    name: 'Relaxed Denim Jacket',
    category: 'men',
    price: 145,
    originalPrice: null,
    badge: null,
    description: 'Washed selvedge denim from a fourth-generation Japanese mill. The slightly relaxed fit and clean lines make this the most versatile outer layer you will ever own.',
    images: [
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=700&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=80',
      'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=700&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    unavailableSizes: ['XL'],
    rating: 4.8,
    reviews: 78
  },
  {
    id: 8,
    name: 'Ribbed Turtleneck',
    category: 'new',
    price: 85,
    originalPrice: null,
    badge: 'New',
    description: 'Dense rib-knit in a luxurious cashmere-cotton blend. The form-fitting turtleneck silhouette creates an elegant, streamlined look that transitions effortlessly from day to evening.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=80',
      'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=700&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    unavailableSizes: [],
    rating: 4.9,
    reviews: 42
  }
];

/* ── Cart Utilities ──────────────────────────────────────── */
const Cart = {
  KEY: 'vestis_cart',

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch {
      return [];
    }
  },

  save(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
  },

  add(productId, size, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;

    const cart = this.get();
    const key  = `${productId}-${size}`;
    const existing = cart.find(i => i.key === key);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        key,
        productId,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size,
        quantity
      });
    }

    this.save(cart);
    updateCartBadge();
    return true;
  },

  remove(key) {
    const cart = this.get().filter(i => i.key !== key);
    this.save(cart);
    updateCartBadge();
  },

  updateQty(key, quantity) {
    const cart = this.get();
    const item = cart.find(i => i.key === key);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.save(cart);
      updateCartBadge();
    }
  },

  total() {
    return this.get().reduce((sum, i) => sum + i.price * i.quantity, 0);
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.quantity, 0);
  },

  clear() {
    localStorage.removeItem(this.KEY);
    updateCartBadge();
  }
};

/* ── Badge Update ────────────────────────────────────────── */
function updateCartBadge() {
  const count = Cart.count();
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
  });
}

/* ── Toast Notification ──────────────────────────────────── */
function showToast(message, duration = 2800) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/* ── Navbar Scroll Effect ────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Menu ─────────────────────────────────────────── */
function initMobileMenu() {
  const toggle  = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  // Close when a link is clicked
  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Highlight active page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });
}

/* ── Product Card Builder ────────────────────────────────── */
function buildProductCard(product) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const badgeHTML = product.badge
    ? `<span class="product-badge ${product.badge.toLowerCase()}">${product.badge}</span>`
    : '';

  const priceHTML = hasDiscount
    ? `<span class="price-sale">$${product.price}</span>
       <span class="price-original">$${product.originalPrice}</span>`
    : `<span>$${product.price}</span>`;

  return `
    <article class="product-card fade-up" data-id="${product.id}" data-category="${product.category}">
      <a href="product.html?id=${product.id}" class="product-card-image">
        ${badgeHTML}
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <div class="product-card-overlay">
          <button class="btn quick-add" data-id="${product.id}">Quick Add</button>
          <a href="product.html?id=${product.id}" class="btn">View</a>
        </div>
      </a>
      <div class="product-card-info">
        <p class="product-card-category">${product.category}</p>
        <h3 class="product-card-name">
          <a href="product.html?id=${product.id}">${product.name}</a>
        </h3>
        <div class="product-card-price">${priceHTML}</div>
      </div>
    </article>
  `;
}

/* ── Scroll Reveal ───────────────────────────────────────── */
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${i * 0.07}s`;
        entry.target.classList.add('fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.product-card, .category-card, .value-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function initHomePage() {
  const featuredGrid = document.getElementById('featuredGrid');
  if (!featuredGrid) return;

  const featured = PRODUCTS.filter(p => [1, 5, 6, 8].includes(p.id));
  featuredGrid.innerHTML = featured.map(buildProductCard).join('');

  // Quick Add buttons
  featuredGrid.querySelectorAll('.quick-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const product = PRODUCTS.find(p => p.id === id);
      Cart.add(id, product.sizes[1] || product.sizes[0]);
      showToast(`${product.name} added to cart`);
    });
  });

  // Newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input.value && input.value.includes('@')) {
        showToast('Thank you for subscribing!');
        input.value = '';
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  }

  initScrollReveal();
}

/* ============================================================
   PRODUCTS PAGE
   ============================================================ */
function initProductsPage() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  let currentFilter = 'all';
  let currentSearch = '';

  function renderProducts() {
    let filtered = PRODUCTS.filter(p => {
      const matchCat = currentFilter === 'all' || p.category === currentFilter;
      const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          p.category.toLowerCase().includes(currentSearch.toLowerCase());
      return matchCat && matchSearch;
    });

    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results">
          <h3>No products found</h3>
          <p>Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(buildProductCard).join('');

    // Stagger animation
    grid.querySelectorAll('.product-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.animationDelay = `${i * 0.06}s`;
      requestAnimationFrame(() => card.classList.add('fade-up'));
    });

    // Quick Add
    grid.querySelectorAll('.quick-add').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const id = parseInt(btn.dataset.id);
        const product = PRODUCTS.find(p => p.id === id);
        Cart.add(id, product.sizes[1] || product.sizes[0]);
        showToast(`${product.name} added to cart`);
      });
    });
  }

  // Filter tabs
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderProducts();
    });
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        currentSearch = searchInput.value.trim();
        renderProducts();
      }, 280);
    });
  }

  renderProducts();
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
function initProductDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    document.querySelector('.product-detail')?.insertAdjacentHTML('afterbegin',
      '<p style="padding:80px;text-align:center;color:var(--mid)">Product not found. <a href="products.html" style="color:var(--gold)">Browse all products</a></p>'
    );
    return;
  }

  // Set page title
  document.title = `${product.name} — VESTIS`;

  // Breadcrumb
  const breadcrumbProduct = document.getElementById('breadcrumbProduct');
  if (breadcrumbProduct) breadcrumbProduct.textContent = product.name;

  // Category label
  const categoryLabel = document.getElementById('productCategory');
  if (categoryLabel) categoryLabel.textContent = product.category;

  // Product name
  const nameEl = document.getElementById('productName');
  if (nameEl) nameEl.textContent = product.name;

  // SKU
  const skuEl = document.getElementById('productSku');
  if (skuEl) skuEl.textContent = `SKU: VST-${String(product.id).padStart(4,'0')}`;

  // Price
  const priceEl = document.getElementById('productPrice');
  if (priceEl) {
    if (product.originalPrice) {
      priceEl.innerHTML = `
        <span class="price">$${product.price}</span>
        <span class="original">$${product.originalPrice}</span>
        <span class="discount-tag">${Math.round((1 - product.price/product.originalPrice)*100)}% Off</span>
      `;
    } else {
      priceEl.innerHTML = `<span class="price">$${product.price}</span>`;
    }
  }

  // Rating
  const ratingEl = document.getElementById('productRating');
  if (ratingEl) {
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    ratingEl.innerHTML = `
      <span class="stars">${'★'.repeat(5)}</span>
      <span class="rating-count">${product.rating} (${product.reviews} reviews)</span>
    `;
  }

  // Description
  const descEl = document.getElementById('productDescription');
  if (descEl) descEl.textContent = product.description;

  // Gallery
  const mainImg = document.getElementById('mainImage');
  const thumbsContainer = document.getElementById('galleryThumbs');

  if (mainImg) mainImg.src = product.images[0];
  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.images.map((src, i) => `
      <div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
        <img src="${src}" alt="${product.name} view ${i+1}" loading="lazy">
      </div>
    `).join('');

    thumbsContainer.querySelectorAll('.gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        const idx = parseInt(thumb.dataset.index);
        mainImg.src = product.images[idx];
        thumbsContainer.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  // Sizes
  const sizeContainer = document.getElementById('sizeOptions');
  let selectedSize = null;

  if (sizeContainer) {
    sizeContainer.innerHTML = product.sizes.map(size => {
      const unavailable = product.unavailableSizes.includes(size);
      return `<button class="size-btn ${unavailable ? 'unavailable' : ''}" 
                data-size="${size}" ${unavailable ? 'disabled' : ''}>${size}</button>`;
    }).join('');

    sizeContainer.querySelectorAll('.size-btn:not(.unavailable)').forEach(btn => {
      btn.addEventListener('click', () => {
        sizeContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.dataset.size;
      });
    });

    // Auto-select first available
    const firstAvailable = sizeContainer.querySelector('.size-btn:not(.unavailable)');
    if (firstAvailable) {
      firstAvailable.classList.add('selected');
      selectedSize = firstAvailable.dataset.size;
    }
  }

  // Quantity
  let qty = 1;
  const qtyDisplay = document.getElementById('qtyDisplay');
  const qtyPlus  = document.getElementById('qtyPlus');
  const qtyMinus = document.getElementById('qtyMinus');

  if (qtyPlus && qtyMinus && qtyDisplay) {
    qtyPlus.addEventListener('click', () => {
      qty = Math.min(10, qty + 1);
      qtyDisplay.value = qty;
    });
    qtyMinus.addEventListener('click', () => {
      qty = Math.max(1, qty - 1);
      qtyDisplay.value = qty;
    });
  }

  // Add to Cart
  const addToCartBtn = document.getElementById('addToCartBtn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      if (!selectedSize) { showToast('Please select a size'); return; }
      Cart.add(product.id, selectedSize, qty);
      showToast(`${product.name} (${selectedSize}) added to cart ✓`);
      addToCartBtn.textContent = 'Added ✓';
      addToCartBtn.style.background = 'var(--success)';
      addToCartBtn.style.borderColor = 'var(--success)';
      setTimeout(() => {
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.style.background = '';
        addToCartBtn.style.borderColor = '';
      }, 2000);
    });
  }

  // Buy Now
  const buyNowBtn = document.getElementById('buyNowBtn');
  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      if (!selectedSize) { showToast('Please select a size'); return; }
      Cart.add(product.id, selectedSize, qty);
      window.location.href = 'cart.html';
    });
  }
}

/* ============================================================
   CART PAGE
   ============================================================ */
function initCartPage() {
  const cartContainer = document.getElementById('cartContainer');
  if (!cartContainer) return;

  function renderCart() {
    const items = Cart.get();
    const summarySubtotal = document.getElementById('summarySubtotal');
    const summaryTotal    = document.getElementById('summaryTotal');
    const summaryShipping = document.getElementById('summaryShipping');
    const cartCountLabel  = document.getElementById('cartCountLabel');

    const total    = Cart.total();
    const shipping = total > 150 ? 0 : 12;
    const count    = Cart.count();

    if (cartCountLabel) {
      cartCountLabel.textContent = `${count} item${count !== 1 ? 's' : ''} in your cart`;
    }
    if (summarySubtotal) summarySubtotal.textContent = `$${total.toFixed(2)}`;
    if (summaryShipping) summaryShipping.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if (summaryTotal) summaryTotal.textContent = `$${(total + shipping).toFixed(2)}`;

    if (items.length === 0) {
      cartContainer.innerHTML = `
        <div class="empty-cart">
          <svg class="empty-cart-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <a href="products.html" class="btn btn-primary">Continue Shopping</a>
        </div>
      `;
      return;
    }

    cartContainer.innerHTML = `
      <div class="cart-items-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span></span>
      </div>
      ${items.map(item => `
        <div class="cart-item" data-key="${item.key}">
          <div class="cart-item-product">
            <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cart-item-details">
              <h4>${item.name}</h4>
              <p class="cart-item-meta">Size: ${item.size}</p>
            </div>
          </div>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-qty-control">
            <button class="cart-qty-btn qty-minus" data-key="${item.key}">−</button>
            <span class="cart-qty-display">${item.quantity}</span>
            <button class="cart-qty-btn qty-plus" data-key="${item.key}">+</button>
          </div>
          <button class="cart-remove" data-key="${item.key}" aria-label="Remove item">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4h6v2"/>
            </svg>
          </button>
        </div>
      `).join('')}
    `;

    // Remove buttons
    cartContainer.querySelectorAll('.cart-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        Cart.remove(btn.dataset.key);
        renderCart();
        showToast('Item removed from cart');
      });
    });

    // Qty plus
    cartContainer.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const key  = btn.dataset.key;
        const item = Cart.get().find(i => i.key === key);
        if (item) {
          Cart.updateQty(key, item.quantity + 1);
          renderCart();
        }
      });
    });

    // Qty minus
    cartContainer.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const key  = btn.dataset.key;
        const item = Cart.get().find(i => i.key === key);
        if (item) {
          if (item.quantity <= 1) {
            Cart.remove(key);
            showToast('Item removed from cart');
          } else {
            Cart.updateQty(key, item.quantity - 1);
          }
          renderCart();
        }
      });
    });
  }

  renderCart();

  // Promo code
  const promoBtn = document.getElementById('promoBtn');
  if (promoBtn) {
    promoBtn.addEventListener('click', () => {
      const input = document.getElementById('promoInput');
      if (input && input.value.trim().toUpperCase() === 'VESTIS10') {
        showToast('Promo code applied! 10% discount added.');
        input.value = 'VESTIS10 ✓';
        input.disabled = true;
        promoBtn.disabled = true;
      } else {
        showToast('Invalid promo code. Try VESTIS10!');
      }
    });
  }

  // Checkout
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (Cart.count() === 0) {
        showToast('Your cart is empty');
        return;
      }
      showToast('Redirecting to checkout… (demo)');
    });
  }
}

/* ============================================================
   CONTACT PAGE
   ============================================================ */
function initContactPage() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  function validateField(field) {
    const group = field.closest('.form-group');
    const errorEl = group.querySelector('.field-error');
    let valid = true;
    let message = '';

    if (!field.value.trim()) {
      valid = false;
      message = 'This field is required.';
    } else if (field.type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value.trim())) {
        valid = false;
        message = 'Please enter a valid email address.';
      }
    } else if (field.name === 'message' && field.value.trim().length < 10) {
      valid = false;
      message = 'Message must be at least 10 characters.';
    } else if (field.name === 'name' && field.value.trim().length < 2) {
      valid = false;
      message = 'Name must be at least 2 characters.';
    }

    group.classList.toggle('error', !valid);
    group.classList.toggle('success', valid);
    if (errorEl) errorEl.textContent = message;
    return valid;
  }

  // Live validation
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const fields = form.querySelectorAll('input[required], textarea[required]');
    let allValid = true;

    fields.forEach(field => {
      if (!validateField(field)) allValid = false;
    });

    if (allValid) {
      form.style.display = 'none';
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) successMsg.classList.add('visible');
    }
  });
}

/* ============================================================
   FOOTER NEWSLETTER (All pages)
   ============================================================ */
function initFooterNewsletter() {
  const footerForm = document.getElementById('footerNewsletter');
  if (!footerForm) return;

  footerForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = footerForm.querySelector('input');
    if (input && input.value.includes('@')) {
      showToast('Subscribed successfully!');
      input.value = '';
    } else {
      showToast('Please enter a valid email.');
    }
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  updateCartBadge();
  initFooterNewsletter();

  // Page-specific init
  const body = document.body;
  const page = window.location.pathname.split('/').pop();

  if (body.dataset.page === 'home'    || page === 'index.html'   || page === '') initHomePage();
  if (body.dataset.page === 'products'|| page === 'products.html')               initProductsPage();
  if (body.dataset.page === 'product' || page === 'product.html')                initProductDetailPage();
  if (body.dataset.page === 'cart'    || page === 'cart.html')                   initCartPage();
  if (body.dataset.page === 'contact' || page === 'contact.html')                initContactPage();
});
