function testing() {
  var text = "link";
  document.getElementById("idk").innerHTML = text;
  var yourElement = document.getElementById("idk");
  yourElement.setAttribute("href", "https://www.google.com");
}

function test() {
  document.getElementById("idk").innerHTML = "Google Link Here!";
  document.querySelector(".idk").href = "https://www.google.com";
}
