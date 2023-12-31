import { Schema, model } from "mongoose";
import { tUserInformation } from "./user.interface";



const UserSchema = new Schema<tUserInformation>({
    userId: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true },
    },
    orders: {
        type: [
            {
                productName: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, required: true },
            },
        ],
        required: true,
    },
});

export const User=model<tUserInformation>('UserModel',UserSchema);