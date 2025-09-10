const novoHabitoBtn = document.getElementById("novo-habito-btn");
    const modal = document.getElementById("habito-modal");
    const closeBtn = document.querySelector(".close");
    const criarHabitoBtn = document.getElementById("criar-habito-btn");
    const container = document.getElementsByClassName("habitos-grid");

    // Abrir modal
    novoHabitoBtn.onclick = () => {
      modal.style.display = "flex";
    };

    // Fechar modal
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };

    // Criar novo hábito
    criarHabitoBtn.onclick = () => {
      const nome = document.getElementById("nome").value;
      const descricao = document.getElementById("descricao").value;
      const categoria = document.getElementById("categoria").value;
      const frequencia = document.getElementById("frequencia").value;

      if(nome.trim() === "") {
        alert("Digite um nome para o hábito!");
        return;
      }

      // Criar card
      const card = document.createElement("div");
      card.classList.add("habito-card");
      card.innerHTML = `
        <h3>${nome}</h3>
        <p>${descricao}</p>
        <p><b>Categoria:</b> ${categoria}</p>
        <p><b>Frequência:</b> ${frequencia}</p>
        <p style="color:purple">0 dias seguidos</p>
      `;

      container.appendChild(card);

      // Fechar modal e limpar campos
      modal.style.display = "none";
      document.getElementById("nome").value = "";
      document.getElementById("descricao").value = "";
      document.getElementById("categoria").value = "";
      document.getElementById("frequencia").value = "Diário";
    };

    // Fechar modal clicando fora
    window.onclick = (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    };