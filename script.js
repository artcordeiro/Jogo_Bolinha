function adicionarBola() {
  var pw = Math.floor(Math.random() * 1000);
  var ph = Math.floor(Math.random() * 600);
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");

  bola.setAttribute("style", "left:" + pw + "px;top:" + ph + "px");
  bola.setAttribute("onclick", "estourarbola(this)");

  document.body.appendChild(bola);
}

function estourarbola(bola) {
  document.body.removeChild(bola);
}

function start() {
  setInterval(adicionarBola, 500);
}