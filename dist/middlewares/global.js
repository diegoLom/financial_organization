export class AppError extends Error {
    statusCode;
    constructor(statusCode, message // required, not optional
    ) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype); // fixes instanceof
    }
}
export function errorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
        return;
    }
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
}
//# sourceMappingURL=global.js.map