export const helpHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.header = options.header ? { ...defaultHeader, ...options.header } : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .catch((err) => err)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          const error = {
            err: true,
            status: res.status || "00",
            statusText: res.statusText || "Ocurrio un error",
          };
          throw error;
        }
      });
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options = {}) => {
    options.method = "POST";
    return customFetch(url, options);
  };

  const put = (url, options = {}) => {
    options.method = "PUT";
    return customFetch(url, options);
  };

  const del = (url, options = {}) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return { get, post, put, del };
};
