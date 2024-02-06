import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  index() {
    return this.prismaService.client.user.findMany();
  }
}
