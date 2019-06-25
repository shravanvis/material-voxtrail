import { Component, OnInit } from '@angular/core';

export interface Language {
  value: string;
  viewValue: string;
}

export interface Distance {
  value: string;
  viewValue: string;
}

export interface Capacity {
  value: string;
  viewValue: string;
}

export interface Temperature {
  value: string;
  viewValue: string;
}

export interface Time {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit {

  languages: Language[] = [
    {value: 'English-0', viewValue: 'English'},
    {value: 'Arabic-1', viewValue: 'Arabic'},
    {value: 'Chinese-2', viewValue: 'Chinese'}
  ];

  distances: Distance[] = [
    {value: 'Kilometer-0', viewValue: 'Kilometer'},
    {value: 'Mile-1', viewValue: 'Mile'},
    {value: 'Nautical_mile-2', viewValue: 'Nautical_mile'}
  ];

  capacities: Capacity[] = [
    {value: 'Liter-0', viewValue: 'Liter'},
    {value: 'Gallon-1', viewValue: 'Gallon'}
  ];

  temperatures: Temperature[] = [
    {value: 'Celcius-0', viewValue: 'Celcius'},
    {value: 'Fahrenheit-1', viewValue: 'Fahrenheit'}
  ];

  times: Time[] = [
    {value: 'Celcius-0', viewValue: '(UTC-12:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-11:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-10:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-10:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-09:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-08:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-07:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-06:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-05:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-04:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-04:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-03:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-03:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-02:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC-01:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC 00:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+01:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+02:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+03:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+03:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+04:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+04:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+05:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+06:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+07:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+08:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+09:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+09:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+10:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+10:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+10:30)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+11:00)'},
    {value: 'Celcius-0', viewValue: '(UTC+12:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+13:00)'},
    {value: 'Fahrenheit-1', viewValue: '(UTC+14:00)'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
