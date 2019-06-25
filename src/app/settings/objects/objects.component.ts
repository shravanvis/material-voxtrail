import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  IMEI: number;
  Active: string;
  Expires_on: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'bike', IMEI: 1.0079, Active: 'Active', Expires_on: Date()},
  {position: 2, name: 'car', IMEI: 4.0026, Active: 'Active', Expires_on: Date()},
  {position: 3, name: 'truck', IMEI: 6.941, Active: 'Active', Expires_on: Date()},
  {position: 4, name: 'rickshaw', IMEI: 9.0122, Active: 'Active', Expires_on: Date()},
  {position: 5, name: 'car', IMEI: 10.811, Active: 'Active', Expires_on: Date()},
  {position: 6, name: 'truck', IMEI: 12.0107, Active: 'Active', Expires_on: Date()},
  {position: 7, name: 'bike', IMEI: 14.0067, Active: 'Active', Expires_on: Date()},
  {position: 8, name: 'truck', IMEI: 15.9994, Active: 'Active', Expires_on: Date()},
  {position: 9, name: 'car', IMEI: 18.9984, Active: 'Active', Expires_on: Date()},
  {position: 10, name: 'car', IMEI: 20.1797, Active: 'Active', Expires_on: Date()},
];

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'IMEI', 'Active', 'Expires_on'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  constructor(){}

  ngOnInit(){}
}
