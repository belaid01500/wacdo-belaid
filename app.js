// Fetch du json categorie
fetch("./json/categories.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    myCategorieCard(data);
  });

// Function myCategorieCard
function myCategorieCard(donnees) {
  let categories = document.querySelector(".container");
  categories.innerHTML = "";
  donnees.forEach((donnee) => {
    let categorieCard = document.createElement("div");
    categorieCard.id = "categorie-card";
    categorieCard.className = "flex align-center justify-center";
    categorieCard.innerHTML = `
          <img
            src="./assets/${donnee.image}"
            alt="logo de la categories menus"
          />
          <div>
            <p><b>${donnee.title}</b></p>
          </div>
    `;
    categorieCard.addEventListener("click", () => {
      afficheProduits(donnee.id);
    });

    categories.appendChild(categorieCard);
  });
}

// Fetch du json Produit
fetch("./json/produits.json")
  .then((rep) => rep.json())
  .then((data) => {
    console.log(data);
    myProduct(data.menus);
  });

// Function myProduct
function myProduct(products) {
  let cardProduct = document.querySelector(".container-produit");

  cardProduct.innerHTML = "";

  products.forEach((product) => {
    let produitCard = document.createElement("div");
    produitCard.id = "produit";
    produitCard.className = "flex justify-center align-center";

    produitCard.innerHTML = `
          <img
            src="./assets/produits${product.image}"
            alt="Produit de la categorie menu"
          />
          <div class="flex flex-column justify-center align-center">
            <p><b>${product.nom}</b></p>
            <p>${product.prix}€</p>
          </div>`;

    cardProduct.appendChild(produitCard);
  });
}

const categories = [
  {
    id: 1,
    title: "menus",
    image: "/categories/menus.png",
  },
  {
    id: 2,
    title: "boissons",
    image: "/categories/boissons.png",
  },
  {
    id: 3,
    title: "burgers",
    image: "/categories/burgers.png",
  },
  {
    id: 4,
    title: "frites",
    image: "/categories/frites.png",
  },
  {
    id: 5,
    title: "encas",
    image: "/categories/encas.png",
  },
  {
    id: 6,
    title: "wraps",
    image: "/categories/wraps.png",
  },
  {
    id: 7,
    title: "salades",
    image: "/categories/salades.png",
  },
  {
    id: 8,
    title: "desserts",
    image: "/categories/desserts.png",
  },
  {
    id: 9,
    title: "sauces",
    image: "/categories/sauces.png",
  },
];

