const musicCdList = document.querySelector("#music-cd-table");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const author = form.elements.author.value;
  const title = form.elements.title.value;
  const year = form.elements.year.value;
  addMusicCd(author, title, year);
});

function addMusicCd(author, title, year) {
  if (!author || !title || !year) {
    alert("Please fill in all the fields");
    return;
  }

  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${author}</td>
    <td>${title}</td>
    <td>${year}</td>
    <td><button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zM7 6v13z"/></svg></button></td>
  `;
  musicCdList.appendChild(tr);
  form.reset();
}

musicCdList.addEventListener("click", function (e) {
  if (e.target.closest(".delete")) {
    e.target.closest("tr").remove();
  }
});
