import * as mongoose from 'mongoose'

export interface AlienUser extends mongoose.Document {
  id: string
  name: string
  type: number
  email: string
  password: string
}