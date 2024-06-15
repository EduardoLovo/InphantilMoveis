import React, { useState } from "react";

export const CalculadoraSobMedida = () => {
  const [resultado, setResultado] = useState("");
  const [resultadoAcessorio, setResultadoAcessorio] = useState("");

  const calcular = (evento) => {
    evento.preventDefault();

    const largura = +evento.target.largura.value;
    const comprimento = +evento.target.comprimento.value;
    const acessorio = evento.target.acessorio.value;

    console.log(largura);
    console.log(comprimento);
    console.log(acessorio);

    // Externo
    const larguraExterno = largura + 2;
    const comprimentoExterno = comprimento + 2;

    // Interno
    const larguraInterno = larguraExterno - 14;
    const comprimentoInterno = comprimentoExterno - 14;

    // Colchão
    const larguraColchao = larguraInterno - 3;
    const comprimentoColchao = comprimentoInterno - 3;

    // Lençol
    const larguraLencol = larguraColchao + 46;

    if (acessorio === "lençol") {
      setResultadoAcessorio(larguraLencol + "x" + comprimentoColchao + 46);
    } else if (acessorio === "virol") {
      setResultadoAcessorio(comprimentoColchao + 70);
    } else {
      setResultado("");
    }

    // const comprimentoLencol = () => {
    //   if (acessorio === "lencol") {
    //     const comprimentoLencol = comprimentoColchao + 46;
    //     return comprimentoLencol;
    //   } else if (acessorio === "virol") {
    //     console.log("virl");
    //     const comprimentoLencol = comprimentoColchao + 70;
    //     return comprimentoLencol;
    //   } else {
    //     return "";
    //   }
    // };

    setResultado(
      <section>
        <div>
          <label>Tamanho da cama:</label>
          <p>
            {largura} x {comprimento}
          </p>
        </div>
        <div>
          <label>Externo:</label>
          <p>
            {larguraExterno} x {comprimentoExterno}
          </p>
        </div>
        <div>
          <label>Interno:</label>
          <p>
            {larguraInterno}x {comprimentoInterno}{" "}
          </p>
        </div>
        <div>
          <label>Colchão:</label>
          <p>
            {larguraColchao} x {comprimentoColchao}
          </p>
        </div>
        <div>
          {acessorio === "lençol" && (
            <div>
              <label>Lençol:</label>
              <p>{resultadoAcessorio}</p>
              <label>Quadrado:</label>
              <p>Padrão</p>
            </div>
          )}
          {acessorio === "virol" && (
            <div>
              <label>Virol:</label>
              <p>{resultadoAcessorio}</p>
            </div>
          )}
        </div>
      </section>
    );
  };
  return (
    <div>
      <h3>Sob Medida com medida da cama Phant:</h3>
      <form onSubmit={calcular}>
        <div>
          <label>Largura:</label>
          <input type="number" id="largura" />
        </div>
        <div>
          <label>Comprimento:</label>
          <input type="number" id="comprimento" />
        </div>
        <div>
          <label>Acessorio:</label>
          <select id="acessorio">
            <option></option>
            <option value="lençol">Lençol</option>
            <option value="virol">Virol</option>
          </select>
        </div>
        <button type="submit">Calcular</button>
      </form>

      <section>{resultado}</section>
    </div>
  );
};
