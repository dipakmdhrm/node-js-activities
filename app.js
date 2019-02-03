var fs = require('fs');

// Check if file exists.
if (fs.existsSync('./WRITEME.md'))
  // Delete file.
  fs.unlinkSync('./WRITEME.md');

// Create directory.
if (!fs.existsSync('demoDir'))
  fs.mkdirSync('demoDir');

// Delete directory.
if (fs.existsSync('demoDir'))
  fs.rmdirSync('demoDir');
