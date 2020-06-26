
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
  static paths = ["/test"]
  public GET() {
    this.response.headers.set('cache-control', 'no-cache')
    if(this.request.getHeaderParam('if-none-match') == "33a64df551425fcc55e4d42a148795d9f25f89d4"){
      this.response.status_code = 304
    } else {
      this.response.headers.set('ETag', "33a64df551425fcc55e4d42a148795d9f25f89d4")
    }
    console.log(this.response)
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