import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cryptos: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopCryptos().subscribe((data) => {
      this.cryptos = data;

    });
  }

}
