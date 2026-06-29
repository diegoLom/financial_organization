import type { Request, Response, NextFunction } from "express";
export declare class AppError extends Error {
    readonly statusCode: number;
    constructor(statusCode: number, message: string);
}
export declare function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=global.d.ts.map