// To Display Recent Posts

function display_recent_posts() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("recent-posts-title" + i).innerHTML =
      all_blogs[i].title;
    document.getElementById("recent-posts-title" + i).href =
      "./blog-posts/" + all_blogs[i].link;
    document.getElementById("recent-image" + i).src =
      "./Images/" + all_blogs[i].img_big;
    document.getElementById("recent-posts-author" + i).innerHTML =
      "&nbsp; &nbsp;" + all_blogs[i].author + "&nbsp; &nbsp;";
    document.getElementById("recent-posts-date" + i).innerHTML =
      "&nbsp; &nbsp;" + all_blogs[i].date;
    document.getElementById("recent-posts-p-desc" + i).innerHTML =
      all_blogs[i].desc;
  }
}

function display_recent_posts_blogs() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("recent-posts-title" + i).innerHTML =
      all_blogs[i].title;
    document.getElementById("recent-posts-title" + i).href =
      "./" + all_blogs[i].link;
    document.getElementById("recent-image" + i).src =
      "../Images/" + all_blogs[i].img_big;
  }
}
