// Contains all blogs as objects

const why_you_need_a_dog = {
  title: "Why You Need A Dog",
  author: "Srivatsan Viswanathan",
  date: "August 8 2021",
  img: "dog2.jpg",
  src: "why-you-need-a-dog.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Dogs", "Pets", "Cuddles"],
  id: 6,
};

const why_you_need_a_cat = {
  title: "Why You Need A Cat",
  author: "Cat Lover",
  date: "August 6 2021",
  img: "cat2.jpg",
  src: "why-you-need-a-cat.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Cats", "Pets", "Cuddles"],
  id: 5,
};

const why_pets_are_good_for_you = {
  title: "Why Pets Are Good For You",
  author: "Harini Viswanathan",
  date: "August 4 2021",
  img: "pets2.jpg",
  src: "why-pets-are-good-for-you.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Dogs", "Cats", "Pets", "Cuddles"],
  id: 4,
};

const gaming_is_fun = {
  title: "Gaming Is Fun",
  author: "Srivatsan Viswanathan",
  date: "August 2 2021",
  img: "gaming2.jpg",
  src: "gaming-is-fun.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Games", "Competitive", "Break"],
  id: 3,
};

const how_to_get_away_with_murder = {
  title: "How To Get Away With Murder",
  author: "Multipolar Marauder",
  date: "July 31 2020",
  img: "murder2.jpg",
  src: "how-to-get-away-with-murder.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Murder", "Crime", "Violence"],
  id: 2,
};

const are_mobile_games_healthy = {
  title: "Are Mobile Games Healthy?",
  author: "Multipolar Marauder",
  date: "July 27 2020",
  img: "notdie2.png",
  src: "are-mobile-games-healthy.html",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: ["Games", "Mobile", "Violence"],
  id: 1,
};

var all_blogs = [
  why_you_need_a_dog,
  why_you_need_a_cat,
  why_pets_are_good_for_you,
  how_to_get_away_with_murder,
  gaming_is_fun,
  are_mobile_games_healthy,
];

all_blogs.sort(function (a, b) {
  return parseInt(b.id) - parseInt(a.id);
});

console.log(all_blogs);
