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
  alertMsj: string = '';
  
  constructor() {}
  
  ngOnInit() {}
  
  clearToDo() {
    this.tasks.splice(0);
    localStorage.clear();
  }

  addNew( value: string ) {
    if ( value != '' ) {
      if (value.length >= 2 && value.length <= 15) { 
        this.tasks.push( value );
        localStorage.setItem( 'items', JSON.stringify( this.tasks ) );
      }else{
        this.validated = true;
        this.alertMsj = 'El item debe tener entre 2 y 15 caracteres!';
        setTimeout(function(){ this.validated = false; }.bind( this ), 2000 );
      }
    } else {
      this.validated = true;
      this.alertMsj = 'Por favor, agregar item valido!';
      setTimeout(function(){ this.validated = false; }.bind( this ), 2000 );
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
