export function requestHandler(req: Request): Promise<Response> {
  // Default to 404
  let res;

  // Handle GET / POST
  if (req.method.toLocaleUpperCase() === "GET") {
    res = new Response("GET");
  } else if (req.method.toLocaleUpperCase() === "POST") {
    res = new Response("POST");
  } else {
    res = new Response("Not found", { status: 404 });
  }

  // Return response
  return Promise.resolve(res);
}
