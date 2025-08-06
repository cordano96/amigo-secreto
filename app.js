let amigos = [];
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(nombre);
  input.value = "";
  mostrarListaAmigos();
}
function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía. Agrega al menos uno.");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];
  resultado.innerHTML = "";
  const item = document.createElement("li");
  item.innerHTML = `<strong>Amigo sorteado:</strong> ${nombreSorteado}`;
  resultado.appendChild(item);
}