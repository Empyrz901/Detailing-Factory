const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("is-open");
    menuButton.classList.toggle("is-open");
  });
}

document.querySelectorAll("[data-before-after]").forEach((frame) => {
  const input = frame.querySelector("input");
  const before = frame.querySelector(".ba-before");
  if (!input || !before) return;
  const update = () => {
    before.style.width = `${input.value}%`;
  };
  input.addEventListener("input", update);
  update();
});

const prices = {
  citadine: { lavage: 79, interieur: 129, polissage: 290, protection: 390 },
  berline: { lavage: 89, interieur: 149, polissage: 340, protection: 450 },
  suv: { lavage: 109, interieur: 179, polissage: 420, protection: 540 },
  grand_suv: { lavage: 129, interieur: 219, polissage: 520, protection: 650 }
};

const vehicleLabels = {
  citadine: "Citadine",
  berline: "Berline",
  suv: "SUV",
  grand_suv: "Grand SUV"
};

const serviceLabels = {
  lavage: "Lavage",
  interieur: "Intérieur",
  polissage: "Polissage",
  protection: "Protection"
};

function selectedValue(name) {
  const field = document.querySelector(`[name="${name}"]:checked`);
  return field ? field.value : "";
}

const pricing = document.querySelector("[data-pricing]");
if (pricing) {
  const output = pricing.querySelector("[data-price-output]");
  const updatePrice = () => {
    const vehicle = selectedValue("price-vehicle");
    const service = selectedValue("price-service");
    const price = prices[vehicle]?.[service];
    if (!price) return;
    output.innerHTML = `<span>${serviceLabels[service]} ${vehicleLabels[vehicle]}</span><strong>À partir de ${price} CHF</strong><small>Tarif indicatif, confirmé après photos ou inspection.</small>`;
  };
  pricing.querySelectorAll("input").forEach((input) => input.addEventListener("change", updatePrice));
  updatePrice();
}

const configurator = document.querySelector("[data-configurator]");
if (configurator) {
  const result = configurator.querySelector("[data-config-result]");
  const cta = configurator.querySelector("[data-config-whatsapp]");
  const updateConfig = () => {
    const vehicle = selectedValue("config-vehicle");
    const need = selectedValue("config-need");
    const condition = selectedValue("config-condition");
    const finish = selectedValue("config-finish");
    let recommendation = "Lavage complet";
    if (need === "brillance") recommendation = "Gloss Enhancement";
    if (need === "micro-rayures") recommendation = "One Step";
    if (need === "defauts") recommendation = "Two Step";
    if (need === "protection") recommendation = "Protection longue durée";
    if (need === "interieur") recommendation = "Detailing intérieur";
    const family = need === "interieur" ? "interieur" : need === "protection" ? "protection" : need === "lavage" ? "lavage" : "polissage";
    const price = prices[vehicle]?.[family] || prices.citadine.polissage;
    result.innerHTML = `<span>Votre prestation semble correspondre à</span><strong>${recommendation}</strong><small>À partir de ${price} CHF, à confirmer après analyse des photos.</small>`;
    const message = `Bonjour Detailing Factory,\n\nJe souhaite recevoir une estimation.\n\nVéhicule : ${vehicleLabels[vehicle] || "Non précisé"}\nBesoin : ${recommendation}\nRésultat recherché : ${finish || "Non précisé"}\nÉtat : ${condition || "Non précisé"}\n\nJe peux envoyer des photos du véhicule.`;
    cta.href = `https://wa.me/41790000000?text=${encodeURIComponent(message)}`;
  };
  configurator.querySelectorAll("input").forEach((input) => input.addEventListener("change", updateConfig));
  updateConfig();
}
