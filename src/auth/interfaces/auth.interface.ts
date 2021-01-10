import * as mongoose from 'mongoose'

export interface Auth extends mongoose.Document {
  accessToken: string
  refreshToken: string
  morph: string
  morphModel: string
  deviceToken: string
  accessExpiredAt: Date
  refreshExpiredAt: Date
  createdAt: Date
  updatedAt: Date
}