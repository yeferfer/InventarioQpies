const callApi = async (url, options = {}) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const response = await fetch("http://localhost:3002/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return callApi("/products");
    },
    create(producto) {
      return callApi("/products", {
        method: "POST",
        body: JSON.stringify(producto),
      });
    },
    delete(producto) {
      return callApi(`/products/${producto}`, {
        method: "DELETE",
      });
    },
    edit(producto) {
      return callApi(`/products/${producto._id}`, {
        method: "PATCH",
        body: JSON.stringify(producto),
      });
    },
    getProduct(id) {
      return callApi(`/products/${id}`);
    },
    find(name) {
      return callApi(`/products/${name}`);
    },
  },

  ventas: {
    list() {
      return callApi("/ventas");
    },
    create(ventas) {
      return callApi("/ventas", {
        method: "POST",
        body: JSON.stringify(ventas),
      });
    },
    delete(ventas) {
      return callApi(`/ventas/${ventas}`, {
        method: "DELETE",
      });
    },
    edit(ventas) {
      return callApi(`/ventas/${ventas._id}`, {
        method: "PATCH",
        body: JSON.stringify(ventas),
      });
    },
    getVentas(id) {
      return callApi(`/ventas/${id}`);
    },
    find(name) {
      return callApi(`/ventas/${name}`);
    },
  },
  user: {
    getUser() {
      return callApi("/user");
    },
    validarAdmin() {
      return callApi("/user/validarAdmin");
    },
  },
};

export default api;
