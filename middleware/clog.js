const clog = (req, res, next) => {
    const fgCyan = '\x1b[36m';
    const defColor = '\x1b[0m';
    switch (req.method) {
        case 'GET': {
            console.info(`📗 ${fgCyan}${req.method} request to ${req.path}${defColor}`);
            break;
          }
          case 'POST': {
            console.info(`📘 ${fgCyan}${req.method} request to ${req.path}${defColor}`);
            break;
          }
          default:
            console.log(`📙${fgCyan}${req.method} request to ${req.path}${defColor}`);
    }
      
    next();
};

module.exports = { clog };