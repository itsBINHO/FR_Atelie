function flipCard(button) {
  // Encontrar o card que está associado ao botão
  const card = button.closest(".produto").querySelector(".flip-card");
  
  // Alternar a classe .flipped no card específico
  card.classList.toggle("flipped");
}
