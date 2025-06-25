let nomes = [];

function getInputValor() {
  return document.getElementById("nomeInput").value;
}

function limparInput() {
  document.getElementById("nomeInput").value = "";
}

function exibirResultado(texto, objeto = null) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = texto;

  console.log("🔹 " + texto.replace(/<br>/g, "\n")); // Para manter legível no console

  if (objeto !== null) {
    console.log("Resultado:", objeto);
  }
}

function mostrarLista() {
  const mensagem = "Lista atual: " + (nomes.length ? nomes.join(", ") : "vazia");
  exibirResultado(mensagem, nomes);
}

function adicionarNome() {
  const nome = getInputValor();
  if (nome) {
    nomes.push(nome);
    exibirResultado(`Nome adicionado: ${nome}<br>Lista atual: ${nomes.join(", ")}`, nomes);
    limparInput();
  } else {
    exibirResultado("Digite um nome válido.");
  }
}

function filtrarNomes() {
  const letra = getInputValor();
  if (letra.length === 1) {
    const filtrados = nomes.filter(nome => nome.toLowerCase().startsWith(letra.toLowerCase()));
    const msg = filtrados.length
      ? `Nomes filtrados: ${filtrados.join(", ")}`
      : "Nenhum nome encontrado com essa letra.";
    exibirResultado(msg, filtrados);
  } else {
    exibirResultado("Digite apenas uma letra para filtrar.");
  }
}

function buscarNome() {
  const busca = getInputValor();
  if (busca) {
    const encontrado = nomes.find(nome => nome.toLowerCase() === busca.toLowerCase());
    if (encontrado) {
      exibirResultado(`Nome encontrado: ${encontrado}`, encontrado);
    } else {
      exibirResultado("Nome não encontrado.");
    }
  } else {
    exibirResultado("Digite um nome para buscar.");
  }
}

function transformarNomes() {
  if (nomes.length === 0) {
    exibirResultado("A lista está vazia.");
    return;
  }
  const transformados = nomes.map(nome => nome.toUpperCase());
  exibirResultado("Nomes em maiúsculas: " + transformados.join(", "), transformados);
}

function verificarNomes() {
  if (nomes.length === 0) {
    exibirResultado("A lista está vazia.");
    return;
  }
  const todosValidos = nomes.every(nome => nome.length > 3);
  exibirResultado(`Todos os nomes têm mais de 3 caracteres? <strong>${todosValidos}</strong>`);
}
