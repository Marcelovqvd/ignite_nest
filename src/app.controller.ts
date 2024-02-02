import { Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { AppService } from "./app.service";

@Controller("/api")
export class AppController {
  constructor(
    private appService: AppService,
    private prisma: PrismaService
  ) {}

  @Get("/hello")
  index(): string {
    return this.appService.getHello();
  }

  @Post("/hello")
  async store() {
    return await this.prisma.user.findMany();
  }
}
