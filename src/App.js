import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { JwtHandler } from "./jwt_handler/jwt_handler";
import { Home } from "./pages/Home/Home";
import { Apliques } from "./pages/Apliques/Apliques";
import { Calculadora } from "./pages/Calculadora/Calculadora";
import { Header } from "./components/Header/Header";
import { View } from "./pages/View/View";
import { Create } from "./pages/Create/Create";
import { InfoProdutos } from "./pages/InfoProdutos/InfoProdutos";
import { ApliquesClientes } from "./pages/ApliquesClientes/ApliquesClientes";
import { ListaFiltradaCorte } from "./pages/ListaFiltradaCorte/ListaFiltradaCorte";
import { Task } from "./pages/Task/Task";
import { ApliquesComprar } from "./pages/ApliquesComprar/ApliquesComprar";
import { ApliquesCabana } from "./pages/ApliquesCabana/ApliquesCabana";
import { Solteiro } from "./pages/Lencois/Solteiro";
import { Viuva } from "./pages/Lencois/Viuva";
import { Casal } from "./pages/Lencois/Casal";
import { Junior } from "./pages/Lencois/Junior";

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
        <Route path="/comprar-apliques" element={<ApliquesComprar />} />
        <Route path="/apliques-cabana" element={<ApliquesCabana />} />
        <Route path="/solteiro" element={<Solteiro />} />
        <Route path="/viuva" element={<Viuva />} />
        <Route path="/casal" element={<Casal />} />
        <Route path="/junior" element={<Junior />} />

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
        {/* <Route
          path="/comprar-apliques"
          element={
            <PrivateRoute redirectTo="/">
              <ApliquesComprar />
            </PrivateRoute>
          }
        /> */}
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
          path="/tarefas"
          element={
            <PrivateRoute redirectTo="/">
              <Task />
            </PrivateRoute>
          }
        />
       
      </Routes>
    </div>
  );
}

export default App;
