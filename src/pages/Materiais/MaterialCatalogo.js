import React, { useEffect } from "react";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Amarelo } from "./Amarelo";
import { Azul } from "./Azul";
import { Bege } from "./Bege";
import { Branco } from "./Branco";
import { Cinza } from "./Cinza";
import { Laranja } from "./Laranja";
import { Lilas } from "./Lilas";
import { Mostarda } from "./Mostarda";
import { Rosa } from "./Rosa";
import { Tiffany } from "./Tiffany";
import { Verde } from "./Verde";
import { Vermelho } from "./Vermelho";
import { Externo } from "./Externo";
import { MontarCores } from "./MontarCores";
import { Loading } from "../../components/Loading/Loading";

export const MaterialCatalogo = () => {
  const navigate = useNavigate();
  const [isLogged] = useState(JwtHandler.isJwtValid);
  const type = localStorage.getItem("user");

  const [materiais, setMateriais] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const render = (e) => {
    const cor = e.target.id;
    if (cor === "amarelo") {
      setMateriais(<Amarelo />);
    } else if (cor === "azul") {
      setMateriais(<Azul />);
    } else if (cor === "bege") {
      setMateriais(<Bege />);
    } else if (cor === "branco") {
      setMateriais(<Branco />);
    } else if (cor === "cinza") {
      setMateriais(<Cinza />);
    } else if (cor === "laranja") {
      setMateriais(<Laranja />);
    } else if (cor === "lilas") {
      setMateriais(<Lilas />);
    } else if (cor === "mostarda") {
      setMateriais(<Mostarda />);
    } else if (cor === "rosa") {
      setMateriais(<Rosa />);
    } else if (cor === "tiffany") {
      setMateriais(<Tiffany />);
    } else if (cor === "verde") {
      setMateriais(<Verde />);
    } else if (cor === "vermelho") {
      setMateriais(<Vermelho />);
    } else if (cor === "externo") {
      setMateriais(<Externo />);
    } else if (cor === "montar") {
      setMateriais(<MontarCores />);
    }
  };

  return (
    <div
      className="btn-toolbar  menuLencol"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div
            className="btn-group me-2 "
            role="group"
            aria-label="First group"
          >
            <button
              type="button"
              className="btn btn-secondary"
              id="amarelo"
              onClick={render}
            >
              Amarelo
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="azul"
              onClick={render}
            >
              Azul
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="bege"
              onClick={render}
            >
              Bege
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="branco"
              onClick={render}
            >
              Branco
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="cinza"
              onClick={render}
            >
              Cinza
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="laranja"
              onClick={render}
            >
              Laranja
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="lilas"
              onClick={render}
            >
              Lilas
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="mostarda"
              onClick={render}
            >
              Mostarda
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="rosa"
              onClick={render}
            >
              Rosa
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="tiffany"
              onClick={render}
            >
              Tiffany
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="verde"
              onClick={render}
            >
              Verde
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              id="vermelho"
              onClick={render}
            >
              Vermelho
            </button>
            <button
              type="button"
              className="btn btn-warning"
              id="externo"
              onClick={render}
            >
              Externo
            </button>
            <button
              type="button"
              className="btn btn-primary"
              id="montar"
              onClick={render}
            >
              Montar
            </button>

            {isLogged === true ? (
              <div>
                {type === "adm" ? (
                  <button
                    type="button"
                    className="btn btn-warning btn-sm"
                    onClick={() => {
                      navigate("/material-create");
                    }}
                  >
                    Adicionar novo material
                  </button>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {materiais ? (
              materiais
            ) : (
              <div className="text-center">
                <h2>***MUITO IMPORTANTE***</h2>
                <p className="fs-3">
                  O tom das cores pode alterar de aparelho para aparelho.
                </p>
                <p className="fs-3">
                  Utilize o brilho da tela no máximo para visualizar o tom mais
                  próximo possível do real.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
