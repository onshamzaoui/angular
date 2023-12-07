import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {
  myForm:FormGroup;
  ngOnInit(){
    this.myForm = new FormGroup( {   
      sousGroupe1: new FormGroup({
          apartnum:new FormControl('',[Validators.required, Validators.pattern("[1-9][0-9]*")]),
      floorNum:new FormControl('',[Validators.required]),
      Surface:new FormControl('',[Validators.required]),
    }) ,
    SurfaceTerrace:new FormControl('',[Validators.required]),



    })

    }  
  get NumApart(){
    return this.myForm.get('sousGroupe1').get('apartnum');
  }
  get NumFloor(){
    return this.myForm.get('sousGroupe1').get('floorNum');
  }
  get Surface(){
    return this.myForm.get('sousGroupe1').get('Surface');
  }
  get SurfaceTerrace(){
      return this.myForm.get('SurfaceTerrace');
  }
}


