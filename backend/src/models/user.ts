import { model, Mongoose, Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        get: (): undefined => undefined
    },
    pic: {
        type: String,
        required: true,
        default: 'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, { timestamps: true });

userSchema.methods.matchPassword = async function (password : string) {
    return await bcrypt.compare(password, this.password);
}

userSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (password: string) {
    return await bcrypt.compare(password, this.password);
}

export default model<User>("User", userSchema);