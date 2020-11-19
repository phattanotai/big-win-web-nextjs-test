const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const httpsOptions = {
    key: fs.readFileSync('./cert/server.key'),
    cert: fs.readFileSync('./cert/server.crt')
    //ca: fs.readFileSync('./cert/ca-crt.pem')
};

app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);

    }).listen(4000, err => {
        if (err) throw err;
        console.log('> Ready on https://localhost:4000');
    });
});