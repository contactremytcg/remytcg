function afficher(liste) {
    const container = document.getElementById('catalogue');
    container.innerHTML = '';
    liste.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.image}" alt="${p.nom}" class="card-img" onerror="this.src='https://via.placeholder.com/300x250/2a2a2a/FFCB05?text=Image+Unavailable'">
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
