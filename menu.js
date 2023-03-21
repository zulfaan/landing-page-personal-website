const menuBar = document.querySelector(".open");
const listBar = document.querySelector(".list-header");

menuBar.addEventListener("click", function() {
  listBar.classList.toggle("active");
});

const closedBar = document.querySelector(".closed");

closedBar.addEventListener("click", function() {
    listBar.classList.remove("active");
  });
