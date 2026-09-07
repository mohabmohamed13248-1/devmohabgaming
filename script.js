    (function(){
        const PRODUCTS = [
            { id:'s1', cat:'games', name:'FIVEM', desc:'اكونت فايف ام تقدر تلعب جميع السيرفرات انتا وصحابك ', price:{EGP:80,USD:1.5}, img:'https://logos-world.net/wp-content/uploads/2021/03/FiveM-Symbol.png', badge:'مميز' },
            { id:'s2', cat:'games', name:'FC 26', desc:'حساب جديد فول اكسس بايميلك وهيبقى ملكك 100% المنصه ستيم FC 26', price:{EGP:180,USD:3.5}, img:'https://gaming-cdn.com/images/products/19774/orig/ea-sports-fc-26-xbox-one-xbox-series-x-s-microsoft-store-cover.jpg?v=1780558468', badge:'عرض' },
            { id:'s3', cat:'games', name:'RUST', price:{EGP:450,USD:10}, img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1781536981', badge:'جديد' },
            { id:'s4', cat:'games', name:'Minecraft Java and Bedrock', desc:'حساب جديد فول اكسس بايميلك وهيبقى ملكك 100% المنصه ستيم Minecraft', price:{EGP:600,USD:12}, img:'https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Minecraft_JavaBedrock_Net_1170x500.jpg', badge:'مميز' },
            { id:'s5', cat:'games', name:'Red Dead Redemption 2', desc:'حساب جديد فول اكسس بايميلك وهيبقى ملكك 100% المنصه ستيم Red Dead Redemption 2 هي لعبة أكشن ومغامرات من إنتاج Rockstar', price:{EGP:600,USD:12}, img:'https://gaming-cdn.com/images/products/5653/616x353/red-dead-redemption-2-ultimate-edition-ultimate-edition-pc-spiel-rockstar-cover.jpg?v=1745571744.png', badge:'عرض' },
            { id:'s6', cat:'games', name:'Euro Truck Simulator 2 + American Truck Simulator', desc:'جفت على حسابك الشخصي Euro Truck Simulator 2 هي لعبة محاكاة قيادة الشاحنات حيث يتحكم اللاعب بشاحنة وينقل ب', price:{EGP:280,USD:5.50}, img:'https://hb.imgix.net/b97f3ac93ee3a50326525f92052cf9ccaf664d4a.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=cc6aa824d667c016f1e278be77f1fa22.png', badge:'عرض' },
            { id:'s7', cat:'games', name:'Assetto Corsa', desc:'حساب جديد فول اكسس بايميلك وهيبقى ملكك 100% المنصه ستيم Assetto Corsa', price:{EGP:250,USD:4.50}, img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/244210/header.jpg?t=1782208838.png', badge:'مميز' },
            { id:'s8', cat:'games', name:'CarX Drift Racing Online', desc:'حساب جديد فول اكسس CarX Drift Racing Online بتقدّم تجربة درفت واقعية بعربيات قابلة للتعديل بالكامل وفيزياء دقيقة. تنافس ', price:{EGP:200,USD:4}, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzprDxXSfmlHc-UC8ombb1scNa6SSWBJAUDA&s.png', badge:'الأكثر مبيعاً' },
            { id:'s9', cat:'games', name:'Need for Speed™ Heat', desc:'حساب فل اكسس لعبة سباقات عالم مفتوح على PC وConsole من سلسلة Need for Speed الشهيرة، تركز على سباقات الشوا', price:{EGP:250,USD:4.50}, img:'https://image.api.playstation.com/vulcan/ap/rnd/202210/3121/XemhVDBuAEVrQXUkJF57ZsdX.jpg', badge:'عرض' },
            { id:'s10', cat:'games', name:'Battlefield™ 2042', desc:'حساب جديد فول اكسس بايميلك وهيبقى ملكك 100%', price:{EGP:120,USD:2.20}, img:'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1517290/capsule_616x353.jpg?t=1777324359.png', badge:'جديد' },
            { id:'s11', cat:'games', name:'The Crew 2', desc:'The Crew 2 هي لعبة سباق صدرت عام 2018، تم تطويرها بواسطة Ubisoft Ivory Tower', price:{EGP:200,USD:4.00}, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlVL53ThO34gRtRLl9f5mPZ6oRyi3CnTZ7g&s.png', badge:'جديد' },
            { id:'s12', cat:'games', name:'Battlefield 4', desc:'Battlefield 4 لعبة تصويب حرب حديثة من منظور الشخص الأول، تركز على معارك ضخمة في بيئات قابلة للتدمير واستخدام مركبات أرضية وجوية', price:{EGP:150,USD:3.00}, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTArRuXXQDyofo_jly6pdQJwAAW4g9zmTwhzw&s.png', badge:'مميز' }
        ];
        const CATEGORIES = [
            {id:'all', name:'الكل', icon:'fa-th'},
            {id:'games', name:'ألعاب وبطاقات', icon:'fa-gamepad'},
            {id:'accessories', name:'إكسسوارات', icon:'fa-headset'},
            {id:'software', name:'برامج', icon:'fa-code'},
            {id:'subscriptions', name:'اشتراكات', icon:'fa-tv'}
        ];
        const PROMOS = { 'MG310': 0.10, 'MG320': 0.20, 'WELCOME': 0.15 };

        let cart = JSON.parse(localStorage.getItem('mg3store_cart')||'[]');
        let currentCat = 'all';
        let priceMax = 5000;
        let currency = 'EGP';
        let appliedPromo = null;

        const fmt = (n) => currency === 'EGP' ? `${n} ج.م` : `$${n}`;
        const saveCart = () => localStorage.setItem('angel2games_cart', JSON.stringify(cart));

        function renderCategories(){
            const wrap = document.getElementById('storeCategoryFilters');
            if(!wrap) return;
            wrap.innerHTML = CATEGORIES.map(c => `
                <button class="mg-chip ${currentCat===c.id?'active':''}" onclick="window.__storeSetCat('${c.id}')">
                    <i class="fas ${c.icon}"></i> ${c.name}
                </button>
            `).join('');
        }

        // deterministic small "discount" so cards feel like the reference store
        function _disc(id){ let h=0; for(const ch of id) h=(h*31+ch.charCodeAt(0))|0; return 5 + Math.abs(h)%20; }

        function renderProducts(){
            const grid = document.getElementById('storeProductsGrid');
            if(!grid) return;
            const items = PRODUCTS.filter(p => (currentCat==='all'||p.cat===currentCat) && p.price[currency] <= priceMax);
            if(items.length===0){ grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:#94a3b8; font-size:1.1rem; padding:3rem;">لا توجد منتجات مطابقة</p>'; return; }
            grid.innerHTML = items.map(p => {
                const d = _disc(p.id);
                const newPrice = p.price[currency];
                const oldPrice = currency==='USD' ? (newPrice/(1-d/100)).toFixed(2) : Math.round(newPrice/(1-d/100));
                const save = currency==='USD' ? (oldPrice-newPrice).toFixed(2) : (oldPrice-newPrice);
                return `
                <div class="mg-prod-card">
                    <div class="mg-prod-media" style="background-image:url('${p.img}');">
                        <span class="mg-prod-discount">${d}% <i class="fas fa-bolt"></i></span>
                        <span class="mg-prod-save">وفر ${save}</span>
                        <span class="mg-prod-tag">${p.badge||'منتج'}</span>
                    </div>
                    <div class="mg-prod-body">
                        <div class="mg-prod-stars"><small>5.0</small>★★★★★</div>
                        <h3 class="mg-prod-name">${p.name}</h3>
                        <p class="mg-prod-desc">${p.desc}</p>
                        <div class="mg-prod-foot">
                            <button class="mg-prod-cart" onclick="window.__storeAdd('${p.id}')" aria-label="أضف للعربة">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                            <div class="mg-prod-prices">
                                <span class="mg-prod-old">${fmt(oldPrice)}</span>
                                <span class="mg-prod-new">${fmt(newPrice)}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
            }).join('');
        }

        // Mystery box stub (floating action)
        window.openMysteryBox = window.openMysteryBox || function(){
            const rewards = ['خصم 10%','خصم 15%','بطاقة هدية','شحن مجاني','منتج عشوائي','مفاجأة كبرى'];
            const r = rewards[Math.floor(Math.random()*rewards.length)];
            if(typeof showToast==='function') showToast('🎁 ربحت: '+r, 'success');
            else alert('🎁 ربحت: '+r);
        };



        function updateCartBadge(){
            const b = document.getElementById('cartCountBadge');
            if(b) b.textContent = cart.reduce((s,i)=>s+i.qty,0);
        }

        function renderCart(){
            const list = document.getElementById('cartItemsList');
            const sum = document.getElementById('cartSummary');
            if(!list) return;
            if(cart.length===0){
                list.innerHTML = '<p style="text-align:center; color:var(--text-light); padding:2rem;"><i class="fas fa-shopping-basket" style="font-size:3rem; display:block; margin-bottom:1rem; color: var(--primary-light);"></i>العربة فارغة</p>';
                sum.innerHTML='';
                document.getElementById('checkoutBtn').style.display='none';
                return;
            }
            document.getElementById('checkoutBtn').style.display='block';
            list.innerHTML = cart.map(ci => {
                const p = PRODUCTS.find(x=>x.id===ci.id); if(!p) return '';
                return `<div style="display:flex; gap:1rem; align-items:center; padding:0.8rem; border-bottom:1px solid var(--primary-ultra-light);">
                    <img src="${p.img}" style="width:60px; height:60px; object-fit:contain; background: var(--primary-ultra-light); border-radius:8px; padding:5px;">
                    <div style="flex:1;">
                        <div style="font-weight:800; color: var(--primary-dark);">${p.name}</div>
                        <div style="color: var(--primary-color); font-weight:700;">${fmt(p.price[currency])}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.4rem;">
                        <button onclick="window.__storeQty('${p.id}',-1)" style="background:var(--danger-color); color:white; border:none; width:28px; height:28px; border-radius:50%; cursor:pointer;">-</button>
                        <span style="font-weight:800; min-width:24px; text-align:center;">${ci.qty}</span>
                        <button onclick="window.__storeQty('${p.id}',1)" style="background:var(--success-color); color:white; border:none; width:28px; height:28px; border-radius:50%; cursor:pointer;">+</button>
                        <button onclick="window.__storeRemove('${p.id}')" style="background:transparent; color:var(--danger-color); border:none; cursor:pointer; margin-right:0.5rem;"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
            }).join('');
            const subtotal = cart.reduce((s,ci)=>{ const p=PRODUCTS.find(x=>x.id===ci.id); return s + (p?p.price[currency]*ci.qty:0); },0);
            const discount = appliedPromo ? subtotal * PROMOS[appliedPromo] : 0;
            const total = subtotal - discount;
            sum.innerHTML = `
                <div style="display:flex; justify-content:space-between;"><span>المجموع الفرعي:</span><strong>${fmt(subtotal.toFixed(2))}</strong></div>
                ${appliedPromo?`<div style="display:flex; justify-content:space-between; color:var(--success-color);"><span>خصم (${appliedPromo}):</span><strong>- ${fmt(discount.toFixed(2))}</strong></div>`:''}
                <div style="display:flex; justify-content:space-between; font-size:1.3rem; color:var(--primary-dark); border-top:2px solid var(--primary-ultra-light); padding-top:0.5rem; margin-top:0.5rem;"><span>الإجمالي:</span><strong>${fmt(total.toFixed(2))}</strong></div>
            `;
        }

        window.__storeSetCat = (c)=>{ currentCat=c; renderCategories(); renderProducts(); };
        window.__storeAdd = (id)=>{
            const ex = cart.find(c=>c.id===id);
            if(ex) ex.qty++; else cart.push({id, qty:1});
            saveCart(); updateCartBadge(); renderCart();
            if(typeof showToast==='function') showToast('تم إضافة المنتج للعربة', 'success');
        };
        window.__storeQty = (id, d)=>{
            const ci = cart.find(c=>c.id===id); if(!ci) return;
            ci.qty += d; if(ci.qty<=0) cart = cart.filter(c=>c.id!==id);
            saveCart(); updateCartBadge(); renderCart();
        };
        window.__storeRemove = (id)=>{ cart = cart.filter(c=>c.id!==id); saveCart(); updateCartBadge(); renderCart(); if(typeof showToast==='function') showToast('تم حذف المنتج','warning'); };

        window.openCart = ()=>{ renderCart(); document.getElementById('cartModal').style.display='flex'; };
        window.closeCart = ()=>{ document.getElementById('cartModal').style.display='none'; };
        window.applyPromo = ()=>{
            const code = (document.getElementById('promoCodeInput').value||'').trim().toUpperCase();
            if(PROMOS[code]){ appliedPromo = code; renderCart(); if(typeof showToast==='function') showToast(`تم تطبيق خصم ${PROMOS[code]*100}%`,'success'); }
            else { if(typeof showToast==='function') showToast('كود غير صالح','error'); }
        };
        window.openCheckout = ()=>{
            if(cart.length===0) return;
            const subtotal = cart.reduce((s,ci)=>{ const p=PRODUCTS.find(x=>x.id===ci.id); return s + (p?p.price[currency]*ci.qty:0); },0);
            const total = subtotal - (appliedPromo?subtotal*PROMOS[appliedPromo]:0);
            document.getElementById('checkoutTotal').innerHTML = `الإجمالي للدفع: ${fmt(total.toFixed(2))}`;
            document.getElementById('cartModal').style.display='none';
            document.getElementById('checkoutModal').style.display='flex';
        };
        window.closeCheckout = ()=>{ document.getElementById('checkoutModal').style.display='none'; };
        window.completeCheckout = (e)=>{
            e.preventDefault();
            cart = []; appliedPromo = null; saveCart(); updateCartBadge();
            document.getElementById('checkoutModal').style.display='none';
            if(typeof showToast==='function') showToast('تم تأكيد طلبك بنجاح! سنتواصل معك قريباً','success');
            else alert('تم تأكيد طلبك بنجاح!');
        };

        function initStore(){
            renderCategories(); renderProducts(); updateCartBadge();
            const cs = document.getElementById('storeCurrency');
            const pm = document.getElementById('storePriceMax');
            const pml = document.getElementById('storePriceMaxLabel');
            if(cs) cs.addEventListener('change', e=>{ currency=e.target.value; pm.max = currency==='USD'?100:5000; pm.value=pm.max; pml.textContent=pm.value; priceMax=+pm.value; renderProducts(); });
            if(pm) pm.addEventListener('input', e=>{ priceMax=+e.target.value; pml.textContent=e.target.value; renderProducts(); });
        }
        if(document.readyState!=='loading') initStore();
        else document.addEventListener('DOMContentLoaded', initStore);
    })();

        // Enhanced Data with Online Status Control
        const gamesData = {
        bombanana: {
                title: "BOMBANANA!",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4656000/99c086faba625a8d3bc459bab444087d257ccbe1/header.jpg?t=1788351950.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "492MB",
                developer: "BOMBANANA!",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/ZUVslIiadE", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/VQALGZvy", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/ZUVslIiadE", icon: "fas fa-download" }
                ]
            },
            machineparty: {
                title: "Machine Party",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4108000/2e5f2365f00a4f25e8421313b34ac86ea3596473/capsule_616x353.jpg?t=1785909320.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "492MB",
                developer: "Machine Party",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.6",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/Hu6VxAYW3", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/oVeeW8", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/fmX126v54hJ", icon: "fas fa-download" }
                ]
            },
            cheaterstable: {
                title: "Cheaters Table",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3951810/fe83c1eb32db8c7148a4727e5d7f9f295f0445c7/header.jpg?t=1784848168.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.69G",
                developer: "Cheaters Table",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.8.3.6",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/Syqbjy5Yz", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/TTfNUBMd", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/Syqbjy5Yz", icon: "fas fa-download" }
                ]
            },
            mimicparty: {
                title: "Mimic Party",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5053820/b4377159ba73da6ed927c8b5503bec61ff5ab3ac/capsule_616x353.jpg?t=1787839317.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "168MB",
                developer: "Mimic Party",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.1.47",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/37cdHQg8EpurB", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/14qO8m04", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/37cdHQg8EpurB", icon: "fas fa-download" }
                ]
            },
            twistedparty: {
                title: "Twisted Party",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4332910/a791e86bbe177bdc0b16698f964229ad263373cc/capsule_616x353.jpg?t=1787670033.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "282MB",
                developer: "Twisted Party",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.7",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/SdtPvYe2aZvqvz", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/hmzQSp3R", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/SdtPvYe2aZvqvz", icon: "fas fa-download" }
                ]
            },
            pizzahousesimulator: {
                title: "Pizza House Simulator",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4132330/f7e10419b196f7a814eb941ee88f8a648ae7d459/header.jpg?t=1787256029.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "408MB",
                developer: "Pizza House Simulator",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.007",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/l41q9TD", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/TBiubNZr", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/l41q9TD", icon: "fas fa-download" }
                ]
            },
            howtofish: {
                title: "How to Fish",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4001890/45c4ddff4901e32c4b8b643e1b97d0d01898d299/header.jpg?t=1788160834.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "408MB",
                developer: "How to Fish",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.10",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/Irh2xH", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/rE5ZOdcx", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/Irh2xH", icon: "fas fa-download" }
                ]
            },
            unicycletogether: {
                title: "Unicycle Together",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4286040/7ba93ad19f40a39830d696385ce3f21a44d87e3a/header.jpg?t=1788098907.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.12G",
                developer: "Unicycle Together",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.2.1.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/RV62fa3IT", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/NXEayLzt", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/RV62fa3IT", icon: "fas fa-download" }
                ]
            },
            lastpiratesdie: {
                title: "Last Pirates Die Together",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4317790/1d46cbde0bf2ac91b6d11d4b53768b45e1b42f55/header.jpg?t=1788535922.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "4.06G",
                developer: "Last Pirates Die Together",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.4.3.e850397f",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/34EV3H", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/m1aM8vTK", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/34EV3H", icon: "fas fa-download" }
                ]
            },
            heaveho: {
                title: "Heave Ho 2",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch2/70010000113971/0af33b33dc76d4ca21beec4a06dbf76a3e6337849d506457809a02eb39659374.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.71G",
                developer: "Heave Ho 2",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.261",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/GonFTco", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/czhQsLLd", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/GonFTco", icon: "fas fa-download" }
                ]
            },
            bookshopsimulator: {
                title: "Bookshop Simulator",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3467040/1a434c2722c6b2c7074206a249a2a7e666d01669/capsule_616x353_alt_assets_1.jpg?t=1784578538.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.71G",
                developer: "Bookshop Simulator",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.1224",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/mlI5u24", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/PnV4t1", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/mlI5u24", icon: "fas fa-download" }
                ]
            },
            digdigdie: {
                title: "Dig, Dig, Die",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4074010/a24d06c1e66946b36726443ab799b5a2abadbb56/capsule_616x353.jpg?t=1786016977.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.16G",
                developer: "Dig, Dig, Die",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.61.6",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/oxSAqBFMld", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/wfdro8", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/oxSAqBFMld", icon: "fas fa-download" }
                ]
            },
            grainrot: {
                title: "Grain Rot",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4450620/3a99bd17a046d68a63f9d0f8d1059cc85f54b182/capsule_616x353.jpg?t=1786114521.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "4.26G",
                developer: "Grain Rot",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v09082026",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/P2Yu1hf", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/IO3KgI", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/P2Yu1hf", icon: "fas fa-download" }
                ]
            },
            bigwalk: {
                title: "Big Walk",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/fdcb59d7679058d65e9d5200ef696ffa6070c9a2/capsule_616x353.jpg?t=1785911674.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "492MB",
                developer: "Big Walk",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.4.7.2607311502",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/eMXUqgjuDufw", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/jD0g7J", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/bDhtVKajKO9", icon: "fas fa-download" }
                ]
            },
            malltogether: {
                title: "Mall Together",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4668890/348b9eb36ec3023a50088501f495ac1b4477da67/header.jpg?t=1785422847.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "492MB",
                developer: "Mall Together",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.08",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/DkeDCphBB1k", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/7zIgbu", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/3VuaM", icon: "fas fa-download" }
                ]
            },
            dirtybusiness: {
                title: "Dirty Business",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4324480/0bf41369aa9d8f70fd5b1dfcf9b71b0a5b1074f3/header.jpg?t=1784733062.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "4.31G",
                developer: "Dirty Business",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v22072026",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/PREm", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/jncPtM", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/x2kXqTsR", icon: "fas fa-download" }
                ]
            },
            shiftatmidnight: {
                title: "Shift At Midnight",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3722330/759ecea2ffe1ad3819aefdda79e265b8b332bf8f/header.jpg?t=1784799421.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "412MB",
                developer: "Shift At Midnight",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.1.0717.2216",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/iBrh728rCECCO", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/LR3o37", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/H7mYka", icon: "fas fa-download" }
                ]
            },
                   mecchachameleon: {
                title: "Meccha Chameleon",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4704690/163e2a742e5fb8e1f5d1e3a890da98f04ab809d4/header.jpg?t=1781108224.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.62G",
                developer: "Meccha Chameleon",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "WCUhRdcLcRY",
                version: "v4.1.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/O3yDf6eey0e", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/PS0BYh", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/O3yDf6eey0e", icon: "fas fa-download" }
                ]
            },
            forestescapelast: {
                title: "Forest Escape Last Train",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4090360/b9e41870c9bd8686298faa22d64041e220ec5727/header_alt_assets_2.jpg?t=1784708869.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "7.5G",
                developer: "Forest Escape Last Train",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.48",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/XY5AAMg5ei", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/gvtjll", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/gCEXk5", icon: "fas fa-download" }
                ]
            },
            agameabout: {
                title: "A Game About Chopping Trees",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4512570/5b42fbf895720265910d097206df41769b065aeb/capsule_616x353.jpg?t=1784656351.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.89G",
                developer: "A Game About Chopping Trees",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.0.2",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/salhN0Hawx3N", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/f13ukC", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/Y01Vne", icon: "fas fa-download" }
                ]
            },
            orefactory: {
                title: "Ore Factory Squad",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4210580/5c0e7a280decdccdda5aabcf74dea7a6ae0ac214/capsule_616x353.jpg?t=1784656230.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5.3G",
                developer: "Ore Factory Squad",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.4",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/2c5YRs", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/EiX7l4", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/FDyIXqbCnxWeQ7g", icon: "fas fa-download" }
                ]
            },
            funnelrunners: {
                title: "Funnel Runners",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3712080/5e03554f7fd68edf54813a8d5a576a8791672227/header.jpg?t=1784567934.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "3.36G",
                developer: "Funnel Runners",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.34.28",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/s60OI4lg5v", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/PmlDnq", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/AXVOQohriiCMfF", icon: "fas fa-download" }
                ]
            },
            happyshumble: {
                title: "Happys Humble Burger",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3453910/cca31f0e35cb74df49bf1f66dff9e8c87beb6dc8/capsule_616x353.jpg?t=1784365074.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "9G",
                developer: "Happys Humble Burger",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.25",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/IPg", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/od2ipc", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/yCdMk", icon: "fas fa-download" }
                ]
            },
            redflag: {
                title: "RED FLAG",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4601770/64760525b687243f8f99c6498be80977fed724cd/capsule_616x353.jpg?t=1784110963.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.48G",
                developer: "RED FLAG",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.1.2",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/9PGKhKr", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/TmZEbV", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/UwI4yxG", icon: "fas fa-download" }
                ]
            },
            pyramidion: {
                title: "Pyramidion",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4024600/d0f7872cb6098a45ce60f4761c414a469f2befd3/capsule_616x353.jpg?t=1780968306.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.66G",
                developer: "Meccha Chameleon",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v19062026",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/ODGhxvZDoN", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/V3V5sw", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/ODGhxvZDoN", icon: "fas fa-download" }
                ]
            },
            repo: {
                title: "R.E.P.O",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3241660/1ea445e044a2d5b09cfa8291350b63ebed6e5741/header.jpg?t=1759236707.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1 G",
                developer: "R.E.P.O",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.4.4.3",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/avr3dwpTU2hdA", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/cfKaqo", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/PO2AE9MqF", icon: "fas fa-download" }
                ]
            }, 
            fearstofathom: {
                title: "Fears to Fathom Scratch",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4121170/2a85fafce01d2646767ce0b24c4b1d7807b462d9/capsule_616x353.jpg?t=1781141362.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.62G",
                developer: "Fears to Fathom Scratch",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "WCUhRdcLcRY",
                version: "v23672048",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/EdbBZgjseY9", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/KvbXsq", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/EdbBZgjseY9", icon: "fas fa-download" }
                ]
            }, 
            solarpunk: {
                title: "Solarpunk",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1805110/0c963cfd748e799d234f3205ddb9f35787c10323/capsule_616x353.jpg?t=1782219094.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.1G",
                developer: "Solarpunk",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "WCUhRdcLcRY",
                version: "v299719",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/CnQo3p1BAAY0VoO", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/AFHkdR", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/CnQo3p1BAAY0VoO", icon: "fas fa-download" }
                ]
            },   
            backroomcompany: {
                title: "Backroom Company",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3010460/8d233342f4baf7b0f0ca28ce152a3d2832b2dd83/capsule_616x353.jpg?t=1780534258.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "4.19 G",
                developer: "Backroom Company",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v05082025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/QuLriTbf4fhf", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/uR7fQG", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/vNQKlBjV", icon: "fas fa-download" }
                ]
            },
            climbthebackrooms: {
                title: "Climb The Backrooms",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://i.ytimg.com/vi/91x4JnWwYlI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBhbNe2Q_1TEe2qwpMUIMKJcU3fRw.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5.3 G",
                developer: "Climb The Backrooms",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.2.110925",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/ijgzD", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/0pOKbL", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/TL4w7mFCuWOY4", icon: "fas fa-download" }
                ]
            },
            pratfall: {
                title: "Pratfall",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4244510/7c6aaf726344e0768fbbbbba4adc5095a5e17d06/capsule_616x353.jpg?t=1780503325.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "275MB",
                developer: "Pratfall",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.0.R2502",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/EuWtiODo5QSdOYf", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/z6AdZF", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/82sz5rX4Q", icon: "fas fa-download" }
                ]
            },
            crashoutcrew: {
                title: "Crashout Crew",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj74fL-Kvmv2BrSrK7fQTC5jOLTDuR3C5uRw&s.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "650MB",
                developer: "Crashout Crew",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.1.9-6087",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/SaXAzNhhpJPWe", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/dHbKom", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/iU743dudlY", icon: "fas fa-download" }
                ]
            },
            forzahorizon: {
                title: "Forza Horizon 6",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me/يرجى تحميل برنامج التورينت لتحميل اللعبة",
                image: "https://gaming-cdn.com/images/products/21622/orig/forza-horizon-6-premium-edition-pc-xbox-series-x-s-microsoft-store-cover.jpg?v=1779192190.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "89G",
                developer: "Forza Horizon 6",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "oYhaW-Vr4wg",
                version: "v364.933",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10/11 (64-Bit)",
                        processor: "Intel i5-6500 OR AMD Ryzen 5 1600",
                        memory: "12 GB RAM",
                        graphics: "NVidia 1050ti OR AMD RX580",
                        storage: "167 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10/11 (64-Bit)",
                        processor: "Intel i5-12400F OR AMD Ryzen 5 5600X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA RTX 3060 Ti OR AMD RX 6700 XT",
                        storage: "167 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://www.mediafire.com/file/4ia4uxp3tnvbxcu/Forza+Horizon+6+[FitGirl+Repack].torrent/file", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/S9rbno", icon: "fas fa-wifi" },
                    { name: "تحميل برنامج التورينت", url: "https://www.utorrent.com/desktop/", icon: "fas fa-download" }
                ]
            }, 
                   mazebound: {
                title: "MAZEBOUND",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3616260/e70ba4bd9949a9f3a666098e36f8e77319b3ad1d/header.jpg?t=1780181524.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "3.15G",
                developer: "MAZEBOUND",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v25052026",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://gofile.io/d/r2IeCN", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/tIEAJk", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/DjwpBC1k", icon: "fas fa-download" }
                ]
            },
            escapethe: {
                title: "Escape the Backrooms",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://wearesecretmode.com/media/Games/Backrooms/Escape%20the%20Backrooms%20Key%20Art.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "G",
                developer: "Escape the Backrooms",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.3.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/VHNUDdKK", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://pixeldrain.com/u/7rfhMeKM", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/VHNUDdKK", icon: "fas fa-download" }
                ]
            },
                   mallrivals: {
                title: "Mall Rivals",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0UmMBCqEbOGY6jMCpB4Buq4E1BjlC3NgfQ&s.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "G",
                developer: "Mall Rivals",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.2.39",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/vn6XQBRY", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://pixeldrain.com/u/P3zDg1iK", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/vn6XQBRY", icon: "fas fa-download" }
                ]
            },
            pizzaslice: {
                title: "Pizza Slice",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1385290/fa0fdd4ffa01ecd352bc359c5b40b2278ef79401/capsule_616x353.jpg?t=1775585441.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "G",
                developer: "Pizza Slice",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.60.99",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/CML8dj3Y", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://pixeldrain.com/u/ft6TWMzu", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/CML8dj3Y", icon: "fas fa-download" }
                ]
            },
            perfectheist2: {
                title: "Perfect Heist 2",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1521580/header.jpg?t=1773976463.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "G",
                developer: "Perfect Heist 2",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v28012023",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://koramaup.com/ehwC", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://koramaup.com/a5nz", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://koramaup.com/ehwC", icon: "fas fa-download" }
                ]
            },
            deadlydelivery: {
                title: "Deadly Delivery",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3743090/c5defae72b2b16306939fe15058c0d6cbb4451fb/header.jpg?t=1773415033.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "G",
                developer: "Deadly Delivery",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.14",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/XjPbqX3A", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://pixeldrain.com/u/ciQEekRm", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/XjPbqX3A", icon: "fas fa-download" }
                ]
            },
            devour: {
                title: "Devour",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1274570/bb90f9fa36e4c35a5f28cdc38cf75b3eb5c39032/header.jpg?t=1765533474.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "7.85G",
                developer: "Devour",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://koramaup.com/qE4O", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://koramaup.com/qE4T", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://1cloudfile.com/4bL5r", icon: "fas fa-download" }
                ]
            },
            dreadway: {
                title: "Dreadway",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3215820/c95a8b35ddc61e1def9e17ace657038852465d4a/capsule_616x353.jpg?t=1769872973.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.3G",
                developer: "Dreadway",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.0.9",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://gofile.io/d/a8UUxh", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/8c0H6k", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/PxX1a2qf", icon: "fas fa-download" }
                ]
            },
            carservicetogether: {
                title: "Car Service Together",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3501070/aa4f6caf295f82a92ca1ed16f5f0f6327dd6f391/capsule_616x353.jpg?t=1770892923.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.6G",
                developer: "Car Service Together",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.91F19",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://gofile.io/d/yeDrG8", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/W2SgJs", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/7kmSxzjq", icon: "fas fa-download" }
                ]
            },
            logriders: {
                title: "Log Riders",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4082750/d13084bf8d742f1757fa40048dd015760f79f227/capsule_616x353.jpg?t=1771224964.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1G",
                developer: "Log Riders",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.061",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://gofile.io/d/5JVJGF", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/xT5mDx", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/qWW1HW4Y", icon: "fas fa-download" }
                ]
            },
            roadsideresearch: {
                title: "Roadside Research",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3643170/ac02b254bf7dcbdd06907c2e4eddad6a2d9e4327/header.jpg?t=1771513465.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.3G",
                developer: "Roadside Research",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.1.80",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/gpZDsFvPH", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/XMqfHe", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/yPXzs0tN", icon: "fas fa-download" }
                ]
            },
            boattogether: {
                title: "Boat Together",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3543890/2cf8cd4054158ccb2cdc303500a980b890f14891/capsule_616x353.jpg?t=1767643497.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.3G",
                developer: "Boat Together",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.1.85",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/gpZDsFvPH", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://gofile.io/d/XMqfHe", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/yPXzs0tN", icon: "fas fa-download" }
                ]
            },
            hytale: {
                title: "Hytale",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFppZ9yGWgZpbx2uf4RyI0RJIy_ofSw_VrhQ&s.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.7G",
                developer: "R.E.P.O",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v28012026",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://gofile.io/d/IB9lvr", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/Xlwm2m", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://pixeldrain.com/u/Wvxp19jb", icon: "fas fa-download" }
                ]
            },  
            buckshot: {
                title: "Buckshot Roulette",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2835570/header.jpg?t=1754508318.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "972 M",
                developer: "buckshot roulette",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v2.1.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel core 2duo @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "2 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "4 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/ednxiKhm", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/1qbMx4JL08", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://gofile.io/d/Ojkfar", icon: "fas fa-download" }
                ]
            },
            mimesis: {
                title: "MIMESIS",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2827200/8a2a6edc97fbf23ea6941974bdf4ed9a6ab34eb4/header.jpg?t=1761552846.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.37 G",
                developer: "MIMESIS",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.2.4",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/1J8a1cGG", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://pixeldrain.com/u/pyavNKXy", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://gofile.io/d/ej1tjb", icon: "fas fa-download" }
                ]
            },
            cuffbust: {
                title: "CUFFBUST",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2592220/capsule_616x353.jpg?t=1760535283.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "3.78 G",
                developer: "CUFFBUST",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://exe.io/opVn", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://exe.io/23x95lm", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://exe.io/opVn", icon: "fas fa-download" }
                ]
            },
            rvthereyet: {
                title: "RV There Yet",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://clan.fastly.steamstatic.com/images/45807571/7e6c2c7b19d6a76650fd73f4d00c96f267193db5_400x225.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.8 G",
                developer: "RV There Yet",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.14460",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://pixeldrain.com/u/puWQxRXq", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/N4t8jq", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://gofile.io/d/PJJBXG", icon: "fas fa-download" }
                ]
            },
            grand: {
                title: "Grand Theft Auto V",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1753974947.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "45 G",
                developer: "Grand Theft Auto V",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.72",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/08BcCZV", icon: "fas fa-download" },
                    { name: "الاونلاين داخل ملف اللعبة", url: "#", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/08BcCZV", icon: "fas fa-download" }
                ]
            },
                   counter: {
                title: "Counter-Strike Source",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/240/header.jpg?t=1745368575.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.7 GB",
                developer: "Counter-Strike Source",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v9540945",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/u84CUADdy", icon: "fas fa-download" },
                    { name: "الاونلاين داخل ملف اللعبة", url: "#", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/u84CUADdy", icon: "fas fa-download" }
                ]
            }, 
            farmingsimulator25: {
                title: "Farming Simulator 25",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://image.api.playstation.com/vulcan/ap/rnd/202406/1221/1901991294bdcb26dfb1565495b476df254ac17eebbca57d.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "19.6 G",
                developer: "Farming Simulator 25",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.11.0.1",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/ItUL", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/ncGd", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/ItUL", icon: "fas fa-download" }
                ]
            },
            paddlepaddle: {
                title: "Paddle paddle",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3570070/ba11910305835dcd3ff63bf44d7e8ea96aebae7a/capsule_616x353.jpg?t=1758894662.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.15 G",
                developer: "Paddle paddle",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.2.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/w2gu2z5op", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/lVdi0sh", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/w2gu2z5op", icon: "fas fa-download" }
                ]
            },
            carrytheglass: {
                title: "Carry The Glass",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://cdn.cloudflare.steamstatic.com//steam/apps/3263320/header.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.15 G",
                developer: "Carry The Glass",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v2.0.2",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i3-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R5 240",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Windows 8/10/11 (64-Bit)",
                        processor: "Intel i5-4170 @ 3.7Ghz OR Intel i5 750 @ 2.67Ghz",
                        memory: "8 GB RAM",
                        graphics: "NVidia 650TI OR AMD R7 250x",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/4Cs3", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/9zAg6i2GZ", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/4Cs3", icon: "fas fa-download" }
                ]
            },
            wraphousesimulator: {
                title: "Wrap House Simulator",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://www.cjs-cdkeys.com/product_images/ghostProducts/345803.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "3.80 G",
                developer: "Wrap House Simulator",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.07a",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/RXpbtFHJJSg", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://gofile.io/d/b8f9Th", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://gofile.io/d/9Z4UVM", icon: "fas fa-download" }
                ]
            },
            darkwater: {
                title: "Darkwater",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://i.ytimg.com/vi/YR30T9jU-wg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASxnfSTQX_7CTGIQ2M_jv8xqSELw.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.80 G",
                developer: "Darkwater",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.5.08",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/B5EGlGRd72", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/iy5SXrS5pE", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/B5EGlGRd72", icon: "fas fa-download" }
                ]
            },
            schedulei: {
                title: "Schedule I",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3164500/86e34f84a874cf1853c6b45b7b5948694c7794cb/capsule_616x353.jpg?t=1751926051.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.49 G",
                developer: "Schedule I",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v0.4.0f9",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/zb4", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/4r4", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/zb4", icon: "fas fa-download" }
                ]
            },
            eurotruck2: {
                title: "Euro Truck Simulator2",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/9a81dc3126c56637297b654f9dcac057cfd79b77/header.jpg?t=1756836390.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5.3 G",
                developer: "Euro Truck Simulator2",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "xlTuC18xVII",
                version: "v1.56.1.0s",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/HuFWi67HR", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://pixeldrain.com/u/tBdUmBye", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/HuFWi67HR", icon: "fas fa-download" }
                ]
            },
            knockemout: {
                title: "Knock’Em Out",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2192900/capsule_616x353.jpg?t=1758963457.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "532 M",
                developer: "LOCKDOWN Protocol",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v13062024",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/wNCXH", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/E7GOto", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/wNCXH", icon: "fas fa-download" }
                ]
            },
            across: {
                title: "Across the Obelisk",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000073263/5448797dde8ea3d09c69ac6a502cd30d9038988535f7f09d726a7b70f2014319.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.26 G",
                developer: "Across the Obelisk",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.6.22",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/98RBgyCELy", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/xQuOk", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/98RBgyCELy", icon: "fas fa-download" }
                ]
            },
            lockdownprotocol: {
                title: "LOCKDOWN Protocol",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2780980/header.jpg?t=1721725451.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.56G",
                developer: "LOCKDOWN Protocol",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v25092025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/BHj5IoLdj", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/dVuw5qA", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/BHj5IoLdj", icon: "fas fa-download" }
                ]
            },
            monstercare: {
                title: "Monster Care Simulator",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3288270/32838635c9161169727c77c2da59fc3fcfa29ff5/capsule_616x353.jpg?t=1758038210.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "543 M",
                developer: "Monster Care Simulator",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.3",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/ElSPRLk4dV", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/npQ", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/ElSPRLk4dV", icon: "fas fa-download" }
                ]
            },
            contentwarning: {
                title: "Content Warning",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://i.ytimg.com/vi/yizyLYkZAAg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFZh6UhvsPKV3k1YhcbxPsmxTMQA.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "543 M",
                developer: "Content Warning",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.17.b",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/8s0FZm8w", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/XQxrk", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/8s0FZm8w", icon: "fas fa-download" }
                ]
            },
            agentlemendispute: {
                title: "A Gentlemen’s Dispute",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2820700/3d095261c525d063f2044461fc8baddc9d8b0266/capsule_616x353.jpg?t=1758297813.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "570 M",
                developer: "A Gentlemen Dispute",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "iGy7KbWX3_c",
                version: "v23092025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/QD64WSpF", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/WPazm4vl1G", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/QD64WSpF", icon: "fas fa-download" }
                ]
            },
            deliverypals: {
                title: "Delivery Pals",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3237570/d22488b4c4286d776800b97342a00c28c5033400/capsule_616x353.jpg?t=1753801210.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "570 M",
                developer: "Delivery Pals",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "MG2zxJw4Cek",
                version: "v15082025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/BDSB", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/leZ7OU", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/BDSB", icon: "fas fa-download" }
                ]
            },
            amongus: {
                title: "Among Us",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://dl.memuplay.com/new_market/img/com.innersloth.spacemafia.sc0.2021-03-02-17-09-41.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "570 M",
                developer: "Carry The Glass",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "9pyYq9lpjls",
                version: "v2025.4.202.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/yAH6K", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/vPNxnP7SmG", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/yAH6K", icon: "fas fa-download" }
                ]
            },
            amongus3d: {
                title: "Among Us 3D",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3168600/d04b136566710d88663b5c4b0e6fdb9d4926d358/header_alt_assets_1.jpg?t=1755192723.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1 GB",
                developer: "Among Us 3D",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "YDet8qexxoQ",
                version: "v14102022",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10",
                        processor: "Intel i5-4590",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 660ti or equivalent",
                        storage: "1 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10",
                        processor: "Intel i5-4590",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 970 or equivalent",
                        storage: "1 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/oPT55x", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/R5pLeNR", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/oPT55x", icon: "fas fa-download" }
                ]
            },
            pushing: {
                title: "Pushingit Together",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://j.top4top.io/p_35519h5qp1.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1 GB",
                developer: "Pushing it Together Sisyphus Co-op",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "_TcAvs5VzPA",
                version: "v1.03",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/bGcOd", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/0cGZ", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/bGcOd", icon: "fas fa-download" }
                ]
            },
            carrythe: {
                title: "Carry The Glass",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://l.top4top.io/p_3551cnbpi1.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1 GB",
                developer: "Carry The Glass",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "W3L5ifvKgxU",
                version: "v11112024",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/jambT", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/ywDcL1KcR", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/jambT", icon: "fas fa-download" }
                ]
            },
            wobblylife: {
                title: "Wobbly Life",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://a.top4top.io/p_35511u8vr1.jpeg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1 GB",
                developer: "wobbly life",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "2invlS5ks04",
                version: "v1.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/TRrsgXEM", icon: "fas fa-download" },
                    { name: "تحميل ملف الاونلاين", url: "https://linkjust.com/0oE8nh2lu5", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/zMxOCP", icon: "fas fa-download" }
                ]
            },
            streamerlife: {
                title: "Streamer Life Simulator2",
                description: "لعبة محاكى Simulator ولايوجد بها اونلاين ",
                image: "https://i.etsystatic.com/60897694/r/il/f29bbe/7145001809/il_1080xN.7145001809_nrb2.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "2.15 GB",
                developer: "StreamerLifeSimulator2",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "8DZHvGbPdR8",
                version: "v18763240",
                onlineStatus: false, //  غير متاح أونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/cGAwf", icon: "fas fa-download" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/5HsGUCJ", icon: "fas fa-download" },
                    { name: "ملف Apk", url: "https://linkjust.com/5HsGUCJ", icon: "fas fa-download" }
                ]
            },
            junksurvivor: {
                title: "Junk Survivor",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1861630/header.jpg?t=1744829232.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.2G",
                developer: "Junk Survivor",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "Xoy7ph2W9Xk",
                version: "v10022025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/tpUXd4k", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/VIlqf", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/tpUXd4k", icon: "fas fa-download" }
                ]
            },   
            anothernightshift: {
                title: "Another Night Shift",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://i.ytimg.com/vi/JmSJTX9pJSM/maxresdefault.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.2G",
                developer: "AnotherNightShift",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "JmSJTX9pJSM",
                version: "v11082025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/574L", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/zTjQ7", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/574L", icon: "fas fa-download" }
                ]
            }, 
            houseflipper2: {
                title: "House Flipper2",
                description: " حاليا بيتم العمل على جمع الملفات فى ملف واحد مضغوط لان لعبة حجمها كبير",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1190970/a21c39496d6abc69cba4fd9ad78ab489b3f3b115/capsule_616x353.jpg?t=1758039818.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5.2G",
                developer: "House Flipper2",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "M9ElJWRga9Q",
                version: "v2.1.6",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/yt0", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/fCdhnBpmWU", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/yt0", icon: "fas fa-download" }
                ]
            },
            bodycam: {
                title: "Bodycam",
                description: " حاليا بيتم العمل على جمع الملفات فى ملف واحد مضغوط لان لعبة حجمها كبير",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2406770/bb577b428ed83ff9e3aa1c64844d1561814dffca/header.jpg?t=1750962796.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5.2G",
                developer: "Bodycam",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "OJtv52GuSWM",
                version: "v0.8.2",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "#", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "#", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "#", icon: "fas fa-download" }
                ]
            },
            keepdigging: {
                title: "Keep Digging",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3585800/9e6a66486f35f7180d4e8c45b627192ba3d45c38/capsule_616x353.jpg?t=1757581771.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5.2G",
                developer: "Keep Digging",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                version: "v1.0.1.3523",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/so50", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/rB9bv", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/so50", icon: "fas fa-download" }
                ]
            },
            gasstation: {
                title: "Gas Station Simulator",
                description: " حاليا غير متاح الاونلاين بيتم العمل على تشغيل الاونلاين",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2782920/capsule_616x353.jpg?t=1729324325.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "8.13G",
                developer: "GasStationSimulator",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "NEPwoB1nXn8",
                version: "v1.0.2.38810",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://koramaup.com/5rve", icon: "fas fa-download" },
                    { name: " غير متاح حاليا ملف الاونلاين", url: "#", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://koramaup.com/5rve", icon: "fas fa-download" }
                ]
            },
            fast: {
                title: "FastFoodSimulator",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2916430/header.jpg?t=1733918579.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5G",
                developer: "FastFoodSimulator",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "KoJBZcxZ-1E",
                version: "v0.5.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/aGbhju", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/ZKtvbQW1", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/aGbhju", icon: "fas fa-download" }
                ]
            },
            chained: {
                title: "Chained Together",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2567870/capsule_616x353.jpg?t=1732288374.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5G",
                developer: "Chained Together",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "mZxGfsXQGX8",
                version: "v1.8.2",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/MBQ3me3SyV", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/8o7z", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/MBQ3me3SyV", icon: "fas fa-download" }
                ]
            },
            pummel: {
                title: "Pummel Party",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me ",
                image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_PummelParty.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.2G",
                developer: "Pummel Party",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "oiYG0Ov5jKE",
                version: "v1.14.0c",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/YUxEEmUY", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/8PMzn", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/YUxEEmUY", icon: "fas fa-download" }
                ]
            },
            liar: {
                title: "Liar's Bar",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://difmark.com/images/product/4/1/149285/liars-bar-pc_main_3.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "5G",
                developer: "Liar's Bar",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "B4KkbB1hlrw",
                version: "v0.956",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "8 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "10 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "16 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "10 GB متاح"
                    }
                },
                downloadLinks: [
                    { name:"تحميل اللعبة", url: "https://linkjust.com/xtBjbr", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/XFYPWvwp", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/xtBjbr", icon: "fas fa-download" }
                ]
            },
            murky: {
                title: "Murky Divers",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2963880/582e04c544ef60fb5e3e35f0cdd8f7e8522393a0/header.jpg?t=1754399305.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.6G",
                developer: "Murky Divers",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "nuE-R7O0Zpk",
                version: "v1.0.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/OTk0T", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/EhoN1SEpd", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/OTk0T", icon: "fas fa-download" }
                ]
            },
            backrooms: {
                title: "Backrooms Cleanup",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3140990/b6a20ea4d5106b58ebd928643d6a7584966bb034/capsule_616x353.jpg?t=1749586202.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.7G",
                developer: "Backrooms Cleanup Crew",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "xCDfGGaMLUo",
                version: "v20042025",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-4670K / AMD FX-8350 CPU",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i7-4770 / AMD Ryzen 5 1500X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA GTX 1060 / AMD RX 580",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/O0BT7", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/HmIUl2J", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/O0BT7", icon: "fas fa-download" }
                ]
            },
            lethal: {
                title: "Lethal Company",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1966720/capsule_616x353.jpg?t=1750273815.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "500M",
                developer: "Lethal Company",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "f28nKLp-eKg",
                version: "v1.26.1404.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-4470 / AMD FX-8350",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 660 / AMD HD 7870",
                        storage: "1 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-7400 CPU @ 3.00GHz ; Shader Model 5",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA GTX 1050 / AMD RX 580",
                        storage: "1 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/zO6", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/Ynl1", icon: "fas fa-wifi" },
                    { name: "رابط اخر", url: "https://linkjust.com/zO6", icon: "fas fa-download" }
                ]
            },
                   mta: {
                title: "MTA/GTASA",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://m.gjcdn.net/game-header/1200/917772-crop0_101_1280_575-uwideunf-v4.webp.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1G",
                developer: "Rockstar Games",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "daw8xhaGj2s",
                version: "v3.5.2",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-3470 / AMD FX-8350",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 660 / AMD HD 7870",
                        storage: "72 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i7-4770 / AMD Ryzen 5 1500X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA GTX 1060 / AMD RX 580",
                        storage: "72 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/FQ7GU", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/vzC", icon: "fas fa-download" },
                    { name: "ملف APK", url: "https://linkjust.com/FQ7GU", icon: "fas fa-download" }
                ]
            },
            gta5: {
                title: "Gang Beasts",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000033942/04e13ca17a27aad6c8fe171aca4bcd9731cf04121542958fa4d09d2b49c4c154.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1G",
                developer: "Gang Beasts",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "tNgCy92QWZY",
                version: "v1.26.1404.0",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-3470 / AMD FX-8350",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 660 / AMD HD 7870",
                        storage: "72 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i7-4770 / AMD Ryzen 5 1500X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA GTX 1060 / AMD RX 580",
                        storage: "72 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/yKqo", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/fVotq3", icon: "fas fa-download" },
                    { name: "ملف APK", url: "https://linkjust.com/yKqo", icon: "fas fa-download" }
                ]
            },
            super: {
                title: "SuperSmash",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1077290/header.jpg?t=1606062359.png",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "300M",
                developer: "SuperSmash",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "-Edk59BqSEU",
                version: "v1089172",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/MWg3Ab6BIf", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/LB12OU5E", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/MWg3Ab6BIf", icon: "fas fa-download" }
                ]
            },
            flat: {
                title: "Human Fall Flat",
                description: " دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000001204/7273fb390ae0601a8da2b8d937a660ef1a73c178fa53efd1e6e472cb3b73d88d.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "1.2G",
                developer: "Human",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "-Edk59BqSEU",
                version: "v1089172",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/apF", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/Nn9hN7l", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/apF", icon: "fas fa-download" }
                ]
            },
            thelongdrive: {
                title: " The Long Drive",
                description: "لعبة The Long Drive/ دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me ",
                image: "https://d.top4top.io/p_3551pxb4m1.jpg",
                platform: "PC",
                rating: 4.9,
                category: "games",
                size: "438M",
                developer: "The Long Drive",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "Z_PrCO7HZFU",
                version: "v26112024",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 320 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/JsN", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/DLDPCQ", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/JsN", icon: "fas fa-download" }
                ]
            },
            fifa25: {
                title: "PEAK",
                description: "دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://upload.wikimedia.org/wikipedia/en/0/0f/PEAK_cover_image.jpg",
                platform: "PC",
                rating: 4.8,
                category: "games",
                size: "1.6 GB",
                developer: "games",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "jrlUVhLBjG0",
                version: "v1.32.a",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 1050 Ti / AMD RX 570",
                        storage: "40 GB متاح"
                    },
                    recommended: {
                        os: "Windows 11 64-bit",
                        processor: "Intel Core i7-9700K / AMD Ryzen 7 3700X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA RTX 2060 / AMD RX 6600",
                        storage: "40 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/Sp8nvQmprO", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/YPYDKqmly", icon: "fas fa-wifi" },
                    { name: "تحميل اخر للعبة", url: "https://linkjust.com/Sp8nvQmprO", icon: "fas fa-download" }
                ]
            },
            rematch: {
                title: "Rematch",
                description: "تحميل لعبه ريماتش اخر اصدار v1.1.11/ دةالباسورد بتاع ملفات فك ضغط اللعبة والاونلاين:online-fix.me",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2138720/783e7570547e8fd7a8846fdbd84adea69a88ed26/capsule_616x353.jpg",
                platform: "PC",
                rating: 4.7,
                category: "games",
                size: "4.2 GB",
                developer: "Sports Interactive",
                releaseYear: "2024",
                language: "الإنجليزية + العربية",
                videoId: "jQ_GJQQmMMo",
                version: "v1.2.3",
                onlineStatus: false, //  غير متاح أونلاين 
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-4590 / AMD FX 8350",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 960 / AMD R9 280",
                        storage: "5 GB متاح"
                    },
                    recommended: {
                        os: "Windows 11 64-bit",
                        processor: "Intel Core i7-8700K / AMD Ryzen 7 2700X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA RTX 2060 / AMD RX 6600",
                        storage: "5 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/aOwSxZT", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/RQ5YvlZR", icon: "fas fa-wifi" },
                    { name: "ملف APK", url: "https://linkjust.com/RQ5YvlZR", icon: "fas fa-download" }
                ]
            },   
            minecraft: {
                title: "Minecraft",
                description: "تحميل ماين كرافت الجوال اخر اصدار مع إمكانية اللعب اونلاين مع الأصدقاء في سيرفرات مختلفة حول العالم",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Minecraft_2024_cover_art.png/250px-Minecraft_2024_cover_art.png",
                platform: "Mobile",
                rating: 4.9,
                category: "games",
                size: "300 MB",
                developer: "Mojang Studios",
                releaseYear: "2011",
                language: "العربية + متعدد اللغات",
                videoId: "MmB9b5njVbA",
                version: "v1.21.103",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 7.0+",
                        processor: "ARM64 أو x86",
                        memory: "3 GB RAM",
                        graphics: "Adreno 530 أو Mali-G71 MP8",
                        storage: "1 GB متاح"
                    },
                    recommended: {
                        os: "Android 10.0+",
                        processor: "Snapdragon 660 أو أعلى",
                        memory: "4 GB RAM",
                        graphics: "Adreno 640 أو أعلى",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://linkjust.com/ZP3d32TXiJ", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://linkjust.com/ZP3d32TXiJ", icon: "fas fa-wifi" }
                ]
            },
            pubgmobile: {
                title: "PUBG Mobile",
                description: "تحميل تحديث ببجي الجديد اخر اصدار 4.0 مع إمكانية اللعب اونلاين والاستمتاع بأحدث المميزات",
                image: "https://prod.assets.earlygamecdn.com/images/PUBG-Mobile-4.0-Update.webp?transform=Tiny+Thumb+Webp.jpg",
                platform: "Mobile",
                rating: 4.9,
                category: "games",
                size: "1.2G",
                developer: "PUBG Corporation",
                releaseYear: "2018",
                language: "العربية + متعدد اللغات",
                videoId: "uUFBN7DX_qM",
                version: "v4.2.1",
                onlineStatus: true, // متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Android 5.1.1+",
                        processor: "Snapdragon 425 / Mediatek MT6737",
                        memory: "2 GB RAM",
                        graphics: "Adreno 308 / Mali-T720",
                        storage: "2 GB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "Adreno 512+",
                        storage: "2 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://www.mediafire.com/file/13hldepuw3qlm3s/PUBGMOBILE_Global_4.0.0_uawebsite_livik01_MadTamizha.apk/file", icon: "fas fa-download" },
                    { name: "ملف الاونلاين", url: "https://www.mediafire.com/file/13hldepuw3qlm3s/PUBGMOBILE_Global_4.0.0_uawebsite_livik01_MadTamizha.apk/file", icon: "fas fa-wifi" }
                ]
            },
            ghfgjhg: {
                title: "Gaz Simulator",
                description: "محاكي محطة الوقود - حاليا غير متاح الاونلاين، يتم العمل على تشغيل الاونلاين قريباً",
                image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2782920/capsule_616x353.jpg?t=1729324325.png",
                platform: "PC",
                rating: 4.7,
                category: "games",
                size: "8.13G",
                developer: "GasStationSimulator",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "NEPwoB1nXn8",
                version: "v1.0.2.38810",
                onlineStatus: false, // غير متاح اونلاين
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit",
                        processor: "Intel Core i5-4590 / AMD FX 8350",
                        memory: "8 GB RAM",
                        graphics: "NVIDIA GTX 960 / AMD R9 280",
                        storage: "10 GB متاح"
                    },
                    recommended: {
                        os: "Windows 11 64-bit",
                        processor: "Intel Core i7-8700K / AMD Ryzen 7 2700X",
                        memory: "16 GB RAM",
                        graphics: "NVIDIA RTX 2060 / AMD RX 6600",
                        storage: "10 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل اللعبة", url: "https://koramaup.com/5rve", icon: "fas fa-download" },
                    { name: "رابط بديل", url: "https://koramaup.com/5rve", icon: "fas fa-download" }
                ]
            }
        };

        const programsData = {
        mg3tool: {
                title: "MG3TOOL",
                description: "تم عمل MG3TOOL لتحسين اداء الجيم لوب.",
                image: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/n4hodd8i0prnz9ugekos?ik-sanitizeSvg=true.png",
                platform: "PC",
                rating: 4.8,
                category: "programs",
                size: "PC: 176 MB",
                developer: "Dev Mohab Gaming",
                releaseYear: "2026",
                language: "العربية + متعدد اللغات",
                videoId: "kJQP7kiw5Fk",
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 / Android 5.0+",
                        processor: "Intel Core i3 / ARM64",
                        memory: "4 GB RAM / 2 GB RAM",
                        graphics: "مدمجة",
                        storage: "200 MB متاح"
                    },
                    recommended: {
                        os: "Windows 11 / Android 8.0+",
                        processor: "Intel Core i5 / Snapdragon 660+",
                        memory: "8 GB RAM / 4 GB RAM",
                        graphics: "مدمجة",
                        storage: "500 MB متاح"
                    }
                },
                downloadLinks: [
                    { name: "رابط التحميل", url: "https://www.mediafire.com/file/fkubp0mlqv2l1l2/GAMELOOPOPTIMIZER.rar/file", icon: "fas fa-desktop" },
                    { name: "رابط اخر", url: "https://www.mediafire.com/file/fkubp0mlqv2l1l2/GAMELOOPOPTIMIZER.rar/file", icon: "fas fa-desktop" }
                ]
            },
            spotify: {
                title: "Spotify Premium",
                description: "استمتع بأفضل تجربة موسيقية مع Spotify Premium المعدل. استمع لملايين الأغاني بدون إعلانات، مع إمكانية التحميل للاستماع بدون إنترنت وجودة صوت عالية.",
                image: "https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png",
                platform: "PC/Mobile",
                rating: 4.8,
                category: "programs",
                size: "PC: 120 MB / Mobile: 85 MB",
                developer: "Spotify AB (Modified)",
                releaseYear: "2024",
                language: "العربية + متعدد اللغات",
                videoId: "kJQP7kiw5Fk",
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 / Android 5.0+",
                        processor: "Intel Core i3 / ARM64",
                        memory: "4 GB RAM / 2 GB RAM",
                        graphics: "مدمجة",
                        storage: "200 MB متاح"
                    },
                    recommended: {
                        os: "Windows 11 / Android 8.0+",
                        processor: "Intel Core i5 / Snapdragon 660+",
                        memory: "8 GB RAM / 4 GB RAM",
                        graphics: "مدمجة",
                        storage: "500 MB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل للكمبيوتر", url: "https://linkjust.com/RHfMlCRqO", icon: "fas fa-desktop" },
                    { name: "تحميل للموبايل", url: "https://gofile.io/d/WVTzTu", icon: "fas fa-mobile-alt" }
                ]
            },
            photoshop: {
                title: "Adobe Photoshop 2025",
                description: "أقوى برنامج لتحرير الصور والتصميم الجرافيكي. يحتوي على جميع الأدوات المتقدمة للمصممين المحترفين مع الذكاء الاصطناعي الجديد.",
                image: "https://static.vecteezy.com/system/resources/thumbnails/038/600/554/small_2x/adobe-photoshop-logos-adobe-icons-abstract-art-free-vector.jpg",
                platform: "PC",
                rating: 4.9,
                category: "programs",
                size: "3.7 GB",
                developer: "Adobe Systems",
                releaseYear: "2024",
                language: "العربية + متعدد اللغات",
                videoId: "IyR_uYsRdPs",
                systemRequirements: {
                    minimum: {
                        os: "Windows 10 64-bit v1903",
                        processor: "Intel Core i5 / AMD Ryzen 5",
                        memory: "8 GB RAM",
                        graphics: "DirectX 12 مع 2 GB VRAM",
                        storage: "4 GB متاح"
                    },
                    recommended: {
                        os: "Windows 11 64-bit",
                        processor: "Intel Core i7 / AMD Ryzen 7",
                        memory: "16 GB RAM",
                        graphics: "DirectX 12 مع 4 GB VRAM",
                        storage: "4 GB متاح على SSD"
                    }
                },
                downloadLinks: [
                    { name: "تحميل مباشر", url: "https://linkjust.com/wHhWcu", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://linkjust.com/wHhWcu", icon: "fab fa-google-drive" }
                ]
            }
        };

        const appsData = {
           kinemaster: {
                title: "KineMaster Pro",
                description: "تطبيق كين ماستر برو فى كل المميزات المدفوعة مجانية بالكامل موفرنهالك ",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c4/fe/43/c4fe4343-a1f0-a3fa-b148-97b17d4f17c1/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/1200x600wa.png",
                platform: "Mobile",
                rating: 4.6,
                category: "apps",
                size: "125 MB",
                developer: "KineMaster",
                releaseYear: "2025/7.6.23.34784.GP",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                systemRequirements: {
                    minimum: {
                        os: "Android 6.0+",
                        processor: "ARM64",
                        memory: "3 GB RAM",
                        graphics: "مدمجة",
                        storage: "100 MB متاح"
                    },
                    recommended: {
                        os: "Android 9.0+",
                        processor: "Snapdragon 730+",
                        memory: "6 GB RAM",
                        graphics: "مدمجة",
                        storage: "200 MB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل مباشر", url: "https://linkjust.com/rTPVpN", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://linkjust.com/rTPVpN", icon: "fas fa-link" },
                    { name: "ملف APK", url: "https://linkjust.com/rTPVpN", icon: "fas fa-download" }
                ]
            },
            picsart: {
                title: "Picsart Pro",
                description: "تطبيق Picsart برو فى كل المميزات المدفوعة مجانية بالكامل موفرنهالك",
                image: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2c/f6/79/2cf6797d-3546-7fc1-6867-1944040d9587/AppIcon-0-0-1x_U007emarketing-0-8-0-sRGB-85-220.png/1200x630wa.png",
                platform: "Mobile",
                rating: 4.9,
                category: "apps",
                size: "75 MB",
                developer: "Picsart",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                systemRequirements: {
                    minimum: {
                        os: "Android 6.0+",
                        processor: "ARM64",
                        memory: "3 GB RAM",
                        graphics: "مدمجة",
                        storage: "150 MB متاح"
                    },
                    recommended: {
                        os: "Android 8.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "مدمجة",
                        storage: "300 MB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل مباشر", url: "https://linkjust.com/1GEAtsX5W", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://linkjust.com/1GEAtsX5W", icon: "fas fa-cog" },
                    { name: "ملف APK", url: "https://linkjust.com/1GEAtsX5W", icon: "fas fa-download" }
                ]
            }, 
            capcut: {
                title: "CapCut Pro",
                description: "كاب كات برو اخر اصدار بعد ما تحمل البرنامج لازم تغير اللغة للعربية وتعمل حساب علشان البرو يشتغل",
                image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEij_RgBfVmS8LOreEorDycPXvbUHw18yal1aSneil8NcyQfUvW5jZfvPuY-Oi8qqBIK_YssNVQe7MAzI6i7Cwk7KMLONE5WskZZ9HCf0uoOONfxnp6ULeBzN2ARXm0Fw3KgITRD5Kh5icq6t49mK7Bs9JskLPWjSqXxBSA7lK8wSznbKlHMMq2Ow2Zb_w/s720/Cupcut%20pro.jpg",
                platform: "Mobile",
                rating: 4.7,
                category: "apps",
                size: "65 MB",
                developer: "CapCut Team",
                releaseYear: "2025",
                language: "العربية + متعدد اللغات",
                videoId: "#",
                systemRequirements: {
                    minimum: {
                        os: "Android 5.0+",
                        processor: "ARM64",
                        memory: "2 GB RAM",
                        graphics: "مدمجة",
                        storage: "100 MB متاح"
                    },
                    recommended: {
                        os: "Android 8.0+",
                        processor: "Snapdragon 660+",
                        memory: "4 GB RAM",
                        graphics: "مدمجة",
                        storage: "200 MB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل مباشر", url: "https://linkjust.com/yzzqJm", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://linkjust.com/RC3F76XVy", icon: "fas fa-cloud-download-alt" }
                ]
            }
        };

        const moviesData = {
           asad: {
                title: "فيلم اسد 2026",
                description: "تحميل ومشاهدة فيلم اسد بجودة عالية من خلال رابط مباشر",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hETglW4FQy9a9O_R9Dn6OeCRVci4uz7cOQ&s.png",
                platform: "HD",
                rating: 4.9,
                category: "movies",
                genre: "drama",
                size: "2 GB ",
                director: "Vince Gilligan",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "bnF4uk2KbNw",
                episodes: "121",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "2 GB RAM",
                        graphics: "دعم H.264",
                        storage: "50 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 8.0+",
                        processor: "معالج متوسط أو أعلى",
                        memory: "4 GB RAM",
                        graphics: "دعم H.265",
                        storage: "50 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل الفيلم", url: "https://larozza.surf/video.php?vid=Y8XVGXQmI", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://larozza.surf/video.php?vid=Y8XVGXQmI", icon: "fas fa-download" }
                ]
            }, 
                   hgi: {
                title: "فيلم الدشاش 2025",
                description: "تحميل فيلم الدشاش بجودة عالية من خلال رابط مباشر",
                image: "https://i.top4top.io/p_3552kee9o1.png",
                platform: "HD",
                rating: 4.9,
                category: "movies",
                genre: "drama",
                size: "45 GB (5 مواسم)",
                director: "Vince Gilligan",
                releaseYear: "2025",
                language: "العربية + الإنجليزية",
                videoId: "bnF4uk2KbNw",
                episodes: "121",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "2 GB RAM",
                        graphics: "دعم H.264",
                        storage: "50 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 8.0+",
                        processor: "معالج متوسط أو أعلى",
                        memory: "4 GB RAM",
                        graphics: "دعم H.265",
                        storage: "50 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل الفيلم", url: "https://linkjust.com/6TEBxIxa", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://linkjust.com/6TEBxIxa", icon: "fas fa-download" }
                ]
            },
            joker: {
                title: "فيلم ريستارت 2025",
                description: "تحميل فيلم ريستارت 2025 من خلال رابط مباشر",
                image: "https://i.ytimg.com/vi/IJ49Lp_dQq8/maxresdefault.jpg",
                platform: "HD",
                rating: 4.8,
                category: "movies",
                genre: "drama",
                size: "600 M",
                director: "فيلم ريستارت",
                releaseYear: "2019",
                language: "العربية + الإنجليزية",
                videoId: "pgq6tjnpMYs",
                duration: "122 دقيقة",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "2 GB RAM",
                        graphics: "دعم H.264",
                        storage: "4 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 8.0+",
                        processor: "معالج متوسط أو أعلى",
                        memory: "4 GB RAM",
                        graphics: "دعم H.265",
                        storage: "4 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل الفيلم", url: "https://linkjust.com/LLTe", icon: "fas fa-download" },
                    { name: "تحميل اخر", url: "https://linkjust.com/LLTe", icon: "fas fa-download" }
                ]
            }
        };

        const seriesData = {
            breakingbad: {
                title: "Breaking Bad",
                description: "مسلسل الجريمة والدراما الذي يحكي قصة والتر وايت، مدرس الكيمياء الذي يتحول إلى تاجر مخدرات",
                image: "#",
                platform: "HD",
                rating: 4.9,
                category: "series",
                genre: "drama",
                size: "45 GB (5 مواسم)",
                director: "Vince Gilligan",
                releaseYear: "2008-2013",
                language: "العربية + الإنجليزية",
                videoId: "HhesaQXLuRY",
                episodes: "62 حلقة",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "2 GB RAM",
                        graphics: "دعم H.264",
                        storage: "50 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 8.0+",
                        processor: "معالج متوسط أو أعلى",
                        memory: "4 GB RAM",
                        graphics: "دعم H.265",
                        storage: "50 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل الموسم الأول", url: "#", icon: "fas fa-download" },
                    { name: "تحميل جميع المواسم", url: "#", icon: "fas fa-tv" }
                ]
            },
            strangearthings: {
                title: "Stranger Things",
                description: "مسلسل الخيال العلمي والرعب الذي يدور حول مجموعة من الأطفال في مدينة هاوكنز الغامضة",
                image: "#",
                platform: "4K",
                rating: 4.7,
                category: "series",
                genre: "thriller",
                size: "38 GB (4 مواسم)",
                director: "The Duffer Brothers",
                releaseYear: "2016-2022",
                language: "العربية + الإنجليزية",
                videoId: "b9EkMc79ZSU",
                episodes: "42 حلقة",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "2 GB RAM",
                        graphics: "دعم H.264",
                        storage: "40 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 8.0+",
                        processor: "معالج قوي",
                        memory: "8 GB RAM",
                        graphics: "دعم H.265 و 4K",
                        storage: "40 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل HD", url: "#", icon: "fas fa-download" },
                    { name: "تحميل 4K", url: "#", icon: "fas fa-tv" }
                ]
            }
        };

        const cartoonData = {
            tomandjerry: {
                title: "Tom and Jerry",
                description: "المسلسل الكرتوني الكلاسيكي الخالد الذي يحكي مغامرات القط توم والفأر جيري في معاركهما المضحكة",
                image: "#",
                platform: "HD",
                rating: 4.9,
                category: "cartoon",
                ageRating: "family",
                size: "12 GB",
                director: "Various Directors",
                releaseYear: "1940-2021",
                language: "العربية + الإنجليزية",
                videoId: "sN8s2MuJQCg",
                episodes: "164 حلقة",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "1 GB RAM",
                        graphics: "دعم H.264",
                        storage: "15 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 6.0+",
                        processor: "معالج متوسط",
                        memory: "2 GB RAM",
                        graphics: "دعم H.265",
                        storage: "15 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل الكلاسيكي", url: "#", icon: "fas fa-download" },
                    { name: "تحميل الحديث", url: "#", icon: "fas fa-play" }
                ]
            },
            avatar: {
                title: "Avatar: The Last Airbender",
                description: "مسلسل الأنمي الملحمي الذي يحكي قصة آنج، آخر مسيطر على الهواء، في رحلته لإنقاذ العالم",
                image: "#",
                platform: "4K",
                rating: 4.9,
                category: "cartoon",
                ageRating: "teen",
                size: "25 GB",
                director: "Michael Dante DiMartino",
                releaseYear: "2005-2008",
                language: "العربية + الإنجليزية",
                videoId: "d1EnW4kn1kg",
                episodes: "61 حلقة",
                systemRequirements: {
                    minimum: {
                        os: "أي جهاز يدعم تشغيل الفيديو",
                        processor: "معالج أساسي",
                        memory: "2 GB RAM",
                        graphics: "دعم H.264",
                        storage: "30 GB متاح"
                    },
                    recommended: {
                        os: "Windows 10 / Android 8.0+",
                        processor: "معالج قوي",
                        memory: "4 GB RAM",
                        graphics: "دعم H.265 و 4K",
                        storage: "30 GB متاح"
                    }
                },
                downloadLinks: [
                    { name: "تحميل HD", url: "#", icon: "fas fa-download" },
                    { name: "تحميل 4K", url: "#", icon: "fas fa-play" }
                ]
            }
        };

        // Enhanced Global Variables
        let currentPage = 'home';

        // Enhanced Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize particles
            initializeParticles();
            
            // Progress bar animation
            let progress = 0;
            const bar = document.getElementById('loadingBar');
            const pct = document.getElementById('loadingPercent');
            const progressInterval = setInterval(() => {
                progress += Math.floor(Math.random() * 6) + 2;
                if (progress >= 100) progress = 100;
                if (bar) bar.style.width = progress + '%';
                if (pct) pct.textContent = progress + '%';
                if (progress === 100) clearInterval(progressInterval);
            }, 60);

            // Hide loading screen with enhanced animation
            setTimeout(() => {
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loadingScreen').style.display = 'none';
                }, 800);
            }, 2500);

            // Initialize AOS with enhanced settings
            AOS.init({
                duration: 1200,
                once: true,
                offset: 120,
                easing: 'ease-out-cubic'
            });

            // Initialize enhanced event listeners
            initializeEventListeners();

            // Initialize typing animation
            initializeTypingAnimation();

            // Animate statistics with enhanced effects
            animateStats();

            // Populate content with enhanced data
            populateGames();
            populatePrograms();
            populateApps();
            populateMovies();
            populateSeries();
            populateCartoon();

            // Initialize enhanced search functionality
            initializeAdvancedSearch();

            // Initialize enhanced toast system
            initializeToastSystem();
        });

        // Enhanced Initialize Particles
        function initializeParticles() {
            if (typeof particlesJS !== 'undefined') {
                particlesJS('particles-js', {
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: ['#2563eb', '#1d4ed8', '#1e40af', '#3b82f6', '#60a5fa']
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 0,
                                color: '#000000'
                            }
                        },
                        opacity: {
                            value: 0.5,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: true,
                            distance: 150,
                            color: '#2563eb',
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: 'none',
                            random: false,
                            straight: false,
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1
                                }
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            },
                            remove: {
                                particles_nb: 2
                            }
                        }
                    },
                    retina_detect: true
                });
            }
        }

        // Enhanced Initialize Typing Animation
        function initializeTypingAnimation() {
            if (typeof Typed !== 'undefined') {
                new Typed('#typed-text', {
                    strings: [
                        'اكتشف أحدث الألعاب والبرامج والتطبيقات المجانية بأمان وسرعة عالية',
                        'شاهد أفضل الأفلام والمسلسلات والكرتون بجودة عالية',
                        'استكشف مكتبتنا الضخمة من المحتوى الترفيهي المتنوع',
                        'اقرأ مدونتنا الشاملة للحصول على أفضل النصائح والشروحات',
                        'انضم إلى مجتمعنا واستمتع بتجربة ترفيهية فريدة'
                    ],
                    typeSpeed: 50,
                    backSpeed: 30,
                    backDelay: 2000,
                    startDelay: 500,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|',
                    autoInsertCss: true
                });
            }
        }

        // Enhanced Navigation
        function navigateToPage(page) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Show selected page
            document.getElementById(page + '-page').classList.add('active');

            // Add active class to current nav link
            const navLink = document.querySelector(`[data-page="${page}"]`);
            if (navLink) {
                navLink.classList.add('active');
            }

            // Update current page
            currentPage = page;

            // Close mobile menu
            document.getElementById('navLinks').classList.remove('active');

            // Scroll to top with smooth animation
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Show success toast
            showToast(`تم الانتقال إلى صفحة ${getPageName(page)} بنجاح`, 'success');
        }

        // Enhanced Get page name in Arabic
        function getPageName(page) {
            const pageNames = {
                'home': 'الرئيسية',
                'games': 'الألعاب',
                'programs': 'البرامج',
                'apps': 'التطبيقات',
                'movies': 'الأفلام',
                'series': 'المسلسلات',
                'cartoon': 'الكرتون',
                'blog': 'المدونة',
                'store': 'المتجر',
                'contact': 'اتصل بنا',
                'pcchecker': 'فاحص الجهاز',
                'vip': 'عضوية VIP',
                'chatbot': 'مساعد AI',
                'community': 'المنتدى'
            };
            return pageNames[page] || page;
        }

        // Enhanced Populate functions
        function populateGames() {
            const gamesGrid = document.getElementById('gamesGrid');
            gamesGrid.innerHTML = '';

            Object.keys(gamesData).forEach((key, index) => {
                const game = gamesData[key];
                const gameCard = createItemCard(game, key, index);
                gamesGrid.appendChild(gameCard);
            });
        }

        function populatePrograms() {
            const programsGrid = document.getElementById('programsGrid');
            programsGrid.innerHTML = '';

            Object.keys(programsData).forEach((key, index) => {
                const program = programsData[key];
                const programCard = createItemCard(program, key, index);
                programsGrid.appendChild(programCard);
            });
        }

        function populateApps() {
            const appsGrid = document.getElementById('appsGrid');
            appsGrid.innerHTML = '';

            Object.keys(appsData).forEach((key, index) => {
                const app = appsData[key];
                const appCard = createItemCard(app, key, index);
                appsGrid.appendChild(appCard);
            });
        }

        function populateMovies() {
            const moviesGrid = document.getElementById('moviesGrid');
            moviesGrid.innerHTML = '';

            Object.keys(moviesData).forEach((key, index) => {
                const movie = moviesData[key];
                const movieCard = createItemCard(movie, key, index);
                moviesGrid.appendChild(movieCard);
            });
        }

        function populateSeries() {
            const seriesGrid = document.getElementById('seriesGrid');
            seriesGrid.innerHTML = '';

            Object.keys(seriesData).forEach((key, index) => {
                const series = seriesData[key];
                const seriesCard = createItemCard(series, key, index);
                seriesGrid.appendChild(seriesCard);
            });
        }

        function populateCartoon() {
            const cartoonGrid = document.getElementById('cartoonGrid');
            cartoonGrid.innerHTML = '';

            Object.keys(cartoonData).forEach((key, index) => {
                const cartoon = cartoonData[key];
                const cartoonCard = createItemCard(cartoon, key, index);
                cartoonGrid.appendChild(cartoonCard);
            });
        }

        // Enhanced Create item card with dynamic online status
        function createItemCard(item, key, index) {
            const card = document.createElement('div');
            card.className = 'item-card fade-in glow-box';
            card.setAttribute('data-aos', 'fade-up');
            card.setAttribute('data-aos-delay', (index * 100).toString());
            card.onclick = () => {
                card.classList.remove('pop-anim');
                // force reflow to restart animation
                void card.offsetWidth;
                card.classList.add('pop-anim');
                setTimeout(() => openItemDetails(key), 260);
            };

            // Online status inline badge — يظهر فقط في قسم الألعاب جمب التحديث
            let onlineInline = '';
            if (item.category === 'games') {
                const isOnline = item.onlineStatus !== false;
                onlineInline = `
                    <span class="online-inline ${isOnline ? 'online' : 'offline'}" title="${isOnline ? 'متاح اونلاين' : 'غير متاح اونلاين'}">
                        <span class="online-inline-dot"></span>
                        ${isOnline ? 'متاح اونلاين' : 'غير متاح اونلاين'}
                    </span>
                `;
            }

            // Add update indicator for games only — now includes online status inline
            const updateIndicator = item.category === 'games' ? `
                <div class="update-indicator">
                    <span class="update-text">تحديث</span>
                    <div class="update-dot"></div>
                    <span class="version-text">${item.version || 'v1.0.0'}</span>
                    ${onlineInline}
                </div>
            ` : '';

            card.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-overlay">
                        <i class="fas fa-play play-button"></i>
                    </div>
                </div>
                <div class="item-info">
                    ${updateIndicator}
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-description">${item.description.substring(0, 120)}...</p>
                    <div class="item-meta">
                        <span class="item-platform">
                            <i class="fas fa-${getPlatformIcon(item.platform)}"></i>
                            ${item.platform}
                        </span>
                        <div class="item-rating">
                            <i class="fas fa-star"></i>
                            <span>${item.rating}</span>
                        </div>
                    </div>
                    <div class="download-buttons">
                        ${item.downloadLinks.slice(0, 2).map(link => 
                            `<a href="${link.url}" class="download-btn ripple" target="_blank" onclick="event.stopPropagation(); showToast('بدء التحميل...', 'info')">
                                <i class="${link.icon}"></i> ${link.name}
                            </a>`
                        ).join('')}
                    </div>
                </div>
            `;

            return card;
        }

        // Get platform icon based on platform type
        function getPlatformIcon(platform) {
            if (platform.includes('Mobile')) return 'mobile-alt';
            if (platform.includes('PC')) return 'desktop';
            if (platform.includes('HD') || platform.includes('4K')) return 'film';
            return 'desktop';
        }

        // Enhanced Open item details modal with large image
        function openItemDetails(itemKey) {
            const allData = { ...gamesData, ...programsData, ...appsData, ...moviesData, ...seriesData, ...cartoonData };
            const item = allData[itemKey];
            
            if (!item) return;

            const modal = document.getElementById('itemModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');

            modalTitle.textContent = item.title;
            
            modalBody.innerHTML = `
                <div class="item-details-grid">
                    <div>
                        <img class="item-large-image" src="${item.image}" alt="${item.title}">
                        <iframe class="item-video" 
                                src="https://www.youtube.com/embed/${item.videoId}" 
                                frameborder="0" 
                                allowfullscreen>
                        </iframe>
                    </div>
                    <div class="item-specs">
                        <h3 style="margin-bottom: 1rem; color: white;">
                            <i class="fas fa-info-circle"></i> معلومات عامة
                        </h3>
                        <div class="spec-item">
                            <span class="spec-label">${item.category === 'games' || item.category === 'programs' || item.category === 'apps' ? 'المطور' : item.category === 'movies' ? 'المخرج' : 'المخرج'}:</span>
                            <span class="spec-value">${item.developer || item.director}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">سنة الإصدار:</span>
                            <span class="spec-value">${item.releaseYear}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">الحجم:</span>
                            <span class="spec-value">${item.size}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">اللغة:</span>
                            <span class="spec-value">${item.language}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">المنصة:</span>
                            <span class="spec-value">${item.platform}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">التقييم:</span>
                            <span class="spec-value">
                                <i class="fas fa-star" style="color: var(--warning-color);"></i>
                                ${item.rating}/5
                            </span>
                        </div>
                        ${item.version ? `
                        <div class="spec-item">
                            <span class="spec-label">الإصدار:</span>
                            <span class="spec-value" style="color: var(--orange-color); font-weight: 800;">${item.version}</span>
                        </div>
                        ` : ''}
                        ${item.duration ? `
                        <div class="spec-item">
                            <span class="spec-label">المدة:</span>
                            <span class="spec-value">${item.duration}</span>
                        </div>
                        ` : ''}
                        ${item.episodes ? `
                        <div class="spec-item">
                            <span class="spec-label">عدد الحلقات:</span>
                            <span class="spec-value">${item.episodes}</span>
                        </div>
                        ` : ''}
                        ${item.onlineStatus !== undefined ? `
                        <div class="spec-item">
                            <span class="spec-label">حالة الاونلاين:</span>
                            <span class="spec-value" style="color: ${item.onlineStatus ? 'var(--success-color)' : 'var(--danger-color)'}; font-weight: 800;">
                                <i class="fas fa-circle" style="font-size: 0.8rem;"></i>
                                ${item.onlineStatus ? 'متاح اونلاين' : 'غير متاح اونلاين'}
                            </span>
                        </div>
                        ` : ''}
                        ${item.category === 'games' ? `
                        <div class="spec-item">
                            <span class="spec-label">باسورد فك الضغط:</span>
                            <span class="spec-value" style="font-weight: 800; direction: ltr; display: inline-flex; align-items: center; gap: 0.5rem;">
                                <code id="game-pass-${item.id}" style="background: var(--primary-ultra-light); color: var(--primary-dark); padding: 0.3rem 0.7rem; border-radius: 6px; font-family: monospace; font-size: 1rem; user-select: all;">online-fix.me</code>
                                <button onclick="navigator.clipboard.writeText('online-fix.me'); this.innerHTML='<i class=\\'fas fa-check\\'></i>'; setTimeout(()=>this.innerHTML='<i class=\\'fas fa-copy\\'></i>',1500);" style="background: var(--primary-color); color: white; border: none; padding: 0.4rem 0.7rem; border-radius: 6px; cursor: pointer;" title="نسخ"><i class="fas fa-copy"></i></button>
                            </span>
                        </div>
                        ` : ''}
                    </div>
                </div>

                <div style="margin: 2rem 0;">
                    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">
                        <i class="fas fa-align-left"></i> الوصف التفصيلي
                    </h3>
                    <p style="line-height: 1.8; color: var(--text-color); font-size: 1.1rem;">${item.description}</p>
                </div>

                <div class="system-requirements">
                    <h3 style="margin-bottom: 1rem; color: var(--primary-color);">
                        <i class="fas fa-cogs"></i> متطلبات النظام
                    </h3>
                    <div class="requirements-grid">
                        <div class="requirement-box">
                            <div class="requirement-title">
                                <i class="fas fa-exclamation-triangle"></i>
                                الحد الأدنى
                            </div>
                            ${Object.entries(item.systemRequirements.minimum).map(([key, value]) => `
                                <div class="spec-item">
                                    <span class="spec-label">${getRequirementLabel(key)}:</span>
                                    <span class="spec-value">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="requirement-box">
                            <div class="requirement-title">
                                <i class="fas fa-check-circle"></i>
                                الموصى به
                            </div>
                            ${Object.entries(item.systemRequirements.recommended).map(([key, value]) => `
                                <div class="spec-item">
                                    <span class="spec-label">${getRequirementLabel(key)}:</span>
                                    <span class="spec-value">${value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="download-section">
                    <h3 style="margin-bottom: 1rem;">
                        <i class="fas fa-download"></i> روابط التحميل
                    </h3>
                    <p style="margin-bottom: 1.5rem; opacity: 0.9;">
                        اختر الرابط المناسب لك من الروابط التالية:
                    </p>
                    <div class="download-links">
                        ${item.downloadLinks.map(link => `
                            <a href="${link.url}" class="download-link ripple" target="_blank" onclick="showToast('بدء التحميل...', 'info')">
                                <i class="${link.icon}"></i>
                                ${link.name}
                            </a>
                        `).join('')}
                    </div>
                </div>
            `;

            modal.classList.add('active');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Show info toast
            showToast(`تم فتح تفاصيل ${item.title}`, 'info');
        }

        // Find best matching item across all data and jump directly to its details
        function jumpToBestSearchMatch() {
            const inp = document.getElementById('globalSearchInput');
            if (!inp) return;
            const term = (inp.value || '').toLowerCase().trim();
            if (!term) { if (typeof showToast === 'function') showToast('اكتب اسم اللعبة/البرنامج اللي عاوزه', 'warning'); return; }
            const allMap = fspGetAllData();
            let exact = null, starts = null, contains = null;
            for (const cat in allMap) {
                const data = allMap[cat];
                for (const key in data) {
                    const item = data[key];
                    const title = (item.title || '').toLowerCase();
                    if (!title) continue;
                    if (title === term && !exact) exact = { key, cat, item };
                    else if (title.startsWith(term) && !starts) starts = { key, cat, item };
                    else if (title.includes(term) && !contains) contains = { key, cat, item };
                }
                if (exact) break;
            }
            const hit = exact || starts || contains;
            if (!hit) {
                if (typeof showToast === 'function') showToast('لم يتم العثور على نتائج مطابقة', 'error');
                return;
            }
            if (typeof closeFloatingSearch === 'function') closeFloatingSearch();
            navigateToPage(hit.cat);
            setTimeout(() => {
                try { openItemDetails(hit.key); } catch (e) {}
            }, 300);
            inp.value = '';
            if (typeof showToast === 'function') showToast('تم فتح: ' + hit.item.title, 'success');
        }

        // Enhanced Get requirement label in Arabic
        function getRequirementLabel(key) {
            const labels = {
                os: 'نظام التشغيل',
                processor: 'المعالج',
                memory: 'الذاكرة',
                graphics: 'كرت الشاشة',
                storage: 'مساحة التخزين'
            };
            return labels[key] || key;
        }

        // Enhanced Advanced Global Search Function

        // ===== Floating Smart Search =====
        let fspState = { category: 'all', sort: 'relevance' };

        function openFloatingSearch() {
            const ov = document.getElementById('floatingSearchOverlay');
            if (!ov) return;
            ov.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                const inp = document.getElementById('globalSearchInput');
                if (inp) inp.focus();
            }, 100);
        }
        function closeFloatingSearch() {
            const ov = document.getElementById('floatingSearchOverlay');
            if (!ov) return;
            ov.classList.remove('active');
            document.body.style.overflow = '';
        }

        function fspBindChips(containerId, key) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.querySelectorAll('.fsp-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    container.querySelectorAll('.fsp-chip').forEach(c => c.classList.remove('active'));
                    chip.classList.add('active');
                    fspState[key] = chip.dataset.cat || chip.dataset.sort;
                    fspRenderLiveResults();
                });
            });
        }

        function fspGetAllData() {
            const map = {};
            if (typeof gamesData !== 'undefined') map.games = gamesData;
            if (typeof programsData !== 'undefined') map.programs = programsData;
            if (typeof appsData !== 'undefined') map.apps = appsData;
            if (typeof moviesData !== 'undefined') map.movies = moviesData;
            if (typeof seriesData !== 'undefined') map.series = seriesData;
            if (typeof cartoonData !== 'undefined') map.cartoon = cartoonData;
            return map;
        }

        const fspCatLabels = {
            games: 'ألعاب', programs: 'برامج', apps: 'تطبيقات',
            movies: 'أفلام', series: 'مسلسلات', cartoon: 'كرتون'
        };

        function fspRenderLiveResults() {
            const inp = document.getElementById('globalSearchInput');
            const box = document.getElementById('fspLiveResults');
            if (!inp || !box) return;
            const term = inp.value.toLowerCase().trim();
            if (!term) {
                box.innerHTML = '<div class="fsp-empty"><i class="fas fa-search"></i><p>ابدأ بالكتابة لرؤية النتائج الفورية</p></div>';
                return;
            }
            const allMap = fspGetAllData();
            let results = [];
            Object.keys(allMap).forEach(cat => {
                if (fspState.category !== 'all' && fspState.category !== cat) return;
                const data = allMap[cat];
                Object.keys(data).forEach(key => {
                    const item = data[key];
                    if ((item.title && item.title.toLowerCase().includes(term)) ||
                        (item.description && item.description.toLowerCase().includes(term))) {
                        results.push({ key, item, cat });
                    }
                });
            });
            if (fspState.sort === 'title') {
                results.sort((a,b) => a.item.title.localeCompare(b.item.title, 'ar'));
            } else if (fspState.sort === 'newest') {
                results.reverse();
            }
            if (results.length === 0) {
                box.innerHTML = '<div class="fsp-empty"><i class="fas fa-frown"></i><p>لا توجد نتائج مطابقة</p></div>';
                return;
            }
            box.innerHTML = results.slice(0, 30).map(r =>
                `<div class="fsp-result-item" onclick="fspJumpTo('${r.cat}','${r.key}')">
                    <span class="fsp-result-cat">${fspCatLabels[r.cat] || r.cat}</span>
                    <span class="fsp-result-title">${r.item.title}</span>
                    <i class="fas fa-arrow-left" style="color:var(--primary-color)"></i>
                </div>`
            ).join('');
        }

        function fspJumpTo(cat, key) {
            closeFloatingSearch();
            if (typeof navigateToPage === 'function') navigateToPage(cat);
            setTimeout(() => {
                if (typeof openItemDetails === 'function') {
                    try { openItemDetails(key); } catch(e) {}
                }
            }, 300);
        }

        document.addEventListener('DOMContentLoaded', function() {
            fspBindChips('fspCategoryChips', 'category');
            fspBindChips('fspSortChips', 'sort');
            const inp = document.getElementById('globalSearchInput');
            if (inp) {
                inp.addEventListener('input', fspRenderLiveResults);
            }
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') closeFloatingSearch();
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    openFloatingSearch();
                }
            });
        });

        function performAdvancedGlobalSearch() {
            // Prefer direct jump to best matching item (opens details modal centered)
            if (typeof jumpToBestSearchMatch === 'function') {
                const inp = document.getElementById('globalSearchInput');
                if (inp && inp.value && inp.value.trim()) {
                    jumpToBestSearchMatch();
                    return;
                }
            }
        function _legacyPerformAdvancedGlobalSearch() {
            const searchTerm = document.getElementById('globalSearchInput').value.toLowerCase().trim();
            
            if (!searchTerm) {
                showToast('يرجى إدخال كلمة البحث', 'warning');
                return;
            }
            
            // Search in all data types
            const allData = { 
                ...gamesData, 
                ...programsData, 
                ...appsData, 
                ...moviesData, 
                ...seriesData, 
                ...cartoonData 
            };
            
            let results = [];
            
            Object.keys(allData).forEach(key => {
                const item = allData[key];
                if (item.title.toLowerCase().includes(searchTerm) || 
                    item.description.toLowerCase().includes(searchTerm)) {
                    results.push({ key, item, category: item.category });
                }
            });
            
            if (results.length === 0) {
                showToast('لم يتم العثور على نتائج', 'error');
                return;
            }
            
            // Group results by category
            const categoryResults = {
                games: results.filter(r => r.category === 'games'),
                programs: results.filter(r => r.category === 'programs'),
                apps: results.filter(r => r.category === 'apps'),
                movies: results.filter(r => r.category === 'movies'),
                series: results.filter(r => r.category === 'series'),
                cartoon: results.filter(r => r.category === 'cartoon')
            };
            
            // Find category with most results
            let maxCategory = 'games';
            let maxCount = 0;
            
            Object.keys(categoryResults).forEach(category => {
                if (categoryResults[category].length > maxCount) {
                    maxCount = categoryResults[category].length;
                    maxCategory = category;
                }
            });
            
            // Navigate to the category page with most results
            navigateToPage(maxCategory);
            
            // Filter the content on that page
            const dataMap = {
                games: gamesData,
                programs: programsData,
                apps: appsData,
                movies: moviesData,
                series: seriesData,
                cartoon: cartoonData
            };
            
            filterItems(maxCategory + 'Grid', dataMap[maxCategory], searchTerm, 'all');
            
            // Clear search input and close floating panel
            document.getElementById('globalSearchInput').value = '';
            if (typeof closeFloatingSearch === 'function') closeFloatingSearch();
            
            // Show success toast with detailed results
            const resultText = `تم العثور على ${results.length} نتيجة: ${categoryResults.games.length} ألعاب، ${categoryResults.programs.length} برامج، ${categoryResults.apps.length} تطبيقات، ${categoryResults.movies.length} أفلام، ${categoryResults.series.length} مسلسلات، ${categoryResults.cartoon.length} كرتون`;
            showToast(resultText, 'success', 5000);
        }
        }

        // Enhanced Initialize Advanced Search
        function initializeAdvancedSearch() {
            // Games search
            const gamesSearchInput = document.getElementById('gamesSearchInput');
            const gamesPlatformFilter = document.getElementById('gamesPlatformFilter');

            function performGamesSearch() {
                const searchTerm = gamesSearchInput.value.toLowerCase();
                const platform = gamesPlatformFilter.value;
                filterItems('gamesGrid', gamesData, searchTerm, platform);
                
                if (searchTerm) {
                    showToast(`البحث عن: ${searchTerm} في الألعاب`, 'info');
                }
            }

            gamesSearchInput.addEventListener('input', performGamesSearch);
            gamesPlatformFilter.addEventListener('change', performGamesSearch);

            // Programs search
            const programsSearchInput = document.getElementById('programsSearchInput');
            const programsPlatformFilter = document.getElementById('programsPlatformFilter');

            function performProgramsSearch() {
                const searchTerm = programsSearchInput.value.toLowerCase();
                const platform = programsPlatformFilter.value;
                filterItems('programsGrid', programsData, searchTerm, platform);
                
                if (searchTerm) {
                    showToast(`البحث عن: ${searchTerm} في البرامج`, 'info');
                }
            }

            programsSearchInput.addEventListener('input', performProgramsSearch);
            programsPlatformFilter.addEventListener('change', performProgramsSearch);

            // Apps search
            const appsSearchInput = document.getElementById('appsSearchInput');
            const appsPlatformFilter = document.getElementById('appsPlatformFilter');

            function performAppsSearch() {
                const searchTerm = appsSearchInput.value.toLowerCase();
                const platform = appsPlatformFilter.value;
                filterItems('appsGrid', appsData, searchTerm, platform);
                
                if (searchTerm) {
                    showToast(`البحث عن: ${searchTerm} في التطبيقات`, 'info');
                }
            }

            appsSearchInput.addEventListener('input', performAppsSearch);
            appsPlatformFilter.addEventListener('change', performAppsSearch);

            // Movies search
            const moviesSearchInput = document.getElementById('moviesSearchInput');
            const moviesGenreFilter = document.getElementById('moviesGenreFilter');

            function performMoviesSearch() {
                const searchTerm = moviesSearchInput.value.toLowerCase();
                const genre = moviesGenreFilter.value;
                filterMovieItems('moviesGrid', moviesData, searchTerm, genre);
                
                if (searchTerm) {
                    showToast(`البحث عن: ${searchTerm} في الأفلام`, 'info');
                }
            }

            moviesSearchInput.addEventListener('input', performMoviesSearch);
            moviesGenreFilter.addEventListener('change', performMoviesSearch);

            // Series search
            const seriesSearchInput = document.getElementById('seriesSearchInput');
            const seriesGenreFilter = document.getElementById('seriesGenreFilter');

            function performSeriesSearch() {
                const searchTerm = seriesSearchInput.value.toLowerCase();
                const genre = seriesGenreFilter.value;
                filterMovieItems('seriesGrid', seriesData, searchTerm, genre);
                
                if (searchTerm) {
                    showToast(`البحث عن: ${searchTerm} في المسلسلات`, 'info');
                }
            }

            seriesSearchInput.addEventListener('input', performSeriesSearch);
            seriesGenreFilter.addEventListener('change', performSeriesSearch);

            // Cartoon search
            const cartoonSearchInput = document.getElementById('cartoonSearchInput');
            const cartoonAgeFilter = document.getElementById('cartoonAgeFilter');

            function performCartoonSearch() {
                const searchTerm = cartoonSearchInput.value.toLowerCase();
                const ageRating = cartoonAgeFilter.value;
                filterCartoonItems('cartoonGrid', cartoonData, searchTerm, ageRating);
                
                if (searchTerm) {
                    showToast(`البحث عن: ${searchTerm} في الكرتون`, 'info');
                }
            }

            cartoonSearchInput.addEventListener('input', performCartoonSearch);
            cartoonAgeFilter.addEventListener('change', performCartoonSearch);

            // Global search Enter key: jump directly to best match
            const globalSearchInput = document.getElementById('globalSearchInput');
            globalSearchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    if (typeof jumpToBestSearchMatch === 'function') {
                        jumpToBestSearchMatch();
                    } else {
                        performAdvancedGlobalSearch();
                    }
                }
            });
        }

        function filterItems(gridId, data, searchTerm, platform) {
            const grid = document.getElementById(gridId);
            const cards = grid.querySelectorAll('.item-card');

            let visibleCount = 0;

            cards.forEach((card, index) => {
                const key = Object.keys(data)[index];
                const item = data[key];
                
                const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                                    item.description.toLowerCase().includes(searchTerm);
                const matchesPlatform = platform === 'all' || 
                                      item.platform.toLowerCase().includes(platform);

                if (matchesSearch && matchesPlatform) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (searchTerm && visibleCount === 0) {
                showToast('لم يتم العثور على نتائج', 'warning');
            }
        }

        function filterMovieItems(gridId, data, searchTerm, genre) {
            const grid = document.getElementById(gridId);
            const cards = grid.querySelectorAll('.item-card');

            let visibleCount = 0;

            cards.forEach((card, index) => {
                const key = Object.keys(data)[index];
                const item = data[key];
                
                const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                                    item.description.toLowerCase().includes(searchTerm);
                const matchesGenre = genre === 'all' || 
                                   item.genre === genre;

                if (matchesSearch && matchesGenre) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (searchTerm && visibleCount === 0) {
                showToast('لم يتم العثور على نتائج', 'warning');
            }
        }

        function filterCartoonItems(gridId, data, searchTerm, ageRating) {
            const grid = document.getElementById(gridId);
            const cards = grid.querySelectorAll('.item-card');

            let visibleCount = 0;

            cards.forEach((card, index) => {
                const key = Object.keys(data)[index];
                const item = data[key];
                
                const matchesSearch = item.title.toLowerCase().includes(searchTerm) || 
                                    item.description.toLowerCase().includes(searchTerm);
                const matchesAge = ageRating === 'all' || 
                                 item.ageRating === ageRating;

                if (matchesSearch && matchesAge) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            if (searchTerm && visibleCount === 0) {
                showToast('لم يتم العثور على نتائج', 'warning');
            }
        }

        // Enhanced Initialize event listeners
        function initializeEventListeners() {
            // Enhanced Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navLinks = document.getElementById('navLinks');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                showToast('تم فتح/إغلاق القائمة', 'info');
            });

            // Enhanced Modal close handlers
            const itemModal = document.getElementById('itemModal');
            
            // Enhanced Item modal close
            const itemCloseBtn = itemModal.querySelector('.close');
            itemCloseBtn.addEventListener('click', () => {
                itemModal.classList.remove('active');
                itemModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                showToast('تم إغلاق التفاصيل', 'info');
            });

            // Enhanced Window click handlers
            window.addEventListener('click', (e) => {
                if (e.target === itemModal) {
                    itemModal.classList.remove('active');
                    itemModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });

            // Enhanced Back to top button
            const backToTop = document.getElementById('backToTop');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('show');
                } else {
                    backToTop.classList.remove('show');
                }
            });

            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                showToast('تم الانتقال إلى أعلى الصفحة', 'success');
            });

            // Enhanced Ripple effect
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('ripple')) {
                    const ripple = document.createElement('span');
                    const rect = e.target.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.classList.add('ripple-effect');
                    
                    e.target.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 800);
                }
            });
        }

        // Enhanced Animate statistics
        function animateStats() {
            const stats = document.querySelectorAll('.stat-number');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = parseInt(entry.target.getAttribute('data-count'));
                        animateNumber(entry.target, target);
                        observer.unobserve(entry.target);
                    }
                });
            });

            stats.forEach(stat => observer.observe(stat));
        }

        function animateNumber(element, target) {
            let current = 0;
            const increment = target / 150;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current).toLocaleString();
            }, 15);
        }

        // Enhanced Toast System
        function initializeToastSystem() {
            // Create toast container if it doesn't exist
            if (!document.getElementById('toast-container')) {
                const toastContainer = document.createElement('div');
                toastContainer.id = 'toast-container';
                toastContainer.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10000;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                `;
                document.body.appendChild(toastContainer);
            }
        }

        function showToast(message, type = 'info', duration = 3000) {
            const toastContainer = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            const colors = {
                success: 'var(--gradient-success)',
                error: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                warning: 'var(--gradient-orange)',
                info: 'var(--gradient-primary)'
            };

            const icons = {
                success: 'fas fa-check-circle',
                error: 'fas fa-exclamation-circle',
                warning: 'fas fa-exclamation-triangle',
                info: 'fas fa-info-circle'
            };

            toast.className = 'toast';
            toast.style.cssText = `
                background: ${colors[type]};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                transform: translateX(400px);
                transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                font-weight: 600;
                font-size: 1rem;
                display: flex;
                align-items: center;
                gap: 0.8rem;
                max-width: 350px;
                backdrop-filter: blur(10px);
            `;

            toast.innerHTML = `
                <i class="${icons[type]}"></i>
                <span>${message}</span>
            `;

            toastContainer.appendChild(toast);

            // Show toast
            setTimeout(() => {
                toast.style.transform = 'translateX(0)';
            }, 100);

            // Hide toast
            setTimeout(() => {
                toast.style.transform = 'translateX(400px)';
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, 400);
            }, duration);
        }
    
        // ===== Added features JS =====
        function checkMyPCRequirements(gameMinimumRAM) {
            const userRAM = navigator.deviceMemory || 8;
            const requiredRAM = parseInt(gameMinimumRAM) || 8;
            if (userRAM >= requiredRAM) {
                showToast("🔥 مبروك! مواصفات جهازك (الرامات " + userRAM + "GB) كافية لتشغيل اللعبة بسلاسة.", "success");
            } else {
                showToast("⚠️ تنبيه: راماتك (" + userRAM + "GB) أقل من الحد الأدنى المطلوب (" + requiredRAM + "GB).", "warning");
            }
        }
        function copyPassword(text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast("📋 تم نسخ باسوورد فك الضغط بنجاح!", "success");
                }).catch(() => {
                    showToast("⚠️ تعذر النسخ، حاول يدوياً: " + text, "warning");
                });
            } else {
                const ta = document.createElement('textarea');
                ta.value = text; document.body.appendChild(ta); ta.select();
                try { document.execCommand('copy'); showToast("📋 تم نسخ باسوورد فك الضغط بنجاح!", "success"); }
                catch(e) { showToast("⚠️ تعذر النسخ", "warning"); }
                document.body.removeChild(ta);
            }
        }
        window.checkMyPCRequirements = checkMyPCRequirements;
        window.copyPassword = copyPassword;


