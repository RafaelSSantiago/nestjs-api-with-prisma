import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  enableShutDownHooks(app: INestApplication) {
    const beforeExitHandler = async () => {
      await app.close();
    };

    process.on('beforeExit', beforeExitHandler);
  }
}
