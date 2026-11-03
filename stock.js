const memberId = "3894055016867374984";

window.copyToClipboard = function(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "Copied! Open Sugargoo App ✓";
        btn.style.background = "#fff";
        btn.style.color = "#FF6A00";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "";
            btn.style.color = "";
        }, 2500);
    }).catch(err => {
        console.error('Erreur de copie', err);
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
    // AS SEEN ON MY REELS
    // ==========================================
    {
        categorie: "As Seen on My Reels",
        nom: "Greninja Keychain Set",
        description: "As seen in my latest opening video!",
        taobaoId: "1080814663430",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600"
    },

    // ==========================================
    // 30TH ANNIVERSARY EXCLUSIVE COLLECTION
    // ==========================================
    {
        categorie: "30th Anniversary",
        nom: "30th Anniversary Booster Box (Display)",
        description: "Contains 20 booster packs. The core set for anniversary pulls!",
        taobaoId: "1062273634908",
        image: "https://toy-treasure.com/cdn/shop/files/30th-celebration-chinese.jpg?v=1790767347&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Charizard Figure Box",
        description: "Premium box featuring an exclusive Charizard figure and special promos.",
        taobaoId: "1084248931939",
        image: "https://www.tcghobby.com/cdn/shop/files/30thcelebrationcharizardfigurine.webp?v=1787160912"
    },
    {
        categorie: "30th Anniversary",
        nom: "Futuristic Box",
        description: "A highly sought-after collector's box with a futuristic theme and exclusive hits.",
        taobaoId: "", // ⚠️ ID TAOBAO MANQUANT
        image: "https://monketic.com/cdn/shop/files/002_b0146a55-cf66-42d3-921c-9b62d7c09e3b.png?v=1792512443&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon & Espeon UPC Box",
        description: "The ultimate Ultra Premium Collection featuring both iconic Eeveelutions.",
        taobaoId: "1062273634908",
        image: "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962"
    },
    {
        categorie: "30th Anniversary",
        nom: "Tri-Packs Blisters",
        description: "Perfect for casual rips, featuring 3 packs and a guaranteed promo card.",
        taobaoId: "1062273634908",
        image: "https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon Box",
        description: "Dedicated Umbreon collector's box with exclusive accessories and packs.",
        taobaoId: "1062273634908",
        image: "https://www.tcghobby.com/cdn/shop/files/simplifiedchinesedeluxesetumbreon.webp?v=1789224364"
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Box",
        description: "Dedicated Espeon collector's box with exclusive accessories and packs.",
        taobaoId: "1062273634908",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Espeon_ex_Deluxe_Deck_Set_Simplified_Chinese.jpg?v=1789823886&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Greninja Keychain Box",
        description: "Includes an exclusive Greninja keychain and assorted booster packs.",
        taobaoId: "1080814663430",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Keychain Box",
        description: "Includes an exclusive Espeon keychain and assorted booster packs.",
        taobaoId: "1080814663430",
        image: "https://spoilsandloot.com/cdn/shop/files/syl_1.jpg?v=1789577455"
    },
    {
        categorie: ["30th Anniversary", "Blind Boxes"],
        nom: "Pikachu Blind Box",
        description: "A fun mystery box featuring Pikachu exclusives and surprise hits.",
        taobaoId: "1079806548243",
        image: "https://collectorstore.com/cdn/shop/files/CollectorStore00002_7207263c-4504-4ee0-ae14-b3d648f6dba7.jpg?v=1790101321&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 1",
        description: "Perfect entry point for the 30th-anniversary set.",
        taobaoId: "1036462263685",
        image: "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_30th_Anniversary_First_Partner_Special_Illustration_Card_Set_Vol._1_Display_Set.jpg?v=1776401355&width=645"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 2",
        description: "Second wave starter collection for the 30th anniversary.",
        taobaoId: "1054578164218",
        image: "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon30thAnniversaryFirstPartnerSpecialIllustrationCardSetVol.2.webp?crop=center&height=500&v=1778251789&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 3",
        description: "Third wave starter collection for the 30th anniversary.",
        taobaoId: "1067989553110",
        image: "https://www.tcghobby.com/cdn/shop/files/firstpartnerdisplaysetvol.3set.webp?v=1784301375"
    },

    // ==========================================
    // BLIND BOXES
    // ==========================================
    {
        categorie: "Blind Boxes",
        nom: "Ditto Blind Box",
        description: "Ditto Blind Box collection.",
        taobaoId: "1085294497168",
        image: "https://icecreamshopper.com/cdn/shop/files/O1CN01z0YkZYMt2vC1chua__4611686018427385661-0-item_pic.webp?v=1790240505&width=533"
    },

    // ==========================================
    // GEM PACKS
    // ==========================================
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 1",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        taobaoId: "979607578715",
        image: "https://www.maxgaming.com/bilder/artiklar/zoom/35546_1.jpg?m=1753267142"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 2",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        taobaoId: "932678630102",
        image: "https://m.media-amazon.com/images/I/51+kPL0qduL.jpg"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 3",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        taobaoId: "932678630102",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmoBQZ-Tg4lSqbjGr8VX3w-v8xzRaFsq9_HL5LCq2kFeJpnMO1km0xeoX&s=10"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 4",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        taobaoId: "932678630102",
        image: "https://spoilsandloot.com/cdn/shop/files/chinese-gem-pack-vol-4-pokemon-booster-box.webp?v=1774588957"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 5",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        taobaoId: "932678630102",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TLXDOLzUX85KYbOhVhPXGUZuYcuJ5YgnPabKA6OwVNgTR-WnT4xAA3o&s=10"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 6",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        taobaoId: "932678630102",
        image: "https://remicardtrader.ca/cdn/shop/files/POKECNGEMPACK6.jpg?v=1786454812"
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 7 (Psyduck Cover)",
        description: "The brand new, highly anticipated jumbo set featuring Psyduck and fresh alternate arts.",
        taobaoId: "932678630102",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0PMkOk0FTHAa1QT4_ESpb7qv8fCuF9Y7BK-xsgWgN7HkxM93A9W2eDLT&s=10"
    },

    // ==========================================
    // SCARLET & VIOLET ERA
    // ==========================================
    {
        categorie: "Scarlet & Violet Era",
        nom: "Chasing Glory (CSV10)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "1064632260800",
        image: "https://collectorstore.com/cdn/shop/files/CollectorStore00001_937038ac-8bb9-4f6e-950b-742363216669.jpg?v=1784582543&width=990"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Crystal Gathering (CSV9.5)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "1058877644488",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiWS_bFR5gh7QRwgevHWL5Naw-8q9-wlqlLHh-Gwil5rhRVYNoP7wSfI&s=10"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Stellar Crystal (CSV9)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "", // ⚠️ ID TAOBAO MANQUANT
        image: "https://remicardtrader.ca/cdn/shop/files/POKECNSTELCRYSSLIM.jpg?v=1781539002"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Bright Fantasy (CSV8)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "", // ⚠️ ID TAOBAO MANQUANT
        image: "https://packflipps.com/cdn/shop/files/IMG_2671.jpg?v=1776975091"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Blade Awakened (CSV7)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "1036430851914",
        image: "https://remicardtrader.ca/cdn/shop/files/PKCNBASBBOX.jpg?v=1792010716"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Paradox Veil (CSV6)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "", // ⚠️ ID TAOBAO MANQUANT
        image: "https://galactictoys.com/cdn/shop/files/6977321128086_1.jpg?v=1787884173"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Dark Crystal Blaze (CSV5)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "1038938904501",
        image: "https://godofcards.com/cdn/shop/files/pokemon-dark-crystal-blaze-csv5c-15er-display-s-chinesisch.jpg?v=1773292564&width=600"
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Reward Round (CSV4)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        taobaoId: "", // ⚠️ ID TAOBAO MANQUANT
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztHore7cjIXIaCEjlnPeenDehZZb9N-jrM2zQrArON31YbNnEW8eUiLA&s=10"
    },

    // ==========================================
    // COLLECT 151 SERIES
    // ==========================================
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Gathering",
        description: "Standard 151 booster box display.",
        taobaoId: "899608090307",
        image: "https://card-binder.com/cdn/shop/files/Pokemon-151C-Collect-151-Gathering-Boosterbox.webp?v=1756631761"
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Surprise",
        description: "Standard 151 booster box display.",
        taobaoId: "899608090307",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBo7t9UrnS88uDSBRdYcKyJuJY3eSGZ-bGMO9YIQq2ZYIcxXRVxfNzSza&s=10"
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Hope",
        description: "Standard 151 booster box display.",
        taobaoId: "899608090307",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwzkSMA16zX0CK3vVFebOtzYpxpKYLMUUO_WFJzprM49JVi5TImfCYKph&s=10"
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Journey",
        description: "Standard 151 booster box display.",
        taobaoId: "899608090307",
        image: "https://lh6.googleusercontent.com/proxy/rDdWYwY6yLcBtTbQbQ5CzcCqmcUCUs-9ebr0zXjK2IisW3SqfJE6PWm99SUGDmKabd7M7HkgGpwog6F0T4g1c19Rov_ZzKlepN3P7rInxo9J39EJt9oRnic-HqVKTw_5mr6D"
    }
];

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    
    liste.forEach(p => {
        const catBadge = Array.isArray(p.categorie) ? p.categorie.join(" • ") : p.categorie;
        const estManquant = (p.taobaoId === "");

        const taobaoUrlRaw = estManquant ? "" : `https://item.taobao.com/item.htm?id=${p.taobaoId}`;
        const sugargooUrl = estManquant ? "#" : formatSugargooLink(p.taobaoId);

        let boutonsHtml = '';
        if (estManquant) {
            boutonsHtml = `<button class="btn-main-card" style="background: #e74c3c; color: #fff; border: 1px solid #c0392b; cursor: not-allowed;">⚠️ ID Taobao Missing</button>`;
        } else {
            boutonsHtml = `
                <button onclick="triggerProductAction('pc', '${sugargooUrl}')" class="btn-main-card btn-pc">Order on Sugargoo</button>
                <button onclick="triggerProductAction('mobile', '${taobaoUrlRaw}', this)" class="btn-main-card btn-mobile">Copy Link for App</button>
            `;
        }

        container.innerHTML += `
            <div class="card">
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
