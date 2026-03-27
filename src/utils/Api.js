import iconMusic from "../assets/icons/icon_music.svg";

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;

    this._routes = {
      // ----- Rutas para usuarios ----- //
      getUser: { method: "GET", path: "/users/me" },
      updateName: { method: "PATCH", path: "/users/me" },
      updateAvatar: { method: "PATCH", path: "/users/me/avatar" },
      
      getAllAssets: { method: "GET", path: "/assets" },
      getAssetById: { method: "GET", path: "/assets/:id" },
      

      // ----- Rutas para administrador ----- //
      getAllUsers: { method: "GET", path: "/users" },
      getUserById: { method: "GET", path: "/users/:id" },

      createUploadAssetURL: { method: "POST", path: "/assets/upload-url" },
    }
  }

  _formatAssetDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  _request(routeName, { body = null } = {}, token = null) {
    const route = this._routes[routeName];

    if (!route) { console.log(`Ruta de API no encontrada: ${routeName}`); }


    if (!token) {
      console.log("Sin autorización, inicia sesión");
      return Promise.reject({ status: 401, message: "Sin autorización, inicia sesión" });
    }

    const endpoint = route.path;

    const options = {
      method: route.method,
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    };


    if (body) { options.body = JSON.stringify(body); }

    return fetch(this._baseUrl + endpoint, options)
      .then(res => res.json())
      .then(assets => assets.data.map(asset => ({
        id: asset.id,
        title: asset.meta.title || "Sin título",
        playback_id: asset.playback_ids[0]?.id || null,
        status: asset.status,
        type: asset.resolution_tier === "audio-only" ? "Audio" : "Video",
        duration: this._formatAssetDuration(Math.floor(asset.duration)),
        image: asset.resolution_tier === "audio-only" ? iconMusic : `https://image.mux.com/${asset.playback_ids[0]?.id}/thumbnail.jpg`,
        instructor: "Portal 23"
      })))
      .catch((err) => Promise.reject(`Error: ${err.status} / ${err.message}`));
  }

  getAssets() {
    return this._request("getAssets");
  }

  createAsset(data) {
    return this._request("createAsset", { body: data });
  }
}


export const api = new Api("http://localhost:3000");