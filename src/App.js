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
