import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: object = []
  cards:object = []
  pie:object =[]

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.bigChart = this._dashboardService.bigChart();
    this.cards = this._dashboardService.cards();
    this.pie = this._dashboardService.pie();
  }

}
