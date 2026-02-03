// Translations Data
const translations = {
    ar: {
        home: "الرئيسية",
        home: "الرئيسية",
        nav_physical: "المنتجات العامة",
        nav_digital: "المنتجات الرقمية",
        about: "من نحن",
        hero_subtitle: "موسم جديد، أسلوب جديد",
        hero_title: "اكتشف الفرق في <br> كل تفصيل.",
        hero_desc: "تصاميم عصرية تجمع بين الراحة والفخامة لتناسب أسلوب حياتك المميز.",
        shop_now: "تسوق الآن",
        featured_products: "منتجات مميزة",
        products_subtitle: "اختياراتنا المفضلة لهذا الأسبوع",
        quality_title: "جودة عالية",
        quality_desc: "مواد فاخرة وتصنيع دقيق لضمان أفضل تجربة.",
        shipping_title: "شحن سريع",
        shipping_desc: "توصيل آمن وسريع لجميع المناطق.",
        payment_title: "دفع آمن",
        payment_desc: "وسائل دفع متعددة ومشفرة بالكامل.",
        footer_desc: "سوق نوفا: وجهتك الأولى للمنتجات الرقمية والواقعية.",
        links: "روابط",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        add_to_cart: "أضف للسلة",
        add: "إضافة",
        new: "جديد",
        top_bar_msg: "توصيل مجاني للطلبات التي تزيد عن 5000 دج 🚚 | دفع عند الاستلام",
        // Product Page
        order_form_title: "بيانات الشحن",
        order_form_subtitle: "يرجى ملء الاستمارة لتأكيد طلبك",
        label_name: "الاسم الكامل",
        label_phone: "رقم الهاتف",
        label_wilaya: "الولاية",
        label_baladiya: "البلدية",
        label_address: "العنوان بالتفصيل",
        select_wilaya: "اختر الولاية",
        select_baladiya: "اختر البلدية",
        total: "المجموع:",
        shipping_note: "+ مصاريف الشحن (تحدد بعد التأكيد)",
        confirm_btn: "تأكيد الطلب",
        processing: "جاري الطلب...",
        success_msg: "تم استلام طلبك بنجاح! سنتصل بك قريباً.",
        error_msg: "حدث خطأ، يرجى المحاولة مرة أخرى.",
        success_title: "لقد أتممت الطلب بنجاح",
        success_desc: "سيتم التواصل معك قريباً لتأكيد الطلب.",
        continue_shopping: "متابعة التسوق",
        other_products: "منتجات أخرى قد تعجبك",
        section_physical: "المنتجات العامة",
        section_digital: "المنتجات الرقمية",
        subtitle_physical: "إلكترونيات، إكسسوارات وغيرها",
        subtitle_digital: "كتب، دورات، وأدوات رقمية",
        promo_title: "عروض حصرية لفترة محدودة",
        promo_desc: "احصل على خصم 20% على جميع المنتجات الرقمية هذا الأسبوع.",
        newsletter_title: "اشترك في نشرتنا البريدية",
        newsletter_desc: "كن أول من يعرف عن المنتجات الجديدة والعروض الحصرية.",
        subscribe: "اشترك",
        cat_title: "تسوق حسب القسم",
        cat_electronics: "إلكترونيات",
        cat_audio: "صوتيات",
        cat_fashion: "موضة",
        cat_digital: "منتجات رقمية"
    },
    en: {
        home: "Home",
        nav_physical: "General Products",
        nav_digital: "Digital Products",
        about: "About",
        hero_subtitle: "New Season, New Style",
        hero_title: "Discover Difference <br> In Every Detail.",
        hero_desc: "Modern designs that blend comfort and luxury to suit your unique lifestyle.",
        shop_now: "Shop Now",
        featured_products: "Featured Products",
        products_subtitle: "Our Top Picks This Week",
        quality_title: "High Quality",
        quality_desc: "Premium materials and precise manufacturing.",
        shipping_title: "Fast Shipping",
        shipping_desc: "Secure and fast delivery to all regions.",
        payment_title: "Secure Payment",
        payment_desc: "Multiple fully encrypted payment methods.",
        footer_desc: "The leading store in modern fashion and elegance.",
        links: "Links",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        add_to_cart: "Add to Cart",
        cat_digital: "Digital Books",
        add: "Add",
        new: "New",
        top_bar_msg: "Free shipping on orders over 5000 DA 🚚 | Cash on Delivery",
        // Product Page
        order_form_title: "Shipping Info",
        order_form_subtitle: "Please fill the form to confirm order",
        label_name: "Full Name",
        label_phone: "Phone Number",
        label_wilaya: "State (Wilaya)",
        label_baladiya: "City (Baladiya)",
        label_address: "Full Address",
        select_wilaya: "Select State",
        select_baladiya: "Select City",
        total: "Total:",
        shipping_note: "+ Shipping fees (Calculated later)",
        confirm_btn: "Confirm Order",
        processing: "Ordering...",
        success_msg: "Order received! We will contact you soon.",
        error_msg: "An error occurred, please try again.",
        success_title: "Order Completed Successfully",
        success_desc: "We will contact you soon to confirm.",
        continue_shopping: "Continue Shopping",
        other_products: "Other Products You May Like",
        section_physical: "General Products",
        section_digital: "Digital Products",
        subtitle_physical: "Electronics, Accessories & More",
        subtitle_digital: "Books, Courses & Digital Tools",
        promo_title: "Exclusive Limited Time Offers",
        promo_desc: "Get 20% off all digital products this week.",
        newsletter_title: "Subscribe to our Newsletter",
        newsletter_desc: "Be the first to know about new products and offers.",
        subscribe: "Subscribe",
        cat_title: "Shop by Category",
        cat_electronics: "Electronics",
        cat_audio: "Audio",
        cat_fashion: "Fashion",
        cat_digital: "Digital"
    }
};

