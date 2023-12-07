import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  //prop1 :propriete d'entree de ce composant
  @Input() prop1:string="";
  //prop2:propriete interne
  prop2:string="prop2";
  @Output()prop3=new EventEmitter();
  notif(){
this.prop3.emit("success");
  }
  f(){
    alert("je suis le fils")
  }

}
