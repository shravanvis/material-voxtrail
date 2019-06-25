import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  objects: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
  {position: null, name: '', objects: '', description: ''},
];

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'objects', 'description'];
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
