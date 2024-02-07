import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client/edge";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ["warn", "error"],
    });
  }
  onModuleDestroy() {
    return this.$disconnect();
  }
  onModuleInit() {
    return this.$connect();
  }
}
