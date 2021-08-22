const openPopupButtons = document.querySelectorAll(
  "[data-abortion-target], [data-affirmative-target],[data-automation-target], [data-barackobama-target],[data-canada-target],[data-carbontax-target],[data-china-target],[data-climatechange-target],[data-criticalracetheory-target],[data-deathpenalty-target],[data-defundthepolice-target],[data-donaldtrump-target],[data-dronestrikes-target],[data-druglegalization-target],[data-enthuconsentlaws-target],[data-estatetax-target],[data-europeanunion-target],[data-euthanasia-target],[data-flattax-target],[data-freemarket-target],[data-georgewbush-target],[data-hatespeechlaws-target],[data-indianact-target],[data-israelrighttoexist-target],[data-justintrudaeu-target],[data-laborunions-target],[data-latetermabortion-target], [data-lgbtqrights-target],[data-militaryintervention-target],[data-militaryspending-target],[data-minimumwage-target],[data-nato-target],[data-palestinerighttoexist-target],[data-patriotism-target],[data-progressivetax-target],[data-righttoflagburning-target],[data-russia-target],[data-termlimits-target],[data-dougford-target],[data-transsports-target],[data-homeschooling-target],[data-unitednations-target],[data-unitedstates-target],[data-universalbasicincome-target],[data-vaccinepassports-target],[data-warinafghanistan-target],[data-wariniraq-target],[data-waronterror-target],[data-welfare-target],[data-worldtradeorganization-target]"
);
const closePopupButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.abortionTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.affirmativeTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.automationTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.barackobamaTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.canadaTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.carbontaxTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.chinaTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.climatechangeTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.criticalracetheoryTarget
    );
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.deathpenaltyTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.defundthepoliceTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.donaldtrumpTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.dronestrikesTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.druglegalizationTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.enthuconsentlawsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.estatetaxTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.europeanunionTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.euthanasiaTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.flattaxTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.freemarketTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.georgewbushTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.hatespeechlawsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.indianactTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.israelrighttoexistTarget
    );
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.justintrudaeuTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.laborunionsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.latetermabortionTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.lgbtqrightsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.militaryinterventionTarget
    );
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.militaryspendingTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.minimumwageTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.natoTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.palestinerighttoexistTarget
    );
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.patriotismTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.progressivetaxTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.righttoflagburningTarget
    );
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.russiaTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.termlimitsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.dougfordTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.transsportsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.homeschoolingTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.unitednationsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.unitedstatesTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.universalbasicincomeTarget
    );
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.vaccinepassportsTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.warinafghanistanTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.wariniraqTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.waronterrorTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.welfareTarget);
    openPopup(popup);
  });
  button.addEventListener("click", () => {
    const popup = document.querySelector(
      button.dataset.worldtradeorganizationTarget
    );
    openPopup(popup);
  });
});

overlay.addEventListener("click", () => {
  const popup = document.querySelectorAll(
    ".abortion.active, .affirmative.active, .automation.active, .barackobama.active, .canada.active, .carbontax.active, .china.active, .climatechange.active, .criticalracetheory.active, .deathpenalty.active, .defundthepolice.active, .donaldtrump.active, .dronestrikes.active, .druglegalization.active, .enthuconsentlaws.active, .estatetax.active, .europeanunion.active, .euthanasia.active, .flattax.active, .freemarket.active, .georgewbush.active, .hatespeechlaws.active, .indianact.active, .israelrighttoexist.active, .justintrudaeu.active, .laborunions.active, .latetermabortion.active, .lgbtqrights.active, .militaryintervention.active, .militaryspending.active, .minimumwage.active, .nato.active, .palestinerighttoexist.active, .patriotism.active, .progressivetax.active, .righttoflagburning.active, .russia.active, .termlimits.active, .dougford.active, .transsports.active, .homeschooling.active, .unitednations.active, .unitedstates.active, .universalbasicincome.active, .vaccinepassports.active, .warinafghanistan.active, .wariniraq.active, .waronterror.active, .welfare.active, .worldtradeorganization.active"
  );
  popup.forEach((popup) => {
    closePopup(popup);
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(
      ".abortion, .affirmative, .automation, .barackobama, .canada, .carbontax, .china, .climatechange, .criticalracetheory, .deathpenalty, .defundthepolice, .donaldtrump, .dronestrikes, .druglegalization, .enthuconsentlaws, .estatetax, .europeanunion, .euthanasia, .flattax, .freemarket, .georgewbush, .hatespeechlaws, .indianact, .israelrighttoexist, .justintrudaeu, .laborunions, .latetermabortion, .lgbtqrights, .militaryintervention, .militaryspending, .minimumwage, .nato, .palestinerighttoexist, .patriotism, .progressivetax, .righttoflagburning, .russia, .termlimits, .dougford, .transsports, .homeschooling, .unitednations, .unitedstates, .universalbasicincome, .vaccinepassports, .warinafghanistan, .wariniraq, .waronterror, .welfare, .worldtradeorganization "
    );
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
}

function closePopup(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
}
