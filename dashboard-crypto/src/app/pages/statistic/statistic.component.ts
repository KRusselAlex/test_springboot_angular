import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-statistic',
  imports: [SidebarComponent,ChartComponent],
  templateUrl: './statistic.component.html',
  styleUrl: './statistic.component.css'
})
export class StatisticComponent {

}
