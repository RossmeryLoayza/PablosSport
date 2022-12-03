const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/auth-token",
    createProxyMiddleware({
      target: "https://sgz-si.herokuapp.com",
      changeOrigin: true,
      headers: {
        allow: "GET, HEAD, POST, OPTIONS",
      },
    })
  );
};
