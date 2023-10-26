const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
	console.log(`${req.method} request for ${req.url}`);

	const filePath = path.join(__dirname, req.url);

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			res.statusCode = 500;
			res.end(`Server Error: ${err?.message || 'Unknown error'}}`);
		} else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
});

server.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
