function chargementDeRessource() {
  const requestHttpTest = new XMLHttpRequest();
  requestHttpTest.onload = handleLoad;
  requestHttpTest.open(
    "GET",
    "https://jsonplaceholder.typicode.com/photos",
    true
  );
  requestHttpTest.send();
}

function handleLoad() {
  if (this.readyState == 4 && this.status == 200) {
    const results = JSON.parse(this.responseText);

    results.slice(0, 20).forEach((elem) => addImageContainer(elem));
  } else {
    window.alert("Erreur leur du rechargement");
  }
}

function addImageContainer(image) {
  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");

  let img = document.createElement("IMG");
  img.src = image.url;
  img.title = image.title;
  img.id = image.id;
  img.setAttribute("class", "containerImg");

  divCard.appendChild(img);

  let divTitle = document.createElement("div");
  divTitle.setAttribute("class", "containerTitle");
  divTitle.innerHTML = image.title;

  divCard.appendChild(divTitle);

  document.getElementById("containerImages").appendChild(divCard);
}

window.onload = () => {
  document
    .getElementById("btn")
    .addEventListener("click", chargementDeRessource);
};
