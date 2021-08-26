// To Display Recent Posts

function display_recent_posts() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("recent-posts-title" + i).innerHTML =
      all_blogs[i].title;
    document.getElementById("recent-posts-title" + i).href =
      "./" + all_blogs[i].link;
    document.getElementById("recent-image" + i).src =
      "../Images/" + all_blogs[i].img_big;
  }
}
