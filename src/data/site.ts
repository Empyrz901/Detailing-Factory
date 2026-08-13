export const business = {
  name: "Detailing Factory",
  city: "[VILLE]",
  area: "[ZONE]",
  phoneDisplay: "+41 XX XXX XX XX",
  whatsappNumber: "41790000000",
  email: "contact@detailing-factory.ch",
  address: "[ADRESSE COMPLETE]",
  instagram: "@DetailingFactory",
  googleRating: "5.0",
  mapUrl: "https://maps.google.com/?q=Detailing%20Factory"
};

export const services = [
  {
    title: "Le nettoyer",
    text: "Lavage extérieur, lavage complet et entretien régulier.",
    href: "/prestations/#lavage"
  },
  {
    title: "Lui redonner de la brillance",
    text: "Gloss Enhancement et One Step pour retrouver de la profondeur.",
    href: "/polissage/"
  },
  {
    title: "Corriger les défauts",
    text: "Polissage One Step ou Two Step selon l'état de la peinture.",
    href: "/polissage/"
  },
  {
    title: "Le protéger",
    text: "Protections longue durée 1, 2 ou 3 ans.",
    href: "/protection/"
  },
  {
    title: "Nettoyer l'intérieur",
    text: "Detailing intérieur, sièges, moquettes, plastiques et options.",
    href: "/interieur/"
  },
  {
    title: "Je ne sais pas",
    text: "Envoyez 3 à 5 photos sur WhatsApp, on vous guide.",
    href: "/contact/"
  }
];

export const priceMatrix = {
  citadine: { lavage: 79, interieur: 129, polissage: 290, protection: 390 },
  berline: { lavage: 89, interieur: 149, polissage: 340, protection: 450 },
  suv: { lavage: 109, interieur: 179, polissage: 420, protection: 540 },
  grand_suv: { lavage: 129, interieur: 219, polissage: 520, protection: 650 }
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
  protection: "Protection"
};

export const cases = [
  {
    title: "One Step",
    car: "BMW Série 3",
    goal: "Correction des micro-rayures et amélioration de la brillance.",
    before: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Protection longue durée",
    car: "Porsche 911",
    goal: "Préparation de la carrosserie et protection hydrophobe.",
    before: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1549925862-990301a62b15?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Detailing intérieur",
    car: "Mercedes Classe C",
    goal: "Nettoyage précis des textiles, plastiques et zones de contact.",
    before: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
  }
];

export const faqs = [
  {
    q: "Le polissage enlève-t-il toutes les rayures ?",
    a: "Non. Il corrige surtout les micro-rayures et défauts de surface. Les rayures profondes nécessitent une analyse avant confirmation."
  },
  {
    q: "Quelle différence entre One Step et Two Step ?",
    a: "Le One Step vise une forte amélioration visuelle en une étape. Le Two Step ajoute une correction plus avancée et une finition plus poussée."
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

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
