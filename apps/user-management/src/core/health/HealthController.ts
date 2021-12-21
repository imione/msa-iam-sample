import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from '@nestjs/terminus';

import { DatabaseIndicator } from '@apps/user-management/core/health/indicators/DatabaseIndicator';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly dbIndicator: DatabaseIndicator,
  ) {}

  @Get()
  async getHealth() {
    return this.health.check([
      async () => this.dbIndicator.isHealthy('UserManagement'),
    ]);
  }
}
