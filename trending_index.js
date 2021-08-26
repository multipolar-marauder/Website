// Trending Posts

function display_trending_posts() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("index-trending-link" + i).innerHTML =
      trending[i].title;
    document.getElementById("index-trending-link" + i).href =
      "./blog-posts/" + trending[i].link;
  }
}
