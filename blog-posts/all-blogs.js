// Contains all blogs as objects

const all_blogs = [];

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
  present_day_climate_policy_initiatives_in_canada,
  the_ppc_canadas_growing_far_right_wing_populist_party,
  the_current_state_of_thai_politics,
];

// Sort Blogs
all_blogs.sort(function (a, b) {
  return parseInt(b.id) - parseInt(a.id);
});

console.log(all_blogs);