const produitsParCategorie = {
  1: [
    {
      id: 1,
      nom: "Menu Le 280",
      prix: 8.8,
      image: "/burgers/280.png",
    },
    {
      id: 2,
      nom: "Menu Big Tasty",
      prix: 10.6,
      image: "/burgers/BIG_TASTY_1_VIANDE.png",
    },
    {
      id: 3,
      nom: "Menu Big Tasty Bacon",
      prix: 10.9,
      image: "/burgers/BIG_TASTY_BACON_1_VIANDE.png",
    },
    {
      id: 4,
      nom: "Menu Big Mac",
      prix: 8.0,
      image: "/burgers/BIGMAC.png",
    },
    {
      id: 5,
      nom: "Menu CBO",
      prix: 10.9,
      image: "/burgers/CBO.png",
    },
    {
      id: 6,
      nom: "Menu MC Chicken",
      prix: 9.3,
      image: "/burgers/MCCHICKEN.png",
    },
    {
      id: 7,
      nom: "Menu MC Crispy",
      prix: 7.2,
      image: "/burgers/MCCRISPY.png",
    },
    {
      id: 8,
      nom: "Menu MC Fish",
      prix: 7.2,
      image: "/burgers/MCFISH.png",
    },
    {
      id: 9,
      nom: "Menu Royal Bacon",
      prix: 7.05,
      image: "/burgers/ROYALBACON.png",
    },
    {
      id: 10,
      nom: "Menu Royal Cheese",
      prix: 6.4,
      image: "/burgers/ROYALCHEESE.png",
    },
    {
      id: 11,
      nom: "Menu Royal Deluxe",
      prix: 7.4,
      image: "/burgers/ROYALDELUXE.png",
    },
    {
      id: 12,
      nom: "Menu Signature BBQ Beef 2 viandes",
      prix: 13.5,
      image: "/burgers/SIGNATURE_BBQ_BEEF_(2_VIANDES).png",
    },
    {
      id: 13,
      nom: "Menu Signature Beef BBQ",
      prix: 11.9,
      image: "/burgers/SIGNATURE_BEEF_BBQ_BURGER_(1_VIANDE).png",
    },
  ],
  2: [
    {
      id: 27,
      nom: "Coca Cola",
      prix: 1.9,
      image: "/boissons/coca-cola.png",
    },
    {
      id: 28,
      nom: "Coca Sans Sucres",
      prix: 1.9,
      image: "/boissons/coca-sans-sucres.png",
    },
    {
      id: 29,
      nom: "Eau",
      prix: 1.0,
      image: "/boissons/eau.png",
    },
    {
      id: 30,
      nom: "Fanta Orange",
      prix: 1.9,
      image: "/boissons/fanta.png",
    },
    {
      id: 31,
      nom: "Ice Tea Pêche",
      prix: 1.9,
      image: "/boissons/ice-tea-peche.png",
    },
    {
      id: 32,
      nom: "Ice Tea Citron",
      prix: 1.9,
      image: "/boissons/the-vert-citron-sans-sucres.png",
    },
    {
      id: 33,
      nom: "Jus d'Orange",
      prix: 2.1,
      image: "/boissons/jus-orange.png",
    },
    {
      id: 34,
      nom: "Jus de Pommes Bio",
      prix: 2.3,
      image: "/boissons/jus-pomme-bio.png",
    },
  ],
  3: [
    {
      id: 14,
      nom: "Le 280",
      prix: 6.8,
      image: "/burgers/280.png",
    },
    {
      id: 15,
      nom: "Big Tasty",
      prix: 8.6,
      image: "/burgers/BIG_TASTY_1_VIANDE.png",
    },
    {
      id: 16,
      nom: "Big Tasty Bacon",
      prix: 8.9,
      image: "/burgers/BIG_TASTY_BACON_1_VIANDE.png",
    },
    {
      id: 17,
      nom: "Big Mac",
      prix: 6.0,
      image: "/burgers/BIGMAC.png",
    },
    {
      id: 18,
      nom: "CBO",
      prix: 8.9,
      image: "/burgers/CBO.png",
    },
    {
      id: 19,
      nom: "MC Chicken",
      prix: 7.3,
      image: "/burgers/MCCHICKEN.png",
    },
    {
      id: 20,
      nom: "MC Crispy",
      prix: 5.3,
      image: "/burgers/MCCRISPY.png",
    },
    {
      id: 21,
      nom: "MC Fish",
      prix: 4.85,
      image: "/burgers/MCFISH.png",
    },
    {
      id: 22,
      nom: "Royal Bacon",
      prix: 5.1,
      image: "/burgers/ROYALBACON.png",
    },
    {
      id: 23,
      nom: "Royal Cheese",
      prix: 4.4,
      image: "/burgers/ROYALCHEESE.png",
    },
    {
      id: 24,
      nom: "Royal Deluxe",
      prix: 5.4,
      image: "/burgers/ROYALDELUXE.png",
    },
    {
      id: 25,
      nom: "Signature BBQ Beef 2 viandes",
      prix: 11.4,
      image: "/burgers/SIGNATURE_BBQ_BEEF_(2_VIANDES).png",
    },
    {
      id: 26,
      nom: "Signature Beef BBQ",
      prix: 10.3,
      image: "/burgers/SIGNATURE_BEEF_BBQ_BURGER_(1_VIANDE).png",
    },
  ],
  4: [
    {
      id: 35,
      nom: "Petite Frite",
      prix: 1.45,
      image: "/frites/PETITE_FRITE.png",
    },
    {
      id: 36,
      nom: "Moyenne Frite",
      prix: 2.75,
      image: "/frites/MOYENNE_FRITE.png",
    },
    {
      id: 37,
      nom: "Grande Frite",
      prix: 3.5,
      image: "/frites/GRANDE_FRITE.png",
    },
    {
      id: 38,
      nom: "Potatoes",
      prix: 2.15,
      image: "/frites/POTATOES.png",
    },
    {
      id: 39,
      nom: "Grande Potatoes",
      prix: 3.4,
      image: "/frites/GRANDE_POTATOES.png",
    },
  ],
  5: [
    {
      id: 40,
      nom: "Cheeseburger",
      prix: 2.6,
      image: "/encas/cheeseburger.png",
    },
    {
      id: 41,
      nom: "Croc MCdo",
      prix: 3.2,
      image: "/encas/croc-mc-do.png",
    },
    {
      id: 42,
      nom: "Nuggets x4",
      prix: 4.2,
      image: "/encas/nuggets_4.png",
    },
    {
      id: 43,
      nom: "Nuggets x20",
      prix: 13.0,
      image: "/encas/nuggets_20.png",
    },
  ],
  6: [
    {
      id: 63,
      nom: "MC Wrap chevre",
      prix: 3.1,
      image: "/wraps/mcwrap-chevre.png",
    },
    {
      id: 64,
      nom: "MC Wrap Poulet Bacon",
      prix: 3.3,
      image: "/wraps/MCWRAP-POULET-BACON.png",
    },
    {
      id: 65,
      nom: "Ptit Wrap Chevre",
      prix: 2.6,
      image: "/wraps/PTIT_WRAP_CHEVRE.png",
    },
    {
      id: 66,
      nom: "Ptit Wrap Ranch",
      prix: 2.6,
      image: "/wraps/PTIT_WRAP_RANCH.png",
    },
  ],
  7: [
    {
      id: 60,
      nom: "Petite Salade",
      prix: 3.3,
      image: "/salades/PETITE-SALADE.png",
    },
    {
      id: 61,
      nom: "Cesar Classic",
      prix: 8.8,
      image: "/salades/SALADE_CLASSIC_CAESAR.png",
    },
    {
      id: 62,
      nom: "Italienne Mozza",
      prix: 8.8,
      image: "/salades/SALADE_ITALIAN_MOZZA.png",
    },
  ],
  8: [
    {
      id: 44,
      nom: "Brownie",
      prix: 2.6,
      image: "/desserts/brownies.png",
    },
    {
      id: 45,
      nom: "Cheesecake chocolat M&M'S",
      prix: 3.1,
      image: "/desserts/cheesecake_choconuts_M&M_s.png",
    },
    {
      id: 46,
      nom: "Cheesecake Fraise",
      prix: 3.1,
      image: "/desserts/cheesecake_fraise.png",
    },
    {
      id: 47,
      nom: "Cookie",
      prix: 3.2,
      image: "/desserts/cookie.png",
    },
    {
      id: 48,
      nom: "Donut",
      prix: 2.6,
      image: "/desserts/donut.png",
    },
    {
      id: 49,
      nom: "Macarons",
      prix: 2.7,
      image: "/desserts/macarons.png",
    },
    {
      id: 50,
      nom: "MC Fleury",
      prix: 4.4,
      image: "/desserts/MCFleury.png",
    },
    {
      id: 51,
      nom: "Muffin",
      prix: 3.6,
      image: "/desserts/muffin.png",
    },
    {
      id: 52,
      nom: "Sunday",
      prix: 1.0,
      image: "/desserts/sunday.png",
    },
  ],
  9: [
    {
      id: 53,
      nom: "Classic Barbecue",
      prix: 0.7,
      image: "/sauces/classic-barbecue.png",
    },
    {
      id: 54,
      nom: "Classic Moutarde",
      prix: 0.7,
      image: "/sauces/classic-moutarde.png",
    },
    {
      id: 55,
      nom: "Creamy Deluxe",
      prix: 0.7,
      image: "/sauces/cremy-deluxe.png",
    },
    {
      id: 56,
      nom: "Ketchup",
      prix: 0.7,
      image: "/sauces/ketchup.png",
    },
    {
      id: 57,
      nom: "Chinoise",
      prix: 0.7,
      image: "/sauces/sauce-chinoise.png",
    },
    {
      id: 58,
      nom: "Curry",
      prix: 0.7,
      image: "/sauces/sauce-curry.png",
    },
    {
      id: 59,
      nom: "Pommes Frites",
      prix: 0.7,
      image: "/sauces/sauce-pommes-frite.png",
    },
  ],
};

