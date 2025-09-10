const botoes = document.querySelectorAll('.humor');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      if (botao.classList.contains('ativo')) {
        botao.classList.remove('ativo'); // desmarca se clicar de novo
      } else {
        botoes.forEach(b => b.classList.remove('ativo')); // limpa os outros
        botao.classList.add('ativo'); // marca o clicado
      }
    });
  });

  function bindSlider(sliderInput, valueSpan){
    function update(){
      const min = Number(sliderInput.min || 0);
      const max = Number(sliderInput.max || 100);
      const val = Number(sliderInput.value);
      const percent = ( (val - min) / (max - min) ) * 100;
      // Para Chrome/Edge/Opera: define variável --percent usada pelo gradient do track
      sliderInput.style.setProperty('--percent', percent + '%');
      // Atualiza label
      valueSpan.textContent = val;
    }
    // iniciar
    update();
    // atualizar durante o arraste
    sliderInput.addEventListener('input', update);
    // também atualiza se o valor for alterado por script
    sliderInput.addEventListener('change', update);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const humorButtons = document.querySelectorAll(".humores button");
    const energiaSlider = document.getElementById("energia");
    const estresseSlider = document.getElementById("estresse");
    const energiaValor = document.getElementById("valor-energia");
    const estresseValor = document.getElementById("valor-estresse");
    const gratidaoInput = document.getElementById("gratidao");
    const observacoesInput = document.getElementById("observacoes");
    const registrarBtn = document.getElementById("registrar-humor");

    // Seleção de humor
    humorButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        humorButtons.forEach(b => b.classList.remove("selecionado"));
        btn.classList.add("selecionado");
      });
    });

    // Atualizar sliders dinamicamente
    function bindSlider(slider, span) {
      function update() {
        span.textContent = slider.value;
        const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.setProperty('--percent', percent + "%");
      }
      slider.addEventListener("input", update);
      update();
    }
    bindSlider(energiaSlider, energiaValor);
    bindSlider(estresseSlider, estresseValor);

    // Resetar tudo ao registrar
    registrarBtn.addEventListener("click", () => {
      // Reset humor
      humorButtons.forEach(b => b.classList.remove("selecionado"));

      // Reset sliders
      energiaSlider.value = 3;
      estresseSlider.value = 3;
      energiaValor.textContent = 3;
      estresseValor.textContent = 3;
      energiaSlider.style.setProperty('--percent', "50%");
      estresseSlider.style.setProperty('--percent', "50%");

      // Reset textareas
      gratidaoInput.value = "";
      observacoesInput.value = "";
    });
  });