import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
// import { BOOKS } from '../mocks/books.mock' // dummy data
import { Book } from './interfaces/books.interface'

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async getBooks() {
    const books = await this.bookModel.find().exec()
    return books.map((book: { id: string; title: string; description: string; price: number }) => ({
      id: book.id,
      title: book.title,
      description: book.description,
      price: book.price,
    }))
  }

  async getSingleBook(bookID: string) {
    const book = await this.findBook(bookID)
    return {
      id: book.id,
      title: book.title,
      description: book.description,
      price: book.price,
    }
  }

  async insertBook(
    title: string, 
    description: string, 
    author: string, 
    price: number) {
    const newBook = new this.bookModel({
      title,
      description,
      author,
      price,
    })
    const result = await newBook.save()
    return result
  }

  async updateBook(bookID: string, title: string, description: string, author: string, price: number) {
    const updatedBook = await this.findBook(bookID)
    if (title) {
      updatedBook.title = title
    }
    if (description) {
      updatedBook.description = description
    }
    if (author) {
      updatedBook.author = author
    }
    if (author) {
      updatedBook.author = author
    }
  }

  async delete(bookID: string) {
    const result = await this.bookModel.deleteOne({ _id: bookID }).exec()
    if (result.n === 0) {
      throw new NotFoundException('Could not find book.')
    }
    return true 
  }

  private async findBook(id: string): Promise<Book> {
    let Book 
    try {
      Book = await this.bookModel.findById(id).exec()
    } catch (error) {
      throw new NotFoundException('Could not find book.')
    }
    if (!Book) {
      throw new NotFoundException('Could not find book.')
    }
    return Book
  }
}
