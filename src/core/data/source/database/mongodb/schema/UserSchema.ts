import * as mongoose from 'mongoose'
import * as bcrypts from 'mongoose-bcrypt'

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    max: 80,
    min: 5,
    required: true,
  },
  password: {
    type: String,
    bcrypt: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

UserSchema.plugin(bcrypts), { rondas: 8 }
