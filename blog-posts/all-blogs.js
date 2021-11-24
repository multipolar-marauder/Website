// Contains all blogs as objects

const all_blogs = [];

const nargorno_karabakh_home_away_from_home = {
  title: "Nagorno-Karabakh: Home Away From Home",
  author: "Jordan Salehi",
  date: "November 23 2021",
  img: "nagorn_karabakh.jpg",
  img_big: "nagorn_karabakh.jpg",
  link: "nagorno-karabakh-home-away-from-home.html",
  desc: "Since its predecessor's dissolution–Soviet Union–Russia’s role as big brother within the East has remained somewhat controversial, yet strategic. Post-Soviet collapse, the region between Armenia’s Eastern border, and correspondingly, Azerbaijan’s Western border, has become a heated playground...",
  tags: ["Nagorno-Karabakh", "Canada", "Russia"],
  id: 6,
};
all_blogs[5] = nargorno_karabakh_home_away_from_home;

const texan_abortion_ban = {
  title: "The Texan Abortion Ban",
  author: "Krissie Cruz",
  date: "November 17 2021",
  img: "texan_abortion.jpg",
  img_big: "texan_abortion.jpg",
  link: "texan-abortion-ban.html",
  desc: "The recent texas abortion ban has been one of the strictest American laws against abortion in what seems like decades. This new abortion law had been passed in May and had recently taken effect on September 1st. This law states that if a woman is six weeks pregnant there is no way for them to have an abortion...",
  tags: ["Abortion", "Texas", "Lawsuits"],
  id: 5,
};
all_blogs[4] = texan_abortion_ban;

const an_analysis_of_the_effectiveness_of_floridas_covid19_policy = {
  title: "An Analysis of the Effectiveness of Florida's COVID-19 Policy",
  author: "Amaresh Bhaskaran",
  date: "October 26 2021",
  img: "an_analysis_of_the_effectiveness_of_floridas_covid19_policy.jpg",
  img_big: "an_analysis_of_the_effectiveness_of_floridas_covid19_policy.jpg",
  link: "an-analysis-of-the-effectiveness-of-floridas-covid19-policy.html",
  desc: "Many publications and politicians have levied their criticisms against Governor Ron DeSantis and his policy decisions with regards to the COVID-19 pandemic. Many articles have depicted Florida as being the epicenter of an outbreak. Recent criticisms have been levied against DeSantis’ ban on mask and vaccine mandates....",
  tags: ["Florida", "COVID-19", "WHO"],
  id: 4,
};
all_blogs[3] = an_analysis_of_the_effectiveness_of_floridas_covid19_policy;

const the_current_state_of_thai_politics = {
  title: "The Current State Of Thai Politics",
  author: "Krissie Cruz",
  date: "October 4 2021",
  img: "the_current_state_of_thai_politics.jpg",
  img_big: "the_current_state_of_thai_politics.jpg",
  link: "the-current-state-of-thai-politics.html",
  desc: "The Thai political system is currently in shambles. It’s always been that way, as one can say about any other country, but the current pandemic has done nothing but amplify the current state of affairs in Thailand. At the beginning of the pandemic...",
  tags: ["Thailand", "COVID-19", "Election"],
  id: 3,
};
all_blogs[2] = the_current_state_of_thai_politics;

const the_ppc_canadas_growing_far_right_wing_populist_party = {
  title: "The PPC: Canada’s Growing Far Right-Wing Populist Party ",
  author: "Rvaha Afaan",
  date: "October 4 2021",
  img: "the_ppc_canadas_growing_far_right_wing_populist_party.jpg",
  img_big: "the_ppc_canadas_growing_far_right_wing_populist_party.jpg",
  link: "the-ppc-canadas-growing-far-right-wing-populist-party.html",
  desc: "Liberal. Conservative. Green. New Democrat. Bloc Québécois. In recent history, these were the 5 main federal political parties in Canada. Enter the People’s Party of Canada (PPC). This new party was formed by Maxime Bernier in September 2018, a former Conservative member of parliament (MP)...",
  tags: ["PPC", "Canada", "COVID-19"],
  id: 2,
};
all_blogs[1] = the_ppc_canadas_growing_far_right_wing_populist_party;

const present_day_climate_policy_initiatives_in_canada = {
  title: "Present-day Climate Policy Initiatives in Canada",
  author: "Jordan Salehi",
  date: "October 4 2021",
  img: "present_day_climate_policy_initiatives_in_canada.jpg",
  img_big: "present_day_climate_policy_initiatives_in_canada.jpg",
  link: "present-day-climate-policy-initiatives-in-canada.html",
  desc: "Upon every election, Canadians throughout North America are introduced to worthwhile promises by politicians and their respective parties in hopes of not only uniting voters for a specific cause, but to collect enough votes to occupy the federal government position...",
  tags: ["Climate Change", "Canada", "Election"],
  id: 1,
};
all_blogs[0] = present_day_climate_policy_initiatives_in_canada;

var trending = [
  texan_abortion_ban,
  an_analysis_of_the_effectiveness_of_floridas_covid19_policy,
  the_ppc_canadas_growing_far_right_wing_populist_party,
];

// Sort Blogs
all_blogs.sort(function (a, b) {
  return parseInt(b.id) - parseInt(a.id);
});

console.log(all_blogs);
