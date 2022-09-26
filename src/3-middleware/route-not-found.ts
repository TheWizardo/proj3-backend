import { NextFunction, Request, Response } from "express"
import { RouteNotFound } from "../4-models/client-errors"

function routeNotFound(req: Request, res: Response, next: NextFunction): void {
    throw new RouteNotFound(req.originalUrl);
}

export default routeNotFound