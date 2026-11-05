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
    // =========================================================================
    // SECTION 1 : BEST SELLERS & FEATURED DROPS (LIGNE 1 EN VEDETTE)
    // =========================================================================
    {
        section: "🔥 Trending & Best Sellers",
        categorie: "30th Anniversary",
        nom: "30th Anniversary Booster Box (30thC)",
        description: "Contains: 20 booster packs (5 cards/pack). The core set to pull classic reprints and exclusive alt arts.",
        taobaoId: "1077424694326",
        taobaoId2: "",
        images: [
            "https://www.japan2uk.com/cdn/shop/files/Pokemon_30th_Celebration_30th_C_Simplified_Chinese_Booster_Box_1024x1024.png?v=1790325855",
            "https://toy-treasure.com/cdn/shop/files/30th-celebration-chinese.jpg?v=1790767347&width=1445"
        ],
        badge: { text: "🔥 Best Seller", color: "#e74c3c" },
        fournisseur: "Panda"
    },
    {
        section: "🔥 Trending & Best Sellers",
        categorie: "30th Anniversary",
        nom: "Umbreon & Espeon UPC Box",
        description: "Contains: Ultimate Premium Collection with Eeveelution ex promos, exclusive playmat, deck boxes, and booster packs.",
        taobaoId: "1081612197981",
        taobaoId2: "1077143359404",
        images: [
            "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962",
            "https://static.wixstatic.com/media/11a56d_c16d88f83b554e5ca233378f9ca01c95~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11a56d_c16d88f83b554e5ca233378f9ca01c95~mv2.jpg"
        ],
        badge: { text: "⚠️ Low Stock", color: "#f39c12" },
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "🔥 Trending & Best Sellers",
        categorie: "30th Anniversary",
        nom: "Charizard Figure Box",
        description: "Contains: 1x Exclusive Charizard Figure, multiple Promo cards (incl. Charizard ex), and assorted Anniversary booster packs.",
        taobaoId: "1078493401671",
        taobaoId2: "1075622019018",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ujY7LxSFCuTbsYIDy-nzNPJNsdUKHIzHZcFeUz944A&s=10",
            "https://www.bescards.com/cdn/shop/files/16017252548952-2c85b35689e1b991472aa902bfcf7cd2d1f8b144.webp?v=1789744309"
        ],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "🔥 Trending & Best Sellers",
        categorie: ["Coin Bags & Accessories", "30th Anniversary"],
        nom: "30th Anniversary Coin Bag",
        description: "Contains: 3x 30th Anniversary booster packs and 1x guaranteed holographic promo card.",
        taobaoId: "1078477045552",
        taobaoId2: "",
        images: ["https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"],
        fournisseur: "Panda"
    },

    // =========================================================================
    // SECTION 2 : SCARLET & VIOLET ERA (DU PLUS RÉCENT AU PLUS ANCIEN)
    // =========================================================================
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Black Bolt & White Flare Display (CSV10.5)",
        description: "Contains: 30 booster packs. Factory sealed display box.",
        taobaoId: "1094128825003",
        taobaoId2: "1093554321145",
        images: ["https://www.yumecards.ca/cdn/shop/files/Product-2026-10-26T010221.441.jpg?v=1792991251"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Chasing Glory Display (CSV10)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1063240655679",
        taobaoId2: "1061450639137",
        images: ["https://collectorstore.com/cdn/shop/files/CollectorStore00001_937038ac-8bb9-4f6e-950b-742363216669.jpg?v=1784582543&width=990"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Crystal Gathering Display (CSV9.5)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1058877644488",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiWS_bFR5gh7QRwgevHWL5Naw-8q9-wlqlLHh-Gwil5rhRVYNoP7wSfI&s=10"],
        fournisseur: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Stellar Crystal Display (CSV9)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1049011746197",
        taobaoId2: "1043568611401",
        images: ["https://remicardtrader.ca/cdn/shop/files/POKECNSTELCRYSSLIM.jpg?v=1781539002"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Bright Fantasy Display (CSV8)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1027188942536",
        taobaoId2: "1038081281304",
        images: ["https://packflipps.com/cdn/shop/files/IMG_2671.jpg?v=1776975091"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Blade Awakened Display (CSV7)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1008153816247",
        taobaoId2: "1036430851914",
        images: ["https://remicardtrader.ca/cdn/shop/files/PKCNBASBBOX.jpg?v=1792010716"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Paradox Veil Display (CSV6)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1036438775767",
        taobaoId2: "",
        images: ["https://galactictoys.com/cdn/shop/files/6977321128086_1.jpg?v=1787884173"],
        fournisseur: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Dark Crystal Blaze Display (CSV5)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "898604193966",
        taobaoId2: "1038938904501",
        images: ["https://godofcards.com/cdn/shop/files/pokemon-dark-crystal-blaze-csv5c-15er-display-s-chinesisch.jpg?v=1773292564&width=600"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Reward Round Display (CSV4)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "1021280321306",
        taobaoId2: "1036444463449",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztHore7cjIXIaCEjlnPeenDehZZb9N-jrM2zQrArON31YbNnEW8eUiLA&s=10"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Fearless Terastal Display (CSV3)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh5.googleusercontent.com/proxy/AdgOgKSJ8NPfeVKusdmWI54ZCX8Xlr0dgSuD5xNPq8Kcs3dThF7mci5Vrnb4JwPls73fcASk7vB87sfiCsFnK4P1B4B7AhmfhX1w1-thx7Flaz_-EGQSQxNs2rU2i_nnvnmOuJnfKSCrvFjD4wR6TkqYHUQ"],
        statut: "coming_soon"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Miracle Journey Display (CSV2)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed display box featuring Gardevoir.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://image.goat.com/375/attachments/product_template_pictures/images/114/112/186/original/1711842_00.png.png"],
        statut: "coming_soon"
    },
    {
        section: "Scarlet & Violet Era",
        categorie: "Scarlet & Violet Era",
        nom: "Eternal Beginnings Display (CSV1)",
        description: "Contains: 30 booster packs (5 cards/pack). Factory sealed debut display box of Scarlet & Violet.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh5.googleusercontent.com/proxy/p1QnLuwELYrAXGb9u5-W4ROfpl4SF9KD4migfobwuR0UFmiv0ti3gpyoZkOaL36CY8If_AnBRi4AO9XGfSxm66ZKQ-t0WCEk7P_U8TTPIC5MDPyCFwgOefaG"],
        statut: "coming_soon"
    },

    // =========================================================================
    // SECTION 3 : GEM PACKS (DU VOL. 7 AU VOL. 1)
    // =========================================================================
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 7",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs featuring the Psyduck set.",
        taobaoId: "1095191988269", 
        taobaoId2: "1093308561553",
        images: ["https://www.yumecards.ca/cdn/shop/files/Product-2026-10-17T231241.139.jpg?v=1792293584"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 6",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits.",
        taobaoId: "1070975018438",
        taobaoId2: "1083773308654",
        images: ["https://remicardtrader.ca/cdn/shop/files/POKECNGEMPACK6.jpg?v=1786454812"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 5",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits.",
        taobaoId: "1041523213480",
        taobaoId2: "1038707501926",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TLXDOLzUX85KYbOhVhPXGUZuYcuJ5YgnPabKA6OwVNgTR-WnT4xAA3o&s=10"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 4",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits.",
        taobaoId: "1019772789105",
        taobaoId2: "1036427603877", 
        images: ["https://spoilsandloot.com/cdn/shop/files/chinese-gem-pack-vol-4-pokemon-booster-box.webp?v=1774588957"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 3",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits.",
        taobaoId: "980697249084",
        taobaoId2: "1039895020099",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmoBQZ-Tg4lSqbjGr8VX3w-v8xzRaFsq9_HL5LCq2kFeJpnMO1km0xeoX&s=10"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 2",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits.",
        taobaoId: "1038965852696",
        taobaoId2: "932678630102",
        images: ["https://m.media-amazon.com/images/I/51+kPL0qduL.jpg"],
        fournisseur: "AmongUs",
        fournisseurBackup: "Panda"
    },
    {
        section: "Gem Packs",
        categorie: "Gem Packs",
        nom: "Gem Pack Vol. 1",
        description: "Contains: Full factory-sealed display box. Jumbo booster packs with guaranteed holo hits.",
        taobaoId: "979607578715",
        taobaoId2: "",
        images: ["https://www.maxgaming.com/bilder/artiklar/zoom/35546_1.jpg?m=1753267142"]
    },

    // =========================================================================
    // SECTION 4 : COLLECT 151 SERIES (CHRONOLOGIQUE)
    // =========================================================================
    {
        section: "Collect 151 Series",
        categorie: "Collect 151 Series",
        nom: "Collect 151 Gathering",
        description: "Contains: 20 booster packs. Factory sealed display box from the 151 set.",
        taobaoId: "985432609330",
        taobaoId2: "1060819098263",
        images: ["https://card-binder.com/cdn/shop/files/Pokemon-151C-Collect-151-Gathering-Boosterbox.webp?v=1756631761"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Collect 151 Series",
        categorie: "Collect 151 Series",
        nom: "Collect 151 Surprise",
        description: "Contains: 20 booster packs. Factory sealed display box from the 151 set.",
        taobaoId: "899608090307",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBo7t9UrnS88uDSBRdYcKyJuJY3eSGZ-bGMO9YIQq2ZYIcxXRVxfNzSza&s=10"]
    },
    {
        section: "Collect 151 Series",
        categorie: "Collect 151 Series",
        nom: "Collect 151 Hope",
        description: "Contains: 20 booster packs. Factory sealed display box from the 151 set.",
        taobaoId: "899608090307",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwzkSMA16zX0CK3vVFebOtzYpxpKYLMUUO_WFJzprM49JVi5TImfCYKph&s=10"]
    },
    {
        section: "Collect 151 Series",
        categorie: "Collect 151 Series",
        nom: "Collect 151 Journey",
        description: "Contains: 20 booster packs. Factory sealed display box from the 151 set.",
        taobaoId: "899608090307",
        taobaoId2: "1039895020099",
        images: ["https://lh6.googleusercontent.com/proxy/rDdWYwY6yLcBtTbQbQ5CzcCqmcUCUs-9ebr0zXjK2IisW3SqfJE6PWm99SUGDmKabd7M7HkgGpwog6F0T4g1c19Rov_ZzKlepN3P7rInxo9J39EJt9oRnic-HqVKTw_5mr6D"],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },

    // =========================================================================
    // SECTION 5 : SWORD & SHIELD ERA (DU CS6 AU CS1 SANS DOUBLONS)
    // =========================================================================
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Shadow of the Blue Sea (CS6A - Lugia)",
        description: "Contains: Factory sealed display box featuring Lugia artwork. Sword & Shield series.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/04/invictatcg-pokemon-chinese-shadow-of-the-blue-sea-lugia-CS6BC-simplified-chinese-jumbo-booster-box.png"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Shadow of the Blue Sea (CS6B - Giratina)",
        description: "Contains: Factory sealed display box featuring Giratina artwork.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/04/invictatcg-pokemon-chinese-shadow-of-the-blue-sea-giratina-CS6BC-simplified-chinese-jumbo-booster-box.png"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Brave Stars Display (CS5A - Typhlosion)",
        description: "Contains: Factory sealed display box featuring Hisuian Typhlosion artwork.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh5.googleusercontent.com/proxy/mKV2hSixeFfM7QOQHyUP9MiUcRcMCQUadu_1rAWx2lAxw2sePmabqRuf3SnwE1b7PXnNME9uL7RcvYnuMnB5WW3pDE8aQroKOYkFCsGHkp-3O_ebCzwCXFFiGNV6CGxbLzkyZ1rBpg0yLdIEoYTsloF9L31bwlfsbwuhtJw"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Brave Stars Display (CS5B - Lucario)",
        description: "Contains: Factory sealed display box featuring Lucario artwork.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh4.googleusercontent.com/proxy/Mh5AMHlVCKUvnc3joPEXDkhtY79z-5yAohzcczgYbbjrBzKWkeGJ_VX4WWwsjDul_qPWfwGEosWZftLTBjdbW0KZfP3TrtRmWouCj6E1-DQlABr5U54IHywOKpzW4pKyZDh9jL4iyYEswSQXNFIbqGifhzbvIV9jiX3iFA6sBmYeClZsXpMxzaWVF4qsag"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Nine Colors Gathering (CS4A - Umbreon)",
        description: "Contains: Factory sealed display box featuring Eeveelutions and Umbreon.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh3.googleusercontent.com/proxy/BGbaaxN3iStHvlwH1Au_E8Zj0YnmBaCPWX_4UzlBEekNSz9n7libOy4Jl54qAJaMQsuZ8VafNDAiuHKAnaPnkSF9na_nglyipJHqOnJigtXW9MYazYkZlLDceLPUwgskfC7Jn1KI1XauvKIkjKLEADYI41sXDRcZ9tZzzuyGcA"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Nine Colors Gathering (CS4B - Mew)",
        description: "Contains: Factory sealed display box featuring Mew and alternate arts.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRDWQkbnJpQwB8N2F7VQs5u6BJIGUT_2Xu9eQv9raaTykMsOJuIMtPZU&s=10"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Primordial Arts Display (CS3A - Venusaur)",
        description: "Contains: Factory sealed display box featuring Venusaur / Florizarre.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://monsterscollectors.com/wp-content/uploads/2025/11/Caja-de-sobres-Pokemon-Primordial-Arts-Overgrow-Chino-1.png"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Primordial Arts Display (CS3B - Blastoise)",
        description: "Contains: Factory sealed display box featuring Blastoise / Tortank.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://pandacollecting.com/wp-content/uploads/2026/05/jumbo.png"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Vivid Portrayals Display (CS2A - Charizard)",
        description: "Contains: Factory sealed display box featuring Charizard artwork.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dxljBJH77sHgfqswS7C1eMrT-6i_lIhBRSbPD3wH_Tywxf6PQI9APtWZ&s=10"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Vivid Portrayals Display (CS2B - Duraludon)",
        description: "Contains: Factory sealed display box featuring Duraludon.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwACRITnyb1RyvuzvALQgteVdYzvLacz4eIlgJIBRpZR6g_ae9TgozwZQ&s=10"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Dynamax Clash Display (CS1A - Pikachu)",
        description: "Contains: Factory sealed display box featuring Pikachu VMAX.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://cpop.ch/1934-large_default/pokemon-simplified-chinese-cs1a-c-jumbo-booster.jpg"],
        statut: "coming_soon"
    },
    {
        section: "Sword & Shield Era",
        categorie: "Sword & Shield Era",
        nom: "Dynamax Clash Display (CS1B - Cinderace)",
        description: "Contains: Factory sealed display box featuring Cinderace VMAX.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://cpop.ch/1937-large_default/pokemon-simplified-chinese-cs1b-c-jumbo-booster.jpg"],
        statut: "coming_soon"
    },

    // =========================================================================
    // SECTION 6 : FESTIVAL GIFT BOXES
    // =========================================================================
    {
        section: "Festival Gift Boxes",
        categorie: "Festival Gift Boxes",
        nom: "2026 Mid-Autumn Gift Box",
        description: "Contains: Exclusive 2026 Mid-Autumn festival promotional items and packs.",
        taobaoId: "1071726804171",
        taobaoId2: "1071680335651",
        images: [
            "https://collectorstore.com/cdn/shop/files/CollectorStore00003_867dd20e-c23a-4eb5-805f-61f317dc99b0.jpg?v=1789052091&width=990",
            "https://card-binder.com/cdn/shop/files/Pokemon-Mid-Autumn-Festival-Gift-Box-Simplified-Chinese-contents.webp?v=1787913719&width=1500"
        ],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Festival Gift Boxes",
        categorie: "Festival Gift Boxes",
        nom: "2026 Dragon Boat Festival Box",
        description: "Contains: Exclusive 2026 Dragon Boat festival promotional items, booster packs, and accessories.",
        taobaoId: "1058523215773",
        taobaoId2: "",
        images: [
            "https://games-island.eu/media/image/product/1153600/lg/pokemon-tcg-dragon-boat-gift-box-2026-chinesisch.jpg",
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon2026DragonBoatFestivalGiftBoxSet.jpg?v=1776680425"
        ],
        fournisseur: "AmongUs"
    },

    // =========================================================================
    // SECTION 7 : COIN BAGS & ACCESSORIES (TOUS ENSEMBLE)
    // =========================================================================
    {
        section: "Coin Bags & Accessories",
        categorie: "Coin Bags & Accessories",
        nom: "Stellar Crystal Coin Bag",
        description: "Contains: 3x Stellar Crystal booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1053719752963",
        taobaoId2: "",
        images: [
            "https://dzpdbgwih7u1r.cloudfront.net/9fcd2c4e-9f8f-4808-a1f9-bbeb3a6a2a49/a1fce7d5-2d7d-4897-9495-ef7d6e03ed1b/a1fce820-db2a-4418-babd-347c130bd618/w400h400-pokemon-simplified-chinese-stellar-crystal-csv9c-coin-set.jpg",
            "https://m.media-amazon.com/images/I/61MGcrYNNDL._AC_UF1000,1000_QL80_.jpg"
        ],
        fournisseur: "AmongUs"
    },
    {
        section: "Coin Bags & Accessories",
        categorie: "Coin Bags & Accessories",
        nom: "Chasing Glory Coin Bag",
        description: "Contains: 3x Chasing Glory booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1067353432814",
        taobaoId2: "1088794189729",
        images: ["https://images-eu.ssl-images-amazon.com/images/I/71cZJr3YPnL._AC_UL495_SR435,495_.jpg"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Coin Bags & Accessories",
        categorie: "Coin Bags & Accessories",
        nom: "Bright Fantasy Coin Bag",
        description: "Contains: 3x Bright Fantasy booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1026530979141",
        taobaoId2: "1038882806803",
        images: ["https://erp-image.sgliteasset.com/_next/image?url=https%3A%2F%2Fcdn1.sgliteasset.com%2Ftcglah%2Fimages%2Fproduct%2Fproduct-7525796%2F34x36X3U69d3424537017_1775452741.jpg&w=3840&q=85"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Coin Bags & Accessories",
        categorie: "Coin Bags & Accessories",
        nom: "Blade Awakening Coin Bag",
        description: "Contains: 3x Blade Awakening booster packs and 1x Exclusive themed collector badge/coin.",
        taobaoId: "1008157120043",
        taobaoId2: "1095040159008",
        images: ["https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/04/pokemon-simplified-chinese-blade-awakening-csv7c-coin-set.png"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },

    // =========================================================================
    // SECTION 8 : PREMIUM COLLECTION & 30TH BOXES
    // =========================================================================
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Futuristic Box",
        description: "Contains: Premium display case, exclusive futuristic-themed accessories, and highly sought-after booster packs.",
        taobaoId: "1076581683957",
        taobaoId2: "", 
        images: ["https://monketic.com/cdn/shop/files/002_b0146a55-cf66-42d3-921c-9b62d7c09e3b.png?v=1792512443&width=1445"],
        fournisseur: "Panda"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Umbreon Deluxe Box",
        description: "Contains: 1x Umbreon ex Promo, custom Umbreon card sleeves, premium deck box, and 30th Anniversary packs.",
        taobaoId: "1081589285227",
        taobaoId2: "1083773308654",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/simplifiedchinesedeluxesetumbreon.webp?v=1789224364",
            "https://www.therange.co.uk/media/0/9/1790203452_5789.jpg"
        ],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Espeon Deluxe Box",
        description: "Contains: 1x Espeon ex Promo, custom Espeon card sleeves, premium deck box, and 30th Anniversary packs.",
        taobaoId: "1081585073446",
        taobaoId2: "1083773308654",
        images: [
            "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Espeon_ex_Deluxe_Deck_Set_Simplified_Chinese.jpg?v=1789823886&width=600",
            "https://www.therange.co.uk/media/2/8/1790203411_8925.jpg"
        ],
        fournisseur: "Panda",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Greninja Keychain Box",
        description: "Contains: 3x 30th Anniversary booster packs, 1x Greninja ex promo card, 1x Display Keychain.",
        taobaoId: "1080814663430",
        taobaoId2: "",
        images: [
            "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600",
            "https://www.therange.co.uk/media/3/3/1790203353_7893.jpg"
        ],
        fournisseur: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Sylveon Keychain Box",
        description: "Contains: 3x 30th Anniversary booster packs, 1x Sylveon ex (Fairy Eevee) promo card, 1x Display Keychain.",
        taobaoId: "1080814663430",
        taobaoId2: "",
        images: [
            "https://spoilsandloot.com/cdn/shop/files/syl_1.jpg?v=1789577455",
            "https://www.therange.co.uk/media/7/6/1790203399_5932.jpg"
        ],
        fournisseur: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 1",
        description: "Contains: First Partner Promo cards and a selection of booster packs. Great for beginners.",
        taobaoId: "1036462263685",
        taobaoId2: "",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_30th_Anniversary_First_Partner_Special_Illustration_Card_Set_Vol._1_Display_Set.jpg?v=1776401355&width=645",
            "https://hanabitradingco.ca/cdn/shop/files/IMG-8415.png?v=1774029915"
        ],
        fournisseur: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 2",
        description: "Contains: Wave 2 First Partner Promo cards and a selection of booster packs.",
        taobaoId: "1059308989628",
        taobaoId2: "1054578164218",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon30thAnniversaryFirstPartnerSpecialIllustrationCardSetVol.2.webp?crop=center&height=500&v=1778251789&width=600",
            "https://snornap.com/cdn/shop/files/IMG-8913.jpg?v=1781665119&width=1445"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "30th Anniversary",
        nom: "Starter Pack Vol. 3",
        description: "Contains: Wave 3 First Partner Promo cards and a selection of booster packs.",
        taobaoId: "1070165751188",
        taobaoId2: "1067989553110",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/firstpartnerdisplaysetvol.3set.webp?v=1784301375",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROegMBxRjhD0vxiYTE75JBj6Q4U3zEvbXPJcsgPMEL5qHhQzryXSfb6tFO&s=10"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Master Strategy Milton ex Deck Building Set",
        description: "Contains: Ready-to-play Milton ex deck, premium sleeves, a deck box, and multiple booster packs.",
        taobaoId: "1008155364462",
        taobaoId2: "",
        images: [
            "https://aquitaz.se/cdn/shop/files/PokemonMegaEvolutionPhantasmalFlamesEliteTrainerBox_ETB_9Pack_43.png?v=1767582465",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7yVUkTiFImWqOLx-lw9EWpHB-IrWkkrg0bLKbbHUPkK_d3k9LF4On7Fv&s=10"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Thunder Drum Box",
        description: "Contains: 1x Raging Bolt ex Promo, exclusive jumbo card/display, and assorted booster packs.",
        taobaoId: "1065661862776",
        taobaoId2: "",
        images: [
            "https://aquitaz.se/cdn/shop/files/BlackBox-2026-06-30T210032.091.png?v=1782825957",
            "https://aquitaz.se/cdn/shop/files/BlackBox-2026-06-30T211749.540.png?v=1782825957"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Gholdengo",
        description: "Contains: Gholdengo-themed exclusive Promo cards, high-end collector supplies, and booster packs.",
        taobaoId: "1065668842312",
        taobaoId2: "",
        images: ["https://www.japan2uk.com/cdn/shop/files/Pokemon_Gholdengo_ex_csvM2c_Simplified_Chinese_Master_Strategy_Deck_Building_Set_1024x1024.png?v=1785495434"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Dragapult ex Collection Box",
        description: "Contains: 1x Dragapult ex Promo, themed TCG accessories, and assorted booster packs.",
        taobaoId: "1066680325531",
        taobaoId2: "",
        images: ["https://ueeshop.ly200-cdn.com/u_file/UPBB/UPBB486/2609/08/products/78f7412ea38e8f041677eaecea8f40bb-172101dcce.png?x-oss-process=image/format,webp/quality,q_100"],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Wellspring Mask (Blue) Gift Box",
        description: "Contains: Ogerpon ex Blue Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1049188091485",
        taobaoId2: "1051982944741",
        images: [
            "https://static.wixstatic.com/media/d2c7b0_10f8544592a14adda9162a7a98bc44b8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_Ogerpon_Wellspring_Gift_Box_Set.webp?v=1779209947"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "Panda"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Cornerstone Mask (Brown) Gift Box",
        description: "Contains: Ogerpon ex Brown Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1050912105033",
        taobaoId2: "1051982944741",
        images: [
            "https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/05/OgerPon-ETB-Brown.webp",
            "https://nextleveluk.net/cdn/shop/files/s-l1600-2026-10-01T152323.962.jpg?v=1790864832&width=1024"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "Panda"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Teal Mask (Green) Gift Box",
        description: "Contains: Ogerpon ex Green Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1050909737218",
        taobaoId2: "1051982944741",
        images: [
            "https://static.wixstatic.com/media/d2c7b0_5749d47b909e44cf987fcadf8686ff9d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            "https://pg-cdn-a2.datacaciques.com/00/Mzc3MTUw/26/04/24/e52cf2k0r62fw4u5/e0062501a7b99b98.jpg"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "Panda"
    },
    {
        section: "Premium Collection Boxes",
        categorie: "Premium Collection Boxes",
        nom: "Ogerpon Hearthflame Mask (Red) Gift Box",
        description: "Contains: Ogerpon ex Red Mask Promo, custom card sleeves, and booster packs.",
        taobaoId: "1050912901200",
        taobaoId2: "1051982944741",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxa6HqnsRfMAzQN6evqXrYdwe_Fq0syjwNLYsE72-9_w&s=10",
            "https://ae-pic-a1.aliexpress-media.com/kf/S12cb4b8e79af4815936a842786e80018z.jpg",
            "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_Ogerpon_Hearthflame_Gift_Box_Set.webp?v=1779209745&width=645"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "Panda"
    },

    // =========================================================================
    // SECTION 9 : BLIND BOXES & FIGURES
    // =========================================================================
    {
        section: "Blind Boxes & Figures",
        categorie: ["Blind Boxes", "30th Anniversary"],
        nom: "Dream Figure Vol. 4 (Pikachu Edition)",
        description: "Contains: 1x Exclusive Pikachu-themed merchandise item and assorted booster packs.",
        taobaoId: "1082955160912",
        taobaoId2: "1079806548243",
        images: [
            "https://collectorstore.com/cdn/shop/files/CollectorStore00002_7207263c-4504-4ee0-ae14-b3d648f6dba7.jpg?v=1790101321&width=1445",
            "https://card-binder.com/cdn/shop/files/Pokemon-30th-celebration-pikachu-figure-blind-box-simplified-chinese-pikachu-figures.webp?v=1788978615&width=1500",
            "https://wholesale.hokeypokegames.co.uk/storage/products/2kdPuW06V6Ouk9qSqpGSVNuCwFwYqpNCl56CwQP6.webp"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Blind Boxes & Figures",
        categorie: "Blind Boxes",
        nom: "Dream Figure Vol. 3 (Eevee Edition)",
        description: "Contains: 1x Exclusive Eevee-themed merchandise item and assorted booster packs.",
        taobaoId: "1078195403792",
        taobaoId2: "1072080775449",
        images: [
            "https://collectorstore.com/cdn/shop/files/CollectorStore00001_3c6277d1-2842-417f-a3c6-63f1dcb381ab.jpg?v=1787866920&width=990",
            "https://levelupstore.co.za/cdn/shop/files/s-l1600_1_8a319222-0268-4635-9c76-fd417facea77_1200x.png?v=1787129610",
            "https://www.reformedpokelab.com/cdn/shop/files/PokemonTCG_SimplifiedChinesePokemonDreamPaintingEevee_EvolutionsFigurineSetBlindBox_f7bc5c1c-9acd-49a1-8798-41d015f94e25_1800x1800.webp?v=1787763479"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Blind Boxes & Figures",
        categorie: "Blind Boxes",
        nom: "Dream Figure Vol. 2 Blind Box",
        description: "Contains: 1x Random Dream Vol. 2 Pokémon figure and selected booster packs.",
        taobaoId: "1044387395690",
        taobaoId2: "1045033219070",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhtsk-Qh_hf6kAgLTwz6v9CAag4wePr0oN9bafujecqKP01j_Q7M5Vjvw&s=10",
            "https://hanabitradingco.ca/cdn/shop/files/dreamfigurevol2-2.jpg?v=1777231093"
        ],
        isOfficial: true,
        fournisseur: "Pokemon Store Shanghai",
        fournisseurBackup: "AmongUs"
    },
    {
        section: "Blind Boxes & Figures",
        categorie: "Blind Boxes",
        nom: "Dream Figure Vol. 1 Blind Box",
        description: "Contains: 1x Random Dream Vol. 1 Pokémon figure and selected booster packs.",
        taobaoId: "994367267628",
        taobaoId2: "1096711400657",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemonDreamPaintingCollection151FigureSet.jpg?v=1776398595",
            "https://i0.wp.com/katzenworld.shop/wp-content/uploads/2025/12/Dream-Painting-Collection-151-Figurine-Set-Figures-2.webp?fit=800%2C1097&ssl=1"
        ],
        fournisseur: "Panda",
        fournisseurBackup: "Panda"
    },
    {
        section: "Blind Boxes & Figures",
        categorie: "Blind Boxes",
        nom: "Ditto Blind Box",
        description: "Contains: 1x Random Ditto-themed merchandise item and selected booster packs.",
        taobaoId: "1085294497168",
        taobaoId2: "",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPnMs7_SAM5ydGsOGMIRnfg32_qAu6G_IsNkMNcpyXW4lSJixcR95DWs&s=10",
            "https://sunnystudio.store/cdn/shop/files/PokemonTinyAdventuresTransform_DittoQ-faceCase.avif?v=1790971171&width=1445",
            "https://sunnystudio.store/cdn/shop/files/PokemonTinyAdventuresTransform_DittoQ-faceSingle.avif?v=1790971171&width=1920"
        ]
    }
];

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';

    const sectionsOrdre = [
        "🔥 Trending & Best Sellers",
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
        else if (secNom === "Scarlet & Violet Era") secSubtitle = "CSV10.5 through CSV1 Main Sets";
        else if (secNom === "Gem Packs") secSubtitle = "Vol. 7 through Vol. 1 Jumbo Boosters";
        else if (secNom === "Collect 151 Series") secSubtitle = "The Definitive Kanto 151 Archive";
        else if (secNom === "Sword & Shield Era") secSubtitle = "CS6 through CS1 Classic Eras";
        else if (secNom === "Festival Gift Boxes") secSubtitle = "Limited Traditional Chinese Festival Sets";
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
            if (p.badge) {
                htmlBadge = `<div class="card-badge" style="background: ${p.badge.color};">${p.badge.text}</div>`;
            }

            let officialHtml = p.isOfficial 
                ? `<svg class="official-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" title="Official Source"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h8m4 0h8"></path><circle cx="12" cy="12" r="2"></circle></svg>` 
                : '';

            let fournisseurTexte = '';
            if (p.fournisseur && p.fournisseurBackup) {
                fournisseurTexte = `Source : ${p.fournisseur} | Backup : ${p.fournisseurBackup}`;
            } else if (p.fournisseur) {
                fournisseurTexte = `Source : ${p.fournisseur}`;
            }

            let fournisseurHtml = fournisseurTexte 
                ? `<div style="font-size: 0.72em; color: #888; font-style: italic; margin-bottom: 10px;">${fournisseurTexte}</div>` 
                : '';

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
            if (p.statut === "coming_soon") {
                boutonsHtml = `
                    <a href="https://instagram.com/remy.tcg" target="_blank" class="btn-main-card btn-notify">🔔 Follow IG for Drops</a>
                    <a href="https://instagram.com/remy.tcg" target="_blank" class="btn-main-card btn-mobile btn-notify">🔔 Follow IG for Drops</a>
                `;
            } else if (!p.taobaoId || p.taobaoId.trim() === "") {
                boutonsHtml = `<button class="btn-main-card" style="background: #e74c3c; color: #fff; cursor: not-allowed;">⚠️ ID Missing</button>`;
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
                }
            }

            sectionHtml += `
                <div class="card">
                    ${htmlBadge}
                    ${imagesHtml}
                    <div class="card-content">
                        <span class="category">${catBadge} ${officialHtml}</span>
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

function genererCategories() {
    const select = document.getElementById('category-filter');
    const allSections = [...new Set(produits.map(p => p.section))];
    allSections.forEach(sec => {
        select.innerHTML += `<option value="${sec}">${sec}</option>`;
    });
}

function filtrer() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const selection = document.getElementById('category-filter').value;

    const resultats = produits.filter(p => {
        const correspondTexte = p.nom.toLowerCase().includes(recherche) || 
                                p.description.toLowerCase().includes(recherche) ||
                                (p.section && p.section.toLowerCase().includes(recherche));
        const correspondCategorie = selection === "" || p.section === selection || 
                                    (Array.isArray(p.categorie) ? p.categorie.includes(selection) : p.categorie === selection);
        return correspondTexte && correspondCategorie;
    });
    
    afficher(resultats);
}

genererCategories();
afficher(produits);
