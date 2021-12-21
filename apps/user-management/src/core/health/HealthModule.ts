import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { HealthController } from '@apps/user-management/core/health/HealthController';
import { DatabaseIndicator } from '@apps/user-management/core/health/indicators/DatabaseIndicator';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [DatabaseIndicator],
})
export class HealthModule {}
