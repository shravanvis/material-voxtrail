import { Component, OnInit } from '@angular/core';

export interface Vehicle {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {
  // for datepicker
  model;
  
  Vehicles: Vehicle[] = [
    {value: 'steak-0', viewValue: 'Vehicle1'},
    {value: 'pizza-1', viewValue: 'Vehicle2'},
    {value: 'tacos-2', viewValue: 'Vehicle3'}
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
