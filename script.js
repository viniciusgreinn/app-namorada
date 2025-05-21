const surpresas = {
  "2025-06-01": "Hoje começa nossa contagem pro Dia dos Namorados! Te amo!",
  "2025-06-02": "Lembra daquele nosso primeiro encontro? Eu revivo ele na mente todo dia.",
  "2025-06-03": "Você é meu lugar favorito no mundo.",
  "2025-06-04": "Sua risada é minha trilha sonora preferida.",
  "2025-06-05": "Faltam só 7 dias! Mal posso esperar pra te ver!",
  "2025-06-06": "Se amor fosse música, você seria minha melhor canção.",
  "2025-06-07": "Com você, até os dias comuns viram especiais.",
  "2025-06-08": "Você é o melhor presente que a vida me deu.",
  "2025-06-09": "Eu te escolheria em todas as vidas.",
  "2025-06-10": "Você me faz querer ser melhor todos os dias.",
  "2025-06-11": "Amanhã é o grande dia, meu amor!",
  "2025-06-12": "Feliz Dia dos Namorados! Eu te amo demais!"
};

function mostrarSurpresa() {
  const hoje = new Date().toISOString().slice(0, 10);
  const mensagem = surpresas[hoje];

  const div = document.getElementById('surpresa');
  if (mensagem) {
    div.textContent = mensagem;
  } else {
    div.textContent = "Ops! Ainda não tem surpresa pra hoje.";
  }
}
