import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { JwtHandler } from "./jwt_handler/jwt_handler";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Apliques } from "./pages/Apliques/Apliques";
import { ApliquesClientes } from "./pages/Apliques/ApliquesClientes";
import { ApliquesComprar } from "./pages/Apliques/ApliquesComprar";
import { ApliquesCabana } from "./pages/Apliques/ApliquesCabana";
import { View } from "./pages/Apliques/View";
import { Calculadora } from "./pages/Calculadora/Calculadora";
import { Create } from "./pages/Apliques/Create";
import { InfoProdutos } from "./pages/InfoProdutos/InfoProdutos";
import { ListaFiltradaCorte } from "./pages/Apliques/ListaFiltradaCorte";
import { Solteiro } from "./pages/Lencois/Solteiro";
import { Viuva } from "./pages/Lencois/Viuva";
import { Casal } from "./pages/Lencois/Casal";
import { Junior } from "./pages/Lencois/Junior";
import { EditLencol } from "./pages/Lencois/EditLencol";
import { CreateLencolApli } from "./pages/Lencois/CreateLencolApli";
import { CalcMedidas } from "./pages/Calculadora/CalcMedidas";
import { Tecidos } from "./pages/Tecidos/Tecidos";
import { AddTecido } from "./pages/Tecidos/AddTecido";
import { EditTecido } from "./pages/Tecidos/EditTecido";
import { Queen } from "./pages/Lencois/Queen";
import { SoSolteiro } from "./pages/Lencois/ApenasSol";
import { TecidosJunior } from "./pages/Tecidos/CatalogoTecidos/Junior";
import { TecidosSolteiro } from "./pages/Tecidos/CatalogoTecidos/Solteiro";
import { TecidosCasal } from "./pages/Tecidos/CatalogoTecidos/Casal";
import { TecidosViuva } from "./pages/Tecidos/CatalogoTecidos/Viuva";
import { CatalogoTecidos } from "./pages/Tecidos/CatalogoTecidos";
import { Teste } from "./pages/Teste";
import { Teste2 } from "./pages/Teste2";

function App() {
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = JwtHandler.isJwtValid();
    // console.log("isAuh:", isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/infoProdutos" element={<InfoProdutos />} />
        <Route path="/apliqueslist" element={<ApliquesClientes />} />
        <Route path="/apliques-cabana" element={<ApliquesCabana />} />
        <Route path="/solteiro" element={<Solteiro />} />
        <Route path="/viuva" element={<Viuva />} />
        <Route path="/casal" element={<Casal />} />
        <Route path="/junior" element={<Junior />} />
        <Route path="/queen" element={<Queen />} />
        <Route path="/sosolteiro" element={<SoSolteiro />} />
        <Route path="/tecidosjunior" element={<TecidosJunior />} />
        <Route path="/tecidossolteiro" element={<TecidosSolteiro />} />
        <Route path="/tecidosviuva" element={<TecidosViuva />} />
        <Route path="/tecidoscasal" element={<TecidosCasal />} />
        <Route path="/catalogotecidos" element={<CatalogoTecidos />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/teste2" element={<Teste2 />} />

        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/">
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/apliques"
          element={
            <PrivateRoute redirectTo="/">
              <Apliques />
            </PrivateRoute>
          }
        />
        <Route
          path="/filtrados"
          element={
            <PrivateRoute redirectTo="/">
              <ListaFiltradaCorte />
            </PrivateRoute>
          }
        />
        <Route
          path="/comprar-apliques"
          element={
            <PrivateRoute redirectTo="/">
              <ApliquesComprar />
            </PrivateRoute>
          }
        />
        <Route
          path="/calculadora"
          element={
            <PrivateRoute redirectTo="/">
              <Calculadora />
            </PrivateRoute>
          }
        />
        <Route
          path="/aplique/:id"
          element={
            <PrivateRoute redirectTo="/">
              <View />
            </PrivateRoute>
          }
        />
        <Route
          path="/create"
          element={
            <PrivateRoute redirectTo="/">
              <Create />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-lencol/:id/"
          element={
            <PrivateRoute redirectTo="/">
              <EditLencol />
            </PrivateRoute>
          }
        />
        <Route
          path="/createlencol"
          element={
            <PrivateRoute redirectTo="/">
              <CreateLencolApli />
            </PrivateRoute>
          }
        />
        <Route
          path="/calcmedidas"
          element={
            <PrivateRoute redirectTo="/">
              <CalcMedidas />
            </PrivateRoute>
          }
        />
        <Route
          path="/tecidos"
          element={
            <PrivateRoute redirectTo="/">
              <Tecidos />
            </PrivateRoute>
          }
        />
        <Route
          path="/addtecidos"
          element={
            <PrivateRoute redirectTo="/">
              <AddTecido />
            </PrivateRoute>
          }
        />
        <Route
          path="/tecidos/:id/"
          element={
            <PrivateRoute redirectTo="/">
              <EditTecido />
            </PrivateRoute>
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
