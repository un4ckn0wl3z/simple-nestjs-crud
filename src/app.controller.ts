import { UserUpdateDto } from './userUpdate.dto';
import { User } from './user.models';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Get()
  listUser(){
    return this.appService.listUser()
  }

  @Put(':id')
  async updateUser(@Param('id') id:string, @Body() userUpdateDto: UserUpdateDto ){
    return this.appService.updateUser(id, userUpdateDto)
  }
  
  @Delete(':id')
  async deleteUser(@Param('id') id:string) {
    return this.appService.deleteUser(id)
  }

   
}
