import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  username: string;
  email: string;
  profile: {
    bio?: string;
    socialLinks?: string[];
  };
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "pleasw enter user name"],
    minlength: [4, "name too short!"],
    maxlength: [20, "name too long!"],
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} isn't a valid email!`
    }
  },
  profile: {
    bio:{
      type: String,
      required: true
    },
    socialLinks: {
      type: [String],
      required: true
    }
  },
  posts: {
    type: [Schema.Types.ObjectId],
    required: true
  }
})

export default mongoose.model<IUser>("User", UserSchema);
