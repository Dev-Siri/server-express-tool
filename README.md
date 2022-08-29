# Server Utility

**server-express-tool** is a simple tool that is built with express.js to simplify
the process of setting up express.js and to prevent getting overwhelmed by only showing the options that are necessary.You will also get killer auto complete and documentation in your IDE because every method and option in the package is strongly typed with Typescript and JSDocs.

## Installation

To install server-express-tool, run:

```console
$ npm install server-express-tool
```

## Usage

Import the core class

```javascript
const Server = require("server-express-tool");

// OR

import Server from "server-express-tool";
```

Add a route to the server with `Server.Route()`
it accepts three arguments.

- The first one is the `Type`. This determines the type of route it is. For example: **GET** or **POST**.
- Then there is the `Path` to the route. Like "**/**" for the root path or something like "**/path**" for a sub route.
- The last argument is the `Callback` or Data that the route will send when someone visits or requests the route.

```javascript
Server.Route("GET", "/", (req, res) => res.send("Hello, World!"));
```

Start the server with `Server.Listen()`. It accepts the following arguments:

- The `PORT` is obviously the port number that the server will listen on. This is required.
- `Callback` is an optional argument which is a function that will be called when the server successfully Starts up.

```javascript
Server.Listen(3000);
```

Add a seperate Router to your main application with `Server.Router()`
This works exactly the same as `express.Router()` It allows you to add seperate routes completly detached from your main application and allows to organize them.

```javascript
Server.Router();
```

Example with `Server.Router()`

```javascript
import Server from "server-express-tool";

const router = Server.Router();

router.get("/", (req, res) => res.send("Hello, World!"));

export default router;
```