/* ============ VIP Membership ============ */
(function(){
    try{
        if(localStorage.getItem('mg_vip')==='1') document.body.classList.add('vip-active');
    }catch(e){}
})();
function activateVip(plan){
    try{localStorage.setItem('mg_vip','1');localStorage.setItem('mg_vip_plan',plan);}catch(e){}
    document.body.classList.add('vip-active');
    var s=document.getElementById('vipStatus');
    if(s){s.className='mg-result ok';s.innerHTML='<i class="fas fa-crown"></i> مبروك! تم تفعيل عضوية VIP ('+(plan==='yearly'?'سنوية':'شهرية')+'). استمتع بالتحميل السريع وبدون إعلانات.';}
    if(typeof showToast==='function') showToast('تم تفعيل عضوية VIP بنجاح 👑','success');
}
function deactivateVip(){
    try{localStorage.removeItem('mg_vip');localStorage.removeItem('mg_vip_plan');}catch(e){}
    document.body.classList.remove('vip-active');
    var s=document.getElementById('vipStatus');
    if(s){s.className='mg-result info';s.innerHTML='<i class="fas fa-info-circle"></i> حالتك الحالية: مستخدم عادي.';}
    if(typeof showToast==='function') showToast('تم الرجوع للحساب العادي','info');
}

