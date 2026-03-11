// Application State
class FirecrackerStore {
    constructor() {
        // Initialize data from provided JSON
        this.products = [
            {
                id: 1,
                name: "Sparklers",
                price: 50,
                category: "Firecrackers",
                unit: "piece",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='spark' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b35'/%3E%3Cstop offset='100%25' style='stop-color:%23f7931e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Ccircle cx='50' cy='50' r='30' fill='url(%23spark)'/%3E%3Cpath d='M30 20 L70 80 M70 20 L30 80 M20 50 L80 50 M50 20 L50 80' stroke='%23fff' stroke-width='2'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23fff' font-size='8'%3ESparklers%3C/text%3E%3C/svg%3E"
            },
            {
                id: 2,
                name: "Flower Pots",
                price: 30,
                category: "Firecrackers",
                unit: "piece",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='pot' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23e74c3c'/%3E%3Cstop offset='100%25' style='stop-color:%23c0392b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Cpath d='M35 70 L65 70 L60 85 L40 85 Z' fill='url(%23pot)'/%3E%3Ccircle cx='45' cy='40' r='3' fill='%23f39c12'/%3E%3Ccircle cx='55' cy='35' r='3' fill='%23e67e22'/%3E%3Ccircle cx='50' cy='25' r='3' fill='%23f1c40f'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23fff' font-size='8'%3EFlower Pots%3C/text%3E%3C/svg%3E"
            },
            {
                id: 3,
                name: "Rockets",
                price: 80,
                category: "Firecrackers",
                unit: "piece",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Cpath d='M45 20 L55 20 L55 70 L45 70 Z' fill='%234285f4'/%3E%3Cpath d='M40 15 L60 15 L50 5 Z' fill='%23ea4335'/%3E%3Cpath d='M40 70 L45 85 L50 70 L55 85 L60 70' fill='%23fbbc05'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23fff' font-size='8'%3ERockets%3C/text%3E%3C/svg%3E"
            },
            {
                id: 4,
                name: "Crackers Box",
                price: 200,
                category: "Firecrackers",
                unit: "piece",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Crect x='25' y='35' width='50' height='35' fill='%23e74c3c' rx='5'/%3E%3Crect x='30' y='40' width='40' height='25' fill='%23f39c12' rx='3'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='%23000' font-size='8'%3EBOX%3C/text%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23fff' font-size='8'%3ECrackers Box%3C/text%3E%3C/svg%3E"
            },
            {
                id: 5,
                name: "Tomatoes",
                price: 40,
                category: "Vegetables",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='tomato' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%23e55555'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Ccircle cx='50' cy='55' r='25' fill='url(%23tomato)'/%3E%3Cpath d='M40 30 Q50 25 60 30' fill='%2327ae60' stroke='%2327ae60' stroke-width='2'/%3E%3Cpath d='M45 30 L45 35 M55 30 L55 35' stroke='%2327ae60' stroke-width='2'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3ETomatoes%3C/text%3E%3C/svg%3E"
            },
            {
                id: 6,
                name: "Onions",
                price: 30,
                category: "Vegetables",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Cellipse cx='50' cy='55' rx='22' ry='25' fill='%23f4d03f'/%3E%3Cpath d='M50 30 Q45 25 50 20 Q55 25 50 30' fill='%23d68910'/%3E%3Cpath d='M35 50 Q50 45 65 50' fill='none' stroke='%23e67e22' stroke-width='1'/%3E%3Cpath d='M38 60 Q50 55 62 60' fill='none' stroke='%23e67e22' stroke-width='1'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3EOnions%3C/text%3E%3C/svg%3E"
            },
            {
                id: 7,
                name: "Carrots",
                price: 35,
                category: "Vegetables",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Cpath d='M50 25 Q45 30 40 45 Q45 65 50 75 Q55 65 60 45 Q55 30 50 25' fill='%23f39c12'/%3E%3Cpath d='M45 20 L45 30 M50 15 L50 30 M55 20 L55 30' stroke='%2327ae60' stroke-width='2'/%3E%3Cpath d='M42 35 Q50 30 58 35' fill='none' stroke='%23e67e22' stroke-width='1'/%3E%3Cpath d='M43 45 Q50 40 57 45' fill='none' stroke='%23e67e22' stroke-width='1'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3ECarrots%3C/text%3E%3C/svg%3E"
            },
            {
                id: 8,
                name: "Potatoes",
                price: 25,
                category: "Vegetables",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Cpath d='M50 35 Q35 40 30 55 Q35 70 50 65 Q65 70 70 55 Q65 40 50 35' fill='%23d4a574'/%3E%3Ccircle cx='45' cy='50' r='2' fill='%23b8956a'/%3E%3Ccircle cx='55' cy='45' r='2' fill='%23b8956a'/%3E%3Ccircle cx='52' cy='58' r='2' fill='%23b8956a'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3EPotatoes%3C/text%3E%3C/svg%3E"
            },
            {
                id: 9,
                name: "Apples",
                price: 120,
                category: "Fruits",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='apple' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ff6b6b'/%3E%3Cstop offset='100%25' style='stop-color:%23e55555'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Cpath d='M50 30 Q35 35 30 50 Q30 65 40 75 Q50 78 60 75 Q70 65 70 50 Q65 35 50 30' fill='url(%23apple)'/%3E%3Cpath d='M50 25 Q48 20 50 15' fill='none' stroke='%2327ae60' stroke-width='3'/%3E%3Cpath d='M52 20 Q58 18 60 25' fill='%2327ae60'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3EApples%3C/text%3E%3C/svg%3E"
            },
            {
                id: 10,
                name: "Oranges",
                price: 60,
                category: "Fruits",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='orange' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f39c12'/%3E%3Cstop offset='100%25' style='stop-color:%23e67e22'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Ccircle cx='50' cy='50' r='25' fill='url(%23orange)'/%3E%3Cpath d='M35 40 Q50 35 65 40' fill='none' stroke='%23d68910' stroke-width='1'/%3E%3Cpath d='M30 50 Q50 45 70 50' fill='none' stroke='%23d68910' stroke-width='1'/%3E%3Cpath d='M35 60 Q50 55 65 60' fill='none' stroke='%23d68910' stroke-width='1'/%3E%3Ccircle cx='50' cy='30' r='3' fill='%2327ae60'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3EOranges%3C/text%3E%3C/svg%3E"
            },
            {
                id: 11,
                name: "Bananas",
                price: 40,
                category: "Fruits",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Cpath d='M30 30 Q35 25 40 30 Q45 40 45 55 Q45 70 40 75 Q35 70 35 65 Q30 50 30 30' fill='%23f1c40f'/%3E%3Cpath d='M45 32 Q50 27 55 32 Q60 42 60 57 Q60 72 55 77 Q50 72 50 67 Q45 52 45 32' fill='%23f39c12'/%3E%3Cpath d='M60 35 Q65 30 70 35 Q75 45 75 60 Q75 75 70 80 Q65 75 65 70 Q60 55 60 35' fill='%23f1c40f'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3EBananas%3C/text%3E%3C/svg%3E"
            },
            {
                id: 12,
                name: "Mangoes",
                price: 80,
                category: "Fruits",
                unit: "kg",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='mango' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f1c40f'/%3E%3Cstop offset='50%25' style='stop-color:%23f39c12'/%3E%3Cstop offset='100%25' style='stop-color:%23e67e22'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Cpath d='M50 25 Q30 30 25 50 Q25 65 35 75 Q50 80 65 75 Q75 65 75 50 Q70 30 50 25' fill='url(%23mango)'/%3E%3Cpath d='M50 20 Q48 15 50 10' fill='none' stroke='%2327ae60' stroke-width='2'/%3E%3Ctext x='50' y='95' text-anchor='middle' fill='%23000' font-size='8'%3EMangoes%3C/text%3E%3C/svg%3E"
            }
        ];

        this.categories = ["All", "Firecrackers", "Vegetables", "Fruits"];
        this.cart = this.loadCart();
        this.currentFilter = "All";
        this.currentEditProduct = null;
        this.isAdminLoggedIn = this.checkAdminLogin();
        this.whatsappNumber = "919003356047";
        this.productQuantities = {}; // Track quantities for each product

        // Wait for DOM to be ready before initializing
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        this.loadTheme();
        this.bindEvents();
        this.renderProducts();
        this.updateCartDisplay();
        this.loadStoredProducts();
    }

