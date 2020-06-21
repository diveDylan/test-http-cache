
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

class UserResource extends Drash.Http.Resource {
  static paths = ["/user"]
  public GET() {
    this.response.setCookie({
      name: "MINI",
      value: "Cooper",
    });
    this.response.body = JSON.stringify({
      code: '000000',
      data: {
        name: 'dylan'
      },
      message: 'success'
    })
    return this.response
  }
}

const server = new Drash.Http.Server({
  resources: [
    HomeResource,
    UserResource
  ],
  response_output: "text/html; application/json",
  template_engine: true,
  views_path: "./public",
});

server.run({
  hostname: "localhost",
  port: 1447
});

console.log("Server listening: http://localhost:1447");