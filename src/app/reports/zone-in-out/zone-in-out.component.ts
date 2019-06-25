import { Component, OnInit } from '@angular/core';

export interface Vehicle {
  value: string;
  viewValue: string;
}

export interface Zone {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-zone-in-out',
  templateUrl: './zone-in-out.component.html',
  styleUrls: ['./zone-in-out.component.scss']
})
export class ZoneInOutComponent implements OnInit {
// for datepicker
model;
  
Vehicles: Vehicle[] = [
  {value: 'steak-0', viewValue: 'Vehicle1'},
  {value: 'pizza-1', viewValue: 'Vehicle2'},
  {value: 'tacos-2', viewValue: 'Vehicle3'}
];

Zones: Zone[] = [
  {value: 'asd-0', viewValue: 'Zone1'},
  {value: 'asd-1', viewValue: 'Zone2'},
  {value: 'as-2', viewValue: 'Zone3'}
];

optionsSelect: Array<any>;

constructor() { }

ngOnInit() {
  this.optionsSelect = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];
  }

}
