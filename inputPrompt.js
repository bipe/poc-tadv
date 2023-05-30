const fs = require('fs');
const stdin = fs.openSync("/dev/stdin", "rs");

const prompt = msg => {
    fs.writeSync(process.stdout.fd, msg + " ");
    let s = '';
    let buf = Buffer.alloc(1);
    fs.readSync(stdin, buf, 0, 1, null);
    while ((buf[0] != 10) && (buf[0] != 13)) {
        s += buf;
        fs.readSync(stdin, buf, 0, 1, null);
    }
    return s;
};

module.exports = prompt;