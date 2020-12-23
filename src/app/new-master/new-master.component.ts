import { Component, OnInit } from '@angular/core';
import { Book, BOOKS } from '../book';

@Component({
  selector: 'app-new-master',
  templateUrl: './new-master.component.html',
  styleUrls: ['./new-master.component.css']
})
export class NewMasterComponent implements OnInit {
books:Book[];
selectedBook:Book;
  constructor() { 
    this.books=BOOKS;
  }
  showDetails(book:Book){
    this.selectedBook=book;
  }

  ngOnInit(): void {
  }

}
