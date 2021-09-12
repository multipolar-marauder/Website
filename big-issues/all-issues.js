//Contains the objects of every big issue

var phone = window.matchMedia("(max-width: 350px)");

var ipad = window.matchMedia("(max-width: 769px)");

var mobile = window.matchMedia("(max-width: 570px)");

var issues = [];

const abortion = {
  name: "Abortion",
  pro_percent: 83,
  con_percent: 17,
  link: "abortion.html",
  image: "abortion.jpg",
  desc: "Abortion involves terminating a pregnancy by the removing or expelling of a fetus or embryo from the uterus. It is considered one of the most controversial issues due to its legal cultural and religious implications. <br /> <br /> On one side, you have pro-life groups that believe that abortion is violating the right to life of a child, and seek to create legal restrictions on abortion or even completely prohibt it. In contrast, pro-choice groups argue that a woman has certain reproductive rights and a right to bodily autonomy. <br /> <br /> Abortion is currently legal in both Canada and the United States, with the former having no abortion laws at all. Roe v Wade in the United States had ruled in favor for abortion rights, however several states have enacted legislature that attempts to curtail the access and ease of going through an abortion.",
};
issues[0] = abortion;

const affirmative_action = {
  name: "Affirmative Action",
  pro_percent: 39,
  con_percent: 61,
  link: "affirmative-action.html",
  image: "affirmative_action.jpg",
  desc: "Affirmative Action programs are created by the government with the purpose of increasing the enrollment and acceptance of various populations that are deemed to be disfranchised.",
};
issues[1] = affirmative_action;

const automation = {
  name: "Automation",
  pro_percent: 89,
  con_percent: 11,
  link: "automation.html",
  image: "automation.jpg",
  desc: "With the advance of technology, in particular AI, occupations that once required humans are now able to be substituted with machines. During the industrial revolution and beyond, repetitive actions were increasingly becoming automated by machines. Workers shifted towards the service sectors and occupations that still required humans.",
};
issues[2] = automation;

const barack_obama = {
  name: "Barack Obama",
  pro_percent: 40,
  con_percent: 60,
  link: "barack-obama.html",
  image: "barack_obama.jpg",
  desc: "Barack Obama was the 44th President of the United States who served from 2008-2016. Being the first Black President, Obama broke racial barriers and sought to create a new legacy for the African-American Race, who had been historically oppressed by the White majority. <br /> <br /> Supporters of Obama credit him for the Affordable Care Act, which sought to increase healthcare access across America, and put regulations on health insurance companies from denying patients with pre-existing conditions. His stimulus package was very important during the 2008 recession and benefited many Americans who were unemployed. He is also credited for ordering Operation Neptune-Spear, the military mission that killed Al-Qaeda leader Osama Bin Laden, the mastermind behind the September 11 attacks which killed nearly 3000 Americans. <br /> <br /> Critics of Obama have blamed him for increasing the deficit of the U.S federal government and expanding federal programs such as Common Core. He has also been criticised for his role in the Arab Spring, which toppled dictators in Egypt, Libya while failing to do so in Syria. The desicions of the Obama adminstration are said to have lead to the rise of ISIS, a brutal Islamic jihadist organization that launched terrorist attacks all across the world. Some of his own party members have criticized him for being too soft on issues like gun control, for not keeping his promises of shutting down Guantanamo Bay, and for his controversial Drone Strike program which killed many civilians.",
};
issues[3] = barack_obama;

const canada = {
  name: "Canada",
  pro_percent: 86,
  con_percent: 14,
  link: "canada.html",
  image: "canada.jpg",
  desc: "Canada has generally been regarded as a tolerant democratic country that has prioritized human rights and provides its citizens with a high quality of life. It consistently ranks among the top countries for its development and has an abundance of natural resources, having the largest freshwater reserve in the world. Canada is renowned for its diversity, and is one of the few countries that promote Multiculturalism as a positive value. For those reasons it has been a top destination for many immigrant groups, and has taken in many refugees from around the world. <br /> <br /> Although Canada has been a leading voice in human rights concern, it has been criticized for it’s hypocritical stance  given Canada’s historically poor treatment of indigenous peoples, activists have increasingly taken up the view that the country is an illegitimate settler state built on stolen land, and as such, should not be viewed positively today. Canada’s current treatment of First Nations has been criticised as inhumane and paternalistic, denying them their self-determination. Canada has also been criticised for it’s high emission of fossil fuels and over dependence on the oil industry.",
};
issues[4] = canada;

