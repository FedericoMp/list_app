import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tasks: Array<any> = localStorage.getItem( 'items' ) ? JSON.parse( localStorage.getItem( 'items' ) ) : [];

  constructor() { }

  ngOnInit() { }

  clearToDo() {
    this.tasks.splice(0);
    localStorage.clear();
  }

  addNew( value: string ) {
    this.tasks.push( value );
    localStorage.setItem( 'items', JSON.stringify( this.tasks ) );
  }

  cancelTask( value: number ) {
    this.tasks.splice( value, 1 );
    localStorage.setItem( 'items', JSON.stringify( this.tasks ) );
  }
}