function afficheProduits(categorieId) {
  let produitsContainer = document.querySelector(".container-produit");

  // Effacer le contenu précédent
  produitsContainer.innerHTML = "";

  // Obtenir les produits pour la catégore séléctionner
  let produits = produitsParCategorie[categorieId] || [];

  // Afficher chaque produits dans la categorie séléctionner
  produits.forEach((produit) => {
    let produitCard = document.createElement("div");
    produitCard.id = "produit";
    produitCard.className = "flex justify-center align-center";

    produitCard.innerHTML = `
      <img
            src="./assets/produits${produit.image}"
            alt="Produit de la categorie menu"
          />
          <div class="flex flex-column justify-center align-center">
            <p><b>${produit.nom}</b></p>
            <p>${produit.prix}€</p>
          </div>`;
    produitsContainer.appendChild(produitCard);
  });
}
myCategorieCard(categories);

// Panier ( initialiser à partir des cookies si existant)
let panier = [];

// Fonction pour récupérer le panier depuis les cookies
function getPanierFromCookie() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("panier="))
    ?.split("=")[1];

  return cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : [];
}

// Fonction pour sauvegarder le panier dans un cookie
function savePanierToCookie() {
  const cookieValue = encodeURIComponent(JSON.stringify(panier));
  document.cookie = `panier=${cookieValue}; path=/; max-age=604800`; // pour 7 jours
}

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(produit) {
  panier.push(produit);
  savePanierToCookie();
  afficherPanier();
}

