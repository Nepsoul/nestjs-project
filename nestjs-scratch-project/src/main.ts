import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller() //controller decorator
class AppController {
  @Get() //route decorator
  getRootRout() { // route handler
    return "Initial Nest project";
  }
}

//module decorator for wrapup the controller
@Module({
  controllers: [AppController],
})
class AppModule {}

//starting function
async function bootstrap() {
  const app = await NestFactory.create(AppModule); //create instanse of module

  await app.listen(3000)  //to listen incoming traffic
}

bootstrap()