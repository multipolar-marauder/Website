// Contains all blogs as objects

const why_you_need_a_dog = {
  title: "Why You Need A Dog",
  author: "Srivatsan Viswanathan",
  date: "August 4 2021",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: "[dogs, pets, cuddles]",
  id: 1,
};

const why_you_need_a_cat = {
  title: "Why You Need A Cat",
  author: "Cat Lover",
  date: "August 6 2021",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.",
  tags: "[cats, pets, cuddles]",
  id: 2,
};

var all_blogs = [why_you_need_a_dog, why_you_need_a_cat];

all_blogs.sort(function (a, b) {
  return parseInt(a.id) - parseInt(b.id);
});

console.log(all_blogs);
