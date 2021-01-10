import * as mongoose from 'mongoose'

export interface Book extends mongoose.Document {
  id: string
  title: string
  description: string
  author: string
  price: number
}