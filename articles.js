const blogSearch = document.querySelector("#blogSearch");
blogSearch.addEventListener("keyup", filterPosts);

function filterPosts() {
  let filterValue = blogSearch.value.toLowerCase();
  const posts = document.querySelectorAll(".articles").forEach((post) => {
    post.innerText.toLowerCase().indexOf(filterValue) > -1
      ? (post.style.display = "")
      : (post.style.display = "none");
  });
}

for (let i = 0; i < all_blogs.length; i++) {
  var articles = document.createElement("div");
  articles.setAttribute("class", "articles");
  articles.setAttribute("id", "articles" + i);
  document.getElementById("all-articles").appendChild(articles);

  var img = document.createElement("img");
  img.setAttribute("class", "responsive-articles");
  img.setAttribute("alt", "");
  img.setAttribute("src", "./Images/" + all_blogs[i].img);
  document.getElementById("articles" + i).appendChild(img);

  var article_content = document.createElement("div");
  article_content.setAttribute("class", "article-content");
  article_content.setAttribute("id", "article-content" + i);
  document.getElementById("articles" + i).appendChild(article_content);

  var heading = document.createElement("h5");
  heading.setAttribute("class", "article-title");
  heading.setAttribute("id", "article-heading" + i);
  document.getElementById("article-content" + i).appendChild(heading);

  var article_title = document.createElement("a");
  article_title.setAttribute("href", "./blog-posts/" + all_blogs[i].link);
  article_title.setAttribute("class", "article-title");
  article_title.setAttribute("id", "article-title" + i);
  article_title.innerHTML = all_blogs[i].title;
  document.getElementById("article-heading" + i).appendChild(article_title);

  var author_date_tags = document.createElement("div");
  author_date_tags.setAttribute("class", "author-date-tags");
  author_date_tags.setAttribute("id", "author-date-tags" + i);
  document.getElementById("article-content" + i).appendChild(author_date_tags);

  var author = document.createElement("i");
  author.setAttribute("class", "fa fa-user-circle");
  author.setAttribute("id", "fa fa-user-circle" + i);
  author.innerHTML = "&nbsp; &nbsp;" + all_blogs[i].author + "&nbsp; &nbsp;";
  document.getElementById("author-date-tags" + i).appendChild(author);

  var date = document.createElement("i");
  date.setAttribute("class", "fa fa-calendar");
  date.setAttribute("id", "fa fa-calendar" + i);
  date.innerHTML = "&nbsp; &nbsp;" + all_blogs[i].date;
  document.getElementById("author-date-tags" + i).appendChild(date);

  var tags = document.createElement("div");
  tags.setAttribute("class", "tags");
  tags.setAttribute("id", "tags" + i);
  document.getElementById("author-date-tags" + i).appendChild(tags);

  for (let j = 0; j < all_blogs[i].tags.length; j++) {
    var each_tag = document.createElement("span");
    each_tag.setAttribute("class", "border-tags");
    each_tag.setAttribute("id", "border-tags");
    each_tag.innerHTML = all_blogs[i].tags[j];
    document.getElementById("tags" + i).appendChild(each_tag);
  }
}
