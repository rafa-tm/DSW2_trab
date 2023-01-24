function verificaLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email == "cliente@email.com" && senha == "1234") {
    window.location.href = "/homeCliente.html";
  }

  if (email == "profissional@email.com" && senha == "1234") {
    window.location.href = "/homeProfissional.html";
  }
}
