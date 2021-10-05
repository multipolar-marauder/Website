// Display The Debates

for (let i = 0; i < all_debates.length; i++) {
  // For Popular Debates
  var list_popular = document.createElement("li");
  list_popular.setAttribute("class", "popular-list margin-top");
  list_popular.setAttribute("id", "popular-list" + i);
  document.getElementById("debates-list-popular").appendChild(list_popular);

  var debate_title_popular = document.createElement("a");
  debate_title_popular.setAttribute("href", "./debates/" + all_debates[i].link);
  debate_title_popular.setAttribute("class", "debates-title-popular");
  debate_title_popular.setAttribute("id", "debates-title-popular" + i);
  debate_title_popular.innerHTML = all_debates[i].title;
  document.getElementById("popular-list" + i).appendChild(debate_title_popular);

  var desc_popular = document.createElement("p");
  desc_popular.setAttribute("class", "popular-desc margin-top");
  desc_popular.setAttribute("id", "popular-desc" + i);
  desc_popular.innerHTML = all_debates[i].desc;
  document.getElementById("popular-list" + i).appendChild(desc_popular);

  // For Recent Debates
  var list_recent = document.createElement("li");
  list_recent.setAttribute("class", "recent-list margin-top");
  list_recent.setAttribute("id", "recent-list" + i);
  document.getElementById("debates-list-recent").appendChild(list_recent);

  var debate_title_recent = document.createElement("a");
  debate_title_recent.setAttribute("href", "./debates/" + all_debates[i].link);
  debate_title_recent.setAttribute("class", "debates-title-recent");
  debate_title_recent.setAttribute("id", "debates-title-recent" + i);
  debate_title_recent.innerHTML = all_debates[i].title;
  document.getElementById("recent-list" + i).appendChild(debate_title_recent);

  var desc_recent = document.createElement("p");
  desc_recent.setAttribute("class", "recent-desc margin-top");
  desc_recent.setAttribute("id", "recent-desc" + i);
  desc_recent.innerHTML = all_debates[i].desc;
  document.getElementById("recent-list" + i).appendChild(desc_recent);
}
