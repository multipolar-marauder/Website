// Contains all blogs as objects

const all_blogs = [];

const why_you_need_a_dog = {
  title: "Why You Need A Dog",
  author: "Srivatsan Viswanathan",
  date: "August 8 2021",
  img: "dog2.jpg",
  img_big: "dog.jpg",
  link: "why-you-need-a-dog.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Dogs", "Pets", "Cuddles"],
  id: 6,
};
all_blogs[0] = why_you_need_a_dog;

const why_you_need_a_cat = {
  title: "Why You Need A Cat",
  author: "Cat Lover",
  date: "August 6 2021",
  img: "cat2.jpg",
  img_big: "cat.jpg",
  link: "why-you-need-a-cat.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Cats", "Pets", "Cuddles"],
  id: 5,
};
all_blogs[1] = why_you_need_a_cat;

const why_pets_are_good_for_you = {
  title: "Why Pets Are Good For You",
  author: "Harini Viswanathan",
  date: "August 4 2021",
  img: "pets2.jpg",
  img_big: "pets.jpg",
  link: "why-pets-are-good-for-you.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Dogs", "Cats", "Pets", "Cuddles"],
  id: 4,
};
all_blogs[2] = why_pets_are_good_for_you;

const gaming_is_fun = {
  title: "Gaming Is Fun",
  author: "Srivatsan Viswanathan",
  date: "August 2 2021",
  img: "gaming2.jpg",
  img_big: "gaming.jpg",
  link: "gaming-is-fun.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Games", "Competitive", "Break"],
  id: 3,
};
all_blogs[3] = gaming_is_fun;

const how_to_get_away_with_murder = {
  title: "How To Get Away With Murder",
  author: "Multipolar Marauder",
  date: "July 31 2020",
  img: "murder2.jpg",
  img_big: "murder.jpg",
  link: "how-to-get-away-with-murder.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Murder", "Crime", "Violence"],
  id: 2,
};
all_blogs[4] = how_to_get_away_with_murder;

const are_mobile_games_healthy = {
  title: "Are Mobile Games Healthy?",
  author: "Multipolar Marauder",
  date: "July 27 2020",
  img: "notdie2.png",
  img_big: "notdie.jpg",
  link: "are-mobile-games-healthy.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Games", "Mobile", "Violence"],
  id: 1,
};
all_blogs[5] = are_mobile_games_healthy;

var trending = [
  why_you_need_a_dog,
  why_you_need_a_cat,
  how_to_get_away_with_murder,
];

// Sort Blogs
all_blogs.sort(function (a, b) {
  return parseInt(b.id) - parseInt(a.id);
});

console.log(all_blogs);
