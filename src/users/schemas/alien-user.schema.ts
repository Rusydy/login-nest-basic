import * as mongoose from 'mongoose'

export const alienUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})