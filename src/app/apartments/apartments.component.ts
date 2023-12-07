import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  id:number;
  //injetced service activatedrouter
  constructor(private ac:ActivatedRoute){
    console.log("constructor")
  }
  //method hook:
  ngOnInit(){
    console.log("OnInit");
    // this.id=this.ac.snapshot.params['id'];
    this.ac.paramMap.subscribe(res=>this.id=Number(res.get('id')));
  }


}
