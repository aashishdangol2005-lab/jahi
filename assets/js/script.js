// Products array (same as in original)
const products = [ /* ... full product list ... */ ];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Helper functions (saveCart, saveWishlist, updateCounters, addToCart, etc.)
// ... copy all functions from original script ...

// Global filter state for rudraksha page
let rudrakshaFilters = { mukhi: "", minPrice: 0, maxPrice: 20000, search: "" };

// Rendering functions for each page
function renderHomePage() { /* ... */ }
function renderRudrakshaPage() { /* ... */ }
function renderCategoryPage(category, title) { /* ... */ }
function renderKnowledgePage() { /* ... */ }

// Attach events and initialise based on current page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  if (path.includes('rudraksha.php')) {
    renderRudrakshaPage();
  } else if (path.includes('malas.php')) {
    renderCategoryPage('mala', 'Sacred Malas & Japa Beads');
  } else if (path.includes('yantras.php')) {
    renderCategoryPage('yantra', 'Divine Yantras for Prosperity');
  } else if (path.includes('accessories.php')) {
    renderCategoryPage('accessory', 'Rudraksha Accessories');
  } else if (path.includes('knowledge.php')) {
    renderKnowledgePage();
  } else {
    renderHomePage();
  }

  // Cart/wishlist event listeners
  document.getElementById('cartIcon').addEventListener('click', openCartDrawer);
  document.getElementById('wishlistIcon').addEventListener('click', openWishlistDrawer);
  document.querySelector('.close-cart').addEventListener('click', () => document.getElementById('cartDrawer').classList.remove('open'));
  document.querySelector('.close-wishlist').addEventListener('click', () => document.getElementById('wishlistDrawer').classList.remove('open'));
  document.getElementById('checkoutBtn').addEventListener('click', () => { /* checkout logic */ });
  document.querySelector('.close-checkout').addEventListener('click', () => { /* close modal */ });
  document.getElementById('checkoutForm').addEventListener('submit', (e) => { /* order placement */ });

  // Search button
  document.getElementById('searchBtn').addEventListener('click', () => {
    let term = document.getElementById('searchInput').value.trim();
    if (term) {
      // Redirect to rudraksha page with search term
      window.location.href = `rudraksha.php?search=${encodeURIComponent(term)}`;
    }
  });
  document.getElementById('searchInput').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') document.getElementById('searchBtn').click();
  });

  // If search parameter exists on rudraksha page, apply filter
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get('search');
  if (searchTerm && window.location.pathname.includes('rudraksha.php')) {
    rudrakshaFilters.search = searchTerm;
    renderRudrakshaPage();
  }
});

// Make functions global for inline event handlers (if any)
window.addToCart = addToCart;
window.toggleWishlist = toggleWishlist;