    // Theme Management
    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
        this.showToast(`Switched to ${newTheme} mode`);
    }

    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }

    // Product Management
    renderProducts(productsToRender = null) {
        const productGrid = document.getElementById('productGrid');
        if (!productGrid) return;

        const products = productsToRender || this.getFilteredProducts();

        if (products.length === 0) {
            productGrid.innerHTML = `
                <div class="empty-state">
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }

        productGrid.innerHTML = products.map(product => {
            const quantity = this.productQuantities[product.id] || 1;
            return `
                <div class="product-card" data-category="${product.category}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3>${product.name}</h3>
                        <div class="product-price">₹${product.price}/${product.unit}</div>
                        <div class="product-actions">
                            <div class="quantity-controls">
                                <button class="qty-btn" data-product-id="${product.id}" data-action="decrease">-</button>
                                <span class="quantity-display" id="qty-${product.id}">${quantity}</span>
                                <button class="qty-btn" data-product-id="${product.id}" data-action="increase">+</button>
                            </div>
                            <button class="add-to-cart" data-product-id="${product.id}">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Rebind quantity control events
        this.bindQuantityControls();
        this.bindAddToCartButtons();
    }

    getFilteredProducts() {
        let filtered = this.currentFilter === 'All' 
            ? this.products 
            : this.products.filter(p => p.category === this.currentFilter);

        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        if (searchTerm) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.category.toLowerCase().includes(searchTerm)
            );
        }

        return filtered;
    }

    changeQuantity(productId, change) {
        const currentQty = this.productQuantities[productId] || 1;
        let newQty = currentQty + change;
        
        if (newQty < 1) newQty = 1;
        if (newQty > 99) newQty = 99;
        
        this.productQuantities[productId] = newQty;
        
        const qtyDisplay = document.getElementById(`qty-${productId}`);
        if (qtyDisplay) {
            qtyDisplay.textContent = newQty;
        }
    }

    // Cart Management
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const quantity = this.productQuantities[productId] || 1;
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.updateCartDisplay();
        this.showToast(`Added ${product.name} to cart`);
        
        // Reset quantity
        this.productQuantities[productId] = 1;
        const qtyDisplay = document.getElementById(`qty-${productId}`);
        if (qtyDisplay) {
            qtyDisplay.textContent = '1';
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
        this.renderCartItems();
        this.showToast('Item removed from cart');
    }

    updateCartQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCart();
            this.updateCartDisplay();
            this.renderCartItems();
        }
    }

    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartDisplay();
        this.renderCartItems();
        this.showToast('Cart cleared');
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        if (!cartCount) return;

        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    renderCartItems() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems || !cartTotal) return;

        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-state">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                </div>
            `;
            cartTotal.textContent = '0';
            return;
        }

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        cartItems.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">₹${item.price}/${item.unit} × ${item.quantity}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="qty-btn" data-cart-product-id="${item.id}" data-action="decrease">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="qty-btn" data-cart-product-id="${item.id}" data-action="increase">+</button>
                    </div>
                    <button class="remove-item" data-remove-id="${item.id}">✕</button>
                </div>
            </div>
        `).join('');

        cartTotal.textContent = total.toFixed(0);
        
        // Bind cart item events
        this.bindCartItemEvents();
    }

    // WhatsApp Integration
    orderViaWhatsApp() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is empty!');
            return;
        }

        const orderDetails = this.cart.map(item => 
            `${item.name} - ₹${item.price}/${item.unit} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(0)}`
        ).join('\n');

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const message = `🛒 *New Order from FireCracker & Fresh Store*\n\n` +
                       `📋 *Order Details:*\n${orderDetails}\n\n` +
                       `💰 *Total Amount: ₹${total.toFixed(0)}*\n\n` +
                       `📱 Please confirm this order and provide delivery details.`;

        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        this.showToast('Redirecting to WhatsApp...');
    }

    // Storage Management
    saveCart() {
        localStorage.setItem('firecrackerCart', JSON.stringify(this.cart));
    }

    loadCart() {
        const saved = localStorage.getItem('firecrackerCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveProducts() {
        localStorage.setItem('firecrackerProducts', JSON.stringify(this.products));
    }

    loadStoredProducts() {
        const saved = localStorage.getItem('firecrackerProducts');
        if (saved) {
            this.products = JSON.parse(saved);
            this.renderProducts();
        }
    }

    // Admin Management
    checkAdminLogin() {
        return localStorage.getItem('adminLoggedIn') === 'true';
    }

    adminLogin(password) {
        if (password === '007124') {
            this.isAdminLoggedIn = true;
            localStorage.setItem('adminLoggedIn', 'true');
            this.hideModal('adminModal');
            this.showModal('adminPanel');
            this.renderAdminProducts();
            this.showToast('Admin login successful');
            return true;
        } else {
            this.showToast('Invalid password');
            return false;
        }
    }

    adminLogout() {
        this.isAdminLoggedIn = false;
        localStorage.removeItem('adminLoggedIn');
        this.hideModal('adminPanel');
        this.showToast('Admin logged out');
    }

    addProduct(productData) {
        const newId = Math.max(...this.products.map(p => p.id)) + 1;
        const newProduct = {
            id: newId,
            ...productData
        };
        
        this.products.push(newProduct);
        this.saveProducts();
        this.renderProducts();
        this.renderAdminProducts();
        this.showToast('Product added successfully');
    }

    updateProduct(productId, productData) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...productData };
            this.saveProducts();
            this.renderProducts();
            this.renderAdminProducts();
            this.showToast('Product updated successfully');
        }
    }

    deleteProduct(productId) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.products = this.products.filter(p => p.id !== productId);
            this.cart = this.cart.filter(item => item.id !== productId);
            this.saveProducts();
            this.saveCart();
            this.renderProducts();
            this.renderAdminProducts();
            this.updateCartDisplay();
            this.showToast('Product deleted successfully');
        }
    }

    renderAdminProducts() {
        const adminProductList = document.getElementById('adminProductList');
        if (!adminProductList) return;
        
        adminProductList.innerHTML = this.products.map(product => `
            <div class="admin-product-item">
                <img src="${product.image}" alt="${product.name}" class="admin-product-image">
                <div class="admin-product-info">
                    <div class="admin-product-name">${product.name}</div>
                    <div class="admin-product-details">
                        ${product.category} - ₹${product.price}/${product.unit}
                    </div>
                </div>
                <div class="admin-product-actions">
                    <button class="edit-btn" data-edit-id="${product.id}">Edit</button>
                    <button class="delete-btn" data-delete-id="${product.id}">Delete</button>
                </div>
            </div>
        `).join('');

        // Bind admin product events
        this.bindAdminProductEvents();
    }

    editProduct(productId) {
        this.currentEditProduct = this.products.find(p => p.id === productId);
        if (!this.currentEditProduct) return;

        // Populate edit form
        const editForm = {
            name: document.getElementById('editProductName'),
            price: document.getElementById('editProductPrice'),
            category: document.getElementById('editProductCategory'),
            unit: document.getElementById('editProductUnit'),
            image: document.getElementById('editProductImage')
        };

        if (editForm.name) editForm.name.value = this.currentEditProduct.name;
        if (editForm.price) editForm.price.value = this.currentEditProduct.price;
        if (editForm.category) editForm.category.value = this.currentEditProduct.category;
        if (editForm.unit) editForm.unit.value = this.currentEditProduct.unit;
        if (editForm.image) editForm.image.value = this.currentEditProduct.image;

        this.showModal('editProductModal');
    }

    // UI Management
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        if (!cartSidebar) return;
        
        const isOpen = cartSidebar.classList.contains('open');
        
        if (isOpen) {
            cartSidebar.classList.remove('open');
            document.body.style.overflow = '';
        } else {
            cartSidebar.classList.add('open');
            this.renderCartItems();
            document.body.style.overflow = 'hidden';
        }
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        
        if (!toast || !toastMessage) return;
        
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    setFilter(category) {
        this.currentFilter = category;
        
        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        this.renderProducts();
    }

    switchTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === tabName + 'Tab');
        });
    }

    // Event Binding
    bindEvents() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', () => this.renderProducts());
        }

        // Cart toggle
        const cartToggle = document.getElementById('cartToggle');
        if (cartToggle) {
            cartToggle.addEventListener('click', () => this.toggleCart());
        }

        const closeCart = document.getElementById('closeCart');
        if (closeCart) {
            closeCart.addEventListener('click', () => this.toggleCart());
        }

        // Cart actions
        const clearCart = document.getElementById('clearCart');
        if (clearCart) {
            clearCart.addEventListener('click', () => this.clearCart());
        }

        const whatsappOrder = document.getElementById('whatsappOrder');
        if (whatsappOrder) {
            whatsappOrder.addEventListener('click', () => this.orderViaWhatsApp());
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setFilter(btn.dataset.category);
            });
        });

        // Admin functionality
        const adminBtn = document.getElementById('adminBtn');
        if (adminBtn) {
            adminBtn.addEventListener('click', () => {
                if (this.isAdminLoggedIn) {
                    this.showModal('adminPanel');
                    this.renderAdminProducts();
                } else {
                    this.showModal('adminModal');
                }
            });
        }

        // Modal close buttons
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) this.hideModal(modal.id);
            });
        });

        // Admin login form
        const adminLoginForm = document.getElementById('adminLoginForm');
        if (adminLoginForm) {
            adminLoginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const password = document.getElementById('adminPassword').value;
                this.adminLogin(password);
            });
        }

        // Admin logout
        const logoutAdmin = document.getElementById('logoutAdmin');
        if (logoutAdmin) {
            logoutAdmin.addEventListener('click', () => this.adminLogout());
        }

        // Admin tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.switchTab(btn.dataset.tab);
            });
        });

        // Add product form
        const addProductForm = document.getElementById('addProductForm');
        if (addProductForm) {
            addProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const productData = {
                    name: document.getElementById('productName').value,
                    price: parseInt(document.getElementById('productPrice').value),
                    category: document.getElementById('productCategory').value,
                    unit: document.getElementById('productUnit').value,
                    image: document.getElementById('productImage').value || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f8f9fa'/%3E%3Ctext x='50' y='50' text-anchor='middle' fill='%23000' font-size='12'%3E${document.getElementById('productName').value}%3C/text%3E%3C/svg%3E`
                };
                
                this.addProduct(productData);
                e.target.reset();
            });
        }

        // Edit product form
        const editProductForm = document.getElementById('editProductForm');
        if (editProductForm) {
            editProductForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                if (!this.currentEditProduct) return;
                
                const productData = {
                    name: document.getElementById('editProductName').value,
                    price: parseInt(document.getElementById('editProductPrice').value),
                    category: document.getElementById('editProductCategory').value,
                    unit: document.getElementById('editProductUnit').value,
                    image: document.getElementById('editProductImage').value
                };
                
                this.updateProduct(this.currentEditProduct.id, productData);
                this.hideModal('editProductModal');
                this.currentEditProduct = null;
            });
        }

        // Modal backdrop clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideModal(e.target.id);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    this.hideModal(openModal.id);
                } else if (document.getElementById('cartSidebar').classList.contains('open')) {
                    this.toggleCart();
                }
            }
        });
    }

    bindQuantityControls() {
        document.querySelectorAll('.qty-btn[data-product-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                const action = e.target.dataset.action;
                const change = action === 'increase' ? 1 : -1;
                this.changeQuantity(productId, change);
            });
        });
    }

    bindAddToCartButtons() {
        document.querySelectorAll('.add-to-cart[data-product-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId);
            });
        });
    }

    bindCartItemEvents() {
        // Cart quantity controls
        document.querySelectorAll('.qty-btn[data-cart-product-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.cartProductId);
                const action = e.target.dataset.action;
                const item = this.cart.find(item => item.id === productId);
                if (item) {
                    const change = action === 'increase' ? 1 : -1;
                    this.updateCartQuantity(productId, item.quantity + change);
                }
            });
        });

        // Remove item buttons
        document.querySelectorAll('.remove-item[data-remove-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.removeId);
                this.removeFromCart(productId);
            });
        });
    }

    bindAdminProductEvents() {
        // Edit buttons
        document.querySelectorAll('.edit-btn[data-edit-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.editId);
                this.editProduct(productId);
            });
        });

        // Delete buttons
        document.querySelectorAll('.delete-btn[data-delete-id]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.target.dataset.deleteId);
                this.deleteProduct(productId);
            });
        });
    }
}

// Initialize the application
const store = new FirecrackerStore();

// Make store globally available for debugging
window.store = store;
