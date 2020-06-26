### about deno server
```bash
# install deno
curl -fsSL https://deno.land/x/install/install.sh | sh
#https://drash.land/docs/#/api-reference/http/response
deno run --allow-net --allow-read app.ts
```

### html
```bash
cd public
vim $<your_add_file>.html
```
### http
302 redirect
``` ts
// 302 redirect
this.response.headers.set('location', 'http://0.0.0.0:1447')
this.response.status_code = 302
```

### TODO
1、cookie ✅
2、http-cache