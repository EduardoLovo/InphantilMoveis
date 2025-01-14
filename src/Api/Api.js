import { JwtHandler } from '../jwt_handler/jwt_handler';
export const Api = {
    baseUrl: 'https://inphantil-banco-eduardolovo.vercel.app',
    // baseUrl: 'http://localhost:3000',

    // Rota Login
    loginUrl: () => Api.baseUrl + '/login/',

    // Rotas Usuarios
    readAllUsuariosUrl: () => Api.baseUrl + '/users',
    createUsuariosUrl: () => Api.baseUrl + '/auth/register',

    // Rotas Apliques
    readAllApliquesUrl: () => Api.baseUrl + '/aplique',
    addApliquesUrl: () => Api.baseUrl + '/aplique/create',
    readByIdUrl: (id) => Api.baseUrl + '/aplique/getById/' + id,
    updateUrl: (id) => Api.baseUrl + '/aplique/updateOne/' + id,
    deleteAplicUrl: (id) => Api.baseUrl + '/aplique/deleteOne/' + id,

    // Rotas lençois
    readAllLencolUrl: () => Api.baseUrl + '/lencolApliques',
    addLencolUrl: () => Api.baseUrl + '/lencolApliques/create',
    readByIdLencolUrl: (id) => Api.baseUrl + '/lencolApliques/getById/' + id,
    updateLencolUrl: (id) => Api.baseUrl + '/lencolApliques/updateOne/' + id,
    deleteLencolUrl: (id) => Api.baseUrl + '/lencolApliques/deleteOne/' + id,

    // Rotas Tecidos
    readAllTecidolUrl: () => Api.baseUrl + '/lencolTecidos',
    addTecidoUrl: () => Api.baseUrl + '/lencolTecidos/create',
    readByIdTecidoUrl: (id) => Api.baseUrl + '/lencolTecidos/getById/' + id,
    updateTecidoUrl: (id) => Api.baseUrl + '/lencolTecidos/updateOne/' + id,
    deleteTecidoUrl: (id) => Api.baseUrl + '/lencolTecidos/deleteOne/' + id,

    // Rotas Materiais
    readAllMaterialUrl: () => Api.baseUrl + '/material',
    addMaterialUrl: () => Api.baseUrl + '/material/create',
    readByIdMaterialUrl: (id) => Api.baseUrl + '/material/getById/' + id,
    updateMaterialUrl: (id) => Api.baseUrl + '/material/updateOne/' + id,
    deleteMaterialUrl: (id) => Api.baseUrl + '/material/deleteOne/' + id,

    // Rotas Rolos
    readAllRolosUrl: () => Api.baseUrl + '/rolos',
    addRolosUrl: () => Api.baseUrl + '/rolos/create',
    readByIdRolosUrl: (id) => Api.baseUrl + '/rolos/getById/' + id,
    updateRolosUrl: (id) => Api.baseUrl + '/rolos/updateOne/' + id,
    deleteRolosUrl: (id) => Api.baseUrl + '/rolos/deleteOne/' + id,

    // Auth Header
    authHeader: () => ({
        Authorization: 'Bearer ' + JwtHandler.getJwt(),
    }),

    // GET
    buildApiGetRequest: (url, auth) =>
        fetch(url, {
            method: 'GET',
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),

    // POST
    buildApiPostRequest: (url, body, auth) =>
        fetch(url, {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // PATCH
    buildApiPatchRequest: (url, body, auth) =>
        fetch(url, {
            method: 'PATCH',
            headers: new Headers({
                'Content-type': 'application/json',
                ...(auth ? Api.authHeader() : {}),
            }),
            body: JSON.stringify(body),
        }),

    // DELETE
    buildApiDeleteRequest: (url, auth) =>
        fetch(url, {
            method: 'DELETE',
            headers: auth ? new Headers(Api.authHeader()) : undefined,
        }),
};
