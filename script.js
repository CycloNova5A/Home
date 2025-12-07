window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const coverTop = document.querySelector(".cover.top");
  const coverBottom = document.querySelector(".cover.bottom");
  const logo = document.querySelector(".logo-spin");

  // Mode loading = luminosité réduite
  document.body.classList.add("loading");

  // Rotation du logo avant ouverture
  setTimeout(() => {
    // Ouvre les volets verts
    coverTop.style.transform = "translateY(-100%)";
    coverBottom.style.transform = "translateY(100%)";
    logo.style.opacity = "0";

    // Fait remonter la luminosité
    document.body.classList.replace("loading", "loaded");

    // Supprime le loader une fois ouvert
    setTimeout(() => {
      loader.remove(); // on retire complètement l’overlay
    }, 1300);
  }, 900);
});
