import { MikroORM } from '@mikro-orm/core';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly orm: MikroORM) {}

  @Get('/:userId')
  async getUser(@Param('userId') userId: string): Promise<void> {
    console.log(await this.orm.isConnected());

    console.log(userId);

    return;
  }
  s;
}