// Fonction pour afficher le contenu du panier
function afficherPanier() {
  let panierContainer = document.querySelector(".container-info");

  // Effacer le contenu précédent
  panierContainer.innerHTML = "";

  // Afficher chaque produit du panier
  panier.forEach(produit, (index) => {
    let produitPanier = document.createElement("div");

    produitPanier.className = "produit-panier";

    produitPanier.innerHTML = `
          <div>
            <p><b>${produit.title}</b></p>
            <p>${produit.nom}</p>
            <p>Frite</p>
            <p>CocaCola</p>
          </div>
          <div class="flex justify-center align-center">
            <button class="btn-modif onClick="retirerDuPanier(${index}"">Modifier</button>
          </div>`;

    panierContainer.appendChild(produitPanier);
  });

  // Mise à jour du nombre total d'articles dans le panier
  document.querySelector(".quantite").textContent = panier.length;
}

// Fonction pour retirer un produit du panier
function retirerDuPanier(index) {
  panier.slice(index, 1);
  savePanierToCookie();
  afficherPanier();
}

// Fonction pour initialiser le panier (récuperer du cookie)
function initPanier() {
  panier = getPanierFromCookie();
  afficherPanier;
}

// Afficher ou masquer le panier lorsque l'utisateur clique sur le bouton panier
function togglePanier() {
  const panierContainer = document.querySelector(".container-panier");
  panierContainer.classList.toggle("none");
}

// Appeler l'initialisation du panier lors du changement de la page
window.onload = initPanier;

// Ajout des produit à partir des données de la categorie
function afficherProduits(donneesCategorie) {
  let containerProduits = document.querySelector("container-produit");
  containerProduits.innerHTML = "";

  donneesCategorie.produits.forEach((produit) => {
    let produitElement = document.createElement("div");
    produitElement.className = "produit-card";
    produitElement.innerHTML = `
      <img src="${produit.image}" alt="${produit.nom}" />
      <div>
        <p><b>${produit.nom}</b></p>
        <p>${produit.prix}€</p>
      </div>
    `;

    // Ajouter l'évenement de click pour ajouter au panier
    produitElement.addEventListener("click", () => {
      ajouterAuPanier(produit);
    });

    containerProduits.appendChild(produitElement);
  });
}

// Popup
const surPlace = document.getElementById("surPlaceBtn");
const chevaletPopup = document.getElementById("chevaletPopup");
const closeBtn = document.querySelector(".close");

// quand le bouton "Sur place" est cliqué
surPlace.addEventListener("click", function (event) {
  event.preventDefault(); // empeche la redirection immédiate
  chevaletPopup.style.display = "block";
});

// quand l'utilisateur clique sur le bouton fermeture de la popup
closeBtn.addEventListener("click", function () {
  chevaletPopup.style.display = "none";
});

// Fermer la pop-up si l'utilisateur click en dehors
window.addEventListener("click", function (event) {
  // condition if / else
  if (event.target === chevaletPopup) {
    chevaletPopup.style.display = "none";
  }
});
