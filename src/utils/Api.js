import iconMusic from "../assets/icons/icon_music.svg";

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;

    // ----- Rutas predefinidas a la API ----- //
    this._routes = {
      getUserInfo:  { method: "GET", path: "/users/me" },
      updateUserInfo:  { method: "PATCH", path: "/users/me" },
      updateUserAvatar: { method: "PATCH", path: "/users/me/avatar" },
      getAssets: { method: "GET", path: "/assets" },
      getAssetById: { method: "GET", path: (id) => `/assets/${id}` },
      getAllUsers: { method: "GET", path: "/users" },
      getUserById: { method: "GET", path: (id) => `/users/${id}` },
      createUploadAssetURL: { method: "POST", path: "/assets/upload-url" },
    }
  }


  // ----- Método para el manejo de peticiones a la API ----- //
  _request(routeName, { id = null, body = null } = {}) {
    const route = this._routes[routeName];
    const endpoint = typeof route.path === "function" ? route.path(id) : route.path;

    if (!route) {
      console.log(`API route not found: ${routeName}`);
    }

    const options = {
      method: route.method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(this._baseUrl + endpoint, options)
      .then((res => this._checkResponse(res)));
  }

  // ----- Método para verificar la respuesta de la API ----- //
  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject({ status: res.status, message: res.statusText });
  }

  // ----- Método para formatear la duración de los assets ----- //
  _formatDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }


  getUserInfo() {
    return this._request("getUserInfo");
  }

  updateUserInfo({ name }) {
    return this._request("updateUserInfo", { body: { name } });
  }

  updateUserAvatar({ avatar }) {
    return this._request("updateUserAvatar", { body: { avatar } });
  }

  getAssets() {
    return this._request("getAssets")
      .then((data) => (data || []).map((asset) => {
        return {
          id: asset.id,
          title: asset.title || "Sin título - Procesando...",
          playback_id: asset.playback_ids?.[0]?.id || null,
          status: asset.status,
          type: asset.type,
          duration: this._formatDuration(Math.floor(asset.duration) || 0),
          image: asset.type === "Audio"
            ? iconMusic
            : `https://image.mux.com/${asset.playback_ids?.[0]?.id}/thumbnail.jpg`,
          instructor: "Portal 23",
        };
      }));
  }

  getAssetById(id) {
    return this._request("getAssetById", { id });
  }

  getAllUsers() {
    return this._request("getAllUsers");
  }

  getUserById(id) {
    return this._request("getUserById", { id });
  }

  createUploadAssetURL({ title }) {
    return this._request("createUploadAssetURL", { body: { title } });
  }
}


export const api = new Api("https://api.alquimia-digital.hzitro.dev");