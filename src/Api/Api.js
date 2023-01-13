import { JwtHandler } from "../jwt_handler/jwt_handler";
export const Api = {
  baseUrl: "http://localhost:3000",

  // Rota Login
  loginUrl: () => Api.baseUrl + "/login/",

  // Rotas Usuarios
  readAllUsuariosUrl: () => Api.baseUrl + "/users",
  createUsuariosUrl: () => Api.baseUrl + "/auth/register",
  readAllApliquesUrl: () => Api.baseUrl + "/aplique",
  addApliquesUrl: () => Api.baseUrl + "/aplique/create",
  readByIdUrl: (id) => Api.baseUrl + "/aplique/getById/" + id,
  updateUrl: (id) => Api.baseUrl + "/aplique/updateOne/" + id,
  deleteAplicUrl: (id) => Api.baseUrl + "/aplique/deleteOne/" + id,

  // Auth Header

  authHeader: () => ({
    Authorization: "Bearer " + JwtHandler.getJwt(),
  }),

  // GET
  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),

  // POST
  buildApiPostRequest: (url, body, auth) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // PATCH
  buildApiPatchRequest: (url, body, auth) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
        ...(auth ? Api.authHeader() : {}),
      }),
      body: JSON.stringify(body),
    }),

  // DELETE
  buildApiDeleteRequest: (url, auth) =>
    fetch(url, {
      method: "DELETE",
      headers: auth ? new Headers(Api.authHeader()) : undefined,
    }),
};
