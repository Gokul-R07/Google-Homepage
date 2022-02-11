let searchedWord = document.querySelector(".searchInput");
searchedWord.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    search();
  }
});
function search() {
  window.location.href = `https://www.google.com/search?q=${searchedWord.value}`;
}
document.getElementById("button-one").addEventListener("click", search);
