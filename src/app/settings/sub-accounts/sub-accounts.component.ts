import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  Email: string;
  position: number;
  Active: number;
  Objects: string;
  Places: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
  {position: null, Email: '',Active: null, Objects: '', Places: ''},
];

@Component({
  selector: 'app-sub-accounts',
  templateUrl: './sub-accounts.component.html',
  styleUrls: ['./sub-accounts.component.scss']
})
export class SubAccountsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'Email', 'Active', 'Objects', 'Places'];
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
