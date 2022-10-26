import { assert } from "std/testing/asserts.ts";
import { requestHandler } from "../src/server.ts";
import { serve } from "std/http/server.ts";

Deno.test("API Tests", async () => {
  // Start server
  const controller = new AbortController();
  const { signal } = controller;
  const server = serve(requestHandler, { signal });

  // Run API tests
  const p = Deno.run({
    cmd: ["npx", "newman", "run", "./api-tests.postman.json"],
  });
  const { success } = await p.status();
  p.close();
  assert(success);

  // Stop server
  controller.abort();
  await server;
});
