import express from "express";

const Express = express();

class Application {
  Listen(PORT, Callback) {
    Express.listen(PORT || 8080);

    if (Callback) Callback();
  }

  Route(Type, Route, Callback) {
    switch (Type.toUpperCase()) {
      case "GET":
        Express.get(Route, Callback);
      case "POST":
        Express.post(Route, Callback);
      case "PATCH":
        Express.patch(Route, Callback);
      case "PUT":
        Express.put(Route, Callback);
      case "DELETE":
        Express.delete(Route, Callback);
    }
  }

  Use(Option) {
    if (!Option)
      throw new ReferenceError("undefined is not a plugin or option");

    Express.use(Option);
  }

  get Router() {
    return express.Router();
  }
}

const Server = new Application();

export default Server;