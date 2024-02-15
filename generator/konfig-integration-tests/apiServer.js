const express = require("express");
const multer = require("multer");

const upload = multer(); // Initializes multer

const startServer = (port, routes) => {
  const app = express();
  app.use(express.json());

  // print routes
  console.log("Routes:");
  routes.forEach((route) => {
    console.log(`  ${route.method} ${route.path}`);
  });

  routes.forEach((route) => {
    if (route.isMultipartFormData) {
      app[route.method](route.path, upload.any(), (req, res) => {
        if (route.response === "echo") {
          const response = {
            files: req.files,
            params: req.params,
            query: req.query,
            headers: req.headers,
            body: req.body,
            url: req.url,
            hostname: req.hostname,
          };
          res.status(200).json(response);
        } else {
          res.status(200).json(route.response);
        }
      });
    } else {
      app[route.method](route.path, (req, res) => {
        if (route.response === "echo") {
          const response = {
            files: req.files,
            params: req.params,
            query: req.query,
            headers: req.headers,
            body: req.body,
            url: req.url,
            hostname: req.hostname,
          };
          res.status(200).json(response);
        } else {
          res.status(200).json(route.response);
        }
      });
    }
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
