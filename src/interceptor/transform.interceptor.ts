import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

import { map, Observable } from 'rxjs';

export interface Response<T> {
  // 여기 t로 들어간게 응답 데이터이다.
  data: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    // response<T> 형태로 반환하겠다 선언했고, 그 형태로 반환해서 문제 x
    return next.handle().pipe(map((data) => ({ data: data })));
  }
}
