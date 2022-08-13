const Koa = require('koa');
const app = new Koa();


app.use(ctx => {

  const url = ctx.request.originalUrl;

  if(url === '/'){
    ctx.response.status = 200;
    ctx.type = 'text/html';
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
  }
  else if(url === '/hakkimda'){
    ctx.response.status = 200;
    ctx.type = 'text/html';
    ctx.body = '<h1>hakkimda sayfasına hoşgeldiniz</h1>';
  }
  else if(url === '/iletisim'){
    ctx.response.status = 200;
    ctx.type = 'text/html';
    ctx.body = '<h1>iletisim sayfasına hoşgeldiniz</h1>';
}
else{
    ctx.response.status = 404;
    ctx.type = 'text/html';
    ctx.body = '<h1>Sayfa Bulunamadi.</h1>';
}

});


const port = 3000;

app.listen(port,()=> {
    console.log(`Sunucu port ${port} da başlatıldı`)
});