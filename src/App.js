import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
//Rotas
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login";
import { Info } from "./pages/Info";
import { ApliquesParaCliente } from "./pages/Apliques/ApliquesParaCliente/ApliquesParaCliente";
import { ApliquesParaCortar } from "./pages/Apliques/ApliquesParaCortar/ApliquesParaCortar";
import { ApliquesParaComprar } from "./pages/Apliques/ApliquesParaComprar/ApliquesParaComprar";
import { ApliquesCreate } from "./pages/Apliques/ApliquesCreate/ApliquesCreate";
import { ApliquesParaCabana } from "./pages/Apliques/ApliquesParaCabana/ApliquesParaCabana";
import { ApliquesEdit } from "./pages/Apliques/ApliquesEdit/ApliquesEdit";
import { ApliquesEstoque } from "./pages/Apliques/ApliquesEstoque/ApliquesEstoque";
import { Calculadora6040 } from "./pages/Calculadoras/Calculadora6040";
import { CalculadoraParaLencois } from "./pages/Calculadoras/CalculadoraParaLencois";
import { CatalogoDeTecidos } from "./pages/CatalogoTecidos/CatalogoDeTecidos";
import { CatalogoLencolPE } from "./pages/CatalogoLencolPE/CatalogoLencolPE";
import { JwtHandler } from "./jwt_handler/jwt_handler";
import { LencolCreate } from "./pages/CatalogoLencolPE/LencolCreate";
import { LencolEdit } from "./pages/CatalogoLencolPE/LencolEdit";
import { MaterialEstoque } from "./pages/Materiais/MaterialEstoque";
import { MaterialEdit } from "./pages/Materiais/MaterialEdit";
import { MaterialCatalogo } from "./pages/Materiais/MaterialCatalogo";
import { MaterialCreate } from "./pages/Materiais/MaterialCreate";
import { TecidosJunior } from "./pages/CatalogoTecidos/Junior";
import { TecidosSolteiro } from "./pages/CatalogoTecidos/Solteiro";
import { TecidosViuva } from "./pages/CatalogoTecidos/Viuva";
import { TecidosCasal } from "./pages/CatalogoTecidos/Casal";
import { TecidosBQK } from "./pages/CatalogoTecidos/BQK";
import { ToastContainer } from "react-toastify";
import { TecidosEdit } from "./pages/TecidosParaLencol/TecidosEdit/TecidosEdit";
import { TecidosParaLencol } from "./pages/TecidosParaLencol/TecidosEstoque/TecidosParaLencol";
import { TecidosCreate } from "./pages/TecidosParaLencol/TecidosCreate/TecidosCreate";
import { SeisCores } from "./pages/Tapetes/SeisCores";
import { QuatroCores } from "./pages/Tapetes/QuatroCores";
import { CincoCores } from "./pages/Tapetes/CincoCores";
import { SeteCores } from "./pages/Tapetes/SeteCores";
import { MontagemTapetes } from "./pages/Tapetes/MontagemTapetes";

function App() {
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = JwtHandler.isJwtValid();
    // console.log("isAuh:", isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  };

  return (
    <div className="App">
      <Sidebar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bodyApp">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/catalogo-cliente" element={<ApliquesParaCliente />} />
          <Route path="/apliques-estoque" element={<ApliquesEstoque />} />
          <Route path="/catalogo" element={<CatalogoDeTecidos />} />
          <Route path="/catalogo-junior" element={<TecidosJunior />} />
          <Route
            path="/catalogo-solteiro-solteirao"
            element={<TecidosSolteiro />}
          />
          <Route path="/catalogo-viuva" element={<TecidosViuva />} />
          <Route path="/catalogo-casal" element={<TecidosCasal />} />
          <Route path="/catalogo-bqk" element={<TecidosBQK />} />
          <Route
            path="/catalogo-lencol-pronta-entrega"
            element={<CatalogoLencolPE />}
          />
          <Route
            path="/catalogo-apliques-para-cabana"
            element={<ApliquesParaCabana />}
          />
          <Route path="/info" element={<Info />} />
          <Route path="/material-catalogo" element={<MaterialCatalogo />} />
          <Route path="/tapete-quatro-cores" element={<QuatroCores />} />
          <Route path="/tapete-cinco-cores" element={<CincoCores />} />
          <Route path="/tapete-seis-cores" element={<SeisCores />} />
          <Route path="/tapete-sete-cores" element={<SeteCores />} />
          <Route path="/montagem-tapetes" element={<MontagemTapetes />} />
          <Route
            path="/apliques-para-comprar"
            element={<ApliquesParaComprar />}
          />
          // Private Routes
          <Route
            path="/apliques-para-cortar"
            element={
              <PrivateRoute redirectTo="/">
                <ApliquesParaCortar />
              </PrivateRoute>
            }
          />
          <Route
            path="/apliques-create"
            element={
              <PrivateRoute redirectTo="/">
                <ApliquesCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculadora-para-lencois"
            element={
              <PrivateRoute redirectTo="/">
                <CalculadoraParaLencois />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculadora-60-40"
            element={
              <PrivateRoute redirectTo="/">
                <Calculadora6040 />
              </PrivateRoute>
            }
          />
          <Route
            path="/editar-aplique/:id/"
            element={
              <PrivateRoute redirectTo="/">
                <ApliquesEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/lencol-create/"
            element={
              <PrivateRoute redirectTo="/">
                <LencolCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/lencol-edit/:id/"
            element={
              <PrivateRoute redirectTo="/">
                <LencolEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/tecidos/"
            element={
              <PrivateRoute redirectTo="/">
                <TecidosParaLencol />
              </PrivateRoute>
            }
          />
          <Route
            path="/tecidos-create/"
            element={
              <PrivateRoute redirectTo="/">
                <TecidosCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/tecido-edit/:id/"
            element={
              <PrivateRoute redirectTo="/">
                <TecidosEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/material-estoque/"
            element={
              <PrivateRoute redirectTo="/">
                <MaterialEstoque />
              </PrivateRoute>
            }
          />
          {/* <Route
          path="/material-catalogo/"
          element={
            <PrivateRoute redirectTo="/">
              <MaterialCatalogo />
            </PrivateRoute>
          }
          /> */}
          <Route
            path="/material-create/"
            element={
              <PrivateRoute redirectTo="/">
                <MaterialCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/material-edit/:id/"
            element={
              <PrivateRoute redirectTo="/">
                <MaterialEdit />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
