// Remplace la fonction afficher(liste) dans ton stock.js par cette version :

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';

    const sectionsOrdre = [
        "🔥 Trending & Best Sellers",
        "30th Anniversary Collection",
        "Scarlet & Violet Era",
        "Gem Packs",
        "Collect 151 Series",
        "Sword & Shield Era",
        "Festival Gift Boxes",
        "Coin Bags & Accessories",
        "Premium Collection Boxes",
        "Blind Boxes & Figures"
    ];

    sectionsOrdre.forEach(secNom => {
        const itemsSec = liste.filter(p => p.section === secNom);
        if (itemsSec.length === 0) return;

        let secSubtitle = "";
        if (secNom === "🔥 Trending & Best Sellers") secSubtitle = "Curated Top Picks for Immediate Dispatch";
        else if (secNom === "30th Anniversary Collection") secSubtitle = "Complete 30th Anniversary Release Lineup";
        else if (secNom === "Scarlet & Violet Era") secSubtitle = "CSV10.5 through CSV1 Main Sets";
        else if (secNom === "Gem Packs") secSubtitle = "Vol. 7 through Vol. 1 Jumbo Boosters";
        else if (secNom === "Collect 151 Series") secSubtitle = "The Definitive Kanto 151 Archive";
        else if (secNom === "Sword & Shield Era") secSubtitle = "CS6 through CS1 Classic Eras";
        else if (secNom === "Festival Gift Boxes") secSubtitle = "Limited Chinese Festival Editions (Simplified Chinese)";
        else if (secNom === "Coin Bags & Accessories") secSubtitle = "Official Collector Coin & Pack Bundles";
        else if (secNom === "Premium Collection Boxes") secSubtitle = "Deluxe ETBs & Specialty Collector Boxes";
        else if (secNom === "Blind Boxes & Figures") secSubtitle = "Official Mystery Figurines & Boosters";

        let sectionHtml = `
            <div class="era-section">
                <div class="era-header">
                    <h2 class="era-title">${secNom}</h2>
                    <span class="era-subtitle">${secSubtitle}</span>
                </div>
                <div class="grid">
        `;

        itemsSec.forEach(p => {
            const catBadge = Array.isArray(p.categorie) ? p.categorie.join(" • ") : p.categorie;
            
            let htmlBadge = '';
            if (p.statut === "out_of_stock") {
                htmlBadge = `<div class="card-badge" style="background: #555;">✕ Out of Stock</div>`;
            } else if (p.badge) {
                htmlBadge = `<div class="card-badge" style="background: ${p.badge.color};">${p.badge.text}</div>`;
            }

            // BLOC FOURNISSEUR HARMONISÉ AVEC ICÔNE CARTON
            let supplierContent = '';
            if (p.fournisseur && p.fournisseurBackup) {
                supplierContent = `<span>Supplier: <strong>${p.fournisseur}</strong> • Backup: <strong>${p.fournisseurBackup}</strong></span>`;
            } else if (p.fournisseur) {
                supplierContent = `<span>Supplier: <strong>${p.fournisseur}</strong></span>`;
            } else {
                supplierContent = `<span>Direct Verified Stock</span>`;
            }

            let fournisseurHtml = `
                <div class="supplier-info">
                    <svg class="supplier-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                    <div class="supplier-text">${supplierContent}</div>
                </div>
            `;

            let imagesHtml = '';
            const fallback = "https://placehold.co/600x400/1c1c1c/FF6A00?text=RemyTCG";

            if (p.images && p.images.length > 1) {
                let dotsHtml = `<div class="carousel-dots">`;
                p.images.forEach((_, idx) => {
                    dotsHtml += `<span class="carousel-dot ${idx === 0 ? 'active' : ''}" onclick="jumpToSlide(this, ${idx})"></span>`;
                });
                dotsHtml += `</div>`;

                imagesHtml = `
                    <div class="image-wrapper">
                        <button class="carousel-arrow prev" onclick="slideCarousel(this, -1)">‹</button>
                        <div class="card-carousel" onscroll="updateDotsOnScroll(this)">
                            ${p.images.map(img => `<img src="${img}" alt="${p.nom}" class="card-img" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallback}'">`).join('')}
                        </div>
                        <button class="carousel-arrow next" onclick="slideCarousel(this, 1)">›</button>
                        ${dotsHtml}
                    </div>
                `;
            } else if (p.images && p.images.length === 1) {
                imagesHtml = `<img src="${p.images[0]}" alt="${p.nom}" class="card-img card-img-single" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallback}'">`;
            }

            let boutonsHtml = '';
            if (p.statut === "out_of_stock") {
                boutonsHtml = `
                    <button class="btn-main-card" style="background: #222327; color: #666; border: 1px solid #333338; cursor: not-allowed;">✕ Out of Stock</button>
                    <div class="btn-main-card btn-backup btn-backup-placeholder" aria-hidden="true"></div>
                `;
            } else if (p.statut === "coming_soon") {
                boutonsHtml = `
                    <a href="https://instagram.com/remy.tcg" target="_blank" class="btn-main-card btn-notify btn-pc">🔔 Follow IG for Drops</a>
                    <a href="https://instagram.com/remy.tcg" target="_blank" class="btn-main-card btn-notify btn-mobile">🔔 Follow IG for Drops</a>
                    <div class="btn-main-card btn-backup btn-backup-placeholder" aria-hidden="true"></div>
                `;
            } else if (!p.taobaoId || p.taobaoId.trim() === "") {
                boutonsHtml = `
                    <button class="btn-main-card" style="background: #e74c3c; color: #fff; cursor: not-allowed;">⚠️ ID Missing</button>
                    <div class="btn-main-card btn-backup btn-backup-placeholder" aria-hidden="true"></div>
                `;
            } else {
                const taobaoUrlRaw = `https://item.taobao.com/item.htm?id=${p.taobaoId}`;
                const sugargooUrl = formatSugargooLink(p.taobaoId);
                
                boutonsHtml = `
                    <button onclick="triggerProductAction('pc', '${sugargooUrl}')" class="btn-main-card btn-pc">Order on Sugargoo</button>
                    <button onclick="triggerProductAction('mobile', '${taobaoUrlRaw}', this)" class="btn-main-card btn-mobile">Copy Link for App</button>
                `;
                
                if (p.taobaoId2 && p.taobaoId2.trim() !== "") {
                    const taobaoUrlRaw2 = `https://item.taobao.com/item.htm?id=${p.taobaoId2}`;
                    const sugargooUrl2 = formatSugargooLink(p.taobaoId2);
                    
                    boutonsHtml += `
                        <button onclick="triggerProductAction('pc', '${sugargooUrl2}')" class="btn-main-card btn-backup btn-pc">Backup Supplier (If Out of Stock)</button>
                        <button onclick="triggerProductAction('mobile', '${taobaoUrlRaw2}', this)" class="btn-main-card btn-backup btn-mobile">Copy Backup Supplier</button>
                    `;
                } else {
                    boutonsHtml += `
                        <div class="btn-main-card btn-backup btn-backup-placeholder" aria-hidden="true"></div>
                    `;
                }
            }

            sectionHtml += `
                <div class="card">
                    ${htmlBadge}
                    ${imagesHtml}
                    <div class="card-content">
                        <span class="category">${catBadge}</span>
                        <h3>${p.nom}</h3>
                        <p>${p.description}</p>
                        ${fournisseurHtml}
                        <div class="buttons-container">
                            ${boutonsHtml}
                        </div>
                    </div>
                </div>
            `;
        });

        sectionHtml += `</div></div>`;
        container.innerHTML += sectionHtml;
    });
}
