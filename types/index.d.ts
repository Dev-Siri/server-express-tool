import type { NextFunction, Request, Response, Router } from "express";

declare module "server-express-tool" {
  class Application {
    /** Start the server on the specified port. */
    Listen(PORT: number, Callback: () => void): void;

    /** Add a new route to the server. */
    Route(
      Type: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
      Route: string,
      Callback: (req: Request, res: Response, next?: NextFunction) => void
    ): void;

    /** Use a third party Express.js plugin, `Router`, or an option. */
    Use(Option1: string | any, Option2?: any): void;

    /** Works the same as the Express Router. You can use this with `Server.Use()` to connect seperate routes together. */
    get Router(): () => Router;
  }

  /** An instance of an Express application. The server is an initalized function exported by the server-express-tool module. */
  const Server: Application;

  export default Server;
}