const capitalism = {
  name: "Capitalism",
  pro_percent: 84,
  con_percent: 16,
  link: "capitalism.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[5] = capitalism;

const carbon_tax = {
  name: "Carbon Tax",
  pro_percent: 68,
  con_percent: 32,
  link: "carbon-tax.html",
  image: "carbon_tax.jpg",
  desc: "The carbon tax is a tax levied by the government on carbon emissions. It is viewed as a way to incentivise private industries to move away from fossil fuels as their primary source of energy, and thus lessen the future impact of climate change. Many provinces have their own carbon pricing schemes, but in 2019, the federal government imposed their own carbon tax on the remaining provinces that had not adopted one. The provinces opposed this on the grounds that it infringed on their sovereignty, but they were defeated in the Supreme Court. The proceeds from the federal carbon tax are returned to the provinces, to spend as they see fit. Many use the funds to invest in green energy sources, or to give income-based tax rebates. <br /> <br /> Proponents of the carbon tax cite research showing it is effective in lowering carbon emissions, the harm caused by climate change due to the unrestrained emissions of greenhouse gases, and the tax-rebates offered by the revenue the tax brings in. Opponents of the carbon tax believe that it is an unfavour tax on consumers, as it often results in price increases for certain goods and services, and it stifles industries that still primarily rely on fossil fuels.",
};
issues[6] = carbon_tax;

const china = {
  name: "China",
  pro_percent: 15,
  con_percent: 85,
  link: "china.html",
  image: "china.jpg",
  desc: "China is currently one of the leading powers of the world, and an economic powerhouse with a population of over 1.4 billion people. The country has a very rich history and historically has been one of the greatest civilizations of this planet, through its rich resources and scientific innovations. In the late 40’s, China was taken over by the Communists who eventually moved away from pure socialism to a State Capitalism. The opening of markets created the largest period of economic growth for China, and it currently challenges the U.S in terms of economic might. <br /> <br /> Supporters of China have credited it as an alternative to American hegemony, as it avoids the use of military intervention, and prefers to pursue trade partnerships and economic investment. China’s efficiency has been praised as a political model that challenges the traditional dominance of liberal democracies who have been criticised for destabilizing countries in the Global South under the pretext of human rights. <br /> <br /> Critics of China have pointed out it’s extremely poor record on human rights, as it has abused workers and pays slave wages to keep up it’s economic output. It’s treatment of the Uighurs minority has been labelled as a genocide by many countries around the world for imprisoning their population in concentration camps and for delibrating reducing their population through abortion and forced steralization. China has also been accused of the “Debt Trap” where it gives exorbitant loans to struggling countries, and then takes control of it’s infracture in return for loan forgiveness. This practice has been deemed by critics as a force of imperialism.",
};
issues[7] = china;

const climate_change_action = {
  name: "Climate Change Action",
  pro_percent: 91,
  con_percent: 9,
  link: "climate-change-action.html",
  image: "climate_change.jpg",
  desc: "The debate around climate change revolves around environmental changes caused by anthropogenic activities. In the last couple decades, the globe has increased it’s temperatures at an alarming rate. The debate revolves around how much of this climate change can be attributed to human activity, and how much effort countries should take to curb it. <br /> <br /> Proponents of Climate Change action argue that the government needs to radically change it’s economic policies to promote green energy and reduce carbon emissions. They believe that corporations and non-renewable energy production like coal and oil are primarily responsible for global warming, and it will lead with many ecological problems and natural disasters. <br /> <br /> Opponents of Climate Change action argue that climate change is mostly a naturally occurring cycle, and even if humans do contribute to it, there is unnecessary alarmism over what needs to be done. They believe that economic production and growth should not be hurt by climate change policies and government crackdown on energy production will lead to major job loss for many blue collar workers employed in these industries.",
};
issues[8] = climate_change_action;

const critical_race_theory = {
  name: "Critical Race Theory",
  pro_percent: 35,
  con_percent: 65,
  link: "critical-race-theory.html",
  image: "critical_race_theory.jpg",
  desc: "Critical Race theory is a political and philosophical framework that stresses the idea that the concept of “Race” has no biological basis and was solely created by the White majority in order to exploit other races of color, more specifically Blacks. The theory dictates that the United States and other Western countries are inherently racist institutions that are upheld by racist laws that keep Whites in powe.",
};
issues[9] = critical_race_theory;

const death_penalty = {
  name: "Death Penalty",
  pro_percent: 40,
  con_percent: 60,
  link: "death-penalty.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[10] = death_penalty;

const defund_the_police = {
  name: "Defund The Police",
  pro_percent: 21,
  con_percent: 79,
  link: "defund-the-police.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[11] = defund_the_police;

const donald_trump = {
  name: "Donald Trump",
  pro_percent: 24,
  con_percent: 76,
  link: "donald-trump.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[12] = donald_trump;

const doug_ford = {
  name: "Doug Ford",
  pro_percent: 35,
  con_percent: 65,
  link: "doug-ford.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[13] = doug_ford;

const drone_strikes = {
  name: "Drone Strikes",
  pro_percent: 40,
  con_percent: 60,
  link: "drone-strikes.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[14] = drone_strikes;

const drug_legalization = {
  name: "Drug Legalization",
  pro_percent: 68,
  con_percent: 32,
  link: "drug-legalization.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[15] = drug_legalization;

const enthusiastic_consent_laws = {
  name: "Enthusiastic Consent Laws",
  pro_percent: 69,
  con_percent: 31,
  link: "enthusiastic-consent-laws.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[16] = enthusiastic_consent_laws;

const estate_tax = {
  name: "Estate Tax",
  pro_percent: 47,
  con_percent: 53,
  link: "estate-tax.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[17] = estate_tax;

const european_union = {
  name: "European Union",
  pro_percent: 78,
  con_percent: 22,
  link: "european-union.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[18] = european_union;

const euthanasia = {
  name: "Euthanasia",
  pro_percent: 75,
  con_percent: 25,
  link: "euthanasia.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[19] = euthanasia;

const flat_tax = {
  name: "Flat Tax",
  pro_percent: 32,
  con_percent: 68,
  link: "flat-tax.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[20] = flat_tax;

const george_w_bush = {
  name: "George W Bush",
  pro_percent: 16,
  con_percent: 84,
  link: "george-w-bush.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[21] = george_w_bush;

const hate_speech_law = {
  name: "Hate Speech Law",
  pro_percent: 68,
  con_percent: 32,
  link: "hate-speech-law.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[22] = hate_speech_law;

const home_schooling = {
  name: "Home Schooling",
  pro_percent: 56,
  con_percent: 44,
  link: "home-schooling.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[23] = home_schooling;

const indian_act = {
  name: "Indian Act",
  pro_percent: 29,
  con_percent: 71,
  link: "indian-act.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[24] = indian_act;

const israel_right_to_exist = {
  name: "Israel Right To Exist",
  pro_percent: 65,
  con_percent: 35,
  link: "israel-right-to-exist.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[25] = israel_right_to_exist;

const justin_trudaeu = {
  name: "Justin Trudaeu",
  pro_percent: 32,
  con_percent: 68,
  link: "justin-trudaeu.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[26] = justin_trudaeu;

const labor_unions = {
  name: "Labor Unions",
  pro_percent: 72,
  con_percent: 28,
  link: "labor-unions.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[27] = labor_unions;

const late_term_abortions = {
  name: "Late Term Abortions",
  pro_percent: 44,
  con_percent: 56,
  link: "late-term-abortions.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[28] = late_term_abortions;

const lgbtq_rights = {
  name: "LGBTQ Rights",
  pro_percent: 90,
  con_percent: 10,
  link: "lgbtq-rights.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[29] = lgbtq_rights;

const military_intervention = {
  name: "Military Intervention",
  pro_percent: 45,
  con_percent: 55,
  link: "military-intervention.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[30] = military_intervention;

const military_spending = {
  name: "Military Spending",
  pro_percent: 55,
  con_percent: 45,
  link: "military-spending.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[31] = military_spending;

const minimum_wage = {
  name: "Minimum Wage",
  pro_percent: 95,
  con_percent: 5,
  link: "minimum-wage.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[32] = minimum_wage;

const nato = {
  name: "NATO",
  pro_percent: 83,
  con_percent: 17,
  link: "nato.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[33] = nato;

const palestine_right_to_exist = {
  name: "Palestine Right To Exist",
  pro_percent: 94,
  con_percent: 6,
  link: "palestine-right-to-exist.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[34] = palestine_right_to_exist;

const patriotism = {
  name: "Patriotism",
  pro_percent: 68,
  con_percent: 32,
  link: "patriotism.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[35] = patriotism;

const progressive_tax = {
  name: "Progressive Tax",
  pro_percent: 67,
  con_percent: 33,
  link: "progressive-tax.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[36] = progressive_tax;

const right_to_flag_burning = {
  name: "Right To Flag Burning",
  pro_percent: 81,
  con_percent: 19,
  link: "right-to-flag-burning.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[37] = right_to_flag_burning;

const russia = {
  name: "Russia",
  pro_percent: 18,
  con_percent: 82,
  link: "russia.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[38] = russia;

const term_limits = {
  name: "Term Limits",
  pro_percent: 90,
  con_percent: 10,
  link: "term-limits.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[39] = term_limits;

const trans_sports = {
  name: "Trans Sports",
  pro_percent: 18,
  con_percent: 82,
  link: "trans-sports.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[40] = trans_sports;

const united_nations = {
  name: "United Nations",
  pro_percent: 61,
  con_percent: 39,
  link: "united-nations.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[41] = united_nations;

const united_states = {
  name: "United States",
  pro_percent: 67,
  con_percent: 33,
  link: "united-states.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[42] = united_states;

const universal_basic_income = {
  name: "Universal Basic Income",
  pro_percent: 65,
  con_percent: 35,
  link: "universal-basic-income.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[43] = universal_basic_income;

const vaccine_passports = {
  name: "Vaccine Passports",
  pro_percent: 63,
  con_percent: 37,
  link: "vaccine-passports.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[44] = vaccine_passports;

const war_in_afghanistan = {
  name: "War In Afghanistan",
  pro_percent: 26,
  con_percent: 74,
  link: "war-in-afghanistan.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[45] = war_in_afghanistan;

const war_in_iraq = {
  name: "War In Iraq",
  pro_percent: 79,
  con_percent: 21,
  link: "war-in-iraq.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[46] = war_in_iraq;

const war_on_terror = {
  name: "War On Terror",
  pro_percent: 26,
  con_percent: 74,
  link: "war-on-terror.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[47] = war_on_terror;

const welfare = {
  name: "Welfare",
  pro_percent: 72,
  con_percent: 28,
  link: "welfare.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[48] = welfare;

const world_trade_organization = {
  name: "World Trade Organization",
  pro_percent: 59,
  con_percent: 41,
  link: "world-trade-organization.html",
  image: "abortion.jpg",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, fuga rem dolores debitis sapiente nemo officiis tempore reprehenderit magnam eos, et eum! Qui vero illo esse iure voluptate, consequatur, soluta asperiores veniam exercitationem illum hic. Repellat consectetur magni corrupti voluptas optio illum veniam blanditiis numquam vel delectus! Sit unde assumenda quis fugit cupiditate non incidunt vero ipsa voluptates nemo. Itaque omnis ipsa nemo, minima architecto nam dicta laborum veniam illo blanditiis fugit assumenda illum ex. Eveniet nulla tenetur facere debitis est nobis quia sapiente quam ea. Dolor ex soluta molestias nisi quisquam, molestiae et, facere explicabo iure, vero hic nesciunt!",
};
issues[49] = world_trade_organization;

issues.sort((a, b) => (a.name.toUpperCase > b.name.toUpperCase ? -1 : 1));

console.log(issues);
function call_display_issue() {
  display_issue();
}

function call_display_percent() {
  display_percent();
}

function pro_index(array) {
  top_pro(array);
}

function con_index(array) {
  top_con(array);
}

function middle_index(array) {
  middle(array);
}

function call_issue(issue) {
  big_issue(issue);
}
