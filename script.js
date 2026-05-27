function mostrarAlerta(tipo) {

    const mensagem = document.getElementById("mensagem");

    if (tipo === "seca") {
        mensagem.innerHTML = `
            🌵 ALERTA DE SECA <br>
            Umidade: 18% <br>
            Temperatura: 37°C <br>
            Risco: Alto
        `;
    }

    else if (tipo === "queimada") {
        mensagem.innerHTML = `
            🔥 ALERTA DE QUEIMADAS <br>
            Ventos fortes e clima seco detectados. <br>
            Risco: Muito Alto
        `;
    }

    else if (tipo === "chuva") {
        mensagem.innerHTML = `
            🌧️ ALERTA DE CHUVA INTENSA <br>
            Volume previsto: 120mm <br>
            Possibilidade de enchentes.
        `;
    }

    else if (tipo === "praga") {
        mensagem.innerHTML = `
            🐛 ALERTA DE PRAGAS <br>
            Infestação em lavouras detectada. <br>
            Recomendação: inspeção imediata.
        `;
    }

}