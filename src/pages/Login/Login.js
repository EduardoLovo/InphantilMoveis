import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";
import "./Login.css";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import { useState } from "react";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  console.log(isLogged);

  useEffect(() => {
    if(isLogged=== true){
      navigate("/home")
    }
}, [isLogged]);

  if(isLogged === true){
    navigate('/home')
  } else{
    console.log('fazer login');
  }


  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do submit, que no caso do form é o refresh
    event.preventDefault();

    // Obtém os dados dos inputs
    const usuario = event.target.usuario.value;
    const password = event.target.password.value;

    // Constrói um payload com esses dados
    const payload = {
      usuario,
      password,
    };

    // Faz uma requisição no backend
    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();
    console.log(body);
    localStorage.setItem("user", body.userType);
    console.log(body.userType);

    
    if (response.status === 200) {
      // Login successfully
      const accessToken = body.accessToken;

      JwtHandler.setJwt(accessToken);

      navigate("/home");
      window.location.reload();
    } else {
      alert("Usuario ou senha incorreto");
    }
  };

  return (
    <div className="contentLogin">
      <div className="titleLogin">
        <h1>Inphantil</h1>
      </div>
      <div className="cartLogin">
        <div className="contentCartLogin">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="form">
            <label>Usuario</label>
            <div className="usericon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"
                alt="user"
              />
              <input type="text" id="usuario" name="usuario" />
            </div>
            <label>Senha</label>
            <div className="usericon">
              <img
                src="https://cdn0.iconfinder.com/data/icons/i-Love-Icons/512/lock.png"
                alt="lock"
              />

              <input type="password" id="password" name="password" />
            </div>

            <input type="submit" className="btnEnviar" />
          </form>
        </div>
      </div>
    </div>
  );
};
