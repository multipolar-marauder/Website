// For recent post data

document.getElementById("recent-one-image").src = "../Images/dog.jpg";
document.getElementById("recent-two-image").src = "../Images/cat.jpg";
document.getElementById("recent-three-image").src = "../Images/pets.jpg";

function first_recent_post() {
  var title = "Why You Need A Dog";
  document.getElementById("recent-posts-title").innerHTML = title;
  document.getElementById("recent-posts-title").href =
    "./why-you-need-a-dog.html";
}

function second_recent_post() {
  var title = "Why You Need A Cat";
  document.getElementById("recent-posts-title2").innerHTML = title;
  document.getElementById("recent-posts-title2").href =
    "./why-you-need-a-cat.html";
}

function third_recent_post() {
  var title = "Why Pets Are Good For You";
  document.getElementById("recent-posts-title3").innerHTML = title;
  document.getElementById("recent-posts-title3").href =
    "./why-pets-are-good-for-you.html";
}
