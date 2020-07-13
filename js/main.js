const fila = document.querySelector(".container-carousel");
const movies = document.querySelectorAll(".movie");

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

arrowRight.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const activeIndicator = document.querySelector(".indicators .active");
  if (activeIndicator.nextSibling) {
    activeIndicator.nextSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }
});

arrowLeft.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const activeIndicator = document.querySelector(".indicators .active");
  if (activeIndicator.previousSibling) {
    activeIndicator.previousSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }
});

// Pagination

const pageNumbers = Math.ceil(movies.length / 5);
for (let i = 0; i < pageNumbers; i++) {
  const indicator = document.createElement("button");

  if (i === 0) {
    indicator.classList.add("active");
  }

  document.querySelector(".indicators").appendChild(indicator);

  indicator.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector(".indicators .active").classList.remove("active");
    e.target.classList.add("active");
  });
}

// Hover
movies.forEach((movie) => {
  movie.addEventListener("mouseenter", (e) => {
    const item = e.currentTarget;
    setTimeout(() => {
      movies.forEach((movie) => movie.classList.remove("hover"));
      item.classList.add("hover");
    }, 300);
  });
});

fila.addEventListener("mouseleave", () => {
  movies.forEach((movie) => movie.classList.remove("hover"));
});
