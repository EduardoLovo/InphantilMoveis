import React from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../Api/Api";
import { JwtHandler } from "../../jwt_handler/jwt_handler";
import { useState } from "react";
import { useEffect } from "react";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(JwtHandler.isJwtValid);

  useEffect(() => {
    if(isLogged=== true){
      navigate("/home")
    }
}, [isLogged]);

  if(isLogged === true){
    navigate('/home')
  } else{
    console.log(setIsLogged);
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
        <h1 className="m-5">Inphantil</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Usuario</label>
          <input type="text" class="form-control" id="usuario" name="usuario" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" name="password" />
        </div> 
        <button type="submit" class="btn btn-primary ">Entrar</button>      
      </form>

    </div>
  );
};
