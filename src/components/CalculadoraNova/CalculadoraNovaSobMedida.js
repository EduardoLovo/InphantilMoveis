import React, { useState } from 'react';

export const CalculadoraNovaSobMedida = () => {
  const [resultado, setResultado] = useState('');

  const calcular = (evento) => {
    evento.preventDefault();

    const largura = +evento.target.largura.value;
    const comprimento = +evento.target.comprimento.value;
    const acessorio = evento.target.acessorio.value;

    // Externo
    const larguraExterno = largura + 3;
    const comprimentoExterno = comprimento + 3;

    // Interno
    const larguraInterno = larguraExterno - 16;
    const comprimentoInterno = comprimentoExterno - 16;

    // Colchão
    const larguraColchao = larguraInterno - 4;
    const comprimentoColchao = comprimentoInterno - 2;

    // Acessorio
    const larguraLencol = larguraColchao + 48;
    const comprimentoLencol = comprimentoColchao + 46;

    const larguraVirol = largura + 40;
    const comprimentoVirol = comprimento + 70;

    // Resultado
    setResultado(
      <div className="resultadoCalculadoraCamaPhant">
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
            {larguraInterno} x {comprimentoInterno}{' '}
          </p>
        </div>
        <div>
          <label>Colchão: </label>
          <p>
            {larguraColchao} x {comprimentoColchao}
          </p>
        </div>
        <div>
          {acessorio === 'lençol' && (
            <div className="resultadoLencol">
              <label>Lençol: </label>
              <p>
                {larguraLencol} x {comprimentoLencol}
              </p>
              <label> Quadrado: </label>
              <p>Padrão</p>
            </div>
          )}
          {acessorio === 'virol' && (
            <div>
              <label>Virol:</label>
              <p>
                {larguraVirol} x {comprimentoVirol}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="contentCalculadoraCamaPhant">
      <div className="sombra">
        <h3>Sob Medida com medida da cama Phant:</h3>
        <div className="contentCalculadoraCamaPhantFormEResultado">
          <form onSubmit={calcular} className="formularioCalculadoraCamaPhant">
            <div>
              <label>Cabeceira:</label>
              <input type="number" id="largura" />
            </div>
            <div>
              <label>Lateral:</label>
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
      </div>
    </div>
  );
};
