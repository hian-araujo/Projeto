function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // }
  // else {
  //   html.classList.add('light')
  // }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute(
      "alt",
      "Selfie de Hian Araujo Sorrindo, Usando Óculos e Camiseta Branca, Barba"
    )
  }
  //se tiver dark mode, adicionar a img normal
  else {
    img.setAttribute("src", "./assets/avatar.jpeg")
    img.setAttribute(
      "alt",
      "Foto de Hian Araujo Segurando Celular na Frente de um Espelho, Usando Óculos e Camiseta Preta, Barba e Preto e Branco"
    )
  }
}
