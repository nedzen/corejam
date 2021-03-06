const { createTestClient } = require("apollo-server-testing");
import { ApolloServer } from "apollo-server-micro";
import { IncomingMessage } from "http";
import { Socket } from "net";
import Response from "./Response";
import { CorejamServer, getServerContext } from "./Server";

/**
 * @credit KristianWEB https://github.com/KristianWEB/fakebooker-backend/blob/master/__tests__/util/testClient.js
 *
 * Test client with custom context argument that can be set per query or mutate call
 * @param ctxArg Default argument object to be passed
 */
export const testClient = async (
  ctxArg = { req: { headers: {} }, res: new Response(new IncomingMessage(new Socket())) },
  context = () => getServerContext({ ...ctxArg })
) => {
  const baseCtxArg = ctxArg;
  //@ts-ignore
  let currentCtxArg = baseCtxArg;

  const { query, mutate, ...others } = createTestClient(new ApolloServer(CorejamServer(context)));
  const { models } = context();

  // Wraps query and mutate function to set context arguments
  // eslint-disable-next-line no-shadow
  const wrap = (fn) => ({ ctxArg, ...args }) => {
    currentCtxArg = ctxArg != null ? ctxArg : baseCtxArg;
    return fn(args);
  };

  return { query: wrap(query), mutate: wrap(mutate), models, ...others };
};
