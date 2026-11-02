const placeholderImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0PMkOk0FTHAa1QT4_ESpb7qv8fCuF9Y7BK-xsgWgN7HkxM93A9W2eDLT&s=10";
const defaultLink = "https://joyagoo.com/register/?ref=301118558";

const produits = [
    // As Seen on My Reels
    {
        categorie: "As Seen on My Reels",
        nom: "Greninja Keychain Set",
        description: "As seen in my latest opening video!",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1080814663430&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jTiK1Ov3j7ZePoc%3Ftk%3DFjg46a8Zg0o&ref=301118558",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600"
    },
    // 30th Anniversary Exclusive Collection
    {
        categorie: "30th Anniversary",
        nom: "30th Anniversary Booster Box (Display)",
        description: "Contains 20 booster packs. The core set for anniversary pulls!",
        lien: defaultLink,
        image: "https://toy-treasure.com/cdn/shop/files/30th-celebration-chinese.jpg?v=1790767347&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Charizard Figure Box",
        description: "Premium box featuring an exclusive Charizard figure and special promos.",
        lien: defaultLink,
        image: "https://www.tcghobby.com/cdn/shop/files/30thcelebrationcharizardfigurine.webp?v=1787160912"
    },
    {
        categorie: "30th Anniversary",
        nom: "Futuristic Box",
        description: "A highly sought-after collector's box with a futuristic theme and exclusive hits.",
        lien: defaultLink,
        image: "https://monketic.com/cdn/shop/files/002_b0146a55-cf66-42d3-921c-9b62d7c09e3b.png?v=1792512443&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon & Espeon UPC Box",
        description: "The ultimate Ultra Premium Collection featuring both iconic Eeveelutions.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962"
    },
    {
        categorie: "30th Anniversary",
        nom: "Tri-Packs Blisters",
        description: "Perfect for casual rips, featuring 3 packs and a guaranteed promo card.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: "https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon Box",
        description: "Dedicated Umbreon collector's box with exclusive accessories and packs.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: "https://www.tcghobby.com/cdn/shop/files/simplifiedchinesedeluxesetumbreon.webp?v=1789224364"
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Box",
        description: "Dedicated Espeon collector's box with exclusive accessories and packs.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Espeon_ex_Deluxe_Deck_Set_Simplified_Chinese.jpg?v=1789823886&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Greninja Keychain Box",
        description: "Includes an exclusive Greninja keychain and assorted booster packs.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1080814663430&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jTiK1Ov3j7ZePoc%3Ftk%3DFjg46a8Zg0o&ref=301118558",
        image: "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Keychain Box",
        description: "Includes an exclusive Espeon keychain and assorted booster packs.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1080814663430&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jTiK1Ov3j7ZePoc%3Ftk%3DFjg46a8Zg0o&ref=301118558",
        image: "https://spoilsandloot.com/cdn/shop/files/syl_1.jpg?v=1789577455"
    },
    {
        categorie: "30th Anniversary",
        nom: "Pikachu Blind Box",
        description: "A fun mystery box featuring Pikachu exclusives and surprise hits.",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: "https://collectorstore.com/cdn/shop/files/CollectorStore00002_7207263c-4504-4ee0-ae14-b3d648f6dba7.jpg?v=1790101321&width=1445"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 1",
        description: "Perfect entry point for the 30th-anniversary set.",
        lien: defaultLink,
        image: "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_30th_Anniversary_First_Partner_Special_Illustration_Card_Set_Vol._1_Display_Set.jpg?v=1776401355&width=645"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 2",
        description: "Second wave starter collection for the 30th anniversary.",
        lien: defaultLink,
        image: "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon30thAnniversaryFirstPartnerSpecialIllustrationCardSetVol.2.webp?crop=center&height=500&v=1778251789&width=600"
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 3",
        description: "Third wave starter collection for the 30th anniversary.",
        lien: defaultLink,
        image: "https://www.tcghobby.com/cdn/shop/files/firstpartnerdisplaysetvol.3set.webp?v=1784301375"
    },
    {
        categorie: "30th Anniversary",
        nom: "Ditto Blind Box",
        description: "Ditto Blind Box collection.",
        lien: defaultLink,
        image: "https://icecreamshopper.com/cdn/shop/files/O1CN01z0YkZYMt2vC1chua__4611686018427385661-0-item_pic.webp?v=1790240505&width=533"
    },
    // Gem Packs
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 1",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 2",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 3",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 4",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 5",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 6",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 7 (Psyduck Cover)",
        description: "The brand new, highly anticipated jumbo set featuring Psyduck and fresh alternate arts.",
        lien: defaultLink,
        image: placeholderImg
    },
    // Scarlet & Violet Era
    {
        categorie: "Scarlet & Violet Era",
        nom: "Chasing Glory (CSV10)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Crystal Gathering (CSV9.5)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Stellar Crystal (CSV9)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Bright Fantasy (CSV8)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Blade Awakened (CSV7)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Paradox Veil (CSV6)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Dark Crystal Blaze (CSV5)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Reward Round (CSV4)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Fearless Terastal (CSV3)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Miracle Journey (CSV2)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Eternal Beginnings (CSV1)",
        description: "Standard display boxes for the Scarlet & Violet era sets.",
        lien: defaultLink,
        image: placeholderImg
    },
    // Collect 151 Series
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Gathering",
        description: "Standard 151 booster box display.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Surprise",
        description: "Standard 151 booster box display.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Hope",
        description: "Standard 151 booster box display.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Journey",
        description: "Standard 151 booster box display.",
        lien: defaultLink,
        image: placeholderImg
    },
    // Sword & Shield Era
    {
        categorie: "Sword & Shield Era",
        nom: "Dynamax Clash (CS1B / CS1A)",
        description: "Standard booster box display. Classic Sword & Shield era.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Vivid Portrayals (CS2B / CS2A)",
        description: "Standard booster box display. Classic Sword & Shield era.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Primordial Arts (CS3B / CS3A)",
        description: "Standard booster box display. Classic Sword & Shield era.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Nine Colors Gathering (CS4B / CS4A)",
        description: "Standard booster box display. Classic Sword & Shield era.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Brave Stars (CS5B / CS5A)",
        description: "Standard booster box display. Classic Sword & Shield era.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Shadow of the Blue Sea (CS6B / CS6A)",
        description: "Standard booster box display. Classic Sword & Shield era.",
        lien: defaultLink,
        image: placeholderImg
    },
    // Sun & Moon Era
    {
        categorie: "Sun & Moon Era",
        nom: "Storming Emergence (CSM1A/1B/1C)",
        description: "Vintage Simplified Chinese booster box display.",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sun & Moon Era",
        nom: "Shining Synergy (CSM2A/2B / 2C)",
        description: "Vintage Simplified Chinese booster box display.",
        lien: defaultLink,
        image: placeholderImg
    }
];

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    liste.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}" alt="${p.nom}" class="card-img" onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0PMkOk0FTHAa1QT4_ESpb7qv8fCuF9Y7BK-xsgWgN7HkxM93A9W2eDLT&s=10'">
                <div class="card-content">
                    <span class="category">${p.categorie}</span>
                    <h3>${p.nom}</h3>
                    <p>${p.description}</p>
                    <a href="${p.lien}" class="btn" target="_blank">Order via Joyagoo</a>
                </div>
            </div>
        `;
    });
}

function genererCategories() {
    const select = document.getElementById('category-filter');
    const categoriesUniques = [...new Set(produits.map(p => p.categorie))];
    
    categoriesUniques.forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

function filtrer() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const categorieSelectionnee = document.getElementById('category-filter').value;

    const resultats = produits.filter(p => {
        const correspondTexte = p.nom.toLowerCase().includes(recherche) || p.description.toLowerCase().includes(recherche);
        const correspondCategorie = categorieSelectionnee === "" || p.categorie === categorieSelectionnee;
        
        return correspondTexte && correspondCategorie;
    });
    
    afficher(resultats);
}

genererCategories();
afficher(produits);
