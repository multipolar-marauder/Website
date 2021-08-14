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

// Order of Posts
document.getElementById("one").style.order = "-1";
document.getElementById("two").style.order = "-2";
document.getElementById("three").style.order = "-3";
document.getElementById("four").style.order = "-4";
document.getElementById("five").style.order = "-5";
document.getElementById("six").style.order = "-6";
document.getElementById("seven").style.order = "-7";
document.getElementById("eight").style.order = "-8";
document.getElementById("nine").style.order = "-9";
document.getElementById("ten").style.order = "-10";
document.getElementById("eleven").style.order = "-11";
document.getElementById("twelve").style.order = "-12";
document.getElementById("thirteen").style.order = "-13";
document.getElementById("fourteen").style.order = "-14";
document.getElementById("fifteen").style.order = "-15";
