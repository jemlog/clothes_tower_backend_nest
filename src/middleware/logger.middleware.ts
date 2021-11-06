import { NextFunction, Request, Response } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Request....function');
  next();
}

// 미들웨어를 직접 구현할때는 class 방식이 있고 function 방식이 있다. 종속성이 필요없을때는 function 형으로 간단히 구현하자
