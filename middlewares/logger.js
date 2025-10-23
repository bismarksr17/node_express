const LoggerMiddleware = (req, res, next) => {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp} ${req.method} ${req.url} - IP: ${req.ip}]`);

    const start = Date.now();

    res.on('finish', () => {
        const duracion = Date.now() - start;
        console.log(`[${timestamp} Response: ${res.statusCode} - Duration: ${req.duracion}ms]`);
    });

    next();
}

module.exports = LoggerMiddleware;