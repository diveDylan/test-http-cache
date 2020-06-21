
import { Drash } from "https://deno.land/x/drash@v1.0.6/mod.ts";
interface RESBody {
  code: String,
  data: Object | null,
  message: String
}

class HomeResource extends Drash.Http.Resource {
  static paths = ["/index"];
  public GET() {
    this.response.body = this.response.render(
      "/index.html",
      {
        user: {
          name: "Edward"
        }
      }
    );
    return this.response;
  }
}

const server = new Drash.Http.Server({
  resources: [
    HomeResource
  ],
  response_output: "text/html",
  template_engine: true,
  views_path: "./public",
});

server.run({
  hostname: "localhost",
  port: 1447
});

console.log("Server listening: http://localhost:1447");