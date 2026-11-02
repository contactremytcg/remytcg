const placeholderImg = "https://via.placeholder.com/300x250/2a2a2a/FFCB05?text=Image+Indisponible";
const defaultLink = "https://joyagoo.com/register/?ref=301118558";

const produits = [
    // As Seen on My Reels
    {
        categorie: "As Seen on My Reels",
        nom: "Greninja Keychain Set",
        description: "As seen in my latest opening video![cite: 2]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1080814663430&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jTiK1Ov3j7ZePoc%3Ftk%3DFjg46a8Zg0o&ref=301118558",
        image: placeholderImg
    },
    // 30th Anniversary Exclusive Collection
    {
        categorie: "30th Anniversary",
        nom: "30th Anniversary Booster Box (Display)",
        description: "Contains 20 booster packs. The core set for anniversary pulls![cite: 3]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Charizard Figure Box",
        description: "Premium box featuring an exclusive Charizard figure and special promos.[cite: 4]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Futuristic Box",
        description: "A highly sought-after collector's box with a futuristic theme and exclusive hits.[cite: 4]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon & Espeon UPC Box",
        description: "The ultimate Ultra Premium Collection featuring both iconic Eeveelutions.[cite: 4]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Tri-Packs Blisters",
        description: "Perfect for casual rips, featuring 3 packs and a guaranteed promo card.[cite: 5]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Umbreon Box",
        description: "Dedicated Umbreon collector's box with exclusive accessories and packs.[cite: 5]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Box",
        description: "Dedicated Espeon collector's box with exclusive accessories and packs.[cite: 5]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Greninja Keychain Box",
        description: "Includes an exclusive Greninja keychain and assorted booster packs.[cite: 6]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1080814663430&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jTiK1Ov3j7ZePoc%3Ftk%3DFjg46a8Zg0o&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Espeon Keychain Box",
        description: "Includes an exclusive Espeon keychain and assorted booster packs.[cite: 6]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1080814663430&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jTiK1Ov3j7ZePoc%3Ftk%3DFjg46a8Zg0o&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Pikachu Blind Box",
        description: "A fun mystery box featuring Pikachu exclusives and surprise hits.[cite: 6]",
        lien: "https://joyagoo.com/product/?shop_type=taobao&id=1062273634908&platform=TAOBAO&productPwd=https%3A%2F%2Fe.tb.cn%2Fh.jUxToEYvXzkRKZA%3Ftk%3DZkkW6a8TLRV&ref=301118558",
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 1",
        description: "Perfect entry point for the 30th-anniversary set.[cite: 7]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 2",
        description: "Second wave starter collection for the 30th anniversary.[cite: 7]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 3",
        description: "Third wave starter collection for the 30th anniversary.[cite: 8]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "30th Anniversary",
        nom: "Ditto Blind Box",
        description: "Ditto Blind Box collection.[cite: 8]",
        lien: defaultLink,
        image: placeholderImg
    },
    // Gem Packs
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 1",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.[cite: 8]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 2",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.[cite: 8]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 3",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.[cite: 9]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 4",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.[cite: 9]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 5",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.[cite: 9]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 6",
        description: "Classic Jumbo Booster boxes containing expanded packs with guaranteed hits per box.[cite: 10]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 7 (Psyduck Cover)",
        description: "The brand new, highly anticipated jumbo set featuring Psyduck and fresh alternate arts.[cite: 10]",
        lien: defaultLink,
        image: placeholderImg
    },
    // Scarlet & Violet Era
    {
        categorie: "Scarlet & Violet Era",
        nom: "Chasing Glory (CSV10)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 10]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Crystal Gathering (CSV9.5)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 11]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Stellar Crystal (CSV9)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 11]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Bright Fantasy (CSV8)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 11]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Blade Awakened (CSV7)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 12]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Paradox Veil (CSV6)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 12]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Dark Crystal Blaze (CSV5)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 12]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Reward Round (CSV4)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Fearless Terastal (CSV3)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Miracle Journey (CSV2)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Scarlet & Violet Era",
        nom: "Eternal Beginnings (CSV1)",
        description: "Standard display boxes for the Scarlet & Violet era sets.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    // Collect 151 Series
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Gathering",
        description: "Standard 151 booster box display.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Surprise",
        description: "Standard 151 booster box display.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Hope",
        description: "Standard 151 booster box display.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Collect 151 Series",
        nom: "Collect 151 Journey",
        description: "Standard 151 booster box display.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    // Sword & Shield Era
    {
        categorie: "Sword & Shield Era",
        nom: "Dynamax Clash (CS1B / CS1A)",
        description: "Standard booster box display. Classic Sword & Shield era.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Vivid Portrayals (CS2B / CS2A)",
        description: "Standard booster box display. Classic Sword & Shield era.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Primordial Arts (CS3B / CS3A)",
        description: "Standard booster box display. Classic Sword & Shield era.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Nine Colors Gathering (CS4B / CS4A)",
        description: "Standard booster box display. Classic Sword & Shield era.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Brave Stars (CS5B / CS5A)",
        description: "Standard booster box display. Classic Sword & Shield era.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sword & Shield Era",
        nom: "Shadow of the Blue Sea (CS6B / CS6A)",
        description: "Standard booster box display. Classic Sword & Shield era.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    // Sun & Moon Era
    {
        categorie: "Sun & Moon Era",
        nom: "Storming Emergence (CSM1A/1B/1C)",
        description: "Vintage Simplified Chinese booster box display.[cite: 13]",
        lien: defaultLink,
        image: placeholderImg
    },
    {
        categorie: "Sun & Moon Era",
        nom: "Shining Synergy (CSM2A/2B / 2C)",
        description: "Vintage Simplified Chinese booster box display.[cite: 13]",
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
                <img src="${p.image}" alt="${p.nom}" class="card-img" onerror="this.src='https://via.placeholder.com/300x250/2a2a2a/FFCB05?text=Image+Indisponible'">
                <div class="card-content">
                    <span class="category">${p.categorie}</span>
                    <h3>${p.nom}</h3>
                    <p>${p.description}</p>
                    <a href="${p.lien}" class="btn" target="_blank">Commander via Joyagoo</a>
                </div>
            </div>
        `;
    });
}

function filtrer() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const resultats = produits.filter(p => p.nom.toLowerCase().includes(recherche) || p.categorie.toLowerCase().includes(recherche));
    afficher(resultats);
}

afficher(produits);
function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    liste.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}" alt="${p.nom}" class="card-img" onerror="this.src='https://via.placeholder.com/300x250/2a2a2a/FFCB05?text=Image+Indisponible'">
                <div class="card-content">
                    <span class="category">${p.categorie}</span>
                    <h3>${p.nom}</h3>
                    <p>${p.description}</p>
                    <a href="${p.lien}" class="btn" target="_blank">Commander via Joyagoo</a>
                </div>
            </div>
        `;
    });
}

function genererCategories() {
    const select = document.getElementById('category-filter');
    // Extrait toutes les catégories uniques de ton tableau de produits
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

// Initialisation au chargement de la page
genererCategories();
afficher(produits);
