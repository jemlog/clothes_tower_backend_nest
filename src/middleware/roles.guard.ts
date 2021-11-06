import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 현재 핸들러에 어떤 roles가 할당되어있는지 파악한다. 데코레이터 값 가지고 오는 로직
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return false;
    }
    // passport로직처럼 request의 user에 인증정보를 담아서 계속 보낸다.

    // const user = request;
    // return matchRoles(roles, user.roles);
    else {
      const request: Request = context.switchToHttp().getRequest();
      if (roles[0] === request.headers.authorization) return true;
    }
  }

  matchRoles(roles) {}
}
