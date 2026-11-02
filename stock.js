const produits = [
    { 
        categorie: "30th Anniversary", 
        nom: "Charizard Figure Box", 
        description: "Premium box featuring an exclusive Charizard figure, oversized card, and 15x booster packs.", 
        lien: "https://joyagoo.com/register/?ref=301118558" 
    },
    { 
        categorie: "30th Anniversary", 
        nom: "Umbreon & Espeon UPC", 
        description: "The ultimate Ultra Premium Collection featuring both iconic Eeveelutions.", 
        lien: "https://joyagoo.com/register/?ref=301118558" 
    },
    { 
        categorie: "Gem Packs", 
        nom: "Gem Pack Vol. 7 (Psyduck)", 
        description: "The brand new, highly anticipated jumbo set featuring Psyduck.", 
        lien: "https://joyagoo.com/register/?ref=301118558" 
    }
];

function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    liste.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <span style="font-size:0.8em; color:#aaa; text-transform: uppercase;">${p.categorie}</span>
                <h3>${p.nom}</h3>
                <p style="font-size:0.9em; color:#ddd; line-height: 1.4;">${p.description}</p>
                <a href="${p.lien}" class="btn" target="_blank">Acheter via Joyagoo</a>
            </div>
        `;
    });
}

function filtrer() {
    const recherche = document.getElementById('search').value.toLowerCase();
    const resultats = produits.filter(p => p.nom.toLowerCase().includes(recherche) || p.categorie.toLowerCase().includes(recherche));
    afficher(resultats);
}

// Lancement au démarrage
afficher(produits);
