import { Controller, Get, Param, Post, Patch, Delete, Body, HttpStatus } from '@nestjs/common'
import { BooksService } from './books.service'

@Controller('books')
export class BooksController {
  constructor(private booksService:BooksService) { }

  @Get()
  async getBooks() {
    const books = await this.booksService.getBooks()
    return books
  }

  @Get(':bookID')
  async getSingleBook(@Param('bookID') bookID) {
    const book = await this.booksService.getSingleBook(bookID)
    return book
  }

  @Post()
  async addBook(
    @Body('title') bookTitle: string,
    @Body('description') bookDesc: string,
    @Body('author') bookAuthor: string,
    @Body('price') bookPrice: number
  ) {
    const book = await this.booksService.insertBook(
      bookTitle,
      bookDesc,
      bookAuthor,
      bookPrice
    )
    return {
      statusCode: HttpStatus.OK,
      message: 'Book added successfully',
      data: book,
    }
  }

  @Patch(':id')
  async updateBook(
    @Param('id') bookID: string,
    @Body('title') bookTitle: string,
    @Body('description') bookDesc: string,
    @Body('author') bookAuthor: string,
    @Body('price') bookPrice: number
  ) {
    const book = await this.booksService.updateBook(
      bookID,
      bookTitle,
      bookDesc,
      bookAuthor,
      bookPrice,
    )
    return {
      statusCode: HttpStatus.OK,
      message: 'Book updated successfully',
      book: book,
    }
  }

  @Delete() // why Delete() has no param?
  async deleteBook(@Param('id') bookID: string) {
    const isDeleted = await this.booksService.delete(bookID)
    if (isDeleted) {
      return {
        statusCode: HttpStatus.OK,
        message: 'book deleted successfully'
      }
    }
  }
}
