import React, { useState } from "react";
import "./CalculadoraSobMedida.css";
// import { CalculadoraSobMedida } from "./index";

export const CalculadoraSobMedida = () => {
  const [resultado, setResultado] = useState("");
  const [resultadoAcessorio, setResultadoAcessorio] = useState("");

  const calcular = (evento) => {
    evento.preventDefault();

    const largura = +evento.target.largura.value;
    const comprimento = +evento.target.comprimento.value;
    const acessorio = evento.target.acessorio.value;

    // Externo
    const larguraExterno = largura + 2;
    const comprimentoExterno = comprimento + 2;

    console.log(larguraExterno);

    // Interno
    const larguraInterno = larguraExterno - 14;
    const comprimentoInterno = comprimentoExterno - 14;

    // Colchão
    const larguraColchao = larguraInterno - 3;
    const comprimentoColchao = comprimentoInterno - 3;

    // Lençol
    const larguraAcessorio = larguraColchao + 46;

    if (acessorio === "lençol") {
      const resultadoComprimentoColchao = comprimentoColchao + 46;

      console.log(resultadoComprimentoColchao);
      setResultadoAcessorio(
        larguraAcessorio + " x " + resultadoComprimentoColchao
      );
    } else if (acessorio === "virol") {
      const resultadoComprimentoColchao = comprimentoColchao + 70;
      setResultadoAcessorio(
        larguraAcessorio + " x " + resultadoComprimentoColchao
      );
    } else {
      setResultado("");
    }

    // Resultado
    setResultado(
      <section className="resultadoCalculadoraCamaPhant">
        <h3>Resultado</h3>
        <div>
          <label>Tamanho da cama:</label>
          <p>
            {largura} x {comprimento}
          </p>
        </div>
        <div>
          <label>Externo: </label>
          <p>
            {larguraExterno} x {comprimentoExterno}
          </p>
        </div>
        <div>
          <label>Interno: </label>
          <p>
            {larguraInterno} x {comprimentoInterno}{" "}
          </p>
        </div>
        <div>
          <label>Colchão: </label>
          <p>
            {larguraColchao} x {comprimentoColchao}
          </p>
        </div>
        <div>
          {acessorio === "lençol" && (
            <div className="resultadoLencol">
              <label>Lençol: </label>
              <p>{resultadoAcessorio}</p>
              <label> Quadrado: </label>
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
    <div className="contentCalculadoraCamaPhant">
      <form onSubmit={calcular} className="formularioCalculadoraCamaPhant">
        <h3>Sob Medida com medida da cama Phant:</h3>
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
        <div>
          <button type="submit">Calcular</button>
        </div>
      </form>

      {resultado && <section>{resultado}</section>}
    </div>
  );
};
