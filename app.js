/* ═══════════════════════════════
   STRIDE — Store Logic
   ═══════════════════════════════ */

// ─────────── Products (prices in PKR) ───────────
const PRODUCTS = [
  {
    id: 1, name: "Air Falcon Ultra", cat: "sneakers", tag: "Best Seller",
    price: 14500, old: 18900, rating: 4.9, reviews: 312,
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=900&q=80&auto=format&fit=crop",
    desc: "Iconic silhouette with premium cushioned sole and suede-finish build. Built for all-day street wear."
  },
  {
    id: 2, name: "Cloud Runner Pro", cat: "running", tag: "New",
    price: 12900, old: null, rating: 4.8, reviews: 187,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=80&auto=format&fit=crop",
    desc: "Featherweight knit upper with energy-return foam midsole. Built for marathons against morning traffic."
  },
  {
    id: 3, name: "Sovereign Oxford", cat: "leather", tag: "Premium",
    price: 18900, old: 24500, rating: 4.9, reviews: 143,
    img: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&q=80&auto=format&fit=crop",
    desc: "Hand-finished genuine leather oxfords. Handmade sole with polished trim — the boardroom advantage."
  },
  {
    id: 4, name: "Velocity Flux 2", cat: "running",
    price: 11200, old: 14900, rating: 4.7, reviews: 201,
    img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&q=80&auto=format&fit=crop",
    desc: "High-responsive running shoe with breathable mesh and reinforced heel counter. Speed in every stride."
  },
  {
    id: 5, name: "Urban Court Classic", cat: "sneakers",
    price: 9800, old: null, rating: 4.6, reviews: 274,
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=900&q=80&auto=format&fit=crop",
    desc: "Timeless court sneaker in clean white leather. Goes with everything — literally everything."
  },
  {
    id: 6, name: "Midnight Drift", cat: "sneakers", tag: "Limited",
    price: 16200, old: null, rating: 4.9, reviews: 98,
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900&q=80&auto=format&fit=crop",
    desc: "Monochrome matte build with sculpted sole and contrast stitch. Limited units only."
  },
  {
    id: 7, name: "Regal Loafer Gold", cat: "leather",
    price: 15900, old: 19900, rating: 4.8, reviews: 121,
    img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80&auto=format&fit=crop",
    desc: "Penny loafer in soft-touch leather with gold-tone buckle detail. Comfort that closes deals."
  },
  {
    id: 8, name: "Trail Beast GTX", cat: "running",
    price: 13800, old: null,  rating: 4.7, reviews: 156,
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=900&q=80&auto=format&fit=crop",
    desc: "All-terrain grip, water-resistant shell, and ankle-lock support. Northern Pakistan is calling."
  },
  {
    id: 9, name: "Mono Blaze High", cat: "sneakers", tag: "Hot",
    price: 13400, old: null, rating: 4.8, reviews: 165,
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=900&q=80&auto=format&fit=crop",
    desc: "Bold high-top silhouette with mono-color finish and padded ankle collar. Pure attitude."
  },
  {
    id: 10, name: "Velvet Heel Noir", cat: "leather", tag: "Party",
    price: 17500, old: 22000, rating: 4.9, reviews: 87,
    img: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=900&q=80&auto=format&fit=crop",
    desc: "Sleek velvet-touch heel with a sculpted sole. Made for shaadi season and rooftop nights."
  },
  {
    id: 11, name: "Volt Sprint 5K", cat: "running",
    price: 10500, old: 13500, rating: 4.7, reviews: 190,
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=80&auto=format&fit=crop",
    desc: "Race-day responsiveness with a zero-drop feel. Your PB is about to be rewritten."
  },
  {
    id: 12, name: "Saffron Street 01", cat: "sneakers", tag: "Limited",
    price: 15500, old: 18000, rating: 4.9, reviews: 76,
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=900&q=80&auto=format&fit=crop",
    desc: "A tribute to desi street culture — saffron accents on premium tumbled leather. 100 units only."
  },
  {
    id: 13, name: "Whiteout Heritage", cat: "sneakers",
    price: 11900, old: null, rating: 4.6, reviews: 233,
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&q=80&auto=format&fit=crop",
    desc: "Crisp all-white heritage runner. Minimal, clean, endlessly wearable."
  },
  {
    id: 14, name: "Aero Glide X", cat: "running", tag: "New",
    price: 12700, old: null, rating: 4.8, reviews: 210,
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=900&q=80&auto=format&fit=crop",
    desc: "Next-gen aero foam with seamless flyknit upper. Feels like running on air — because it is."
  },
];

