export const business = {
  name: "Detailing Factory",
  city: "Yverdon-les-Bains",
  area: "Yverdon-les-Bains et alentours",
  phoneDisplay: "+41 77 901 09 32",
  whatsappNumber: "41779010932",
  email: "contact@detailingfactory.ch",
  phones: [
    { display: "+41 77 901 09 32", whatsappNumber: "41779010932" },
    { display: "+41 76 536 21 09", whatsappNumber: "41765362109" }
  ],
  address: "Avenue de Grandson 43 - Yverdon-les-Bains",
  partner: "Partenaire Auto Center",
  locationImage: "/images/auto-center-yverdon.webp",
  instagram: "@detailing_factory_ch",
  googleRating: "5.0",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Avenue%20de%20Grandson%2043%2C%20Yverdon-les-Bains"
};

export const services = [
  {
    title: "Lavage extérieur",
    text: "Entretien express ou nettoyage complet.",
    href: "/lavage-exterieur/"
  },
  {
    title: "Detailing intérieur",
    text: "Habitacle, sièges, tapis et surfaces.",
    href: "/interieur/"
  },
  {
    title: "Polissage",
    text: "Brillance et correction des micro-rayures.",
    href: "/polissage/"
  },
  {
    title: "Protection céramique",
    text: "Protection céramique durable de la carrosserie.",
    href: "/protection/"
  }
];

export const priceMatrix = {
  citadine: { lavage: 119, interieur: 60, polissage: 300, protection: 250 },
  berline: { lavage: 129, interieur: 80, polissage: 350, protection: 300 },
  suv: { lavage: 149, interieur: 100, polissage: 400, protection: 350 },
  grand_suv: { lavage: 160, interieur: 100, polissage: 450, protection: 400 }
};

export const vehicles = {
  citadine: "Citadine",
  berline: "Berline",
  suv: "SUV",
  grand_suv: "Grand SUV"
};

export const prestationLabels = {
  lavage: "Lavage",
  interieur: "Intérieur",
  polissage: "Polissage",
  protection: "Protection céramique"
};

export const polishingPrices = [
  { service: "Brillance express", detail: "Ravive l’éclat de la carrosserie", citadine: 300, berline: 350, suv: 400, grand_suv: 450 },
  { service: "Polissage en une étape", detail: "Correction légère et brillance intense", citadine: 450, berline: 550, suv: 650, grand_suv: 750 },
  { service: "Polissage en deux étapes", detail: "Correction avancée et finition parfaite", citadine: 750, berline: 900, suv: 1050, grand_suv: 1200 }
];

export const ceramicPrices = [
  { duration: "1 an", citadine: 250, berline: 300, suv: 350, grand_suv: 400 },
  { duration: "2 ans", citadine: 550, berline: 650, suv: 750, grand_suv: 850 },
  { duration: "3 ans", citadine: 800, berline: 950, suv: 1100, grand_suv: 1250 }
];

export const exteriorPrices = [
  { vehicle: "Petite citadine", express: 59, complet: 119 },
  { vehicle: "Berline / compacte", express: 69, complet: 129 },
  { vehicle: "Grande berline / break", express: 79, complet: 139 },
  { vehicle: "SUV / 4x4", express: 89, complet: 149 },
  { vehicle: "Gros SUV / véhicule très sale", express: null, complet: 160 }
];

export const interiorOptions = [
  { name: "Plafonnier", price: 50 },
  { name: "Sièges en tissus", price: 30 },
  { name: "Poils de chiens", price: 40 },
  { name: "Plastiques", price: 20 },
  { name: "Dressing tapis", price: 10 }
];

