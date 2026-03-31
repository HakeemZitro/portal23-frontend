class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;

    // ----- Rutas predefinidas a la API ----- //
    this._routes = {
      register:  { method: "POST", path: "/register" },
      login: { method: "POST", path: "/login" }
    }
  }


  // ----- Método para el manejo de peticiones a la API ----- //
  _request(routeName, { body = null } = {}) {
    const route = this._routes[routeName];
    const endpoint = route.path;

    if(!route) {
      console.log(`La ruta de la API no existe: ${routeName}`);
    }

    const options = {
      method: route.method,
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    return fetch(this._baseUrl + endpoint, options)
    .then((res => this._checkResponse(res)))
  }


  // ----- Método para verificar la respuesta de la API ----- //
  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject({ status: res.status, message: res.statusText });
  }


  // ----- Métodos para registrar e iniciar sesión ----- //
  register({ name, email, password }) {
    return this._request("register", { body: { name, email, password } });
  }

  login({ email, password }) {
    return this._request("login", { body: { email, password } });
  }
}

// ----- Instancia de la clase Auth ----- //
export const auth = new Auth("http://localhost:4000");