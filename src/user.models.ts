import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

    @Prop()
    username: string;
    @Prop()
    description: string;
    @Prop({default: Date.now})
    createdDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(User)