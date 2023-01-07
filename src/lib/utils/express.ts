import { NextFunction } from 'express';

export interface SafeRoute<T> {
  (req: Request, res: Response, next: NextFunction): Promise<void | T>;
}

type HandlerType<T> = SafeRoute<T>;

export function promisifiedRoute<T>(handler: HandlerType<T>): SafeRoute<T> {
  function routeHandler(req: Request, res: Response, next: NextFunction) {
    return handler(req, res, next).catch((...errors) => {
      next(...errors);
    });
  }

  return routeHandler;
}
