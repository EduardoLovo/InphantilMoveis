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
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isLogged]);

  if(isLogged === true){
    navigate('/home')
  } else{
    console.log(setIsLogged);
  }


  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do submit, que no caso do form é o refresh
    event.preventDefault();

    console.log('foiiii');
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
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Usuario</label>
          <input type="text" className="form-control" id="usuario" name="usuario" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div> 
        <button type="submit" className="btn btn-primary ">Entrar</button>      
      </form>

    </div>
  );
};
