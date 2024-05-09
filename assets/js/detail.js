window.addEventListener("DOMContentLoaded", () => {
  const movie = localStorage.getItem("movie");

  /** @type {HTMLImageElement} */
  const poster = document.getElementById("poster");
  const title = document.getElementById("title");
  const releasedEl = document.getElementById("released");
  const plot = document.getElementById("plot");
  const genre = document.getElementById("genre");
  const actors = document.getElementById("actors");

  // if there is no movie, redirect to homepage
  if (!movie) {
    window.location.replace("index.html");
  }

  const parsedMovie = JSON.parse(movie);

  document.title = `${parsedMovie.Title} | GMDB`;
  poster.src = `assets/img/posters/${parsedMovie.Poster}`;
  poster.alt = `${parsedMovie.Poster} Poster`;
  title.innerHTML = parsedMovie.Title;
  releasedEl.innerHTML = `Released ${parsedMovie.Released}`;
  plot.innerText = parsedMovie.Plot;
  genre.innerHTML = parsedMovie.Genre;
  actors.innerHTML = parsedMovie.Actors;
});
