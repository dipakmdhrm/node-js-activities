var fs = require('fs');

fs.readFile(__dirname + '/README.md', 'utf-8', (error, data) => fs.writeFileSync(__dirname + '/WRITEME.md', data));
