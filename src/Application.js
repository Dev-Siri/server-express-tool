"use strict";

import { Express, Router } from "../core/express.js";

export default class Application {
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

  Use(Option1, Option2) {
    if (!Option1)
      throw new ReferenceError("undefined is not a plugin or option");

    Express.use(Option2);
  }

  get Router() {
    return Router;
  }
}
