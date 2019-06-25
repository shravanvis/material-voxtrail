import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  ID_Number: number;
  Description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
  {position: null, name: '',ID_Number: null, Description: ''},
];


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'ID_Number', 'Description'];
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
