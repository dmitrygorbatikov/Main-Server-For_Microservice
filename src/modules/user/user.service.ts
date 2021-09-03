import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  public createUser(body: any) {
    const user = new this.userModel(body);
    return user.save();
  }

  public async getUsers() {
    return this.userModel.find().exec();
  }
}
