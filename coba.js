const http = require('http');

const server = http. createServer((req, res) => {
    console.log("Selamat Pagiiiii..!");
    res ("Jadi ga nii?");
});

const PORT = 7008;

server.listen(PORT, () => console.log(`Server running  on port ${PORT}`));