/* ============ PC Requirements Checker ============ */
const PC_GAMES = {
    // Action / Open World
    gta5:{name:'GTA V', cpu:2, ram:8, gpu:2, storage:100, os:'win7'},
    gta6:{name:'GTA VI', cpu:6, ram:16, gpu:6, storage:150, os:'win10'},
    rdr2:{name:'Red Dead Redemption 2', cpu:4, ram:12, gpu:4, storage:150, os:'win10'},
    cyberpunk:{name:'Cyberpunk 2077', cpu:4, ram:12, gpu:4, storage:70, os:'win10'},
    witcher3:{name:'The Witcher 3: Wild Hunt', cpu:3, ram:8, gpu:3, storage:50, os:'win7'},
    hogwarts:{name:'Hogwarts Legacy', cpu:4, ram:16, gpu:4, storage:85, os:'win10'},
    starfield:{name:'Starfield', cpu:5, ram:16, gpu:5, storage:125, os:'win10'},
    spiderman2:{name:"Marvel's Spider-Man 2", cpu:5, ram:16, gpu:5, storage:140, os:'win10'},
    spiderman_mm:{name:'Spider-Man Miles Morales', cpu:4, ram:8, gpu:4, storage:75, os:'win10'},
    alanwake2:{name:'Alan Wake 2', cpu:5, ram:16, gpu:5, storage:90, os:'win10'},
    wukong:{name:'Black Myth: Wukong', cpu:5, ram:16, gpu:5, storage:130, os:'win10'},
    deathstranding:{name:'Death Stranding', cpu:3, ram:8, gpu:3, storage:80, os:'win10'},
    // Shooter / Battle Royale
    pubg:{name:'PUBG PC', cpu:3, ram:8, gpu:3, storage:40, os:'win10'},
    fortnite:{name:'Fortnite', cpu:2, ram:8, gpu:2, storage:30, os:'win10'},
    valorant:{name:'Valorant', cpu:2, ram:4, gpu:1, storage:30, os:'win10'},
    cs2:{name:'Counter-Strike 2', cpu:3, ram:8, gpu:2, storage:85, os:'win10'},
    apex:{name:'Apex Legends', cpu:3, ram:8, gpu:3, storage:75, os:'win10'},
    cod:{name:'Call of Duty: Warzone', cpu:4, ram:12, gpu:4, storage:120, os:'win10'},
    codmw3:{name:'Call of Duty: Modern Warfare III', cpu:4, ram:16, gpu:4, storage:150, os:'win10'},
    bf2042:{name:'Battlefield 2042', cpu:4, ram:16, gpu:4, storage:100, os:'win10'},
    r6siege:{name:'Rainbow Six Siege', cpu:3, ram:8, gpu:2, storage:60, os:'win10'},
    overwatch2:{name:'Overwatch 2', cpu:3, ram:8, gpu:3, storage:50, os:'win10'},
    theFinals:{name:'The Finals', cpu:4, ram:12, gpu:4, storage:30, os:'win10'},
    xdefiant:{name:'XDefiant', cpu:3, ram:8, gpu:3, storage:35, os:'win10'},
    freefire:{name:'Free Fire (Emulator)', cpu:2, ram:4, gpu:1, storage:5, os:'win7'},
    // MOBA
    lol:{name:'League of Legends', cpu:2, ram:4, gpu:1, storage:25, os:'win7'},
    dota2:{name:'Dota 2', cpu:2, ram:4, gpu:2, storage:50, os:'win7'},
    // RPG
    elden:{name:'Elden Ring', cpu:3, ram:12, gpu:3, storage:60, os:'win10'},
    bg3:{name:"Baldur's Gate 3", cpu:4, ram:8, gpu:4, storage:150, os:'win10'},
    ff7r:{name:'Final Fantasy VII Remake', cpu:4, ram:12, gpu:4, storage:100, os:'win10'},
    ff16:{name:'Final Fantasy XVI', cpu:5, ram:16, gpu:5, storage:170, os:'win10'},
    diablo4:{name:'Diablo IV', cpu:4, ram:8, gpu:3, storage:90, os:'win10'},
    poe2:{name:'Path of Exile 2', cpu:4, ram:8, gpu:4, storage:55, os:'win10'},
    lostark:{name:'Lost Ark', cpu:3, ram:8, gpu:3, storage:80, os:'win10'},
    // Sports / Racing
    fifa24:{name:'EA FC 25', cpu:4, ram:8, gpu:3, storage:100, os:'win10'},
    fifa25:{name:'EA FC 26', cpu:4, ram:8, gpu:4, storage:100, os:'win10'},
    pes:{name:'eFootball 2026', cpu:3, ram:8, gpu:2, storage:50, os:'win10'},
    nba2k24:{name:'NBA 2K24', cpu:3, ram:8, gpu:3, storage:150, os:'win10'},
    forza5:{name:'Forza Horizon 5', cpu:3, ram:8, gpu:3, storage:110, os:'win10'},
    forzaMS:{name:'Forza Motorsport', cpu:4, ram:16, gpu:4, storage:130, os:'win10'},
    f124:{name:'F1 24', cpu:3, ram:8, gpu:3, storage:100, os:'win10'},
    nfsUnbound:{name:'Need for Speed Unbound', cpu:4, ram:16, gpu:4, storage:50, os:'win10'},
    // Horror
    re4:{name:'Resident Evil 4 Remake', cpu:4, ram:8, gpu:4, storage:60, os:'win10'},
    re_village:{name:'Resident Evil Village', cpu:3, ram:8, gpu:3, storage:50, os:'win10'},
    dbd:{name:'Dead by Daylight', cpu:2, ram:8, gpu:2, storage:50, os:'win10'},
    phasmo:{name:'Phasmophobia', cpu:2, ram:8, gpu:2, storage:15, os:'win10'},
    dayz:{name:'DayZ', cpu:3, ram:8, gpu:3, storage:25, os:'win10'},
    // Assassin's Creed
    ac_mirage:{name:"Assassin's Creed Mirage", cpu:4, ram:8, gpu:3, storage:60, os:'win10'},
    ac_valhalla:{name:"Assassin's Creed Valhalla", cpu:3, ram:8, gpu:3, storage:50, os:'win10'},
    ac_shadows:{name:"Assassin's Creed Shadows", cpu:5, ram:16, gpu:5, storage:120, os:'win10'},
    // Light / Sandbox
    minecraft:{name:'Minecraft', cpu:2, ram:4, gpu:2, storage:10, os:'win7'},
    roblox:{name:'Roblox', cpu:1, ram:4, gpu:1, storage:5, os:'win7'},
    amongus:{name:'Among Us', cpu:1, ram:4, gpu:1, storage:1, os:'win7'},
    terraria:{name:'Terraria', cpu:1, ram:4, gpu:1, storage:1, os:'win7'},
    stardew:{name:'Stardew Valley', cpu:1, ram:4, gpu:1, storage:1, os:'win7'},
    eurotruck:{name:'Euro Truck Simulator2', cpu:4, ram:8, gpu:1, storage:1, os:'win10'},
    rocketleague:{name:'Rocket League', cpu:2, ram:4, gpu:2, storage:20, os:'win7'}
};
const OS_RANK = {win7:1, win10:2, win11:3};
function runPcCheck(){
    const cpu=+document.getElementById('pcCpu').value;
    const ram=+document.getElementById('pcRam').value;
    const gpu=+document.getElementById('pcGpu').value;
    const stor=+document.getElementById('pcStorage').value;
    const disk=+document.getElementById('pcDisk').value;
    const os=document.getElementById('pcOs').value;
    const rawName=(document.getElementById('pcGameName').value||'').trim();
    const box=document.getElementById('pcResult');
    if(!rawName){box.className='mg-result bad';box.textContent='اكتب اسم اللعبة الأول';return;}

    // 1) Try exact/fuzzy match against curated DB
    function norm(x){return String(x).toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]+/g,' ').trim();}
    const q = norm(rawName);
    let g=null, matchedName=rawName;
    for(const k in PC_GAMES){
        const it=PC_GAMES[k];
        const n=norm(it.name);
        if(n===q || n.includes(q) || q.includes(n)){ g=it; matchedName=it.name; break; }
    }

    // 2) If no match, estimate requirements from heuristics
    let estimated=false;
    if(!g){
        estimated=true;
        const t=q;
        // Year detection
        const yearMatch = rawName.match(/(19|20)\d{2}/);
        const year = yearMatch ? parseInt(yearMatch[0]) : null;
        // Heavy AAA keywords
        const heavyKw = /(cyberpunk|wukong|starfield|alan wake|hogwarts|spider.?man|rdr|red dead|witcher|elden|hellblade|forza|flight sim|metro|control|avatar|frontiers|stalker|crysis|battlefield|cod|call of duty|warzone|modern warfare|ac shadow|assassin.?s creed shadow|valhalla|mirage|gta\s*[56vi]|grand theft|baldur|final fantasy|ff\s*1[67]|resident evil|re\s*4|silent hill|dead space|returnal|horizon|god of war|last of us|uncharted|tomb raider|death stranding|atomic heart|robocop|lords of the fallen|dragon.?s dogma|like a dragon|yakuza|tekken\s*8|mortal kombat|street fighter\s*6|nba 2k2[3-9]|fc 2[4-9]|fifa 2[4-9]|efootball|f1\s*2[4-9]|crew motorfest|need for speed unbound|test drive)/i;
        // Medium keywords
        const mediumKw = /(fortnite|valorant|apex|overwatch|pubg|rainbow six|finals|xdefiant|deceive|destiny|warframe|the division|gta\s*[34v]|witcher\s*[12]|skyrim|fallout 4|dying light|far cry|hitman|sleeping dogs|sniper|saints row|borderlands|rocket league|dbd|dead by daylight|phasmo)/i;
        // Light/old keywords
        const lightKw = /(minecraft|roblox|among us|stardew|terraria|hollow knight|undertale|cuphead|celeste|vampire survivors|balatro|brawlhalla|league of legends|dota|cs ?go|cs ?1\.6|counter.?strike\s*1\.6|gta sa|gta san|gta vice|gta\s*3|nfs most wanted|nfs underground|pes\s*[0-9]|pes6|fifa\s*0[0-9]|fifa\s*1[0-5]|warcraft|starcraft|age of empires|sims [12]|need for speed underground|need for speed most wanted)/i;
        let tier;
        if(lightKw.test(t)) tier='light';
        else if(heavyKw.test(t)) tier='heavy';
        else if(mediumKw.test(t)) tier='medium';
        else if(year && year>=2023) tier='heavy';
        else if(year && year>=2018) tier='medium';
        else if(year && year<2015) tier='light';
        else tier='medium';

        const presets={
            light:{cpu:2, ram:4,  gpu:2, storage:15,  os:'win7'},
            medium:{cpu:3, ram:8, gpu:3, storage:60,  os:'win10'},
            heavy:{cpu:5, ram:16,gpu:5, storage:100, os:'win10'},
        };
        g = Object.assign({name:rawName, _tier:tier}, presets[tier]);
    }

    const passCpu=cpu>=g.cpu, passRam=ram>=g.ram, passGpu=gpu>=g.gpu, passStor=stor>=g.storage, passOs=OS_RANK[os]>=OS_RANK[g.os];
    const passed=[passCpu,passRam,passGpu,passStor,passOs].filter(Boolean).length;
    const overshoot=(cpu-g.cpu)+(gpu-g.gpu)+(Math.min(ram,g.ram*2)-g.ram)/4;
    let perfNote='', cls='ok', icon='✅', verdict='';

    if(passed===5){
        if(overshoot>=4){verdict='جهازك ممتاز ويقدر يشغل اللعبة على إعدادات عالية جداً (Ultra)';perfNote='تجربة سلسة جداً 60+ FPS';}
        else if(overshoot>=2){verdict='جهازك يقدر يشغل اللعبة على إعدادات عالية (High)';perfNote='تجربة ممتازة 50-60 FPS';}
        else{verdict='جهازك يقدر يشغل اللعبة على إعدادات متوسطة (Medium)';perfNote='تجربة جيدة 30-45 FPS';}
        cls='ok';icon='✅';
    } else if(passed>=3){
        verdict='جهازك على الحد الأدنى تقريباً. اللعبة هتشتغل بس على إعدادات منخفضة (Low)';
        perfNote='قد تظهر بعض التقطيعات. ينصح بتقليل الجرافيك';
        cls='warn';icon='⚠️';
    } else {
        verdict='للأسف جهازك لا يلبي متطلبات اللعبة';
        perfNote='ينصح بترقية الجهاز قبل تحميل اللعبة';
        cls='bad';icon='❌';
    }

    const details = [
        (passCpu?'✅':'❌')+' المعالج',
        (passRam?'✅':'❌')+' الرام',
        (passGpu?'✅':'❌')+' كرت الشاشة',
        (passStor?'✅':'❌')+' المساحة',
        (passOs?'✅':'❌')+' نظام التشغيل'
    ].join(' • ');

    const diskBoost = disk===3 ? '<br>🚀 وجود NVMe SSD يحسن سرعة التحميل بشكل كبير' : (disk===2 ? '<br>💾 وجود SSD يحسن سرعة التحميل' : '<br>🐢 ينصح بترقية لـ SSD لتسريع التحميل');

    const estNote = estimated ? '<div style="margin-top:.5rem;font-size:.9rem;opacity:.85;">ℹ️ اللعبة مش فى قاعدة بياناتنا، تم تقدير المتطلبات تلقائياً بناءً على نوع اللعبة والسنة.</div>' : '';

    box.className='mg-result '+cls;
    box.innerHTML = '<div style="font-size:1.2rem;margin-bottom:.5rem;">'+icon+' لعبة <b>'+matchedName+'</b></div>'+
                    '<div>'+verdict+'</div>'+
                    '<div style="margin-top:.5rem;">'+perfNote+'</div>'+
                    '<div style="margin-top:.8rem;font-size:.95rem;opacity:.9;">'+details+'</div>'+
                    '<div style="margin-top:.4rem;font-size:.92rem;">'+diskBoost+'</div>'+
                    estNote;
}

