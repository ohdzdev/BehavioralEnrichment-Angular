import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface IncidentInstance {
  incidentID: number;
  incDate: string;
  department: string;
  futureUse: string;
  enrichItem: string;
}

// Stand in sampling data until database ready
const INCIDENTS: IncidentInstance[] = [
  {incidentID: 1, incDate: '12 Apr 19', enrichItem: 'Feather', department: 'Birds', futureUse: "Do not use"},
  {incidentID: 2, incDate: '13 Apr 19', enrichItem: 'Log', department: 'Lizards', futureUse: "Do not use"},
  {incidentID: 3, incDate: '13 Feb 19', enrichItem: 'Ball', department: 'Monkeys', futureUse: "Pending"},
];


@Component({
  selector: 'app-incident-report-status',
  templateUrl: './incident-report-status.component.html',
  styleUrls: ['./incident-report-status.component.scss'],
})
export class IncidentReportStatusComponent implements OnInit {

  displayedColumns: string[] = ['incidentID', 'incDate', 'enrichItem','department', 'futureUse'];
  dataSource = new MatTableDataSource<IncidentInstance>(INCIDENTS);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}





