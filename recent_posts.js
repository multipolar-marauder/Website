// For recent post data

function one_recentpost() {
  var title = "Why You Need A Dog";
  var author = "&nbsp; Srivatsan Viswanathan &nbsp;";
  var date = "&nbsp; August 8 2021";
  var description =
    "Why do you need a dog? You need a dog because they will make your life a 1000% better than it already is. Your life is great? Awesome! Get a dog and it'll be better! Your life sucks? Damn, GET A DOG AND YOUR LIFE WILL BE AMAZING!";

  document.getElementById("recent-posts-title").innerHTML = title;
  document.getElementById("recent-posts-author").innerHTML = author;
  document.getElementById("recent-posts-date").innerHTML = date;
  document.getElementById("recent-posts-p-desc").innerHTML = description;
  document
    .getElementById("recent-posts-title")
    .setAttribute("href", "./Blog Posts/why-you-need-a-dog.html");
}

function two_recentpost() {
  var title = "Why You Need A Cat";
  var author = "&nbsp; Cat Lover &nbsp;";
  var date = "&nbsp; August 4 2021 &nbsp;";
  var description =
    "Why do you need a cat? You need a cat because they will make your life a 1000% better than it already is. Your life is great? Awesome! Get a cat and it'll be better! Your life sucks? Damn, GET A CAT AND YOUR LIFE WILL BE AMAZING!";

  document.getElementById("recent-posts-title2").innerHTML = title;
  document.getElementById("recent-posts-author2").innerHTML = author;
  document.getElementById("recent-posts-date2").innerHTML = date;
  document.getElementById("recent-posts-p-desc2").innerHTML = description;
}

function three_recentpost() {
  var title = "Why Pets Are Good For You";
  var author = "&nbsp; Srivatsan Viswanathan &nbsp;";
  var date = "&nbsp; August 4 2021 &nbsp;";
  var description =
    "Pets are amazing. Some people have cats, dogs, hamsters and many other animals because pets are simply worth it. They are fun to have around, they teach you about responsibilities (after all, you don't want to kill your pet), and they make your life much better!";

  document.getElementById("recent-posts-title3").innerHTML = title;
  document.getElementById("recent-posts-author3").innerHTML = author;
  document.getElementById("recent-posts-date3").innerHTML = date;
  document.getElementById("recent-posts-p-desc3").innerHTML = description;
}


document.getElementById("recent-one-image").src = "../Images/dog.jpg";
document.getElementById("recent-two-image").src = "../Images/cat.jpg";
document.getElementById("recent-three-image").src = "../Images/pets.jpg";

