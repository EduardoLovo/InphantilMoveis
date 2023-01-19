import React, { useState } from "react";
import "./Calculadora.css";
import { useNavigate } from "react-router-dom";

export const Calculadora = () => {
  const navigate = useNavigate();
  const [resultado, setResultado] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  const [valorTotal, setValorTotal] = useState("");

  const calcular = (event) => {
    event.preventDefault();
    const ve = event.target.ve.value;
    const vt = event.target.vt.value;

    const ve6 = ve * (6 / 100);
    const result = vt - ve - ve6;

    setResultado(result.toFixed(2).replace(".", ","));
    setValorEntrada(ve.replace(".", ","));
    setValorTotal(vt.replace(".", ","));
  };

  const backPage = () => {
    navigate("/Home");
  };

  var atual = 600000.00;

//com R$
var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

//sem R$
var f2 = atual.toLocaleString('pt-br', {minimumFractionDigits: 2});

console.log(f);
console.log(f2);

  


  return (
    <div className="contentCal">
      <div>
        <h1>Calculadora Á Vista / Prazo</h1>
        
      </div>

      <div className="divForm">
        <form onSubmit={calcular} className="formCal">
          <div className="inputs">
            <label>Valor da entrada</label>
            <input type="number" step="0.01" id="ve" min="0.01"  />
          </div>
          <div className="inputs">
            <label>Valor total (sem o valor do frete)</label>

            <input type="number" step="0.01" id="vt" min="0.01" />
          </div>
          <div className="btnCalcular">
            <button type="submit" value="Calcular">
              Calcular
            </button>
          </div>
        </form>
        <div className="resultsCal">
          <div>
            <h3>Resultado:</h3>
          </div>
          {!resultado ? (
            ""
          ) : (
            <div>
              <p>
                O valor da entrada é: R${" "}
                <span>
                  {valorEntrada.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                </span>
              </p>
              <p>
                O valor total é: R${" "}
                <span>
                  {valorTotal.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                </span>
              </p>
              <p>
                O valor que ficará para o cliente pagar a prazo é: R${" "}
                <span className="numberResult">
                  {resultado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="divBtnBack">
        <button onClick={backPage} className="btnBack">
          Voltar
        </button>
      </div>
    </div>
  );
};
