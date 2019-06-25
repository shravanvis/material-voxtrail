import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  System: number;
  Active: string;
  Email: string;
  SMS: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
  {position: null, name: '', System: null, Active: '', Email: '', SMS: ''},
];

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'Active', 'System', 'Email', 'SMS'];
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
