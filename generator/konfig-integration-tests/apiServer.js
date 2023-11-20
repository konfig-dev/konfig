const express = require("express");

const startServer = (port, routes) => {
  const app = express();
  app.use(express.json());

  // print routes
  console.log("Routes:");
  routes.forEach((route) => {
    console.log(`  ${route.method} ${route.path}`);
  });

  routes.forEach((route) => {
    app[route.method](route.path, (req, res) => {
      res.status(200).json(route.response);
    });
  });

  // /healthz GET endpoint
  app.get("/healthz", (req, res) => {
    res.status(200).json({ status: "UP" });
  });

  app.listen(port, () => console.log(`Server listening on port ${port}`));
};

// Reading configuration passed to the process
const config = JSON.parse(process.argv[2]);

startServer(config.port, config.routes);
