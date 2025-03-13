import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,TableComponent,CardComponent,SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
