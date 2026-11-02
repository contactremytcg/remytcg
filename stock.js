const produits = [
    { 
        categorie: "30th Anniversary", 
        nom: "Charizard Figure Box", 
        description: "Premium box featuring an exclusive Charizard figure, oversized card, and 15x booster packs.", 
        lien: "https://joyagoo.com/register/?ref=301118558",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3f/Pok%C3%A9mon_Charizard_art.png"
    },
    { 
        categorie: "30th Anniversary", 
        nom: "Umbreon & Espeon UPC", 
        description: "The ultimate Ultra Premium Collection featuring both iconic Eeveelutions.", 
        lien: "https://joyagoo.com/register/?ref=301118558",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
    },
    { 
        categorie: "Gem Packs", 
        nom: "Gem Pack Vol. 7 (Psyduck)", 
        description: "The brand new, highly anticipated jumbo set featuring Psyduck.", 
        lien: "https://joyagoo.com/register/?ref=301118558",
        image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
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
