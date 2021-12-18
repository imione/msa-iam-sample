import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get('/:userId')
  async getUser(@Param('userId') userId: string): Promise<void> {
    console.log(userId);

    return;
  }
  s;
}
