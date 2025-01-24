import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
//Rotas
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { Info } from './pages/Info';
import { JwtHandler } from './jwt_handler/jwt_handler';
import { ToastContainer } from 'react-toastify';

// Calculadoras
import { Calculadora6040 } from './pages/Calculadoras/Calculadora6040';
import { CalculadoraParaLencois } from './pages/Calculadoras/CalculadoraParaLencois';

// Rotas de Apliques
import { ApliquesParaCliente } from './pages/Apliques/ApliquesParaCliente/ApliquesParaCliente';
import { ApliquesParaCortar } from './pages/Apliques/ApliquesParaCortar/ApliquesParaCortar';
import { ApliquesParaComprar } from './pages/Apliques/ApliquesParaComprar/ApliquesParaComprar';
import { ApliquesCreate } from './pages/Apliques/ApliquesCreate/ApliquesCreate';
import { ApliquesParaCabana } from './pages/Apliques/ApliquesParaCabana/ApliquesParaCabana';
import { ApliquesEdit } from './pages/Apliques/ApliquesEdit/ApliquesEdit';
import { ApliquesEstoque } from './pages/Apliques/ApliquesEstoque/ApliquesEstoque';

// Sintetico
import { SinteticoEstoque } from './pages/Sinteticos/SinteticoEstoque/SinteticoEstoque';
import { SinteticoCatalogo } from './pages/Sinteticos/SinteticoCatalogo/SinteticoCatalogo';
import { SinteticoComposicoes } from './pages/Sinteticos/SinteticoComposicoes/SinteticoComposicoes';
import { SinteticoCreate } from './pages/Sinteticos/SinteticoCreate/SinteticoCreate';
import { SinteticoEdit } from './pages/Sinteticos/SinteticoEdit/SinteticoEdit';

// Rotas Lençois pronta-entrega
import { CatalogoProntaEntrega } from './pages/CatalogoLencolPE/CatalogoProntaEntrega';
import { LencolCreate } from './pages/CatalogoLencolPE/LencolCreate';
import { LencolEdit } from './pages/CatalogoLencolPE/LencolEdit';

// Rotas de lençois
import { TecidosJunior } from './pages/CatalogoTecidos/Junior';
import { TecidosCreate } from './pages/TecidosParaLencol/TecidosCreate/TecidosCreate';
import { TecidosEdit } from './pages/TecidosParaLencol/TecidosEdit/TecidosEdit';
import { TecidosParaLencol } from './pages/TecidosParaLencol/TecidosEstoque/TecidosParaLencol';

// Rotas de tapetes
import { MontagemTapetes } from './pages/Tapetes/MontagemTapetes';
import { SeisCores } from './pages/Tapetes/SeisCores';
import { QuatroCores } from './pages/Tapetes/QuatroCores';
import { CincoCores } from './pages/Tapetes/CincoCores';
import { SeteCores } from './pages/Tapetes/SeteCores';
import { DuasCores } from './pages/Tapetes/DuasCores';
import { TresCores } from './pages/Tapetes/TresCores';
import { OitoCores } from './pages/Tapetes/OitoCores';
import { NoveCores } from './pages/Tapetes/NoveCores';
import { DezCores } from './pages/Tapetes/DezCores';
import { OnzeCores } from './pages/Tapetes/OnzeCores';
import { DozeCores } from './pages/Tapetes/DozeCores';
import { CalculadoraNova } from './pages/Calculadoras/CalculadoraNova';
import { Rolos } from './pages/Rolos/Rolos';
import Cama3D from './pages/Camas3D/Camas3D';

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
                    <Route
                        path="/calculadora-nova"
                        element={<CalculadoraNova />}
                    />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/info" element={<Info />} />

                    {/* Rotas Calculadoras */}
                    <Route
                        path="/calculadora-nova"
                        element={
                            <PrivateRoute redirectTo="/">
                                <CalculadoraNova />
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

                    {/* Rotas Apliques */}
                    <Route
                        path="/catalogo-cliente"
                        element={<ApliquesParaCliente />}
                    />
                    <Route
                        path="/apliques-estoque"
                        element={<ApliquesEstoque />}
                    />
                    <Route
                        path="/catalogo-lençol-aplique"
                        element={<TecidosJunior />}
                    />
                    <Route
                        path="/catalogo-apliques-para-cabana"
                        element={<ApliquesParaCabana />}
                    />
                    <Route
                        path="/apliques-para-comprar"
                        element={<ApliquesParaComprar />}
                    />
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
                        path="/editar-aplique/:id/"
                        element={
                            <PrivateRoute redirectTo="/">
                                <ApliquesEdit />
                            </PrivateRoute>
                        }
                    />

                    {/* Rotas de rolos */}
                    <Route
                        path="/estoque-rolos/"
                        element={
                            <PrivateRoute redirectTo="/">
                                <Rolos />
                            </PrivateRoute>
                        }
                    />
                    {/* Rotas sinteticos */}
                    <Route
                        path="/sintetico-catalogo"
                        element={<SinteticoCatalogo />}
                    />
                    <Route
                        path="/composição-sintetico"
                        element={<SinteticoComposicoes />}
                    />
                    <Route
                        path="/sintetico-estoque"
                        element={
                            <PrivateRoute redirectTo="/">
                                <SinteticoEstoque />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/novo-sintetico"
                        element={
                            <PrivateRoute redirectTo="/">
                                <SinteticoCreate />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/editar-sintetico/:id"
                        element={
                            <PrivateRoute redirectTo="/">
                                <SinteticoEdit />
                            </PrivateRoute>
                        }
                    />

                    {/* Rotas Lençois */}

                    <Route
                        path="/catalogo-lencol-pronta-entrega"
                        element={<CatalogoProntaEntrega />}
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

                    {/* Rotas de tapetes */}
                    <Route path="/tapete-duas-cores" element={<DuasCores />} />
                    <Route path="/tapete-tres-cores" element={<TresCores />} />
                    <Route
                        path="/tapete-quatro-cores"
                        element={<QuatroCores />}
                    />
                    <Route
                        path="/tapete-cinco-cores"
                        element={<CincoCores />}
                    />
                    <Route path="/tapete-seis-cores" element={<SeisCores />} />
                    <Route path="/tapete-sete-cores" element={<SeteCores />} />
                    <Route path="/tapete-oito-cores" element={<OitoCores />} />
                    <Route path="/tapete-nove-cores" element={<NoveCores />} />
                    <Route path="/tapete-dez-cores" element={<DezCores />} />
                    <Route path="/tapete-onze-cores" element={<OnzeCores />} />
                    <Route path="/tapete-doze-cores" element={<DozeCores />} />
                    <Route
                        path="/montagem-tapetes"
                        element={<MontagemTapetes />}
                    />
                    <Route path="/camas-3d" element={<Cama3D />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