// Mock Product Data
// Mock Product Data
const products = [
    // General Products
    {
        id: 1,
        type: 'physical',
        title: { ar: "ساعة ذكية ألترا", en: "Smart Watch Ultra" },
        description: { ar: "ساعة ذكية متطورة بشاشة عالية الدقة...", en: "Advanced smart watch..." },
        category: { ar: "إلكترونيات", en: "Electronics" },
        benefits: { ar: "دقة عالية • بطارية قوية", en: "High Precision • Long Battery" },
        rating: 4.9,
        reviews: 240,
        price: "12,000 DA",
        oldPrice: "15,000 DA",
        priceValue: 12000,
        discount: 20,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        type: 'physical',
        title: { ar: "سماعات بلوتوث برو", en: "Wireless Earbuds Pro" },
        category: { ar: "صوتيات", en: "Audio" },
        benefits: { ar: "عزل ضوضاء • صوت محيطي", en: "Noise Cancel • Surround Sound" },
        rating: 4.8,
        reviews: 185,
        price: "6,500 DA",
        priceValue: 6500,
        image: "image1.jpg"
    },
    {
        id: 3,
        type: 'physical',
        title: { ar: "حقيبة لابتوب مقاومة للماء", en: "Waterproof Laptop Bag" },
        category: { ar: "حقائب", en: "Bags" },
        price: "4,200 DA",
        priceValue: 4200,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        type: 'physical',
        title: { ar: "ماوس جيمنج احترافي", en: "Pro Gaming Mouse" },
        category: { ar: "إلكترونيات", en: "Electronics" },
        price: "3,800 DA",
        priceValue: 3800,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    // Digital Products
    {
        id: 5,
        type: 'digital',
        title: { ar: "كتاب: تعلم البرمجة من الصفر", en: "E-Book: Learn Coding" },
        category: { ar: "منتجات رقمية", en: "Digital Products" },
        price: "1,500 DA",
        priceValue: 1500,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        type: 'digital',
        title: { ar: "اشتراك بريميم - سنة واحدة", en: "Premium Subscription - 1 Year" },
        category: { ar: "اشتراكات", en: "Subscriptions" },
        price: "8,000 DA",
        priceValue: 8000,
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        type: 'digital',
        title: { ar: "قالب وتصميم جاهز للمواقع", en: "Website Template Pack" },
        category: { ar: "منتجات رقمية", en: "Digital Products" },
        price: "3,000 DA",
        priceValue: 3000,
        image: "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        type: 'digital',
        title: { ar: "دورة التسويق الرقمي", en: "Digital Marketing Course" },
        category: { ar: "دورات", en: "Courses" },
        price: "12,000 DA",
        priceValue: 12000,
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Algerian Wilayas (1-58)
// Algerian Wilayas (1-58)
const wilayas = [
    "01 - أدرار", "02 - الشلف", "03 - الأغواط", "04 - أم البواقي", "05 - باتنة", "06 - بجاية", "07 - بسكرة", "08 - بشار",
    "09 - البليدة", "10 - البويرة", "11 - تمنراست", "12 - تبسة", "13 - تلمسان", "14 - تيارت", "15 - تيزي وزو", "16 - الجزائر",
    "17 - الجلفة", "18 - جيجل", "19 - سطيف", "20 - سعيدة", "21 - سكيكدة", "22 - سيدي بلعباس", "23 - عنابة", "24 - قالمة",
    "25 - قسنطينة", "26 - المدية", "27 - مستغانم", "28 - المسيلة", "29 - معسكر", "30 - ورقلة", "31 - وهران", "32 - البيض",
    "33 - إيليزي", "34 - برج بوعريريج", "35 - بومرداس", "36 - الطارف", "37 - تيندوف", "38 - تيسمسيلت", "39 - الوادي",
    "40 - خنشلة", "41 - سوق أهراس", "42 - تيبازة", "43 - ميلة", "44 - عين الدفلى", "45 - النعامة", "46 - عين تموشنت",
    "47 - غرداية", "48 - غليزان", "49 - تيميمون", "50 - برج باجي مختار", "51 - أولاد جلال", "52 - بني عباس",
    "53 - عين صالح", "54 - عين قزام", "55 - تقرت", "56 - جانت", "57 - المغير", "58 - المنيعة"
];

// State
let currentLang = localStorage.getItem('site_lang') || 'ar'; // Persist lang

// GOOGLE SHEETS URL (User to replace this)
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbw_2m4sVTqsLTQoUJHDWm69ai39Qn9NgC6vmliaVRg6vWalMlTIdP0PCge3eWAkqPbw/exec";

// DOM Elements & Routing
const isProductPage = window.location.pathname.includes('product.html');
const isSuccessPage = window.location.pathname.includes('success.html');

// Initialize
function init() {
    // Set initial lang from storage
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    if (isProductPage) {
        initProductPage();
    } else {
        // Home or Success Page
        renderProducts();

        // Lang Toggle Logic (Only on home for now in simple version, or global if header shared)
        const langToggleBtn = document.getElementById('lang-toggle');
        if (langToggleBtn) {
            langToggleBtn.addEventListener('click', toggleLanguage);
            updateLanguageUI();
        }
    }
}

// Language Logic
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('site_lang', currentLang);

    // Update HTML attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    updateLanguageUI();
    if (!isProductPage) renderProducts();
}

function updateLanguageUI() {
    const langToggleBtn = document.getElementById('lang-toggle');
    const langText = langToggleBtn ? langToggleBtn.querySelector('.lang-text') : null;

    if (langText) langText.textContent = currentLang === 'ar' ? 'EN' : 'عربي';

    // Update Interface Text
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (translations[currentLang][key].includes('<br>')) {
                el.innerHTML = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
}

// Helper: Format Price
function formatPrice(value) {
    if (currentLang === 'ar') {
        return value.toLocaleString('ar-DZ') + " د.ج";
    } else {
        return value.toLocaleString('en-US') + " DA";
    }
}

// Home: Product Rendering
function renderProducts() {
    // If we have separate containers (index.html), render separately
    const physicalGrid = document.getElementById('physical-grid');
    const digitalGrid = document.getElementById('digital-grid');

    // If only one grid exists (success page or old index), render all there
    const productGrid = document.getElementById('product-grid');

    if (physicalGrid && digitalGrid) {
        // Split Rendering
        physicalGrid.innerHTML = '';
        digitalGrid.innerHTML = '';

        products.forEach(product => {
            const card = createProductCard(product);
            if (product.type === 'physical') {
                physicalGrid.appendChild(card);
            } else {
                digitalGrid.appendChild(card);
            }
        });
    } else if (productGrid) {
        // Unified Rendering (Success Page)
        productGrid.innerHTML = '';
        products.forEach(product => {
            productGrid.appendChild(createProductCard(product));
        });
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const title = product.title[currentLang];
    const category = product.category[currentLang];
    const btnText = translations[currentLang].add_to_cart;
    const displayPrice = formatPrice(product.priceValue);
    const benefits = product.benefits ? product.benefits[currentLang] : (currentLang === 'ar' ? "جودة عالية • ضمان" : "High Quality • Warranty");
    const rating = product.rating || 4.5;
    const reviews = product.reviews || 50;

    card.innerHTML = `
        <div class="product-image-wrapper" onclick="goToProduct(${product.id})">
            <span class="badge-new">${translations[currentLang].new || 'NOUVEAU'}</span>
            ${product.discount ? `<span class="badge-discount">-${product.discount}%</span>` : ''}
            <img src="${product.image}" alt="${title}" class="product-image" loading="lazy">
            <button class="add-to-cart-btn-nutri" onclick="goToProduct(${product.id}); event.stopPropagation();">
                ${translations[currentLang].add_to_cart || 'AJOUTER AU PANIER'}
            </button>
        </div>
        <div class="product-info">
            <h3 class="product-title" onclick="goToProduct(${product.id})">${title}</h3>
            <div class="product-price">
                ${displayPrice}
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : ''}
            </div>
            <div class="product-rating-row">
                <span class="rating-score">${rating}</span>
                <div class="stars">
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                    <i class="ph-fill ph-star"></i>
                </div>
                <span class="review-count">${reviews} avis</span>
            </div>
        </div>
    `;
    return card;
}

// Redirect to Product Page
function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// Product Page Logic
function initProductPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);

    if (!product) {
        window.location.href = 'index.html'; // Fallback
        return;
    }

    // Render Product Data
    document.getElementById('main-product-img').src = product.image;
    document.getElementById('product-title').textContent = product.title[currentLang];
    document.getElementById('product-category').textContent = product.category[currentLang];
    document.getElementById('product-price').textContent = formatPrice(product.priceValue);
    document.getElementById('summary-total').textContent = formatPrice(product.priceValue);

    // Description (fallback if missing in old data)
    const desc = product.description ? product.description[currentLang] : (currentLang === 'ar' ? "وصف المنتج غير متوفر حالياً." : "No description available.");
    document.getElementById('product-description').textContent = desc;

    // Update Page Title
    document.title = `${product.title[currentLang]} | ${translations[currentLang].home}`;

    // Populate Wilayas
    const wilayaSelect = document.getElementById('wilaya');
    wilayas.forEach(wilaya => {
        const option = document.createElement('option');
        option.value = wilaya;
        option.textContent = wilaya;
        wilayaSelect.appendChild(option);
    });

    // Cascading Baladiya Dropdown
    const baladiyaSelect = document.getElementById('baladiya');

    wilayaSelect.addEventListener('change', function () {
        baladiyaSelect.innerHTML = `<option value="" disabled selected>${translations[currentLang].select_baladiya}</option>`;
        baladiyaSelect.disabled = false;

        const selectedWilaya = this.value; // e.g., "01 - Adrar"
        const cities = getBaladiyas(selectedWilaya); // from locations.js

        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            baladiyaSelect.appendChild(option);
        });
    });

    // Handle Form Submit
    document.getElementById('order-form').addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = translations[currentLang].processing;
        submitBtn.disabled = true;

        // Collect Data
        const formData = {
            product: product.title.en, // Save English title for consistency in sheet
            price: product.priceValue,
            name: document.getElementById('fullname').value,
            phone: document.getElementById('phone').value,
            wilaya: document.getElementById('wilaya').value,
            baladiya: document.getElementById('baladiya').value,
            address: document.getElementById('address').value,
            date: new Date().toLocaleString()
        };

        try {
            // Check if URL is configured
            if (SHEET_API_URL.includes("REPLACE")) {
                // If not configured, just mock success
                await new Promise(r => setTimeout(r, 1500));
                console.warn("Google Sheet URL not configured. Data:", formData);
                alert(translations[currentLang].success_msg + "\n(Note: Sheet URL not set)");
            } else {
                // Send to Sheet (no-cors mode usually for Forms, or normal if script handles options)
                await fetch(SHEET_API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                // Redirect to Success Page
                window.location.href = 'success.html';
            }
        } catch (error) {
            console.error('Error:', error);
            alert(translations[currentLang].error_msg);
        } finally {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });

    // Run Translation on page load
    updateLanguageUI();
}

// Make functions global
window.goToProduct = goToProduct;
window.toggleLanguage = toggleLanguage;

// Run
document.addEventListener('DOMContentLoaded', init);
