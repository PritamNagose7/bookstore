package com.example.bookstore.controller;

import com.example.bookstore.model.Book;
import com.example.bookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    private BookService bookService;

    // Getting all Details
    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
    
 

    // Getting details using id
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        Optional<Book> book = bookService.getBookById(id);
        return book.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // add detail and new book
    @PostMapping
    public Book createBook(@RequestBody Book book) {
        return bookService.saveBook(book);
    }

    // updating old book detail 
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book bookDetails) {
        Optional<Book> book = bookService.getBookById(id);
        if (book.isPresent()) {
            Book bookToUpdate = book.get();
            bookToUpdate.setBookName(bookDetails.getBookName());
            bookToUpdate.setAuthorName(bookDetails.getAuthorName());
            bookToUpdate.setPrice(bookDetails.getPrice());
            bookToUpdate.setGenre(bookDetails.getGenre());
            return ResponseEntity.ok(bookService.saveBook(bookToUpdate));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // deleting book details
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.noContent().build();
    }
}
