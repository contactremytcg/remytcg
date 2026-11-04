const memberId = "3894055016867374984";

window.copyToClipboard = function(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "Copied! Open Sugargoo ✓";
        btn.style.background = "#fff";
        btn.style.color = "#111";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "";
            btn.style.color = "";
        }, 2500);
    });
};

const formatSugargooLink = (taobaoId) => {
    const taobaoUrl = encodeURIComponent(`https://item.taobao.com/item.htm?id=${taobaoId}`);
    const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
    const prefix = isMobile ? "m" : "www";
    return `https://${prefix}.sugargoo.com/#/home/productDetail?productLink=${taobaoUrl}&memberId=${memberId}`;
};

// ==========================================
// EXEMPLES DE BADGES POSSIBLES :
// badge: { text: "🔥 Hot Item", color: "#e74c3c" }
// badge: { text: "⏳ Coming Soon", color: "#3498db" }
// badge: { text: "⚠️ Low Stock", color: "#f39c12" }
// ==========================================

const produits = [
    {
        categorie: "30th Anniversary",
        nom: "30th Anniversary Booster Box (Display)",
        description: "Contains: 20 booster packs (5 cards/pack). The core set to pull classic reprints and exclusive alt arts.",
        taobaoId: "1077424694326",
        image: "https://toy-treasure.com/cdn/shop/files/30th-celebration-chinese.jpg?v=1790767347&width=1445",
        badge: { text: "🔥 Best Seller", color: "#e74c3c" }
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon & Espeon UPC Box",
        description: "Contains: Ultimate Premium Collection with Eeveelution ex promos, exclusive playmat, deck boxes, and packs.",
        taobaoId: "1062273634908",
        image: "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962",
        badge: { text: "⚠️ Low Stock", color: "#f39c12" }
    },
    {
        categorie: "30th Anniversary",
        nom: "Tri-Packs Blisters",
        description: "Contains: 3x 30th Anniversary booster packs and 1x guaranteed holographic promo card.",
        taobaoId: "1062273634908",
        image: "https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 7 (Psyduck Cover)",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs featuring the highly anticipated Psyduck set.",
        taobaoId: "", 
        image: "https://www.yumecards.ca/cdn/shop/files/Product-2026-10-17T231241.139.jpg?v=1792293584",
        badge: { text: "⏳ Coming Soon", color: "#3498db" },
        statut: "coming_soon" // Ceci transforme le bouton d'achat en "Notify Me"
    }
    // ... Tu peux copier/coller le reste de tes objets produits ici. 
    // Il te suffit d'ajouter la ligne `badge` ou `statut: "coming_soon"` si tu en as besoin !
];

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    
    liste.forEach(p => {
        const catBadge = Array.isArray(p.categorie) ? p.categorie.join(" • ") : p.categorie;
        
        // 1. Gestion du Macaron / Badge visuel
        let htmlBadge = '';
        if (p.badge) {
            htmlBadge = `<div class="card-badge" style="background: ${p.badge.color};">${p.badge.text}</div>`;
        }

        // 2. Gestion des boutons (En stock vs Coming Soon vs Missing)
        let boutonsHtml = '';
        if (p.statut === "coming_soon") {
            // Si c'est coming soon, on renvoie vers l'ancre #newsletter
            boutonsHtml = `
                <a href="#newsletter" class="btn-main-card btn-notify">🔔 Notify Me</a>
                <a href="#newsletter" class="btn-main-card btn-mobile btn-notify">🔔 Notify Me</a>
            `;
        } else if (p.taobaoId === "") {
            boutonsHtml = `<button class="btn-main-card" style="background: #e74c3c; color: #fff; cursor: not-allowed;">⚠️ ID Missing</button>`;
        } else {
            const taobaoUrlRaw = `https://item.taobao.com/item.htm?id=${p.taobaoId}`;
            const sugargooUrl = formatSugargooLink(p.taobaoId);
            boutonsHtml = `
                <button onclick="window.open('${sugargooUrl}', '_blank')" class="btn-main-card btn-pc">Order on Sugargoo</button>
                <button onclick="window.copyToClipboard('${taobaoUrlRaw}', this)" class="btn-main-card btn-mobile">Copy Link for App</button>
            `;
        }

        container.innerHTML += `
            <div class="card">
                ${htmlBadge}
                <img src="${p.image}" alt="${p.nom}" class="card-img" onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0PMkOk0FTHAa1QT4_ESpb7qv8fCuF9Y7BK-xsgWgN7HkxM93A9W2eDLT&s=10'">
                <div class="card-content">
                    <span class="category">${catBadge}</span>
                    <h3>${p.nom}</h3>
                    <p>${p.description}</p>
                    ${boutonsHtml}
                </div>
            </div>
        `;
    });
}

function genererCategories() {
    const select = document.getElementById('category-filter');
    const allCats = [];
    produits.forEach(p => {
        if (Array.isArray(p.categorie)) {
            allCats.push(...p.categorie);
        } else {
            allCats.push(p.categorie);
        }
    });
    const categoriesUniques = [...new Set(allCats)];
    
    categoriesUniques.forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

function filtrer() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const categorieSelectionnee = document.getElementById('category-filter').value;

    const resultats = produits.filter(p => {
        const correspondTexte = p.nom.toLowerCase().includes(recherche) || p.description.toLowerCase().includes(recherche);
        const correspondCategorie = categorieSelectionnee === "" || 
            (Array.isArray(p.categorie) ? p.categorie.includes(categorieSelectionnee) : p.categorie === categorieSelectionnee);
        
        return correspondTexte && correspondCategorie;
    });
    
    afficher(resultats);
}

genererCategories();
afficher(produits);