/* ============ Mohab AI Chatbot (Smart Offline Brain) ============ */
const CHAT_DB = {
    action:['GTA V','GTA VI','Cyberpunk 2077',"Assassin's Creed Mirage",'Red Dead Redemption 2','Spider-Man 2','Black Myth: Wukong'],
    adventure:['Hogwarts Legacy','Elden Ring','The Witcher 3','Tomb Raider','Uncharted 4','Death Stranding'],
    shooter:['Call of Duty: Warzone','Call of Duty: MW3','Counter-Strike 2','Valorant','PUBG','Apex Legends','Battlefield 2042','The Finals'],
    sports:['EA FC 24','EA FC 25','eFootball 2024','NBA 2K24','WWE 2K24'],
    racing:['Forza Horizon 5','Forza Motorsport','Need for Speed Unbound','F1 24','CarX Street','Euro Truck Simulator2'],
    horror:['Resident Evil 4 Remake','Resident Evil Village','Outlast','Phasmophobia','Dead by Daylight','Alan Wake 2'],
    strategy:['Age of Empires IV','Civilization VI','Total War: Warhammer 3','Company of Heroes 3'],
    online:['Fortnite','Valorant','League of Legends','Free Fire','Dota 2','Overwatch 2'],
    light:['Minecraft','Stardew Valley','Among Us','Terraria','Brawlhalla','Rocket League'],
    rpg:['Elden Ring','The Witcher 3','Cyberpunk 2077',"Baldur's Gate 3",'Diablo IV','Final Fantasy XVI'],
    family:['Minecraft','It Takes Two','Overcooked 2','Mario Kart','Rocket League']
};

