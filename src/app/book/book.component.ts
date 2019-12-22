import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  displayedColumn = ['position', 'Time', 'Book'];
  dataSource = ELEMENT_DATA;
  displayedColumns = ['position', 'Time'];
  dataSources = ELEMENTs_DATA;
  constructor() { }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  Time: string;
  position: number;
  Book: number;
}
export interface PeriodicElements {
  Time: string;
  position: number;
}


const ELEMENTs_DATA: PeriodicElements[] = [
  {position: 1, Time: 'No Session Run in this time ',},

  
];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Time: '9:00-11:00', Book: 0,},
  {position: 2, Time: '11:00-1:00', Book: 1 },
  {position: 3, Time: '1:00-3:00', Book: 0},
  {position: 4, Time: '3:00-5:00', Book: 0},
  
];

