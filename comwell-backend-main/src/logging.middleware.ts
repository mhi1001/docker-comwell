// logging.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Log the request method and URL
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Log the request body
    console.log('Request Body:', req.body);

    // Continue processing the request
    next();
  }
}
