// Trending Posts

function display_trending_blogs() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("trending-posts-title" + i).innerHTML =
      trending[i].title;
    document.getElementById("trending-posts-title" + i).href =
      "./blog-posts/" + trending[i].link;
    document.getElementById("trending-image" + i).src =
      "./Images/" + trending[i].img_big;
    document.getElementById("trending-posts-author" + i).innerHTML =
      "&nbsp; &nbsp;" + trending[i].author + "&nbsp; &nbsp;";
    document.getElementById("trending-posts-date" + i).innerHTML =
      "&nbsp; &nbsp;" + trending[i].date;
  }
}

function display_trending_index() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("index-trending-link-title" + i).innerHTML =
      trending[i].title;
    document.getElementById("index-trending-link" + i).href =
      "./blog-posts/" + trending[i].link;
  }
}
