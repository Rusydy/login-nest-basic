import * as mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})