export const polishingCases = [
  {
    title: "Correction localisée",
    car: "Carrosserie Jeep",
    goal: "Atténuation des rayures et restauration d'une finition plus homogène sur la carrosserie noire.",
    before: "/images/realisations/polissage/jeep-carrosserie-rayures-avant.jpeg",
    after: "/images/realisations/polissage/jeep-carrosserie-rayures-apres.jpeg"
  },
  {
    title: "Correction des micro-rayures",
    car: "Aile arrière",
    goal: "Réduction des défauts visibles sous l'éclairage et restitution de la profondeur de la peinture.",
    before: "/images/realisations/polissage/aile-arriere-micro-rayures-avant.jpeg",
    after: "/images/realisations/polissage/aile-arriere-micro-rayures-apres.jpeg"
  },
  {
    title: "Polissage de finition",
    car: "Capot noir métallisé",
    goal: "Correction du voile et des micro-rayures révélés par l'éclairage de contrôle.",
    before: "/images/realisations/polissage/pavillon-micro-rayures-avant.jpeg",
    after: "/images/realisations/polissage/pavillon-micro-rayures-apres.jpeg"
  },
  {
    title: "Correction localisée",
    car: "Coque de rétroviseur",
    goal: "Correction de la trace colorée et amélioration de la finition de la coque.",
    before: "/images/realisations/polissage/retroviseur-rayure-avant.jpeg",
    after: "/images/realisations/polissage/retroviseur-rayure-apres.jpeg"
  }
];

export const interiorCases = [
  {
    title: "Shampoing textile",
    car: "Siège en tissu",
    goal: "Nettoyage en profondeur de l'assise et élimination des taches visibles.",
    before: "/images/realisations/interieur/siege-tissu-taches-avant.jpeg",
    after: "/images/realisations/interieur/siege-tissu-taches-apres.jpeg"
  },
  {
    title: "Nettoyage textile",
    car: "Assise avant",
    goal: "Extraction des salissures incrustées et uniformisation du tissu.",
    before: "/images/realisations/interieur/siege-tissu-assise-avant.jpeg",
    after: "/images/realisations/interieur/siege-tissu-assise-apres.jpeg"
  },
  {
    title: "Détachage textile",
    car: "Siège avant",
    goal: "Traitement des auréoles et remise au propre de l'assise.",
    before: "/images/realisations/interieur/siege-tissu-salissures-avant.jpeg",
    after: "/images/realisations/interieur/siege-tissu-salissures-apres.jpeg"
  },
  {
    title: "Nettoyage textile",
    car: "Banquette claire",
    goal: "Nettoyage des traces sombres et restauration de l'aspect uniforme du tissu.",
    before: "/images/realisations/interieur/banquette-tissu-taches-avant.jpeg",
    after: "/images/realisations/interieur/banquette-tissu-taches-apres.jpeg"
  },
  {
    title: "Nettoyage des accessoires",
    car: "Tapis automobile",
    goal: "Brossage et nettoyage approfondi pour retirer les marques et raviver les fibres.",
    before: "/images/realisations/interieur/tapis-voiture-avant.jpeg",
    after: "/images/realisations/interieur/tapis-voiture-apres.jpeg"
  },
  {
    title: "Nettoyage des surfaces",
    car: "Contre-porte en cuir",
    goal: "Nettoyage des traces sur le cuir, les plastiques et les zones de contact.",
    before: "/images/realisations/interieur/contre-porte-cuir-avant.jpeg",
    after: "/images/realisations/interieur/contre-porte-cuir-apres.jpeg"
  }
];

export const cases = [polishingCases[0], interiorCases[0], interiorCases[5]];

