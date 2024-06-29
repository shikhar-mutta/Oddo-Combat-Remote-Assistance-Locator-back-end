import { Controller, Get, Delete, Param, Post, Patch} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController  {
    constructor(private readonly userService: UserService) { }
  
    @Get()
    async list() {
      return this.userService.getAllUSer();
    }
  
    @Delete(':userCode')
    async deleteUser(@Param('userCode') userCode: number | any){
      await this.userService.deleteUser();
  
      return { message: 'user deleted successfully' };
    }
  
    @Get(':userCode')
    async findUserById(@Param('userCode') userCode: number) {
      return this.userService.findUserById();
    }
  
    @Post()
    createUser(){
      return this.userService.createUser();
    }
  
    @Patch(":userCode")
    updateUser() {
      return this.userService.updateUser();
    }
  
  }
  