const COUNTRY_CAPITALS = {
    'مصر':'القاهرة','السعودية':'الرياض','الإمارات':'أبوظبي','الكويت':'مدينة الكويت','قطر':'الدوحة',
    'البحرين':'المنامة','عمان':'مسقط','العراق':'بغداد','سوريا':'دمشق','لبنان':'بيروت',
    'الأردن':'عمّان','فلسطين':'القدس','اليمن':'صنعاء','السودان':'الخرطوم','ليبيا':'طرابلس',
    'تونس':'تونس','الجزائر':'الجزائر','المغرب':'الرباط','موريتانيا':'نواكشوط','الصومال':'مقديشو',
    'تركيا':'أنقرة','إيران':'طهران','أمريكا':'واشنطن','بريطانيا':'لندن','فرنسا':'باريس',
    'ألمانيا':'برلين','إيطاليا':'روما','إسبانيا':'مدريد','روسيا':'موسكو','الصين':'بكين',
    'اليابان':'طوكيو','كوريا':'سيول','الهند':'نيودلهي','البرازيل':'برازيليا','كندا':'أوتاوا',
    'أستراليا':'كانبرا','المكسيك':'مكسيكو سيتي'
};

function _say(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function _esc(s){ return String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }

function classifyChat(t){
    t=t.toLowerCase();
    const tags=[];
    if(/أكشن|action|قتال|حركة/.test(t))tags.push('action');
    if(/مغامر|adventure/.test(t))tags.push('adventure');
    if(/تصويب|إطلاق|نار|fps|شوتر|shoot|اسلحة|اسلحه/.test(t))tags.push('shooter');
    if(/كور|فيفا|fifa|رياض|sport/.test(t))tags.push('sports');
    if(/سباق|سيار|race|car|عربيات/.test(t))tags.push('racing');
    if(/رعب|horror|اشباح|مرعب/.test(t))tags.push('horror');
    if(/استراتيج|strategy|تخطيط/.test(t))tags.push('strategy');
    if(/أونلاين|اونلاين|online|متعدد|اصحاب|اصحابي/.test(t))tags.push('online');
    if(/خفيف|ضعيف|بطيء|low|قديم|2gb|4gb/.test(t))tags.push('light');
    if(/rpg|تطوير|بطل|قصة|قصه/.test(t))tags.push('rpg');
    if(/عائل|أطفال|family|اطفال/.test(t))tags.push('family');
    return tags;
}

// Try to safely evaluate a math expression
function tryMath(text){
    // Replace Arabic numerals
    const arabicNums = {'٠':'0','١':'1','٢':'2','٣':'3','٤':'4','٥':'5','٦':'6','٧':'7','٨':'8','٩':'9'};
    let s = text.replace(/[٠-٩]/g, d=>arabicNums[d]||d);
    s = s.replace(/[×x]/gi,'*').replace(/[÷]/g,'/').replace(/[,٬]/g,'');
    // Extract numbers/operators only
    const m = s.match(/-?\d+(\.\d+)?(\s*[\+\-\*\/\%\^]\s*-?\d+(\.\d+)?)+/);
    if(!m) return null;
    let expr = m[0].replace(/\^/g,'**');
    if(!/^[\d\s\+\-\*\/\.\%\(\)]+$/.test(expr.replace(/\*\*/g,'*'))) return null;
    try { const r = Function('"use strict";return ('+expr+')')(); if(isFinite(r)) return {expr:m[0], val:r}; } catch(e){}
    return null;
}

function detectCapital(text){
    for(const c in COUNTRY_CAPITALS){
        if(text.includes(c) && /عاصم/.test(text)) return {country:c, capital:COUNTRY_CAPITALS[c]};
    }
    return null;
}

function getTimeReply(){
    const d = new Date();
    return 'الساعة دلوقتي: <b>'+d.toLocaleTimeString('ar-EG')+'</b> 🕒';
}
function getDateReply(){
    const d = new Date();
    return 'النهاردة: <b>'+d.toLocaleDateString('ar-EG',{weekday:'long',year:'numeric',month:'long',day:'numeric'})+'</b> 📅';
}

function aiBrain(raw){
    const text = raw.trim();
    const t = text.toLowerCase();

    // Greetings
    if(/^(السلام|سلام|اهلا|أهلا|اهلين|hello|hi|hey|مرحب|صباح|مساء)/i.test(t)){
        return _say([
            '👋 أهلاً وسهلاً بيك في Mohab AI! تحب أساعدك بإيه النهاردة؟',
            'يا هلا والله 😊 اسألني في أي حاجة: ألعاب، مواصفات، تحميل، أسئلة عامة، أو حتى حسبة رياضية.',
            'مرحبا بيك 🌟 أنا Mohab AI، مساعدك الشخصي. قولي عاوز إيه.'
        ]);
    }
    if(/(كيف حالك|عامل ايه|عامل إيه|ازيك|إزيك|how are you)/i.test(t)){
        return 'الحمد لله تمام 😄 وانت عامل إيه؟ أنا جاهز أساعدك في أي حاجة.';
    }
    if(/(شكر|تسلم|thanks|thank you|ميرسي)/i.test(t)){
        return _say(['العفو ❤️','تحت أمرك في أي وقت 🌹','دا واجبي 💙','اي خدمة 😊']);
    }
    if(/(باي|مع السلامة|bye|تصبح)/i.test(t)){
        return 'مع السلامة 👋 ارجعلي في أي وقت تحتاجني!';
    }

    // Identity
    if(/(مين انت|من انت|اسمك|what.?s your name|who are you)/i.test(t)){
        return '🤖 أنا <b>Mohab AI</b> — المساعد الذكي بتاع موقع Mohab Gaming. بقدر أرشحلك ألعاب، أجاوبك على أسئلتك، أحسبلك مسائل، أديك معلومات، وأساعدك في حاجات كتير 💙';
    }
    if(/(مين عملك|مين صنعك|who made you|من صنعك)/i.test(t)){
        return 'الفنان <b>Mohab Gaming</b> هو اللي صممني عشان أساعد زواره 🎮';
    }

    // Time / Date
    if(/(الساعه كام|الساعة كام|الوقت|what time|time now)/i.test(t)) return getTimeReply();
    if(/(تاريخ النهارده|تاريخ النهاردة|التاريخ|date today|what date|اليوم كام)/i.test(t)) return getDateReply();

    // Math
    const mm = tryMath(text);
    if(mm){
        return '🧮 ناتج <b>'+_esc(mm.expr)+'</b> = <b>'+mm.val+'</b>';
    }

    // Capitals
    const cap = detectCapital(text);
    if(cap){ return '📍 عاصمة '+cap.country+' هي <b>'+cap.capital+'</b>'; }

    // PC build / requirements
    if(/(فاحص|متطلبات|يشغل|تشغيل اللعبة|مواصفات جهاز|بيلد|build)/i.test(t)){
        return 'تقدر تستخدم <b>فاحص الجهاز</b> من الزرار اللي تحت 👇 يقولك جهازك يشغل اللعبة ولا لأ.<br><a onclick="navigateToPage(\'pcchecker\')" style="color:var(--primary-color);cursor:pointer;text-decoration:underline;">افتح فاحص الجهاز ←</a>';
    }
    if(/(تحميل|نزل|لينك|download|رابط)/i.test(t)){
        return 'كل الألعاب والبرامج عندنا فيها روابط تحميل مباشرة 📥 ادخل على القسم اللي عاوزه:<br>• <a onclick="navigateToPage(\'games\')" style="color:var(--primary-color);cursor:pointer;">الألعاب</a><br>• <a onclick="navigateToPage(\'programs\')" style="color:var(--primary-color);cursor:pointer;">البرامج</a><br>• <a onclick="navigateToPage(\'apps\')" style="color:var(--primary-color);cursor:pointer;">التطبيقات</a>';
    }
    if(/(جهازي ضعيف|بيهنج|بطيء|2 ?gb|4 ?gb)/i.test(t)){
        const list = CHAT_DB.light.concat(['CS 1.6','GTA San Andreas','PES 6','Need for Speed Most Wanted']);
        return '🐢 لجهاز خفيف أنصحك بـ:<br><br>• '+list.slice(0,8).join('<br>• ')+'<br><br>وكمان جرب فاحص الجهاز يحسبلك كل لعبة.';
    }

    // Jokes
    if(/(نكتة|نكته|joke|اضحكني)/i.test(t)){
        return _say([
            '😂 ليه المبرمج بيخاف من الظلام؟ علشان مفيش Light Mode!',
            '😆 لاعب قال للمدرب: مفيش انترنت. قاله: العب Offline!',
            '🤣 ايه الفرق بين GTA V و GTA VI؟ ١٠ سنين انتظار.',
            '😅 الجيمر ميموتش، بس بياخد Respawn.'
        ]);
    }

    // Game recommendations
    const tags = classifyChat(t);
    if(tags.length){
        const seen=new Set(), list=[];
        tags.forEach(tag=>(CHAT_DB[tag]||[]).forEach(g=>{if(!seen.has(g)){seen.add(g);list.push(g);}}));
        return '🎮 بناءً على ذوقك (<b>'+tags.join('، ')+'</b>) ترشيحاتي ليك:<br><br>• '+list.slice(0,8).join('<br>• ')+'<br><br>تحب أرشحلك تاني نوع؟ أو تفتح صفحة الألعاب؟';
    }

    // Specific game lookup
    if(typeof gamesData!=='undefined'){
        for(const k in gamesData){
            const g = gamesData[k];
            if(g && g.title && t.includes(String(g.title).toLowerCase())){
                return '🎯 لقيت لعبة <b>'+_esc(g.title)+'</b> في الموقع!<br>'+_esc(g.description||'')+'<br><br><a onclick="navigateToPage(\'games\');setTimeout(()=>{try{showItemDetails(\''+k+'\',\'games\')}catch(e){}},300);" style="color:var(--primary-color);cursor:pointer;text-decoration:underline;">افتح صفحة اللعبة ←</a>';
            }
        }
    }

    // Generic question handling
    if(/(ايه|إيه|ما هي|ما هو|what is|what.?s)/i.test(t)){
        return '🤔 سؤال جميل! حاول تسألني بطريقة تانية أو كن أكثر تحديداً عشان أقدر أساعدك أحسن.<br><br>أقدر أساعدك في:<br>• ترشيح ألعاب حسب ذوقك<br>• فحص متطلبات تشغيل الألعاب<br>• الإجابة على أسئلة عامة (عواصم، حساب، وقت)<br>• شرح أقسام الموقع وكيفية التحميل';
    }
    if(/[\?؟]$/.test(text)){
        return '🧠 معلوماتي محدودة شوية في الموضوع ده، بس لو سألتني في الألعاب أو مواصفات الكمبيوتر هكون أحسن صديق ليك 💙';
    }

    // Default fallback
    return _say([
        '🤖 فهمت قصدك بس عاوز معلومات أكتر. ممكن توضّح؟',
        '💡 جرب تقولي مثلاً: "رشحلي ألعاب أكشن" أو "كام يساوي ١٢ × ٨".',
        '🌟 أنا هنا لخدمتك! اسأل عن أي لعبة، برنامج، فيلم، أو أي حاجة تخطر على بالك.'
    ]);
}

function chatSuggest(text){
    document.getElementById('chatInput').value=text;
    chatSend();
}
function chatAppend(role,text){
    const body=document.getElementById('chatBody');
    const m=document.createElement('div');
    m.className='mg-msg '+role;
    m.innerHTML=text;
    body.appendChild(m);
    body.scrollTop=body.scrollHeight;
}
function chatTyping(on){
    const body=document.getElementById('chatBody');
    let el=document.getElementById('chatTypingDots');
    if(on){
        if(el)return;
        el=document.createElement('div');
        el.className='mg-msg bot';
        el.id='chatTypingDots';
        el.innerHTML='<i class="fas fa-circle-notch fa-spin"></i> Mohab AI بيفكر...';
        body.appendChild(el);
        body.scrollTop=body.scrollHeight;
    } else if(el){ el.remove(); }
}
function chatSend(){
    const inp=document.getElementById('chatInput');
    const text=(inp.value||'').trim();
    if(!text)return;
    chatAppend('user',_esc(text));
    inp.value='';
    chatTyping(true);
    const delay = 400 + Math.min(1200, text.length*15);
    setTimeout(()=>{
        chatTyping(false);
        let reply='';
        try { reply = aiBrain(text); } catch(e){ reply='حصل خطأ بسيط، جرّب تاني 🙏'; }
        chatAppend('bot',reply);
    }, delay);
}

/* ============ Community / Forum ============ */
function loadThreads(){
    let arr=[];
    try{arr=JSON.parse(localStorage.getItem('mg_threads')||'[]');}catch(e){arr=[];}
    if(arr.length===0){
        arr=[{
            id:Date.now()-1000,name:'Mohab',cat:'نقاش عام',title:'أهلاً بكم في منتدى Mohab Gaming 🎮',
            body:'يا شباب نورتوا المنتدى! شاركوا أفكاركم وأسئلتكم وتجاربكم مع الألعاب. كل واحد يقدر يفتح موضوع جديد أو يرد على مواضيع باقي الأعضاء.',
            ts:Date.now()-86400000, replies:[{name:'أحمد',body:'شكراً يا محب، الموقع جامد جداً 🔥',ts:Date.now()-43200000}]
        }];
        try{localStorage.setItem('mg_threads',JSON.stringify(arr));}catch(e){}
    }
    return arr;
}
function saveThreads(arr){try{localStorage.setItem('mg_threads',JSON.stringify(arr));}catch(e){}}
function renderThreads(){
    const wrap=document.getElementById('threadsList');
    if(!wrap)return;
    const arr=loadThreads().sort((a,b)=>b.ts-a.ts);
    wrap.innerHTML = arr.map(t=>{
        const date=new Date(t.ts).toLocaleString('ar-EG');
        const reps=(t.replies||[]).map(r=>'<div class="mg-reply"><b>'+escapeHtml(r.name)+':</b> '+escapeHtml(r.body)+'</div>').join('');
        return `<div class="mg-thread">
            <h4>${escapeHtml(t.title)}</h4>
            <div class="meta"><span><i class="fas fa-user"></i> ${escapeHtml(t.name)}</span><span><i class="fas fa-tag"></i> ${escapeHtml(t.cat)}</span><span><i class="fas fa-clock"></i> ${date}</span></div>
            <div class="body">${escapeHtml(t.body)}</div>
            <div class="mg-thread-actions">
                <button onclick="replyTo(${t.id})"><i class="fas fa-reply"></i> رد</button>
                <button onclick="deleteThread(${t.id})"><i class="fas fa-trash"></i> حذف</button>
            </div>
            ${reps?'<div class="mg-replies">'+reps+'</div>':''}
        </div>`;
    }).join('') || '<p style="text-align:center;color:#64748b;">لا توجد مواضيع بعد. كن أول من ينشر!</p>';
}
function escapeHtml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function postThread(){
    const name=(document.getElementById('commName').value||'زائر').trim().slice(0,40);
    const cat=document.getElementById('commCat').value;
    const title=(document.getElementById('commTitle').value||'').trim().slice(0,120);
    const body=(document.getElementById('commBody').value||'').trim().slice(0,2000);
    if(!title||!body){if(typeof showToast==='function')showToast('اكتب عنوان ومحتوى الموضوع','warning');return;}
    const arr=loadThreads();
    arr.push({id:Date.now(),name,cat,title,body,ts:Date.now(),replies:[]});
    saveThreads(arr);
    document.getElementById('commTitle').value='';
    document.getElementById('commBody').value='';
    renderThreads();
    if(typeof showToast==='function')showToast('تم نشر موضوعك بنجاح 🎉','success');
}
function replyTo(id){
    const txt=prompt('اكتب ردك:');
    if(!txt)return;
    const name=prompt('اسمك:')||'زائر';
    const arr=loadThreads();
    const t=arr.find(x=>x.id===id);
    if(t){t.replies=t.replies||[];t.replies.push({name:name.slice(0,40),body:txt.slice(0,1000),ts:Date.now()});saveThreads(arr);renderThreads();}
}
function deleteThread(id){
    if(!confirm('متأكد من حذف الموضوع؟'))return;
    const arr=loadThreads().filter(x=>x.id!==id);
    saveThreads(arr);
    renderThreads();
}
document.addEventListener('DOMContentLoaded',function(){
    setTimeout(renderThreads,300);
});

/* ================= Language Toggle (AR / EN) — Full Site ================= */
(function(){
    // Comprehensive AR -> EN dictionary for the UI chrome (nav, buttons,
    // labels, headings, placeholders, cart/checkout, toasts, categories…).
    // Content items (game/movie titles, product descriptions) stay as-is —
    // they are proper nouns.
    const MAP = {
        // Loading / brand
        "جاري التحميل...":"Loading...",
        "مرحباً بك في عالم الألعاب والترفيه":"Welcome to the world of gaming and entertainment",
        "مدونة روابط الألعاب - Mohab Gaming":"Games Links Blog - Mohab Gaming",
        // Nav
        "الرئيسية":"Home",
        "الألعاب":"Games",
        "البرامج":"Programs",
        "التطبيقات":"Apps",
        "الأفلام":"Movies",
        "المسلسلات":"Series",
        "الكرتون":"Cartoon",
        "المتجر":"Store",
        "المدونة":"Blog",
        "اتصل بنا":"Contact Us",
        "فاحص الجهاز":"PC Checker",
        "عضوية VIP":"VIP Membership",
        "مساعد AI":"AI Assistant",
        "المنتدى":"Forum",
        "وسائل التواصل":"Social",
        "بحث متقدم":"Advanced Search",
        "Language / اللغة":"Language / اللغة",
        // News ticker
        "آخر الاخبار:":"Latest News:",
        "آخر التحديثات:":"Latest updates:",
        "🎮 تم إضافة اخر تحديث للعبة Mecca Chameleon v2.7.0 اللعبة مجاناً بالكامل.":"🎮 Latest update of Mecca Chameleon v2.7.0 has been added — the game is completely free.",
        "🔥تم العمل الكامل على المتجر الان يمكنكم تجربته وشراء منتجات منه .":"🔥 The store is now fully working — try it and shop from it.",
        "🛡️ تم فحص وتأمين جميع روابط تحميل الألعاب لعام 2026.":"🛡️ All game download links for 2026 have been checked and secured.",
        "⭐ تابعنا للحصول على أحدث الألعاب والبرامج أول بأول.":"⭐ Follow us to get the latest games and programs first.",
        // Floating search
        "التصنيف":"Category",
        "الكل":"All",
        "ألعاب":"Games",
        "برامج":"Programs",
        "تطبيقات":"Apps",
        "أفلام":"Movies",
        "مسلسلات":"Series",
        "كرتون":"Cartoon",
        "الترتيب":"Sort",
        "الأكثر تطابقاً":"Most Relevant",
        "أبجدي":"Alphabetical",
        "الأحدث":"Newest",
        "ابدأ بالكتابة لرؤية النتائج الفورية":"Start typing to see instant results",
        "إلغاء":"Cancel",
        "لعبة متاحة":"available games",
        "برنامج مفيد":"useful programs",
        "تطبيق رائع":"great apps",
        "فيلم ومسلسل":"movies & series",
        "ابحث في الألعاب، البرامج، التطبيقات، الأفلام، المسلسلات، الكرتون...":"Search games, programs, apps, movies, series, cartoons...",
        "مسح":"Clear",
        "إغلاق":"Close",
        // Home
        "أحدث الألعاب":"Latest Games",
        "أحدث ما وصل — اضغط لفتح اللعبة":"Fresh drops — click to open the game",
        "الأكثر تحميلاً هذا الأسبوع":"Top Downloads This Week",
        "أعلى 5 ألعاب تم تحميلها":"Top 5 most downloaded games",
        "تحميل":"downloads",
        // Page headers
        "مكتبة الألعاب":"Games Library",
        "مكتبة البرامج":"Programs Library",
        "مكتبة التطبيقات":"Apps Library",
        "مكتبة الأفلام":"Movies Library",
        "مكتبة المسلسلات":"Series Library",
        "مكتبة الكرتون":"Cartoon Library",
        // Filters
        "جميع المنصات":"All Platforms",
        "الكمبيوتر":"PC",
        "الموبايل":"Mobile",
        "جميع الأنواع":"All Genres",
        "أكشن":"Action",
        "كوميديا":"Comedy",
        "دراما":"Drama",
        "رعب":"Horror",
        "إثارة":"Thriller",
        "جميع الأعمار":"All Ages",
        "أطفال":"Kids",
        "عائلي":"Family",
        "مراهقين":"Teens",
        "بالغين":"Adults",
        // Store hero
        "MG3 Store":"MG3 Store",
        "عرض مميز":"Featured Offer",
        "تسوق الآن":"Shop Now",
        "ابن تجميعتك":"Build Your Rig",
        "هدية مثالية للأصدقاء":"A perfect gift for friends",
        "برامج مدفوعة":"Paid Programs",
        "برامج أصلية بأسعار ممتازة":"Genuine programs at great prices",
        "شحن ألعاب":"Game Top-ups",
        "بطاقات شحن لجميع الألعاب":"Recharge cards for all games",
        "استضافات قوية بأسعار خيالية":"Powerful hosting at incredible prices",
        "اشتراكات بأفضل الأسعار":"Subscriptions at the best prices",
        "أحدث وأقوى الألعاب":"Latest and greatest games",
        "اكتشف أحدث وأقوى الإضافات إلى مكتبتنا من الألعاب المميزة":"Discover the latest and greatest additions to our library of featured games",
        "حتى":"up to",
        "العربة":"Cart",
        "الصندوق الغامض":"Mystery Box",
        // Store categories (JS)
        "ألعاب وبطاقات":"Games & Cards",
        "إكسسوارات":"Accessories",
        "اشتراكات":"Subscriptions",
        // Cart / checkout
        "عربة التسوق":"Shopping Cart",
        "العربة فارغة":"Your cart is empty",
        "إتمام الشراء":"Checkout",
        "إتمام الدفع":"Complete Payment",
        "طريقة الدفع":"Payment Method",
        "فودافون كاش":"Vodafone Cash",
        "إنستاباي":"InstaPay",
        "فيزا / ماستركارد":"Visa / Mastercard",
        "باى بال":"PayPal",
        "تأكيد الطلب":"Confirm Order",
        "تطبيق":"Apply",
        "ادخل كود الخصم (جرب: MG3)":"Enter discount code (try: MG3)",
        "الاسم الكامل":"Full Name",
        "رقم الهاتف":"Phone Number",
        "العنوان بالتفصيل":"Full Address",
        "تم إضافة المنتج للعربة":"Product added to cart",
        "تم حذف المنتج":"Product removed",
        "كود غير صالح":"Invalid code",
        "تم تأكيد طلبك بنجاح! سنتواصل معك قريباً":"Your order has been confirmed! We'll contact you soon",
        "تم تأكيد طلبك بنجاح!":"Your order has been confirmed!",
        "أضف للعربة":"Add to Cart",
        "منتج":"Product",
        "مميز":"Featured",
        "عرض":"Offer",
        "جديد":"New",
        "الأكثر مبيعاً":"Best Seller",
        // Product/store extras
        "وجهتك المتخصصة لشراء الألعاب الإلكترونية بأسعار تنافسية 💰":"Your specialized destination to buy digital games at competitive prices 💰",
        "مجموعة واسعة من أحدث الألعاب وشحن رصيد سريع لتلبية كل الأذواق 🚀":"A wide selection of the latest games and fast top-ups for every taste 🚀",
        "بواجهة سهلة الاستخدام تضمن تجربة تسوق مميزة.":"With an easy-to-use interface for a great shopping experience.",
        // Search placeholders per page
        "ابحث عن لعبة...":"Search for a game...",
        "ابحث عن برنامج...":"Search for a program...",
        "ابحث عن تطبيق...":"Search for an app...",
        "ابحث عن فيلم...":"Search for a movie...",
        "ابحث عن مسلسل...":"Search for a series...",
        "ابحث عن كرتون...":"Search for a cartoon...",
        "اكتب اسم اللعبة هنا...":"Type the game name here...",
        "اكتب اسم اللعبة/البرنامج اللي عاوزه":"Type the name of the game/program you want",
        "لم يتم العثور على نتائج مطابقة":"No matching results found",
        "لم يتم العثور على نتائج":"No results found",
        "يرجى إدخال كلمة البحث":"Please enter a search term",
        // PC Checker
        "فاحص متطلبات تشغيل الألعاب":"Games Requirements Checker",
        "أدخل مواصفات جهازك واعرف إذا كان يقدر يشغل اللعبة اللي عاوزها":"Enter your PC specs and see if it can run the game you want",
        "مواصفات جهازك":"Your PC Specs",
        "المعالج (CPU)":"Processor (CPU)",
        "الذاكرة (RAM) - جيجا":"Memory (RAM) - GB",
        "كرت الشاشة (GPU)":"Graphics Card (GPU)",
        "مساحة التخزين الفاضية (جيجا)":"Free Storage Space (GB)",
        "نوع التخزين":"Storage Type",
        "نظام التشغيل":"Operating System",
        "اكتب اسم اللعبة":"Type the game name",
        "اللعبة (اكتب أى لعبة فى العالم بالاسم — مثلاً: GTA 6, Elden Ring, Minecraft, FIFA 25)":"Game (type any game in the world by name — e.g. GTA 6, Elden Ring, Minecraft, FIFA 25)",
        "افحص هل جهازى يشغلها":"Check if my PC can run it",
        "اكتب اسم اللعبة الأول":"Type the game name first",
        // VIP
        "تحميل أسرع × بدون إعلانات × أولوية في الدعم × روابط حصرية":"Faster downloads × No ads × Priority support × Exclusive links",
        "اختر الباقة المناسبة":"Choose the right plan",
        "مجاني":"Free",
        "للمستخدم العادي":"For regular users",
        "تحميل عادي":"Regular downloads",
        "الوصول لكل الألعاب المجانية":"Access to all free games",
        "فيه إعلانات":"With ads",
        "سرعة محدودة":"Limited speed",
        "الباقة الحالية":"Current Plan",
        "VIP شهري":"VIP Monthly",
        "الأكثر طلباً":"Most Popular",
        "تحميل بسرعة x5":"5x download speed",
        "إزالة جميع الإعلانات":"No ads at all",
        "أولوية الدعم الفني":"Priority tech support",
        "روابط حصرية للأعضاء":"Members-only exclusive links",
        "شارة VIP بجانب اسمك":"VIP badge next to your name",
        "اشترك الآن":"Subscribe Now",
        "VIP سنوي":"VIP Yearly",
        "وفر 33%":"Save 33%",
        "كل ميزات الشهري":"All monthly plan features",
        "شهرين مجاناً":"Two months free",
        "طلب ألعاب مخصصة":"Custom game requests",
        "دعم على واتساب مباشر":"Live WhatsApp support",
        "اشترك سنوي":"Subscribe Yearly",
        "حالتك الحالية: مستخدم عادي. اشترك في VIP للاستمتاع بكل الميزات.":"Your current status: Regular user. Subscribe to VIP to enjoy all features.",
        // Contact
        "تواصل معنا":"Contact Us",
        "اختر القناة المفضلة لديك وتواصل مع فريق Mohab Gaming في أي وقت":"Pick your favorite channel and reach the Mohab Gaming team any time",
        "نشط":"Active",
        "قناة اليوتيوب":"YouTube Channel",
        "تابعنا على القناة الرسمية لأحدث الشروحات والمراجعات والعروض الحصرية":"Follow our official channel for the latest tutorials, reviews and exclusive offers",
        "رائج":"Trending",
        "حساب التيك توك":"TikTok Account",
        "تابعنا على تيك توك لأحدث الفيديوهات القصيرة والمحتوى الحصري":"Follow us on TikTok for the latest short videos and exclusive content",
        "تابع الآن":"Follow Now",
        "فوري":"Live",
        "سيرفر الديسكورد":"Discord Server",
        "انضم لمجتمعنا النشط، تفاعل مع الأعضاء واحصل على دعم مباشر على مدار الساعة":"Join our active community, chat with members and get 24/7 live support",
        "انضم للسيرفر":"Join Server",
        "رسمي":"Official",
        "البريد الإلكتروني":"Email",
        "راسلنا مباشرة للاستفسارات الرسمية، طلبات الشراكة، أو الإبلاغ عن المشاكل":"Message us directly for official inquiries, partnerships, or issues",
        "أرسل رسالة":"Send Message",
        // Item modal
        "تفاصيل العنصر":"Item Details",
        "مساعدة":"Help",
        "المطور":"Developer",
        "المخرج":"Director",
        "نسخ":"Copy",
        // Footer
        "وجهتك الأولى لتحميل أحدث الألعاب والبرامج والتطبيقات المجانية بأمان وسرعة عالية، ومشاهدة أفضل الأفلام والمسلسلات والكرتون.":"Your #1 destination to download the latest free games, programs and apps safely and quickly, and to watch the best movies, series and cartoons.",
        "روابط سريعة محدثة":"Updated Quick Links",
        "الفئات":"Categories",
        "ألعاب الأكشن":"Action Games",
        "ألعاب المغامرات":"Adventure Games",
        "ألعاب الرياضة":"Sports Games",
        "برامج التصميم":"Design Software",
        "تطبيقات معدلة":"Modded Apps",
        "أفلام حديثة":"Recent Movies",
        "مسلسلات عربية":"Arabic Series",
        "كرتون أطفال":"Kids Cartoons",
        "السيرفر الرسمي":"Official Server",
        "© 2026 Mohab Gaming. جميع الحقوق محفوظة.":"© 2026 Mohab Gaming. All rights reserved.",
        // Toasts / navigation feedback
        "تم فتح/إغلاق القائمة":"Menu toggled",
        "تم إغلاق التفاصيل":"Details closed",
        "تم الانتقال إلى أعلى الصفحة":"Scrolled to top",
        "بدء التحميل...":"Starting download...",
        "متاح اونلاين":"Online available",
        "غير متاح اونلاين":"Online not available",
        "رابط التحميل":"Download link",
        "تحميل مباشر":"Direct download",
        "تحميل اخر":"Another download",
        "رابط اخر":"Another link",
        "رابط بديل":"Alternative link",
        "تحميل الفيلم":"Download movie",
        "تحميل HD":"Download HD",
        "تحميل 4K":"Download 4K",
        "تحميل الموسم الأول":"Download Season 1",
        "تحميل جميع المواسم":"Download all seasons",
        "تحميل الكلاسيكي":"Download classic",
        "تحميل الحديث":"Download modern",
        "تحميل للكمبيوتر":"Download for PC",
        "تحميل للموبايل":"Download for Mobile",
        "تحميل اللعبة":"Download game",
        "ملف الاونلاين":"Online file",
        "تحميل مابات اللعبة":"Download game maps",
        "تحميل اخر للعبة":"Another game download",
        "تحميل ملف الاونلاين":"Download online file",
        "تحميل برنامج التورينت":"Download the torrent client",
        "الاونلاين داخل ملف اللعبة":"Online is inside the game file",
        "لعبة محاكى Simulator ولايوجد بها اونلاين":"Simulator game — no online mode",
        "ملف Apk":"APK file",
        "ملف APK":"APK file",
        "غير متاح حاليا ملف الاونلاين":"Online file currently unavailable",
        "الرئيسية":"Home",
        "لا توجد منتجات مطابقة":"No matching products",
        // Spec labels
        "المعالج":"Processor",
        "الذاكرة":"Memory",
        "كرت الشاشة":"Graphics Card",
        "مساحة التخزين":"Storage",
        "الرام":"RAM",
        "المساحة":"Space"
    };

    // Also normalize with collapsed whitespace so multi-line strings match.
    const NORM = {};
    for (const k in MAP) NORM[k.replace(/\s+/g,' ').trim()] = MAP[k];

    const ATTRS = ['placeholder','title','aria-label','alt'];
    const SKIP_TAGS = new Set(['SCRIPT','STYLE','NOSCRIPT','CODE','PRE']);
    const ORIG_TEXT = new WeakMap();   // textNode -> original nodeValue
    const ORIG_ATTR = new WeakMap();   // element  -> {attr:value}

    function translateText(raw){
        if (!raw) return null;
        const norm = raw.replace(/\s+/g,' ').trim();
        if (!norm) return null;
        const en = NORM[norm];
        if (!en) return null;
        // preserve leading / trailing whitespace of the original text node
        const lead = raw.match(/^\s*/)[0];
        const tail = raw.match(/\s*$/)[0];
        return lead + en + tail;
    }

    function walkTranslate(root, lang){
        if (!root) return;
        // Text nodes
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(n){
                if (!n.parentNode || SKIP_TAGS.has(n.parentNode.nodeName)) return NodeFilter.FILTER_REJECT;
                return NodeFilter.FILTER_ACCEPT;
            }
        });
        const nodes = [];
        let cur; while ((cur = walker.nextNode())) nodes.push(cur);
        for (const n of nodes){
            if (lang === 'en'){
                const en = translateText(n.nodeValue);
                if (en && en !== n.nodeValue){
                    if (!ORIG_TEXT.has(n)) ORIG_TEXT.set(n, n.nodeValue);
                    n.nodeValue = en;
                }
            } else {
                if (ORIG_TEXT.has(n)){
                    n.nodeValue = ORIG_TEXT.get(n);
                }
            }
        }
        // Attributes
        const els = (root.nodeType === 1)
            ? [root, ...root.querySelectorAll('*')]
            : Array.from(root.querySelectorAll ? root.querySelectorAll('*') : []);
        for (const el of els){
            if (!el.getAttribute) continue;
            for (const a of ATTRS){
                if (!el.hasAttribute(a)) continue;
                if (lang === 'en'){
                    const v = el.getAttribute(a);
                    const en = translateText(v);
                    if (en && en !== v){
                        const store = ORIG_ATTR.get(el) || {};
                        if (!(a in store)) store[a] = v;
                        ORIG_ATTR.set(el, store);
                        el.setAttribute(a, en);
                    }
                } else {
                    const store = ORIG_ATTR.get(el);
                    if (store && (a in store)) el.setAttribute(a, store[a]);
                }
            }
        }
    }

    let currentLang = 'ar';
    let observer = null;

    function applyLang(lang){
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
        walkTranslate(document.body, lang);
        const label = document.getElementById('langLabel');
        if (label) label.textContent = lang === 'ar' ? 'EN' : 'ع';
        const btn = document.getElementById('langToggleBtn');
        if (btn) btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل للعربية');
        try { localStorage.setItem('mg_lang', lang); } catch(e){}
    }

    window.toggleLanguage = function(){
        applyLang(currentLang === 'ar' ? 'en' : 'ar');
    };
    window.applyLang = applyLang;

    function startObserver(){
        if (observer || !document.body) return;
        observer = new MutationObserver(muts => {
            if (currentLang !== 'en') return;
            for (const m of muts){
                for (const node of m.addedNodes){
                    if (node.nodeType === 1) walkTranslate(node, 'en');
                    else if (node.nodeType === 3){
                        const en = translateText(node.nodeValue);
                        if (en && en !== node.nodeValue){
                            ORIG_TEXT.set(node, node.nodeValue);
                            node.nodeValue = en;
                        }
                    }
                }
                if (m.type === 'characterData' && m.target && m.target.nodeType === 3){
                    const en = translateText(m.target.nodeValue);
                    if (en && en !== m.target.nodeValue){
                        if (!ORIG_TEXT.has(m.target)) ORIG_TEXT.set(m.target, m.target.nodeValue);
                        m.target.nodeValue = en;
                    }
                }
            }
        });
        observer.observe(document.body, { childList:true, subtree:true, characterData:true });
    }

    function boot(){
        startObserver();
        let saved = 'ar';
        try { saved = localStorage.getItem('mg_lang') || 'ar'; } catch(e){}
        // Give the app a tick so initial dynamic renders exist first.
        setTimeout(()=>{ if (saved !== 'ar') applyLang(saved); else applyLang('ar'); }, 50);
    }
    if (document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();

/* ================= Home: Latest Games Carousel + Top Downloads ================= */
(function(){
    function getGames(){
        try { return (typeof gamesData !== 'undefined') ? gamesData : {}; } catch(e){ return {}; }
    }
    function openGame(key){
        try {
            if (typeof navigateToPage === 'function') { /* stay on home so modal shows over it */ }
            if (typeof openItemDetails === 'function') openItemDetails(key);
        } catch(e){}
    }
    function buildLatest(){
        const track = document.getElementById('latestGamesTrack');
        if (!track) return;
        const games = getGames();
        const keys = Object.keys(games).slice(0, 5);
        if (!keys.length) return;
        // Duplicate for seamless loop
        const items = keys.concat(keys).map(k => {
            const g = games[k];
            const safeTitle = (g.title||'').replace(/"/g,'&quot;');
            return `<div class="latest-slide" onclick="__openHomeGame('${k}')" title="${safeTitle}">
                <img src="${g.image}" alt="${safeTitle}" loading="lazy">
                <div class="latest-slide-overlay">
                    <span class="latest-slide-badge"><i class="fas fa-bolt"></i> جديد</span>
                    <h4 class="latest-slide-title">${g.title||''}</h4>
                    <span class="latest-slide-cta"><i class="fas fa-play"></i> افتح اللعبة</span>
                </div>
            </div>`;
        }).join('');
        track.innerHTML = items;
    }
    function fakeDownloads(seed){
        // deterministic pseudo-random count between 1200 and 9800
        let h = 0; for (let i=0;i<seed.length;i++) h = (h*31 + seed.charCodeAt(i)) >>> 0;
        return 1200 + (h % 8600);
    }
    function fmtNum(n){ return n.toLocaleString('en-US'); }
    function buildTop(){
        const list = document.getElementById('topDownloadsList');
        if (!list) return;
        const games = getGames();
        const keys = Object.keys(games);
        if (!keys.length) return;
        const ranked = keys.map(k => ({ k, g: games[k], d: fakeDownloads(k) }))
            .sort((a,b)=> b.d - a.d).slice(0, 5);
        list.innerHTML = ranked.map((r,i) => {
            const safeTitle = (r.g.title||'').replace(/"/g,'&quot;');
            return `<div class="top-dl-row" onclick="__openHomeGame('${r.k}')" title="${safeTitle}">
                <span class="top-dl-rank rank-${i+1}">#${i+1}</span>
                <img class="top-dl-img" src="${r.g.image}" alt="${safeTitle}" loading="lazy">
                <div class="top-dl-info">
                    <h4 class="top-dl-title">${r.g.title||''}</h4>
                    <div class="top-dl-meta">
                        <span class="top-dl-count"><i class="fas fa-download"></i> ${fmtNum(r.d)} <span data-i18n="home.downloads">تحميل</span></span>
                        <span class="top-dl-plat"><i class="fas fa-desktop"></i> ${r.g.platform||'PC'}</span>
                    </div>
                </div>
                <i class="fas fa-chevron-left top-dl-arrow"></i>
            </div>`;
        }).join('');
    }
    window.__openHomeGame = openGame;
    function init(){
        // Wait a tick so gamesData is fully attached
        setTimeout(()=>{ buildLatest(); buildTop(); }, 200);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