const SIZES = [39, 40, 41, 42, 43, 44];
const FREE_SHIP_LIMIT = 5000;
const SHIP_FEE = 350;

// ─────────── State ───────────
let cart = JSON.parse(localStorage.getItem("stride_cart") || "[]");
let activeFilter = "all";
let searchQuery = "";

// ─────────── Helpers ───────────
const $ = (s) => document.querySelector(s);
const fmt = (n) => "Rs. " + n.toLocaleString("en-PK");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function saveCart() {
  localStorage.setItem("stride_cart", JSON.stringify(cart));
  renderCart();
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("show"), 2200);
}

// ─────────── Render products ───────────
function renderProducts() {
  const grid = $("#productGrid");
  const q = searchQuery.toLowerCase();
  const list = PRODUCTS.filter(p =>
    (activeFilter === "all" || p.cat === activeFilter) &&
    (!q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q))
  );

  if (!list.length) {
    grid.innerHTML = `<div class="cart-empty" style="grid-column:1/-1"><span class="big">🔍</span><p>No shoes found. Try a different search.</p></div>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => `
    <article class="p-card" style="--i:${i}" data-id="${p.id}" data-open="1">
      <div class="p-img">
        <img src="${p.img}" alt="${esc(p.name)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80&auto=format&fit=crop'">
        ${p.tag ? `<span class="p-tag">${esc(p.tag)}</span>` : ""}
        <button class="p-wish" data-wish="${p.id}" onclick="event.stopPropagation()" aria-label="Wishlist">♡</button>
      </div>
      <div class="p-body">
        <span class="p-cat">${esc(p.cat)}</span>
        <h3 class="p-name">${esc(p.name)}</h3>
        <div class="p-rating">★ ${p.rating} <span>(${p.reviews})</span></div>
        <div class="p-foot">
          <div class="p-price">
            <small>${p.old ? fmt(p.old) : "&nbsp;"}</small>
            ${fmt(p.price)}
          </div>
          <button class="add-btn" data-add="${p.id}" onclick="event.stopPropagation()">＋ ADD</button>
        </div>
      </div>
    </article>`).join("");
}

// ─────────── Cart ───────────
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const found = cart.find(c => c.id === id);
  if (found) found.qty++;
  else cart.push({ id, qty: 1, size: null });
  saveCart();
  toast(`${p.name} added to cart 🛒`);
  bumpCart();
}

function bumpCart() {
  const c = $("#cartCount");
  c.classList.add("bump");
  setTimeout(() => c.classList.remove("bump"), 300);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart();
}

function cartTotals() {
  const subtotal = cart.reduce((s, c) => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return s + p.price * c.qty;
  }, 0);
  const ship = subtotal === 0 || subtotal >= FREE_SHIP_LIMIT ? 0 : SHIP_FEE;
  return { subtotal, ship, total: subtotal + ship };
}

function renderCart() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  $("#cartCount").textContent = count;
  $("#cartHeadCount").textContent = `(${count})`;

  const wrap = $("#cartItems");
  if (!cart.length) {
    wrap.innerHTML = `<div class="cart-empty"><span class="big">👟</span><p>Your cart is empty.<br>Time to treat your feet!</p></div>`;
  } else {
    wrap.innerHTML = cart.map(c => {
      const p = PRODUCTS.find(x => x.id === c.id);
      return `
      <div class="c-item">
        <img src="${p.img}" alt="${esc(p.name)}" onerror="this.src='https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&q=80&auto=format&fit=crop'">
        <div>
          <div class="ci-name">${esc(p.name)}</div>
          <div class="ci-size">${c.size ? "Size " + c.size : "Size: any"}</div>
          <div class="ci-qty">
            <button data-q="-1" data-id="${p.id}">−</button>
            <strong>${c.qty}</strong>
            <button data-q="1" data-id="${p.id}">＋</button>
          </div>
        </div>
        <div>
          <div class="ci-price"><small>${p.old ? fmt(p.old * c.qty) : ""}</small>${fmt(p.price * c.qty)}</div>
          <button class="ci-rm" data-rm="${p.id}" title="Remove">🗑</button>
        </div>
      </div>`;
    }).join("");
  }

  const { subtotal, ship, total } = cartTotals();
  $("#cartSubtotal").textContent = fmt(subtotal);
  const note = $("#shipNote");
  if (subtotal === 0) {
    note.textContent = "🚚 Add Rs. 5,000+ for free delivery";
    note.classList.remove("free");
  } else if (ship === 0) {
    note.textContent = "🎉 You've unlocked FREE delivery!";
    note.classList.add("free");
  } else {
    note.textContent = `🚚 Add ${fmt(FREE_SHIP_LIMIT - subtotal)} more for free delivery`;
    note.classList.remove("free");
  }
  $("#checkoutBtn").disabled = false;
  $("#checkoutBtn").textContent = "Checkout";
  // expose totals for checkout modal
  $("#checkoutBtn").dataset.total = total;
}

// ─────────── Product modal ───────────
let modalSize = null;
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  modalSize = null;
  const fallback = "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80&auto=format&fit=crop";
  $("#modalBox").innerHTML = `
    <button class="icon-btn modal-close" id="pmClose">✕</button>
    <div class="pm-grid">
      <img class="pm-img" src="${p.img}" alt="${esc(p.name)}" onerror="this.src='${fallback}'">
      <div class="pm-detail">
        <span class="p-cat">${esc(p.cat)}</span>
        <h3>${esc(p.name)}</h3>
        <div class="p-rating">★ ${p.rating} <span>(${p.reviews} reviews) · ${p.tag ? esc(p.tag) : "In stock"}</span></div>
        <div class="pm-price">${fmt(p.price)} ${p.old ? `<s style="font-size:1rem;color:var(--muted)">${fmt(p.old)}</s>` : ""}</div>
        <p class="pm-desc">${esc(p.desc)}</p>
        <p class="size-label">Select size (EU / PK)</p>
        <div class="size-row" id="sizeRow">
          ${SIZES.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join("")}
        </div>
        <p class="size-hint" id="sizeHint">⚠ Please choose a size first</p>
        <button class="btn btn-gold btn-block" id="pmAdd">Add to Cart — ${fmt(p.price)}</button>
      </div>
    </div>`;
  const modal = $("#productModal");
  modal.classList.add("show");
  document.getElementById("pmClose").onclick = () => modal.classList.remove("show");
  document.getElementById("sizeRow").onclick = (e) => {
    const b = e.target.closest(".size-btn");
    if (!b) return;
    document.querySelectorAll(".size-btn").forEach(x => x.classList.remove("sel"));
    b.classList.add("sel");
    modalSize = b.dataset.size;
    $("#sizeHint").classList.remove("show");
  };
  document.getElementById("pmAdd").onclick = () => {
    if (!modalSize) { $("#sizeHint").classList.add("show"); return; }
    const found = cart.find(c => c.id === p.id && c.size == modalSize);
    if (found) found.qty++;
    else cart.push({ id: p.id, qty: 1, size: modalSize });
    saveCart();
    modal.classList.remove("show");
    toast(`${p.name} (size ${modalSize}) added 🛒`);
    bumpCart();
  };
}

// ─────────── Checkout ───────────
function openCheckout() {
  if (!cart.length) { toast("Your cart is empty 🛒"); return; }
  const { subtotal, ship, total } = cartTotals();
  $("#ckSummary").innerHTML = `
    <div class="row"><span>Items (${cart.reduce((s, c) => s + c.qty, 0)})</span><span>${fmt(subtotal)}</span></div>
    <div class="row"><span>Delivery</span><span>${ship === 0 ? "FREE 🎉" : fmt(ship)}</span></div>
    <div class="row total"><span>Total (PKR)</span><span>${fmt(total)}</span></div>`;
  $("#checkoutModal").classList.add("show");
  closeCart();
}

const WHATSAPP_NUMBER = "923491144335"; // 0349-1144335 → international format

$("#checkoutForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const name = f[0].value.trim();
  const phone = f[1].value.trim();
  const addr = f[2].value.trim();
  const city = f[3].value;
  const items = cart.map(c => {
    const p = PRODUCTS.find(x => x.id === c.id);
    return `• ${p.name}${c.size ? " (Size " + c.size + ")" : ""} × ${c.qty} — ${fmt(p.price * c.qty)}`;
  }).join("\n");
  const d = cartTotals();
  const msg =
    `🛒 *New Order — STRIDE Store*\n\n` +
    `👤 Name: ${name}\n` +
    `📞 Phone: ${phone}\n` +
    `🏠 Address: ${addr}, ${city}\n\n` +
    `*Order Details:*\n${items}\n\n` +
    `🚚 Delivery: ${d.ship === 0 ? "FREE 🎉" : fmt(d.ship)}\n` +
    `💰 *Total: ${fmt(d.total)}* (Cash on Delivery)`;

  // open WhatsApp with the pre-filled order message
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");

  e.target.hidden = true;
  document.querySelector(".ck-title").textContent = "Order Placed!";
  document.querySelector(".ck-sub").hidden = true;
  const ok = $("#orderSuccess");
  ok.hidden = false;
  $("#orderMsg").textContent =
    `Thank you ${name.split(" ")[0]} 🎉 Your order is ready — WhatsApp should be opening with your order details. Just press SEND in that chat to confirm with us!`;
  cart = [];
  saveCart();
});

$("#successClose").addEventListener("click", () => {
  $("#checkoutModal").classList.remove("show");
  // reset form for next order
  const form = $("#checkoutForm");
  form.reset();
  form.hidden = false;
  document.querySelector(".ck-title").textContent = "Checkout";
  document.querySelector(".ck-sub").hidden = false;
  $("#orderSuccess").hidden = true;
});

// ─────────── UI wiring ───────────
const drawer = $("#cartDrawer");
const overlay = $("#overlay");

function openCart() {
  drawer.classList.add("open");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  drawer.classList.remove("open");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

$("#cartBtn").onclick = openCart;
$("#closeCart").onclick = closeCart;
overlay.onclick = closeCart;

$("#checkoutBtn").onclick = openCheckout;
$("#closeCheckout").onclick = () => $("#checkoutModal").classList.remove("show");
$("#checkoutModal").addEventListener("click", (e) => {
  if (e.target.id === "checkoutModal") $("#checkoutModal").classList.remove("show");
});

$("#productModal").addEventListener("click", (e) => {
  if (e.target.id === "productModal") $("#productModal").classList.remove("show");
});

// Global click delegation
document.addEventListener("click", (e) => {
  // qty buttons / remove in cart
  const q = e.target.closest("[data-q]");
  if (q) changeQty(+q.dataset.id, +q.dataset.q);
  const rm = e.target.closest("[data-rm]");
  if (rm) { changeQty(+rm.dataset.rm, -999); }
  const add = e.target.closest("[data-add]");
  if (add) { addToCart(+add.dataset.add); return; }
  const wish = e.target.closest("[data-wish]");
  if (wish) {
    wish.classList.toggle("active");
    wish.textContent = wish.classList.contains("active") ? "♥" : "♡";
    toast(wish.classList.contains("active") ? "Added to wishlist ♥" : "Removed from wishlist");
    return;
  }
  const open = e.target.closest('[data-open="1"]');
  if (open) { openProductModal(+open.dataset.id); return; }
});

// filters
$("#filterBar").onclick = (e) => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  activeFilter = chip.dataset.filter;
  renderProducts();
};

// collection cards jump + filter
document.querySelectorAll(".coll-card").forEach(card => {
  card.addEventListener("click", (e) => {
    activeFilter = card.dataset.jump;
    document.querySelectorAll(".chip").forEach(c =>
      c.classList.toggle("active", c.dataset.filter === activeFilter));
    renderProducts();
  });
});

// search
$("#searchBtn").onclick = () => {
  $("#searchWrap").classList.toggle("visible");
  if ($("#searchWrap").classList.contains("visible")) $("#searchInput").focus();
};
$("#searchInput").addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

// ESC closes everything
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    $("#productModal").classList.remove("show");
    $("#checkoutModal").classList.remove("show");
  }
});

// hamburger
$("#hamburger").onclick = () => {
  $("#navLinks").classList.toggle("open");
  $("#hamburger").classList.toggle("open");
};
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => {
    $("#navLinks").classList.remove("open");
    $("#hamburger").classList.remove("open");
  }));

// navbar scroll style
window.addEventListener("scroll", () => {
  $("#navbar").classList.toggle("scrolled", window.scrollY > 40);
});

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add("in"); });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ─────────── Boot ───────────
renderProducts();
renderCart();
