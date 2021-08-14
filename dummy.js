const blogSearch = document.querySelector("#blogSearch");
blogSearch.addEventListener("keyup", filterPosts);

function filterPosts() {
  let filterValue = blogSearch.value.toLowerCase();
  const posts = document.querySelectorAll(".card").forEach((post) => {
    post.innerText.toLowerCase().indexOf(filterValue) > -1
      ? (post.style.display = "")
      : (post.style.display = "none");
  });
}
