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

const produits = [
    // ==========================================
    // 30TH ANNIVERSARY EXCLUSIVE COLLECTION
    // ==========================================
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
        description: "Contains: Ultimate Premium Collection with Eeveelution ex promos, exclusive playmat, deck boxes, and multiple booster packs.",
        taobaoId: "1062273634908",
        image: "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962",
        badge: { text: "⚠️ Low Stock", color: "#f39c12" }
    },
    {
        categorie: "30th Anniversary",
        nom: "Charizard Figure Box",
        description: "Contains: 1x Exclusive Charizard Figure, multiple Promo cards (incl. Charizard ex), and assorted Anniversary booster packs.",
        taobaoId: "1084248931939",
        image: "https://www.tcghobby.com/cdn/shop/files/30thcelebrationcharizardfigurine.webp?v=1787160912"
    },
    {
        categorie: "30th Anniversary",
        nom: "Tri-Packs Blisters",
        description: "Contains: 3x 30th Anniversary booster packs and 1x guaranteed holographic promo card.",
        taobaoId: "1062273634908",
        image: "https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"
    },
    {
        categorie: "30th Anniversary",
        nom: "Futuristic Box",
        description: "Contains: Premium display case, exclusive futuristic-themed accessories, and highly sought-after booster packs.",
        taobaoId: "", 
        image: "https://monketic.com/cdn/shop/files/002_b0146a55-cf66-42d3-921c-9b62d7c09e3b.png?v=1792512443&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon Deluxe Box",
        description: "Contains: 1x Umbreon ex Promo, custom Umbreon card sleeves, premium deck box, and 30th Anniversary packs.",
        taobaoId: "1062273634908",
        image: "https://www.tcghobby.com/cdn/shop/files/simplifiedchinesedeluxesetumbreon.webp?v=1789224364"
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Deluxe Box",
        description: "Contains: 1x Espeon ex Promo, custom Espeon card sleeves, premium deck box, and 30th Anniversary packs.",
        taobaoId: "1062273634908",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Espeon_ex_Deluxe_Deck_Set_Simplified_Chinese.jpg?v=1789823886&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Greninja Keychain Box",
        description: "Contains: 3x 30th Anniversary booster packs, 1x Greninja ex promo card, 1x Display Keychain.",
        taobaoId: "1080814663430",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Sylveon Keychain Box",
        description: "Contains: 3x 30th Anniversary booster packs, 1x Sylveon ex (Fairy Eevee) promo card, 1x Display Keychain.",
        taobaoId: "1080814663430",
        image: "https://spoilsandloot.com/cdn/shop/files/syl_1.jpg?v=1789577455"
    },
    {
        categorie: ["30th Anniversary", "Blind Boxes"],
        nom: "Pikachu Blind Box",
        description: "Contains: 1x Exclusive Pikachu-themed merchandise item and assorted booster packs.",
        taobaoId: "1082955160912",
        image: "https://collectorstore.com/cdn/shop/files/CollectorStore00002_7207263c-4504-4ee0-ae14-b3d648f6dba7.jpg?v=1790101321&width=1445"
    },
    {
        categorie: ["30th Anniversary", "Blind Boxes"],
        nom: "Eevee Blind Box",
        description: "Contains: 1x Exclusive Eevee-themed merchandise item and assorted booster packs.",
        taobaoId: "1078195403792",
        image: "https://img.alicdn.com/bao/uploaded/i1/2214696073021/O1CN01ddomU8YUWFI1chua_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 1",
        description: "Contains: First Partner Promo cards and a selection of booster packs. Great for beginners.",
        taobaoId: "1036462263685",
        image: "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_30th_Anniversary_First_Partner_Special_Illustration_Card_Set_Vol._1_Display_Set.jpg?v=1776401355&width=645"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 2",
        description: "Contains: Wave 2 First Partner Promo cards and a selection of booster packs.",
        taobaoId: "1059308989628",
        image: "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon30thAnniversaryFirstPartnerSpecialIllustrationCardSetVol.2.webp?crop=center&height=500&v=1778251789&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 3",
        description: "Contains: Wave 3 First Partner Promo cards and a selection of booster packs.",
        taobaoId: "1070165751188",
        image: "https://www.tcghobby.com/cdn/shop/files/firstpartnerdisplaysetvol.3set.webp?v=1784301375"
    },

    // ==========================================
    // PREMIUM COLLECTION BOXES
    // ==========================================
    {
        categorie: "Premium Collection Boxes",
        nom: "Master Strategy Milton ex Deck Building Set",
        description: "Contains: Ready-to-play Milton ex deck, premium sleeves, a deck box, and multiple booster packs.",
        taobaoId: "1008155364462",
        image: "https://img.alicdn.com/bao/uploaded/i1/2214696073021/O1CN01e54xTP1YBfdFtu2Mp_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Raging Bolt ex Collection Box",
        description: "Contains: 1x Raging Bolt ex Promo, exclusive jumbo card/display, and assorted booster packs.",
        taobaoId: "1065661862776",
        image: "https://img.alicdn.com/bao/uploaded/i2/2214696073021/O1CN01tdbIcU1YBffShL7uq_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Tycoon Premium Box",
        description: "Contains: Tycoon-themed exclusive Promo cards, high-end collector supplies, and booster packs.",
        taobaoId: "1065668842312",
        image: "https://img.alicdn.com/bao/uploaded/i2/2214696073021/O1CN01qus21E1YBffSU1MzU_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Dragapult ex Collection Box",
        description: "Contains: 1x Dragapult ex Promo, themed TCG accessories, and assorted booster packs.",
        taobaoId: "1066680325531",
        image: "https://img.alicdn.com/bao/uploaded/i2/2214696073021/O1CN01fBXVFn1YBffSr5GCK_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Wellspring Mask (Blue) Gift Box",
        description: "Contains: Ogerpon ex Blue Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1049188091485",
        image: "https://img.alicdn.com/bao/uploaded/i3/2214696073021/O1CN01vz9zGd1YBfeYpQmRb_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Cornerstone Mask (Brown) Gift Box",
        description: "Contains: Ogerpon ex Brown Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1050912105033",
        image: "https://img.alicdn.com/bao/uploaded/i2/2214696073021/O1CN01r7YA2K1YBfedavSi7_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Teal Mask (Green) Gift Box",
        description: "Contains: Ogerpon ex Green Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1050909737218",
        image: "https://img.alicdn.com/bao/uploaded/i1/2214696073021/O1CN01xLUr5O1YBfeezTsrB_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Hearthflame Mask (Red) Gift Box",
        description: "Contains: Ogerpon ex Red Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1050912901200",
        image: "https://img.alicdn.com/bao/uploaded/i1/2214696073021/O1CN01ILip0k1YBfedmA85J_!!4611686018427385661-0-item_pic.jpg"
    },

    // ==========================================
    // BLIND BOXES
    // ==========================================
    {
        categorie: "Blind Boxes",
        nom: "Dream Figure Vol. 2 Blind Box",
        description: "Contains: 1x Random Dream Vol. 2 Pokémon figure and selected booster packs.",
        taobaoId: "1044387395690",
        image: "https://img.alicdn.com/bao/uploaded/i3/2214696073021/O1CN014iUU9g1YBfeNftS5I_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Blind Boxes",
        nom: "Ditto Blind Box",
        description: "Contains: 1x Random Ditto-themed merchandise item and selected booster packs.",
        taobaoId: "1085294497168",
        image: "https://icecreamshopper.com/cdn/shop/files/O1CN01z0YkZYMt2vC1chua__4611686018427385661-0-item_pic.webp?v=1790240505&width=533"
    },

    // ==========================================
    // ACCESSORIES & COIN BAGS
    // ==========================================
    {
        categorie: "Accessories",
        nom: "Chasing Glory Coin Bag",
        description: "Contains: 3x Chasing Glory booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1067353432814",
        image: "https://img.alicdn.com/bao/uploaded/i4/2214696073021/O1CN01jHlilS1YBffS8LKt0_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Accessories",
        nom: "Bright Fantasy Coin Bag",
        description: "Contains: 3x Bright Fantasy booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1026530979141",
        image: "https://img.alicdn.com/bao/uploaded/i3/2214696073021/O1CN019hoY241YBfdlxjFsT_!!4611686018427385661-0-item_pic.jpg"
    },
    {
        categorie: "Accessories",
        nom: "Blade Awakening Coin Bag",
        description: "Contains: 3x Blade Awakening booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1008157120043",
        image: "https://img.alicdn.com/bao/uploaded/i4/2214696073021/O1CN01kSJAQC1YBfdF2Y6gT_!!4611686018427385661-0-item_pic.jpg"
    },

    // ==========================================
    // GEM PACKS
    // ==========================================
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 1",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits per pack.",
        taobaoId: "979607578715",
        image: "https://www.maxgaming.com/bilder/artiklar/zoom/35546_1.jpg?m=1753267142"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 2",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits per pack.",
        taobaoId: "932678630102",
        image: "https://m.media-amazon.com/images/I/51+kPL0qduL.jpg"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 3",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits per pack.",
        taobaoId: "932678630102",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmoBQZ-Tg4lSqbjGr8VX3w-v8xzRaFsq9_HL5LCq2kFeJpnMO1km0xeoX&s=10"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 4",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits per pack.",
        taobaoId: "1019772789105",
        image: "https://spoilsandloot.com/cdn/shop/files/chinese-gem-pack-vol-4-pokemon-booster-box.webp?v=1774588957"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 5",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits per pack.",
        taobaoId: "932678630102",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TLXDOLzUX85KYbOhVhPXGUZuYcuJ5YgnPabKA6OwVNgTR-WnT4xAA3o&s=10"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 6",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits per pack.",
        taobaoId: "1070975018438",
        image: "https://remicardtrader.ca/cdn/shop/files/POKECNGEMPACK6.jpg?v=1786454812"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 7 (Psyduck Cover)",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs featuring the highly anticipated Psyduck set.",
        taobaoId: "", 
        image: "https://www.yumecards.ca/cdn/shop/files/Product-2026-10-17T231241.139.jpg?v=1792293584",
        badge: { text: "⏳ Coming Soon", color: "#3498db" },
        statut: "coming_soon"
    },

    // ==========================================
    // SCARLET & VIOLET ERA
    // ==========================================
    {
        categorie: "Scarlet & Violet Era",
        nom: "Chasing Glory (CSV10)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1063240655679",
        image: "https://collectorstore.com/cdn/shop/files/CollectorStore00001_937038ac-8bb9-4f6e-950b-742363216669.jpg?v=1784582543&width=990"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Crystal Gathering (CSV9.5)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1058877644488",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiWS_bFR5gh7QRwgevHWL5Naw-8q9-wlqlLHh-Gwil5rhRVYNoP7wSfI&s=10"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Stellar Crystal (CSV9)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1049011746197",
        image: "https://remicardtrader.ca/cdn/shop/files/POKECNSTELCRYSSLIM.jpg?v=1781539002"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Bright Fantasy (CSV8)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1027188942536",
        image: "https://packflipps.com/cdn/shop/files/IMG_2671.jpg?v=1776975091"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Blade Awakened (CSV7)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1008153816247",
        image: "https://remicardtrader.ca/cdn/shop/files/PKCNBASBBOX.jpg?v=1792010716"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Paradox Veil (CSV6)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "",
        image: "https://galactictoys.com/cdn/shop/files/6977321128086_1.jpg?v=1787884173"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Dark Crystal Blaze (CSV5)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1038938904501",
        image: "https://godofcards.com/cdn/shop/files/pokemon-dark-crystal-blaze-csv5c-15er-display-s-chinesisch.jpg?v=1773292564&width=600"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Reward Round (CSV4)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztHore7cjIXIaCEjlnPeenDehZZb9N-jrM2zQrArON31YbNnEW8eUiLA&s=10"
    },

    // ==========================================
    // COLLECT 151 SERIES
    // ==========================================
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Gathering",
        description: "Contains: 20 booster packs. Factory sealed display box from the highly demanded 151 set.",
        taobaoId: "899608090307",
        image: "https://card-binder.com/cdn/shop/files/Pokemon-151C-Collect-151-Gathering-Boosterbox.webp?v=1756631761"
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Surprise",
        description: "Contains: 20 booster packs. Factory sealed display box from the highly demanded 151 set.",
        taobaoId: "899608090307",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBo7t9UrnS88uDSBRdYcKyJuJY3eSGZ-bGMO9YIQq2ZYIcxXRVxfNzSza&s=10"
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Hope",
        description: "Contains: 20 booster packs. Factory sealed display box from the highly demanded 151 set.",
        taobaoId: "899608090307",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwzkSMA16zX0CK3vVFebOtzYpxpKYLMUUO_WFJzprM49JVi5TImfCYKph&s=10"
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Journey",
        description: "Contains: 20 booster packs. Factory sealed display box from the highly demanded 151 set.",
        taobaoId: "899608090307",
        image: "https://lh6.googleusercontent.com/proxy/rDdWYwY6yLcBtTbQbQ5CzcCqmcUCUs-9ebr0zXjK2IisW3SqfJE6PWm99SUGDmKabd7M7HkgGpwog6F0T4g1c19Rov_ZzKlepN3P7rInxo9J39EJt9oRnic-HqVKTw_5mr6D"
    }
];

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    
    liste.forEach(p => {
        const catBadge = Array.isArray(p.categorie) ? p.categorie.join(" • ") : p.categorie;
        
        let htmlBadge = '';
        if (p.badge) {
            htmlBadge = `<div class="card-badge" style="background: ${p.badge.color};">${p.badge.text}</div>`;
        }

        let boutonsHtml = '';
        if (p.statut === "coming_soon") {
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
                <button onclick="triggerProductAction('pc', '${sugargooUrl}')" class="btn-main-card btn-pc">Order on Sugargoo</button>
                <button onclick="triggerProductAction('mobile', '${taobaoUrlRaw}', this)" class="btn-main-card btn-mobile">Copy Link for App</button>
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
