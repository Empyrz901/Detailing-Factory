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
    before.style.setProperty("--split", `${input.value}%`);
  };
  input.addEventListener("input", update);
  update();
});

const prices = {
  citadine: { lavage: 119, interieur: 60, polissage: 300, protection: 250 },
  berline: { lavage: 129, interieur: 80, polissage: 350, protection: 300 },
  suv: { lavage: 149, interieur: 100, polissage: 400, protection: 350 },
  grand_suv: { lavage: 160, interieur: 100, polissage: 450, protection: 400 }
};

const vehicleLabels = {
  citadine: "Citadine",
  berline: "Berline",
  suv: "SUV",
  grand_suv: "Grand SUV"
};

const serviceLabels = {
  lavage: "Lavage complet",
  interieur: "Intérieur express",
  polissage: "Gloss Enhancement",
  protection: "Protection céramique 1 an"
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
    cta.href = `https://wa.me/41761234567?text=${encodeURIComponent(message)}`;
  };
  configurator.querySelectorAll("input").forEach((input) => input.addEventListener("change", updateConfig));
  updateConfig();
}
