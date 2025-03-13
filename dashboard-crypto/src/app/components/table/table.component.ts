import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  cryptos: any[] = [];


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCryptos().subscribe((data) => {
      this.cryptos = data;
    });
  }
}