export const polishingGallery = [
  { src: "/images/realisations/polissage/comparatif-capot-noir-avant-apres.jpeg", alt: "Comparatif avant après sur un capot noir poli", category: "Comparatif", title: "Brillance retrouvée" },
  { src: "/images/realisations/polissage/carrosserie-bleue-masquage-preparation.jpeg", alt: "Carrosserie bleue protégée par un masquage avant polissage", category: "Préparation", title: "Masquage des zones sensibles" },
  { src: "/images/realisations/polissage/carrosserie-bleue-polissage-capot.jpeg", alt: "Polissage mécanique d'un capot bleu", category: "Correction", title: "Travail du capot" },
  { src: "/images/realisations/polissage/carrosserie-bleue-polissage-aile.jpeg", alt: "Polissage mécanique d'une aile bleue", category: "Correction", title: "Travail des courbes" },
  { src: "/images/realisations/polissage/carrosserie-bleue-defauts-avant.jpeg", alt: "Micro-rayures visibles sous une lumière de contrôle", category: "Diagnostic", title: "Défauts sous éclairage" },
  { src: "/images/realisations/polissage/carrosserie-bleue-finition-apres.jpeg", alt: "Finition brillante d'une carrosserie bleue après polissage", category: "Résultat", title: "Reflets et profondeur" },
  { src: "/images/realisations/polissage/carrosserie-noire-brillance-finale.jpeg", alt: "Reflet brillant sur une carrosserie noire après polissage", category: "Résultat", title: "Finition miroir" }
];

export const interiorGallery = [
  { src: "/images/realisations/interieur/habitacle-cuir-marron-arriere.jpeg", alt: "Habitacle en cuir marron nettoyé vu depuis l'arrière", category: "Habitacle", title: "Places arrière" },
  { src: "/images/realisations/interieur/habitacle-cuir-marron-avant.jpeg", alt: "Habitacle avant en cuir marron nettoyé", category: "Habitacle", title: "Poste de conduite" },
  { src: "/images/realisations/interieur/habitacle-cuir-marron-vue-ensemble.jpeg", alt: "Vue d'ensemble d'un habitacle en cuir marron après detailing", category: "Résultat", title: "Intérieur complet" },
  { src: "/images/realisations/interieur/nettoyage-interieur-et-coffre.jpeg", alt: "Résultats de nettoyage d'un habitacle et d'un coffre", category: "Detailing intérieur", title: "Habitacle et coffre" },
  { src: "/images/realisations/interieur/siege-mixte-nettoye-vue-large.jpeg", alt: "Siège mixte tissu et cuir nettoyé", category: "Sièges", title: "Assise nettoyée" },
  { src: "/images/realisations/interieur/siege-mixte-nettoye-detail.jpeg", alt: "Détail d'un siège mixte nettoyé", category: "Sièges", title: "Finition du textile" },
  { src: "/images/realisations/interieur/habitacle-noir-nettoye.jpeg", alt: "Habitacle automobile noir après nettoyage", category: "Habitacle", title: "Finition intérieure" },
  { src: "/images/realisations/interieur/habitacle-cuir-rouge-avant.jpeg", alt: "Habitacle avant en cuir rouge après detailing", category: "Cuir", title: "Places avant" },
  { src: "/images/realisations/interieur/habitacle-cuir-rouge-arriere.jpeg", alt: "Places arrière en cuir rouge après detailing", category: "Cuir", title: "Places arrière" },
  { src: "/images/realisations/interieur/habitacle-cuir-noir-nettoye.jpeg", alt: "Habitacle en cuir noir propre après detailing", category: "Cuir", title: "Habitacle nettoyé" }
];

export const faqs = [
  {
    q: "Le polissage enlève-t-il toutes les rayures ?",
    a: "Non. Il corrige surtout les micro-rayures et défauts de surface. Les rayures profondes nécessitent une analyse avant confirmation."
  },
  {
    q: "Quelle différence entre le polissage en une étape et en deux étapes ?",
    a: "Le polissage en une étape vise une forte amélioration visuelle. Le polissage en deux étapes ajoute une correction plus avancée et une finition plus poussée."
  },
  {
    q: "Le prix affiché est-il définitif ?",
    a: "Il s'agit d'un tarif indicatif. Le prix final est confirmé après analyse des photos ou inspection du véhicule."
  },
  {
    q: "Combien de photos envoyer pour un devis ?",
    a: "Envoyez idéalement 3 à 5 photos : vue globale, défauts visibles, intérieur si nécessaire et zones problématiques."
  }
];

export function whatsappUrl(message: string, number = business.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
