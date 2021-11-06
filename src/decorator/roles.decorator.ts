import { SetMetadata } from '@nestjs/common';

// 여러개의 role을 가져와서 roles의 밸류 값으로 넣어준다.
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
