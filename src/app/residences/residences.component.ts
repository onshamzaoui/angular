import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment';
import { Residence } from '../core/models/residence';
import { ApartmentService } from '../Shared/apartment.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  surface: number;
  name: string = 'valeur initial';
  name2: string = '';


//injecter le service apartmentService
  constructor(private aps:ApartmentService){}

  ngOnInit(){
    this.listResidences=this.aps.getResidences();
    this.listApartments=this.aps.getApartments();
  }
  setName(val: string) {
    this.name = val;
  }
  selectedResidence: Residence;
  listResidences: Residence[] = [];
  

  listApartments: Apartment[] = [];
  filteredResidences: Residence[] = []; // Maintain a separate list for filtering by name
  filteredApartments: Apartment[] = []; // Maintain a separate list for filtering by surface

  list: Apartment[] = [];

  getApartments(nb: number) {
    this.list = [];
    this.selectedResidence = this.listResidences.find((r) => r.id === nb);

    if (this.selectedResidence) {
      // Filter apartments based on the selected residence
      this.list = this.listApartments.filter((a) => a.residence.id === nb);
    }
  }
  
  filterResidencesByName() {
    // Filter residences based on the entered name
    this.filteredResidences = this.listResidences.filter(
      r => r.name.toLowerCase().includes(this.name2.toLowerCase())
    );
  }

  filterApartmentsBySurface() {
    // Filter apartments based on the entered surface
    this.list = this.listApartments.filter(
      a => isNaN(this.surface) || a.surface <= this.surface
    );
  }
}
