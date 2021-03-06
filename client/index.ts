const { Elm } = require("./src/Main.elm");
import { GraphqlSubscriptions } from "./graphql-subscriptions";

const app = Elm.Main.init();

let graphqlSubscriptions = new GraphqlSubscriptions(
  "ws://localhost:5000/graphql",
  app.ports.elmToJs.subscribe,
  app.ports.jsToElm.send
);
