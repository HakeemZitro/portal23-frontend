import iconMusic from "../assets/icons/icon_music.svg";

class MuxApi {
  constructor(baseURL, tokenID, secretKey) {
    this.baseURL = baseURL;
    this.auth = btoa(`${tokenID}:${secretKey}`);

    this._routes = {
      getAssets: { method: "GET", path: "/video/v1/assets" },
      createAsset: { method: "POST", path: "/video/v1/assets" }
    }
  }

  _formatAssetDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  _request(routeName, { body = null } = {}) {
    const route = this._routes[routeName];

    if (!route) { console.log(`API route not found: ${routeName}`); }

    const endpoint = route.path;

    const options = {
      method: route.method,
      headers: {
        "Authorization": `Basic ${this.auth}`,
        "Content-Type": "application/json"
      }
    };

    if (body) { options.body = JSON.stringify(body); }

    return fetch(this.baseURL + endpoint, options)
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

const MUX_TokenID = import.meta.env.VITE_MUX_TOKEN_ID;
const MUX_SecretKEY = import.meta.env.VITE_MUX_SECRET_KEY;

export const muxApi = new MuxApi("https://api.mux.com", MUX_TokenID, MUX_SecretKEY);
