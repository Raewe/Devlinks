function toggleMode() {
  const html = document.documentElement;
  const image = document.querySelector(".profile img");

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./images/avatar.png");
    image.setAttribute("alt", "Foto de perfil do modo dark");
  } else {
    image.setAttribute("src", "./images/avatar-light.png");
    image.setAttribute("alt", "Foto de perfil do modo light");
  }

  html.classList.toggle("light");
}
