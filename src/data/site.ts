export const business = {
  name: "Detailing Factory",
  city: "canton de Vaud",
  area: "canton de Vaud et alentours",
  phoneDisplay: "+41 76 123 45 67",
  whatsappNumber: "41761234567",
  email: "contact@detailing-factory.ch",
  address: "Déplacement à domicile - canton de Vaud",
  instagram: "@detailing_factory_ch",
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
  protection: "Protection"
};

export const polishingPrices = [
  { service: "Gloss Enhancement", detail: "Brillance express", citadine: 300, berline: 350, suv: 400, grand_suv: 450 },
  { service: "One Step", detail: "Correction légère et brillance intense", citadine: 450, berline: 550, suv: 650, grand_suv: 750 },
  { service: "Two Step", detail: "Correction avancée et finition parfaite", citadine: 750, berline: 900, suv: 1050, grand_suv: 1200 }
];

export const ceramicPrices = [
  { duration: "1 an", citadine: 250, berline: 300, suv: 350, grand_suv: 400 },
  { duration: "2 ans", citadine: 550, berline: 650, suv: 750, grand_suv: 850 },
  { duration: "3 ans", citadine: 800, berline: 950, suv: 1100, grand_suv: 1250 }
];

export const exteriorPrices = [
  { vehicle: "Petite voiture", express: 59, complet: 119 },
  { vehicle: "Berline / compacte", express: 69, complet: 129 },
  { vehicle: "Grande voiture", express: 79, complet: 139 },
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

export const cases = [
  {
    title: "One Step",
    car: "Berline noire",
    goal: "Correction des micro-rayures et amélioration de la brillance.",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Protection longue durée",
    car: "Coupé sport",
    goal: "Préparation de la carrosserie et protection hydrophobe.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Detailing intérieur",
    car: "Habitacle premium",
    goal: "Nettoyage précis des textiles, plastiques et zones de contact.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
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
