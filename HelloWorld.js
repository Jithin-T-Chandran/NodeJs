const http = require('http');
const server = http.createServer((req,res)=>{
    //res.write("<h1>Jithin T Chandran</h1>");
    res.setHeader('Content-Type','text/html');
    res.write('<h1>hello Jithin</h1>');
    res.end();
});
server.listen(3000,'localhost',()=>{
    console.log('listening for request on 3000')
});