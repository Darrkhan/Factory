const hamburger = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const main = document.querySelector(".main-container");

hamburger.addEventListener("click", () =>
{
  if(container.classList.contains("active"))
  {
  container.classList.remove("active");
  }
  else
  {
    container.classList.add("active");
  }
});

main.addEventListener("click", () =>
{
  if(container.classList.contains("active"))
  {
  container.classList.remove("active");
  }
});