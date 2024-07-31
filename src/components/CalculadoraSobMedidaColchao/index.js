import React, { useState } from 'react';

const CalculadoraSobMedidaColchao = () => {
  const [resultado, setResultado] = useState('');

  const calcular = (evento) => {
    evento.preventDefault();

    const largura = +evento.target.largura.value;
    const comprimento = +evento.target.comprimento.value;
    const altura = +evento.target.altura.value;
    const acessorio = evento.target.acessorio.value;

    // Interno
    const larguraInterno = largura + 3;
    const comprimentoInterno = comprimento + 3;

    // Externo
    const larguraExterno = larguraInterno + 14;
    const comprimentoExterno = comprimentoInterno + 14;

    // Altura
    const diferenca = altura - 10;
    const alturaExterno = diferenca + 23;
    const alturaInterno = diferenca + 21;

    // Acessorio lençol
    const larguraLencol = largura + (altura + 13) * 2;
    const comprimentoLencol = comprimento + (altura + 13) * 2;

    // Acessorio virol
    const larguraVirol = largura + 40;
    const comprimentoVirol = comprimento + 70;

    setResultado(
      <section className="resultadoCalculadoraCamaPhant">
        <h3>Resultado</h3>
        <div>
          <label>Tamanho do colchão:</label>
          <p>
            {largura} x {comprimento} x {altura}
          </p>
        </div>
        <div>
          <label>Externo: </label>
          <p>
            {larguraExterno} x {comprimentoExterno} x {alturaExterno}
          </p>
        </div>
        <div>
          <label>Interno: </label>
          <p>
            {larguraInterno} x {comprimentoInterno} x {alturaInterno}
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
              <p>
                {altura + 12} x {altura + 12}
              </p>
            </div>
          )}
          {acessorio === 'virol' && (
            <div>
              <label>Virol:</label>
              <div>
                {larguraVirol} x {comprimentoVirol}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="contentCalculadoraCamaPhant">
      <div className="sombra">
        <h3>Sob Medida com medida do colchão do cliente:</h3>
        <div className="contentCalculadoraCamaPhantFormEResultado">
          <form onSubmit={calcular} className="formularioCalculadoraCamaPhant">
            <div>
              <label>Largura:</label>
              <input type="number" id="largura" />
            </div>
            <div>
              <label>Comprimento:</label>
              <input type="number" id="comprimento" />
            </div>
            <div>
              <label>Altura:</label>
              <input type="number" id="altura" />
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

export default CalculadoraSobMedidaColchao;
