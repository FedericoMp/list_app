import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  tasks: Array<any> = localStorage.getItem( 'items' ) ? JSON.parse( localStorage.getItem( 'items' ) ) : [];
  validated: any = false;
  example: any = false;
  
  constructor() {}
  
  ngOnInit() {}
  
  clearToDo() {
    this.tasks.splice(0);
    localStorage.clear();
  }

  addNew( value: string ) {
    if ( value != '' ) {
      this.tasks.push( value );
      localStorage.setItem( 'items', JSON.stringify( this.tasks ) );
    } else {
      this.validated = true;
      setTimeout(function(){ this.validated = false; }.bind( this ), 1000 );
    }
  }

  cancelTask( value: number ) {
      this.tasks.splice( value, 1 );
      localStorage.setItem( 'items', JSON.stringify( this.tasks ) );
  }

  noSub(){
    return false;
  }
}
