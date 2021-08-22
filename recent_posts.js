// For recent post data

// Most Recent Post
var title = "Why You Need A Dog";
var author = "&nbsp; Srivatsan Viswanathan &nbsp;";
var date = "&nbsp; August 8 2021";
var description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numqssssssssuam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.";

document.getElementById("recent-posts-title").innerHTML = title;
document.getElementById("recent-posts-author").innerHTML = author;
document.getElementById("recent-posts-date").innerHTML = date;
document.getElementById("recent-posts-p-desc").innerHTML = description;
document
  .getElementById("recent-posts-title")
  .setAttribute("href", (href = "./blog-posts/why-you-need-a-dog.html"));

// Second Most Recent Post
var title2 = "Why You Need A Cat";
var author2 = "&nbsp; Cat Lover &nbsp;";
var date2 = "&nbsp; August 6 2021 &nbsp;";
var description2 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numquam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.";

document.getElementById("recent-posts-title2").innerHTML = title2;
document.getElementById("recent-posts-author2").innerHTML = author2;
document.getElementById("recent-posts-date2").innerHTML = date2;
document.getElementById("recent-posts-p-desc2").innerHTML = description2;
document
  .getElementById("recent-posts-title2")
  .setAttribute("href", (href = "./blog-posts/why-you-need-a-cat.html"));

//Third Most Recent Post
var title3 = "Why Pets Are Good For You";
var author3 = "&nbsp; Srivatsan Viswanathan &nbsp;";
var date3 = "&nbsp; August 4 2021 &nbsp;";
var description3 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat eveniet, doloremque recusandae earum eligendi voluptates cum molestias consequatur blanditiis quia qui dolorum, consequuntur ratione inventore numquam deserunt! Fugit labore fuga accusantium vero magnam. Fuga repudiandae incidunt dolorum nulla.";

document.getElementById("recent-posts-title3").innerHTML = title3;
document.getElementById("recent-posts-author3").innerHTML = author3;
document.getElementById("recent-posts-date3").innerHTML = date3;
document.getElementById("recent-posts-p-desc3").innerHTML = description3;
document
  .getElementById("recent-posts-title3")
  .setAttribute("href", (href = "./blog-posts/why-pets-are-good-for-you.html"));

//Images
document.getElementById("recent-one-image").src = "./Images/dog.jpg";
document.getElementById("recent-two-image").src = "./Images/cat.jpg";
document.getElementById("recent-three-image").src = "./Images/pets.jpg";
