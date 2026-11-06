const memberId = "3894055016867374984";
window.activePillCategory = '';

const formatSugargooLink = (taobaoId) => {
    const taobaoUrl = encodeURIComponent(`https://item.taobao.com/item.htm?id=${taobaoId}`);
    const isMobile = /iPhone|Android|iPad|iPod|Mobile/i.test(navigator.userAgent);
    if (isMobile) {
        return `https://m.sugargoo.com/products?productLink=${taobaoUrl}&memberId=${memberId}`;
    } else {
        return `https://www.sugargoo.com/#/home/productDetail?productLink=${taobaoUrl}&memberId=${memberId}`;
    }
};

const produits = [
    // =========================================================================
    // SECTION 1 : TRENDING & BEST SELLERS
    // =========================================================================
    {
        section: "Trending & Best Sellers",
        badgeCat: "30th-C",
        nom: "30th Anniversary Booster Box",
        description: "Official booster box.",
        taobaoId: "1077424694326",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/Dd1GxA9B-H7/",
        images: [
            "https://www.japan2uk.com/cdn/shop/files/Pokemon_30th_Celebration_30th_C_Simplified_Chinese_Booster_Box_1024x1024.png?v=1790325855",
            "https://toy-treasure.com/cdn/shop/files/30th-celebration-chinese.jpg?v=1790767347&width=1445"
        ],
        fournisseur: "DunDun TCG"
    },
    {
        section: "Trending & Best Sellers",
        badgeCat: "CBB7C",
        nom: "Gem Pack Vol. 7",
        description: "Official booster box.",
        taobaoId: "1095191988269", 
        taobaoId2: "1093308561553",
        images: ["https://www.yumecards.ca/cdn/shop/files/Product-2026-10-17T231241.139.jpg?v=1792293584"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Trending & Best Sellers",
        badgeCat: "30th-UPC",
        nom: "Espeon & Umbreon EX Collector Display Box",
        description: "Premium collection box with exclusive promos.",
        taobaoId: "1081612197981",
        taobaoId2: "1077143359404",
        videoUrl: "https://www.instagram.com/reel/DdWcScShlbf/",
        images: [
            "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962",
            "https://static.wixstatic.com/media/11a56d_c16d88f83b554e5ca233378f9ca01c95~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11a56d_c16d88f83b554e5ca233378f9ca01c95~mv2.jpg"
        ],
        badge: { text: "Low Stock", color: "#f39c12" },
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Trending & Best Sellers",
        badgeCat: "Figure Vol. 4",
        nom: "Dream Figure Vol. 4 (Pikachu Edition)",
        description: "Collectible figurine + booster packs.",
        taobaoId: "1082955160912",
        taobaoId2: "1079806548243",
        videoUrl: "https://www.instagram.com/reel/DdtlypOo0AW/",
        images: [
            "https://collectorstore.com/cdn/shop/files/CollectorStore00002_7207263c-4504-4ee0-ae14-b3d648f6dba7.jpg?v=1790101321&width=1445",
            "https://card-binder.com/cdn/shop/files/Pokemon-30th-celebration-pikachu-figure-blind-box-simplified-chinese-pikachu-figures.webp?v=1788978615&width=1500",
            "https://wholesale.hokeypokegames.co.uk/storage/products/2kdPuW06V6Ouk9qSqpGSVNuCwFwYqpNCl56CwQP6.webp"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Trending & Best Sellers",
        badgeCat: "Figure Box",
        nom: "Charizard Figure Box",
        description: "Collectible figurine, promos & booster packs.",
        taobaoId: "1078493401671",
        taobaoId2: "1075622019018",
        videoUrl: "https://www.instagram.com/reel/Ddmb0FsBON1/",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ujY7LxSFCuTbsYIDy-nzNPJNsdUKHIzHZcFeUz944A&s=10",
            "https://www.bescards.com/cdn/shop/files/16017252548952-2c85b35689e1b991472aa902bfcf7cd2d1f8b144.webp?v=1789744309"
        ],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Trending & Best Sellers",
        badgeCat: "CSV10.5",
        nom: "Black Bolt & White Flare",
        description: "Official booster box.",
        taobaoId: "1094128825003",
        taobaoId2: "1093554321145",
        images: ["https://www.yumecards.ca/cdn/shop/files/Product-2026-10-26T010221.441.jpg?v=1792991251"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },

    // =========================================================================
    // SECTION 2 : 30TH ANNIVERSARY
    // =========================================================================
    {
        section: "30th Anniversary",
        badgeCat: "30th-C",
        nom: "30th Anniversary Booster Box",
        description: "Official booster box.",
        taobaoId: "1077424694326",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/Dd1GxA9B-H7/",
        images: [
            "https://www.japan2uk.com/cdn/shop/files/Pokemon_30th_Celebration_30th_C_Simplified_Chinese_Booster_Box_1024x1024.png?v=1790325855",
            "https://toy-treasure.com/cdn/shop/files/30th-celebration-chinese.jpg?v=1790767347&width=1445"
        ],
        fournisseur: "DunDun TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "30th-UPC",
        nom: "Espeon & Umbreon EX Collector Display Box",
        description: "Premium collection box with exclusive promos.",
        taobaoId: "1081612197981",
        taobaoId2: "1077143359404",
        videoUrl: "https://www.instagram.com/reel/DdWcScShlbf/",
        images: [
            "https://www.yumecards.ca/cdn/shop/files/Product-2026-09-06T091809.798.jpg?v=1788700962",
            "https://static.wixstatic.com/media/11a56d_c16d88f83b554e5ca233378f9ca01c95~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11a56d_c16d88f83b554e5ca233378f9ca01c95~mv2.jpg"
        ],
        badge: { text: "Low Stock", color: "#f39c12" },
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Figure Box",
        nom: "Charizard Figure Box",
        description: "Collectible figurine, promos & booster packs.",
        taobaoId: "1078493401671",
        taobaoId2: "1075622019018",
        videoUrl: "https://www.instagram.com/reel/Ddmb0FsBON1/",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ujY7LxSFCuTbsYIDy-nzNPJNsdUKHIzHZcFeUz944A&s=10",
            "https://www.bescards.com/cdn/shop/files/16017252548952-2c85b35689e1b991472aa902bfcf7cd2d1f8b144.webp?v=1789744309"
        ],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Coin Bundle",
        nom: "30th Anniversary Coin Bag",
        description: "3x booster packs + collectible coin.",
        taobaoId: "1078477045552",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/DeMfqDRoxUK/",
        images: ["https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"],
        fournisseur: "DunDun TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Special Box",
        nom: "Futuristic Box",
        description: "Premium collection box with accessories.",
        taobaoId: "1076581683957",
        taobaoId2: "", 
        videoUrl: "https://www.instagram.com/reel/DdbntgzBAte/",
        images: ["https://monketic.com/cdn/shop/files/002_b0146a55-cf66-42d3-921c-9b62d7c09e3b.png?v=1792512443&width=1445"],
        fournisseur: "DunDun TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Deck Set",
        nom: "Umbreon ex Deck Set",
        description: "Umbreon promo, deck box & packs.",
        taobaoId: "1081589285227",
        taobaoId2: "1083773308654",
        videoUrl: "https://www.instagram.com/reel/De7LWM6IYrS/",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/simplifiedchinesedeluxesetumbreon.webp?v=1789224364",
            "https://www.therange.co.uk/media/0/9/1790203452_5789.jpg"
        ],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Deck Set",
        nom: "Espeon ex Deck Set",
        description: "Espeon promo, deck box & packs.",
        taobaoId: "1081585073446",
        taobaoId2: "1083773308654",
        videoUrl: "https://www.instagram.com/reel/DfC5r59Icam/",
        images: [
            "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Espeon_ex_Deluxe_Deck_Set_Simplified_Chinese.jpg?v=1789823886&width=600",
            "https://www.therange.co.uk/media/2/8/1790203411_8925.jpg"
        ],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Keychain Set",
        nom: "Greninja Keychain Card Display Set",
        description: "Greninja promo, keychain & packs.",
        taobaoId: "1080814663430",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/DfICQ-UoZip/",
        images: [
            "https://x-playground.com/cdn/shop/files/Pokemon_TCG_30th_Celebration_Greninja_ex_Card_Display_Sleeve_Set.jpg?v=1789822489&width=600",
            "https://www.therange.co.uk/media/3/3/1790203353_7893.jpg"
        ],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Keychain Set",
        nom: "Sylveon Keychain Card Display Set",
        description: "Sylveon promo, keychain & packs.",
        taobaoId: "1080814663430",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/DepLHfNohcd/",
        images: [
            "https://spoilsandloot.com/cdn/shop/files/syl_1.jpg?v=1789577455",
            "https://www.therange.co.uk/media/7/6/1790203399_5932.jpg"
        ],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Partner Vol. 1",
        nom: "First Partner Starter Pack Vol. 1",
        description: "First partner promos + booster packs.",
        taobaoId: "1036462263685",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/DdUW0s5h-uF/",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_30th_Anniversary_First_Partner_Special_Illustration_Card_Set_Vol._1_Display_Set.jpg?v=1776401355&width=645",
            "https://hanabitradingco.ca/cdn/shop/files/IMG-8415.png?v=1774029915"
        ],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Partner Vol. 2",
        nom: "First Partner Starter Pack Vol. 2",
        description: "First partner promos + booster packs.",
        taobaoId: "1059308989628",
        taobaoId2: "1054578164218",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon30thAnniversaryFirstPartnerSpecialIllustrationCardSetVol.2.webp?crop=center&height=500&v=1778251789&width=600",
            "https://snornap.com/cdn/shop/files/IMG-8913.jpg?v=1781665119&width=1445"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "30th Anniversary",
        badgeCat: "Partner Vol. 3",
        nom: "First Partner Starter Pack Vol. 3",
        description: "First partner promos + booster packs.",
        taobaoId: "1070165751188",
        taobaoId2: "1067989553110",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/firstpartnerdisplaysetvol.3set.webp?v=1784301375",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROegMBxRjhD0vxiYTE75JBj6Q4U3zEvbXPJcsgPMEL5qHhQzryXSfb6tFO&s=10"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },

    // =========================================================================
    // SECTION 3 : SCARLET & VIOLET ERA
    // =========================================================================
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV10.5",
        nom: "Black Bolt & White Flare",
        description: "Official booster box.",
        taobaoId: "1094128825003",
        taobaoId2: "1093554321145",
        images: ["https://www.yumecards.ca/cdn/shop/files/Product-2026-10-26T010221.441.jpg?v=1792991251"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV10",
        nom: "Chasing Glory",
        description: "Official booster box.",
        taobaoId: "1063240655679",
        taobaoId2: "1061450639137",
        images: ["https://collectorstore.com/cdn/shop/files/CollectorStore00001_937038ac-8bb9-4f6e-950b-742363216669.jpg?v=1784582543&width=990"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV9.5",
        nom: "Crystal Gathering",
        description: "Official booster box.",
        taobaoId: "1058877644488",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStiWS_bFR5gh7QRwgevHWL5Naw-8q9-wlqlLHh-Gwil5rhRVYNoP7wSfI&s=10"],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV9",
        nom: "Stellar Crystal",
        description: "Official booster box.",
        taobaoId: "1049011746197",
        taobaoId2: "1043568611401",
        images: ["https://remicardtrader.ca/cdn/shop/files/POKECNSTELCRYSSLIM.jpg?v=1781539002"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV8",
        nom: "Bright Fantasy",
        description: "Official booster box.",
        taobaoId: "1027188942536",
        taobaoId2: "1038081281304",
        images: ["https://packflipps.com/cdn/shop/files/IMG_2671.jpg?v=1776975091"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV7",
        nom: "Blade Awakened",
        description: "Official booster box.",
        taobaoId: "1008153816247",
        taobaoId2: "1036430851914",
        images: ["https://remicardtrader.ca/cdn/shop/files/PKCNBASBBOX.jpg?v=1792010716"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV6",
        nom: "Paradox Veil",
        description: "Official booster box.",
        taobaoId: "1036438775767",
        taobaoId2: "",
        images: ["https://galactictoys.com/cdn/shop/files/6977321128086_1.jpg?v=1787884173"],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV5",
        nom: "Dark Crystal Blaze",
        description: "Official booster box.",
        taobaoId: "898604193966",
        taobaoId2: "1038938904501",
        images: ["https://godofcards.com/cdn/shop/files/pokemon-dark-crystal-blaze-csv5c-15er-display-s-chinesisch.jpg?v=1773292564&width=600"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV4",
        nom: "Reward Round",
        description: "Official booster box.",
        taobaoId: "1021280321306",
        taobaoId2: "1036444463449",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztHore7cjIXIaCEjlnPeenDehZZb9N-jrM2zQrArON31YbNnEW8eUiLA&s=10"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV3",
        nom: "Fearless Terastal",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh5.googleusercontent.com/proxy/AdgOgKSJ8NPfeVKusdmWI54ZCX8Xlr0dgSuD5xNPq8Kcs3dThF7mci5Vrnb4JwPls73fcASk7vB87sfiCsFnK4P1B4B7AhmfhX1w1-thx7Flaz_-EGQSQxNs2rU2i_nnvnmOuJnfKSCrvFjD4wR6TkqYHUQ"],
        statut: "out_of_stock"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV2",
        nom: "Miracle Journey (Gardevoir)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://image.goat.com/375/attachments/product_template_pictures/images/114/112/186/original/1711842_00.png.png"],
        statut: "out_of_stock"
    },
    {
        section: "Scarlet & Violet Era",
        badgeCat: "CSV1",
        nom: "Eternal Beginnings",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://lh5.googleusercontent.com/proxy/p1QnLuwELYrAXGb9u5-W4ROfpl4SF9KD4migfobwuR0UFmiv0ti3gpyoZkOaL36CY8If_AnBRi4AO9XGfSxm66ZKQ-t0WCEk7P_U8TTPIC5MDPyCFwgOefaG"],
        statut: "out_of_stock"
    },

    // =========================================================================
    // SECTION 4 : GEM PACKS
    // =========================================================================
    {
        section: "Gem Packs",
        badgeCat: "CBB7C",
        nom: "Gem Pack Vol. 7",
        description: "Official booster box.",
        taobaoId: "1095191988269", 
        taobaoId2: "1093308561553",
        images: ["https://www.yumecards.ca/cdn/shop/files/Product-2026-10-17T231241.139.jpg?v=1792293584"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Gem Packs",
        badgeCat: "CBB6C",
        nom: "Gem Pack Vol. 6",
        description: "Official booster box.",
        taobaoId: "1070975018438",
        taobaoId2: "1083773308654",
        images: ["https://remicardtrader.ca/cdn/shop/files/POKECNGEMPACK6.jpg?v=1786454812"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Gem Packs",
        badgeCat: "CBB5C",
        nom: "Gem Pack Vol. 5",
        description: "Official booster box.",
        taobaoId: "1041523213480",
        taobaoId2: "1038707501926",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9TLXDOLzUX85KYbOhVhPXGUZuYcuJ5YgnPabKA6OwVNgTR-WnT4xAA3o&s=10"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Gem Packs",
        badgeCat: "CBB4C",
        nom: "Gem Pack Vol. 4",
        description: "Official booster box.",
        taobaoId: "1019772789105",
        taobaoId2: "1036427603877", 
        images: ["https://spoilsandloot.com/cdn/shop/files/chinese-gem-pack-vol-4-pokemon-booster-box.webp?v=1774588957"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Gem Packs",
        badgeCat: "CBB3C",
        nom: "Gem Pack Vol. 3",
        description: "Official booster box.",
        taobaoId: "980697249084",
        taobaoId2: "1039895020099",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmoBQZ-Tg4lSqbjGr8VX3w-v8xzRaFsq9_HL5LCq2kFeJpnMO1km0xeoX&s=10"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Gem Packs",
        badgeCat: "CBB2C",
        nom: "Gem Pack Vol. 2",
        description: "Official booster box.",
        taobaoId: "1038965852696",
        taobaoId2: "932678630102",
        images: ["https://m.media-amazon.com/images/I/51+kPL0qduL.jpg"],
        fournisseur: "Pingtouge TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Gem Packs",
        badgeCat: "CBB1C",
        nom: "Gem Pack Vol. 1",
        description: "Official booster box.",
        taobaoId: "979607578715",
        taobaoId2: "1096711400657",
        images: ["https://www.maxgaming.com/bilder/artiklar/zoom/35546_1.jpg?m=1753267142"],
        statut: "out_of_stock"
    },

    // =========================================================================
    // SECTION 5 : COLLECT 151 SERIES
    // =========================================================================
    {
        section: "Collect 151 Series",
        badgeCat: "CS151-G",
        nom: "Collect 151 Gathering",
        description: "Official booster box.",
        taobaoId: "985432609330",
        taobaoId2: "1060819098263",
        images: ["https://card-binder.com/cdn/shop/files/Pokemon-151C-Collect-151-Gathering-Boosterbox.webp?v=1756631761"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Collect 151 Series",
        badgeCat: "CS151-S",
        nom: "Collect 151 Surprise",
        description: "Official booster box.",
        taobaoId: "899608090307",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBo7t9UrnS88uDSBRdYcKyJuJY3eSGZ-bGMO9YIQq2ZYIcxXRVxfNzSza&s=10"]
    },
    {
        section: "Collect 151 Series",
        badgeCat: "CS151-H",
        nom: "Collect 151 Hope",
        description: "Official booster box.",
        taobaoId: "899608090307",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROwzkSMA16zX0CK3vVFebOtzYpxpKYLMUUO_WFJzprM49JVi5TImfCYKph&s=10"]
    },
    {
        section: "Collect 151 Series",
        badgeCat: "CS151-J",
        nom: "Collect 151 Journey",
        description: "Official booster box.",
        taobaoId: "899608090307",
        taobaoId2: "1039895020099",
        images: ["https://lh6.googleusercontent.com/proxy/rDdWYwY6yLcBtTbQbQ5CzcCqmcUCUs-9ebr0zXjK2IisW3SqfJE6PWm99SUGDmKabd7M7HkgGpwog6F0T4g1c19Rov_ZzKlepN3P7rInxo9J39EJt9oRnic-HqVKTw_5mr6D"],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },

    // =========================================================================
    // SECTION 6 : SWORD & SHIELD ERA
    // =========================================================================
    {
        section: "Sword & Shield Era",
        badgeCat: "CS6A",
        nom: "Shadow of the Blue Sea (Lugia)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/04/invictatcg-pokemon-chinese-shadow-of-the-blue-sea-lugia-CS6BC-simplified-chinese-jumbo-booster-box.png"],
        statut: "out_of_stock"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS6B",
        nom: "Shadow of the Blue Sea (Giratina)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/04/invictatcg-pokemon-chinese-shadow-of-the-blue-sea-giratina-CS6BC-simplified-chinese-jumbo-booster-box.png"],
        statut: "out_of_stock"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS5A",
        nom: "Brave Stars Display (Typhlosion)",
        description: "Official booster box.",
        taobaoId: "1077898091295",
        taobaoId2: "",
        images: ["https://lh5.googleusercontent.com/proxy/mKV2hSixeFfM7QOQHyUP9MiUcRcMCQUadu_1rAWx2lAxw2sePmabqRuf3SnwE1b7PXnNME9uL7RcvYnuMnB5WW3pDE8aQroKOYkFCsGHkp-3O_ebCzwCXFFiGNV6CGxbLzkyZ1rBpg0yLdIEoYTsloF9L31bwlfsbwuhtJw"],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS5B",
        nom: "Brave Stars Display (Lucario)",
        description: "Official booster box.",
        taobaoId: "1077898091295",
        taobaoId2: "",
        images: ["https://lh4.googleusercontent.com/proxy/Mh5AMHlVCKUvnc3joPEXDkhtY79z-5yAohzcczgYbbjrBzKWkeGJ_VX4WWwsjDul_qPWfwGEosWZftLTBjdbW0KZfP3TrtRmWouCj6E1-DQlABr5U54IHywOKpzW4pKyZDh9jL4iyYEswSQXNFIbqGifhzbvIV9jiX3iFA6sBmYeClZsXpMxzaWVF4qsag"],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS4A",
        nom: "Nine Colors Gathering (Umbreon)",
        description: "Official booster box.",
        taobaoId: "1038724485132",
        taobaoId2: "767333963100",
        images: ["https://lh3.googleusercontent.com/proxy/BGbaaxN3iStHvlwH1Au_E8Zj0YnmBaCPWX_4UzlBEekNSz9n7libOy4Jl54qAJaMQsuZ8VafNDAiuHKAnaPnkSF9na_nglyipJHqOnJigtXW9MYazYkZlLDceLPUwgskfC7Jn1KI1XauvKIkjKLEADYI41sXDRcZ9tZzzuyGcA"],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS4B",
        nom: "Nine Colors Gathering (Mew)",
        description: "Official booster box.",
        taobaoId: "1038724485132",
        taobaoId2: "767333963100",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDRDWQkbnJpQwB8N2F7VQs5u6BJIGUT_2Xu9eQv9raaTykMsOJuIMtPZU&s=10"],
        fournisseur: "Pingtouge TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS3A",
        nom: "Primordial Arts Display (Venusaur)",
        description: "Official booster box.",
        taobaoId: "1039871568880",
        taobaoId2: "759219454349",
        images: ["https://monsterscollectors.com/wp-content/uploads/2025/11/Caja-de-sobres-Pokemon-Primordial-Arts-Overgrow-Chino-1.png"],
        fournisseur: "Pingtouge TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS3B",
        nom: "Primordial Arts Display (Blastoise)",
        description: "Official booster box.",
        taobaoId: "1039871568880",
        taobaoId2: "759219454349",
        images: ["https://pandacollecting.com/wp-content/uploads/2026/05/jumbo.png"],
        fournisseur: "Pingtouge TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS3B",
        nom: "Poké Ball Gift Set",
        description: "Poké Ball accessories & booster packs.",
        taobaoId: "1038982704292",
        taobaoId2: "761115139755",
        images: [
            "https://godofcards.com/cdn/shop/files/PokemonPTCG5.0PokeballS-ChinesischKomprimiert.jpg?v=1749730984&width=2048",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTai5SsGCObp1yUR2PR7O1Sa5K15DqNwkDwurFO0D101C4F3p18gzKgO5mt&s=10"
        ],
        fournisseur: "Pingtouge TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS3A",
        nom: "Great Ball Gift Set",
        description: "Great Ball accessories & booster packs.",
        taobaoId: "1038982704292",
        taobaoId2: "761115139755",
        images: [
            "https://godofcards.com/cdn/shop/files/PokemonPTCG5.0SuperballS-ChinesischKomprimiert.jpg?v=1749731192&width=2048",
            "https://kanika.lv/wp-content/uploads/group-86-1.png"
        ],
        fournisseur: "Pingtouge TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS2A",
        nom: "Vivid Portrayals Display (Charizard)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dxljBJH77sHgfqswS7C1eMrT-6i_lIhBRSbPD3wH_Tywxf6PQI9APtWZ&s=10"],
        statut: "out_of_stock"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS2B",
        nom: "Vivid Portrayals Display (Duraludon)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwACRITnyb1RyvuzvALQgteVdYzvLacz4eIlgJIBRpZR6g_ae9TgozwZQ&s=10"],
        statut: "out_of_stock"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS1A",
        nom: "Dynamax Clash Display (Pikachu)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://cpop.ch/1934-large_default/pokemon-simplified-chinese-cs1a-c-jumbo-booster.jpg"],
        statut: "out_of_stock"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "CS1B",
        nom: "Dynamax Clash Display (Cinderace)",
        description: "Official booster box.",
        taobaoId: "",
        taobaoId2: "",
        images: ["https://cpop.ch/1937-large_default/pokemon-simplified-chinese-cs1b-c-jumbo-booster.jpg"],
        statut: "out_of_stock"
    },
    {
        section: "Sword & Shield Era",
        badgeCat: "Special",
        nom: "Ultra Ball Gift Set",
        description: "Ultra Ball accessories & booster packs.",
        taobaoId: "",
        taobaoId2: "",
        images: [
            "https://ueeshop.ly200-cdn.com/u_file/UPBB/UPBB486/2406/17/products/4aebee170a.jpg?x-oss-process=image/format,webp/quality,q_100",
            "https://www.miaocollectables.com/cdn/shop/files/1e14a46bbfb8b00889688bd698dd8086.jpg?v=1748299856"
        ],
        statut: "out_of_stock"
    },

    // =========================================================================
    // SECTION 7 : FESTIVAL GIFT BOXES
    // =========================================================================
    {
        section: "Festival Gift Boxes",
        badgeCat: "Mid-Autumn",
        nom: "2026 Mid-Autumn Gift Box",
        description: "Limited festival box with promos & packs.",
        taobaoId: "1071726804171",
        taobaoId2: "1071680335651",
        images: [
            "https://collectorstore.com/cdn/shop/files/CollectorStore00003_867dd20e-c23a-4eb5-805f-61f317dc99b0.jpg?v=1789052091&width=990",
            "https://card-binder.com/cdn/shop/files/Pokemon-Mid-Autumn-Festival-Gift-Box-Simplified-Chinese-contents.webp?v=1787913719&width=1500"
        ],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Festival Gift Boxes",
        badgeCat: "Dragon Boat",
        nom: "2026 Dragon Boat Festival Box",
        description: "Limited festival box with promos & packs.",
        taobaoId: "1058523215773",
        taobaoId2: "",
        images: [
            "https://games-island.eu/media/image/product/1153600/lg/pokemon-tcg-dragon-boat-gift-box-2026-chinesisch.jpg",
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemon2026DragonBoatFestivalGiftBoxSet.jpg?v=1776680425"
        ],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Festival Gift Boxes",
        badgeCat: "Lunar New Year",
        nom: "2026 Lunar New Year Gift Box",
        description: "Limited festival box with promos & packs.",
        taobaoId: "1017089005184",
        taobaoId2: "",
        images: [
            "https://d1dyj6segvzycq.cloudfront.net/9fcd2c4e-9f8f-4808-a1f9-bbeb3a6a2a49/a0de6229-5e19-40a8-8a60-08a6d053db0a/a0e32892-f382-4696-8a00-da6f575c2709/pokemon-simplified-chinese-2026-lunar-new-year-gift-box.jpg",
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinese2026PokemonChineseNewYearGiftBox.jpg?v=1776399222"
        ],
        fournisseur: "Wanpi Cards"
    },

    // =========================================================================
    // SECTION 8 : COIN BAGS
    // =========================================================================
    {
        section: "Coin Bags",
        badgeCat: "30th-C",
        nom: "30th Anniversary Coin Bag",
        description: "3x booster packs + collectible coin.",
        taobaoId: "1078477045552",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/DeMfqDRoxUK/",
        images: ["https://i0.wp.com/katzenworld.shop/wp-content/uploads/2026/10/xCsvB678SEHnQsnJEwA77_b0X5C_j1iK9xxyQceY-t_KUwwLreptpTpXEX0qHQWHPqk9WlhnN2QZ1yrg0YdisjlyQ9IMxV-whH58ShVYumxCmz8a0LPxVc8lOcENGBtWJeNdq1_NZWYt5ucX0s73g5Qbw_W6i7-oGYaptOiANo_JHoO6qQh_dU24ewjlOK8t.jpeg?fit=1080%2C1080&ssl=1"],
        fournisseur: "DunDun TCG"
    },
    {
        section: "Coin Bags",
        badgeCat: "CSV9",
        nom: "Stellar Crystal Coin Bag",
        description: "3x booster packs + collectible coin.",
        taobaoId: "1053719752963",
        taobaoId2: "",
        images: [
            "https://dzpdbgwih7u1r.cloudfront.net/9fcd2c4e-9f8f-4808-a1f9-bbeb3a6a2a49/a1fce7d5-2d7d-4897-9495-ef7d6e03ed1b/a1fce820-db2a-4418-babd-347c130bd618/w400h400-pokemon-simplified-chinese-stellar-crystal-csv9c-coin-set.jpg",
            "https://m.media-amazon.com/images/I/61MGcrYNNDL._AC_UF1000,1000_QL80_.jpg"
        ],
        fournisseur: "Pingtouge TCG"
    },
    {
        section: "Coin Bags",
        badgeCat: "CSV10",
        nom: "Chasing Glory Coin Bag",
        description: "3x booster packs + collectible coin.",
        taobaoId: "1067353432814",
        taobaoId2: "1088794189729",
        images: ["https://images-eu.ssl-images-amazon.com/images/I/71cZJr3YPnL._AC_UL495_SR435,495_.jpg"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Coin Bags",
        badgeCat: "CSV8",
        nom: "Bright Fantasy Coin Bag",
        description: "3x booster packs + collectible coin.",
        taobaoId: "1026530979141",
        taobaoId2: "1038882806803",
        images: ["https://erp-image.sgliteasset.com/_next/image?url=https%3A%2F%2Fcdn1.sgliteasset.com%2Ftcglah%2Fimages%2Fproduct%2Fproduct-7525796%2F34x36X3U69d3424537017_1775452741.jpg&w=3840&q=85"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Coin Bags",
        badgeCat: "CSV7",
        nom: "Blade Awakening Coin Bag",
        description: "3x booster packs + collectible coin.",
        taobaoId: "1008157120043",
        taobaoId2: "1095040159008",
        images: ["https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/04/pokemon-simplified-chinese-blade-awakening-csv7c-coin-set.png"],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },

    // =========================================================================
    // SECTION 9 : BLIND BOXES
    // =========================================================================
    {
        section: "Blind Boxes",
        badgeCat: "Pikachu Edition",
        nom: "Dream Figure Vol. 4 (Pikachu)",
        description: "Collectible figurine + booster packs.",
        taobaoId: "1082955160912",
        taobaoId2: "1079806548243",
        videoUrl: "https://www.instagram.com/reel/DdtlypOo0AW/",
        images: [
            "https://collectorstore.com/cdn/shop/files/CollectorStore00002_7207263c-4504-4ee0-ae14-b3d648f6dba7.jpg?v=1790101321&width=1445",
            "https://card-binder.com/cdn/shop/files/Pokemon-30th-celebration-pikachu-figure-blind-box-simplified-chinese-pikachu-figures.webp?v=1788978615&width=1500",
            "https://wholesale.hokeypokegames.co.uk/storage/products/2kdPuW06V6Ouk9qSqpGSVNuCwFwYqpNCl56CwQP6.webp"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Blind Boxes",
        badgeCat: "Eevee Edition",
        nom: "Dream Figure Vol. 3 (Eevee)",
        description: "Collectible figurine + booster packs.",
        taobaoId: "1078195403792",
        taobaoId2: "1072080775449",
        images: [
            "https://escollectible.com/cdn/shop/files/rn-image_picker_lib_temp_675bb14b-9a5a-4ccb-bbdd-2b265b98e2f1.jpg?v=1786389068",
            "https://collectorstore.com/cdn/shop/files/CollectorStore00001_3c6277d1-2842-417f-a3c6-63f1dcb381ab.jpg?v=1787866920&width=990",
            "https://levelupstore.co.za/cdn/shop/files/s-l1600_1_8a319222-0268-4635-9c76-fd417facea77_1200x.png?v=1787129610"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Blind Boxes",
        badgeCat: "Vol. 2",
        nom: "Dream Figure Vol. 2 Blind Box",
        description: "Collectible figurine + booster packs.",
        taobaoId: "1044387395690",
        taobaoId2: "1045033219070",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhtsk-Qh_hf6kAgLTwz6v9CAag4wePr0oN9bafujecqKP01j_Q7M5Vjvw&s=10",
            "https://hanabitradingco.ca/cdn/shop/files/dreamfigurevol2-2.jpg?v=1777231093"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "Pingtouge TCG"
    },
    {
        section: "Blind Boxes",
        badgeCat: "Vol. 1",
        nom: "Dream Figure Vol. 1 Blind Box",
        description: "Collectible figurine + booster packs.",
        taobaoId: "994367267628",
        taobaoId2: "1096711400657",
        images: [
            "https://www.tcghobby.com/cdn/shop/files/SimplifiedChinesePokemonDreamPaintingCollection151FigureSet.jpg?v=1776398595",
            "https://i0.wp.com/katzenworld.shop/wp-content/uploads/2025/12/Dream-Painting-Collection-151-Figurine-Set-Figures-2.webp?fit=800%2C1097&ssl=1"
        ],
        fournisseur: "DunDun TCG",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Blind Boxes",
        badgeCat: "Funism Mystery",
        nom: "Ditto Blind Box",
        description: "Official Funism mystery figurine.",
        taobaoId: "1085294497168",
        taobaoId2: "",
        videoUrl: "https://www.instagram.com/reel/DexDldIM99E/",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPnMs7_SAM5ydGsOGMIRnfg32_qAu6G_IsNkMNcpyXW4lSJixcR95DWs&s=10",
            "https://sunnystudio.store/cdn/shop/files/PokemonTinyAdventuresTransform_DittoQ-faceCase.avif?v=1790971171&width=1445",
            "https://sunnystudio.store/cdn/shop/files/PokemonTinyAdventuresTransform_DittoQ-faceSingle.avif?v=1790971171&width=1920"
        ]
    },

    // =========================================================================
    // SECTION 10 : PREMIUM COLLECTION BOXES
    // =========================================================================
    {
        section: "Premium Collection Boxes",
        badgeCat: "Master Strategy",
        nom: "Milton ex Master Strategy Set",
        description: "Ready-to-play deck set + booster packs.",
        taobaoId: "1008155364462",
        taobaoId2: "",
        images: [
            "https://aquitaz.se/cdn/shop/files/PokemonMegaEvolutionPhantasmalFlamesEliteTrainerBox_ETB_9Pack_43.png?v=1767582465",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7yVUkTiFImWqOLx-lw9EWpHB-IrWkkrg0bLKbbHUPkK_d3k9LF4On7Fv&s=10"
        ],
        isOfficial: true,
        fournisseur: "Official Store"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Master Strategy",
        nom: "Raging Bolt ex Master Strategy Set",
        description: "Ready-to-play deck set + booster packs.",
        taobaoId: "1065661862776",
        taobaoId2: "",
        images: [
            "https://aquitaz.se/cdn/shop/files/BlackBox-2026-06-30T210032.091.png?v=1782825957",
            "https://aquitaz.se/cdn/shop/files/BlackBox-2026-06-30T211749.540.png?v=1782825957"
        ],
        isOfficial: true,
        fournisseur: "Official Store"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Master Strategy",
        nom: "Gholdengo ex Master Strategy Set",
        description: "Ready-to-play deck set + booster packs.",
        taobaoId: "1065668842312",
        taobaoId2: "",
        images: ["https://www.japan2uk.com/cdn/shop/files/Pokemon_Gholdengo_ex_csvM2c_Simplified_Chinese_Master_Strategy_Deck_Building_Set_1024x1024.png?v=1785495434"],
        isOfficial: true,
        fournisseur: "Official Store"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Master Strategy",
        nom: "Dragapult ex Master Strategy Set",
        description: "Ready-to-play deck set + booster packs.",
        taobaoId: "1066680325531",
        taobaoId2: "",
        images: ["https://ueeshop.ly200-cdn.com/u_file/UPBB/UPBB486/2609/08/products/78f7412ea38e8f041677eaecea8f40bb-172101dcce.png?x-oss-process=image/format,webp/quality,q_100"],
        isOfficial: true,
        fournisseur: "Official Store"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Mask Box",
        nom: "Ogerpon Wellspring Mask Gift Box",
        description: "Special gift box with promo & packs.",
        taobaoId: "1049188091485",
        taobaoId2: "1051982944741",
        images: [
            "https://static.wixstatic.com/media/d2c7b0_10f8544592a14adda9162a7a98bc44b8~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_Ogerpon_Wellspring_Gift_Box_Set.webp?v=1779209947"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Mask Box",
        nom: "Ogerpon Cornerstone Mask Gift Box",
        description: "Special gift box with promo & packs.",
        taobaoId: "1050912105033",
        taobaoId2: "1051982944741",
        images: [
            "https://main-wordpress-bucket-production.lon1.digitaloceanspaces.com/2026/05/OgerPon-ETB-Brown.webp",
            "https://nextleveluk.net/cdn/shop/files/s-l1600-2026-10-01T152323.962.jpg?v=1790864832&width=1024"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Mask Box",
        nom: "Ogerpon Teal Mask Gift Box",
        description: "Special gift box with promo & packs.",
        taobaoId: "1050909737218",
        taobaoId2: "1051982944741",
        images: [
            "https://static.wixstatic.com/media/d2c7b0_5749d47b909e44cf987fcadf8686ff9d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
            "https://pg-cdn-a2.datacaciques.com/00/Mzc3MTUw/26/04/24/e52cf2k0r62fw4u5/e0062501a7b99b98.jpg"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "DunDun TCG"
    },
    {
        section: "Premium Collection Boxes",
        badgeCat: "Mask Box",
        nom: "Ogerpon Hearthflame Mask Gift Box",
        description: "Special gift box with promo & packs.",
        taobaoId: "1050912901200",
        taobaoId2: "1051982944741",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxa6HqnsRfMAzQN6evqXrYdwe_Fq0syjwNLYsE72-9_w&s=10",
            "https://ae-pic-a1.aliexpress-media.com/kf/S12cb4b8e79af4815936a842786e80018z.jpg",
            "https://www.tcghobby.com/cdn/shop/files/Simplified_Chinese_Pokemon_Ogerpon_Hearthflame_Gift_Box_Set.webp?v=1779209745&width=645"
        ],
        isOfficial: true,
        fournisseur: "Official Store",
        fournisseurBackup: "DunDun TCG"
    }
];

function genererCarteHtml(p) {
    const catBadge = p.badgeCat || p.section;
    
    let htmlBadge = '';
    if (p.statut === "out_of_stock") {
        htmlBadge = `<div class="card-badge" style="background: #444;">Sold Out</div>`;
    } else if (p.badge) {
        htmlBadge = `<div class="card-badge" style="background: ${p.badge.color};">${p.badge.text}</div>`;
    }

    let videoBadgeHtml = '';
    if (p.videoUrl && p.videoUrl.trim() !== '') {
        videoBadgeHtml = `
            <a href="${p.videoUrl}" target="_blank" rel="noopener noreferrer" class="badge-video" title="Watch unboxing Reel on Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>Unboxing</span>
            </a>
        `;
    }

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
                ${videoBadgeHtml}
                <button class="carousel-arrow prev" onclick="slideCarousel(this, -1)">‹</button>
                <div class="card-carousel" onscroll="updateDotsOnScroll(this)">
                    ${p.images.map(img => `<img src="${img}" alt="${p.nom}" class="card-img" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallback}'">`).join('')}
                </div>
                <button class="carousel-arrow next" onclick="slideCarousel(this, 1)">›</button>
                ${dotsHtml}
            </div>
        `;
    } else if (p.images && p.images.length === 1) {
        imagesHtml = `
            <div class="image-wrapper">
                ${videoBadgeHtml}
                <img src="${p.images[0]}" alt="${p.nom}" class="card-img card-img-single" loading="lazy" decoding="async" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallback}'">
            </div>
        `;
    }

    let sourceLabel = p.fournisseur ? p.fournisseur : 'Verified';
    if (sourceLabel.includes("Official Store") || sourceLabel.includes("Pokémon Store")) {
        sourceLabel = "Official Store";
    }

    const fournisseurHeader = `
        <div class="card-meta-row">
            <span class="category">${catBadge}</span>
            <span class="supplier-tag">${sourceLabel}</span>
        </div>
    `;

    // Lien de secours compact sous le bouton : zéro cannibalisation, conversion pure
    let backupLinkHtml = '';
    if (p.taobaoId2 && p.taobaoId2.trim() !== "" && p.statut !== "out_of_stock") {
        const sugargooUrl2 = formatSugargooLink(p.taobaoId2);
        backupLinkHtml = `
            <a href="javascript:void(0)" onclick="triggerProductAction('${sugargooUrl2}')" class="card-backup-link" title="Order from alternate seller if primary is sold out">
                Backup Seller →
            </a>
        `;
    }

    let boutonsHtml = '';
    if (p.statut === "out_of_stock") {
        boutonsHtml = `
            <button class="btn-main-card" style="background: #222327; color: #666; border: 1px solid #333338; cursor: not-allowed;">Sold Out</button>
        `;
    } else if (p.statut === "coming_soon") {
        boutonsHtml = `
            <a href="https://instagram.com/remy.tcg" target="_blank" rel="noopener noreferrer" class="btn-main-card btn-notify">Follow IG for Drops</a>
        `;
    } else if (!p.taobaoId || p.taobaoId.trim() === "") {
        boutonsHtml = `
            <button class="btn-main-card" style="background: #e74c3c; color: #fff; cursor: not-allowed;">ID Missing</button>
        `;
    } else {
        const sugargooUrl = formatSugargooLink(p.taobaoId);
        boutonsHtml = `
            <button onclick="triggerProductAction('${sugargooUrl}')" class="btn-main-card btn-order">Order on Sugargoo</button>
        `;
    }

    return `
        <div class="card">
            ${htmlBadge}
            ${imagesHtml}
            <div class="card-content">
                ${fournisseurHeader}
                <h3>${p.nom}</h3>
                <p>${p.description}</p>
                <div class="card-footer-action">
                    ${boutonsHtml}
                    ${backupLinkHtml}
                </div>
            </div>
        </div>
    `;
}

function afficher(liste) {
    const container = document.getElementById('catalogue');
    if (!container) return;
    container.innerHTML = '';

    const sectionsOrdre = [
        "Trending & Best Sellers",
        "30th Anniversary",
        "Scarlet & Violet Era",
        "Gem Packs",
        "Collect 151 Series",
        "Sword & Shield Era",
        "Festival Gift Boxes",
        "Coin Bags",
        "Blind Boxes",
        "Premium Collection Boxes"
    ];

    let globalArchiveIndex = 0;

    sectionsOrdre.forEach(secNom => {
        if (secNom === "Trending & Best Sellers" && window.activePillCategory !== '') {
            return;
        }

        const itemsSec = liste.filter(p => p.section === secNom);
        if (itemsSec.length === 0) return;

        const itemsActifs = itemsSec.filter(p => p.statut !== "out_of_stock");
        const itemsArchive = itemsSec.filter(p => p.statut === "out_of_stock");

        let sectionHtml = `
            <div class="era-section">
                <div class="era-header">
                    <h2 class="era-title">
                        ${secNom}
                        <span class="era-count-badge">${itemsSec.length} items</span>
                    </h2>
                </div>
                <div class="grid">
        `;

        itemsActifs.forEach(p => {
            sectionHtml += genererCarteHtml(p);
        });

        if (itemsArchive.length > 0) {
            globalArchiveIndex++;
            const archiveId = `archive-sec-${globalArchiveIndex}`;

            sectionHtml += `
                <div id="${archiveId}" style="display: none;">
                    ${itemsArchive.map(p => genererCarteHtml(p)).join('')}
                </div>
                <button type="button" class="btn-expand-archive" onclick="toggleArchive(this, '${archiveId}')">
                    View ${itemsArchive.length} Archived / Sold Out Item${itemsArchive.length > 1 ? 's' : ''} (Click to expand)
                </button>
            `;
        }

        sectionHtml += `</div></div>`;
        container.innerHTML += sectionHtml;
    });
}

function filtrer() {
    const searchInput = document.getElementById('search');
    const recherche = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selection = window.activePillCategory || '';
    const words = recherche.split(/\s+/).filter(w => w.length > 0);

    const resultats = produits.filter(p => {
        let correspondTexte = true;
        if (words.length > 0) {
            const searchable = [
                p.nom || '',
                p.description || '',
                p.section || '',
                p.badgeCat || '',
                p.fournisseur || ''
            ].join(' ').toLowerCase();

            correspondTexte = words.every(w => {
                if (searchable.includes(w)) return true;
                if (/^\d+$/.test(w) && searchable.includes(w + 'th')) return true;
                return false;
            });
        }

        let correspondCategorie = false;
        if (selection === "") {
            correspondCategorie = true;
        } else {
            correspondCategorie = p.section === selection || 
                                  (p.badgeCat && p.badgeCat.toLowerCase().includes(selection.toLowerCase()));
        }
        
        return correspondTexte && correspondCategorie;
    });
    
    afficher(resultats);
}

// Initialisation garantie dès que le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => afficher(produits));
} else {
    afficher(produits);
}
