import { UserUpdateDto } from './userUpdate.dto';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  // creating a user
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user)
    return newUser.save()
  }

  // list users
  async listUser() {
    return this.userModel.find({}).then(user => user).catch(err => console.log(err))
  }

  // update user
  async updateUser(id:string, data: UserUpdateDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, data, {new: true})
  }

  // delete user
  async deleteUser(id){
    return this.userModel.findByIdAndRemove(id)
  }

}
