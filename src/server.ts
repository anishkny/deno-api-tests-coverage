export function requestHandler(req: Request): Promise<Response> {
  let res;

  if (req.method.toLocaleUpperCase() === "GET") {
    res = new Response("GET");
  } else if (req.method.toLocaleUpperCase() === "POST") {
    res = new Response("POST");
  } else {
    res = new Response("Not found", { status: 404 });
  }

  return Promise.resolve(res);
}
