const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api1', {
      target: "http://3.34.245.45:3000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/api2', {
      target: "http://172.20.10.5:8000",
      changeOrigin: true,
    })
  );
};
