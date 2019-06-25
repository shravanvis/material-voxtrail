import { Component, OnInit } from '@angular/core';

export interface Vehicle {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-drive-score',
  templateUrl: './drive-score.component.html',
  styleUrls: ['./drive-score.component.scss']
})
export class DriveScoreComponent implements OnInit {

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
