import * as mongoose from 'mongoose'

export interface HumanUser extends mongoose.Document {
  id: string
  name: string
  gender: number
  email: string
  password: string
}