import { MikroORM } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';

@Injectable()
export class DatabaseIndicator extends HealthIndicator {
  constructor(private readonly orm: MikroORM) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const healthy = await this.orm.isConnected();

    const result = this.getStatus(key, healthy);
    if (healthy) {
      return result;
    }

    throw new HealthCheckError('Database is unhealthy', result);
  }
}
