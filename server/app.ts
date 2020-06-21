
import { Drash } from "https://deno.land/x/drash@v1.0.6/mod.ts";

class HomeResource extends Drash.Http.Resource {
  static paths = ["/"];
  public GET() {
    this.request.cacheControl = 'max-age: 30000'
    this.response.body = "Hello World! deno + Drash is cool!";
    return this.response;
  }
}

const server = new Drash.Http.Server({
  directory: "/Users/zengxiangda/Projects/learn/test-http-cache/server",
  // resources: [HomeResource],
  response_output: "text/html",
  static_paths: ["/public"]
});

server.run({
  hostname: "localhost",
  port: 1447
});

console.log("Server listening: http://localhost:1447");