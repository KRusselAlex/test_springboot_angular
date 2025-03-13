import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../../services/api.service';
import { isPlatformBrowser } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {

  @ViewChild('barchart', { static: true }) barchart: ElementRef | undefined;
  @ViewChild('linechart', { static: true }) linechart: ElementRef | undefined;
  @ViewChild('piechart', { static: true }) piechart: ElementRef | undefined;

  cryptosData: any[] = [];
  labeldata: any[] = [];
  price_change: any[] = [];
  colors: string[] = [
    'brown',
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'cyan',
    'gray'
  ];

  constructor(private apiService: ApiService, @Inject(PLATFORM_ID) private platformId: any) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.apiService.getCryptos().subscribe((data) => {
        this.cryptosData = data;
        if (this.cryptosData != null) {
          this.cryptosData.map(o => {
            this.labeldata.push(o.name);
            this.price_change.push(o.price_change_percentage_24h);
          });
          this.Renderchart(this.labeldata, this.price_change, this.colors);
          this.Renderlinechart(this.labeldata, this.price_change, this.colors);
          this.Renderpiechart(this.labeldata, this.price_change, this.colors);
        }
      });
    }
  }

  Renderchart(labeldata: any, price_change: any[], colors: string[]) {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.barchart?.nativeElement;
      if (canvas) {
        new Chart(canvas, {
          type: 'bar',
          data: {
            labels: labeldata,
            datasets: [
              {
                data: price_change,
                backgroundColor: colors
              }
            ]
          },
          options: {}
        });
      }
    }
  }

  Renderlinechart(labeldata: any, price_change: any[], colors: string[]) {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.linechart?.nativeElement;
      if (canvas) {
        new Chart(canvas, {
          type: 'line',
          data: {
            labels: labeldata,
            datasets: [
              {
                data: price_change,
                backgroundColor: colors
              }
            ]
          },
          options: {}
        });
      }
    }
  }

  Renderpiechart(labeldata: any, price_change: any[], colors: string[]) {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.piechart?.nativeElement;
      if (canvas) {
        new Chart(canvas, {
          type: 'pie',
          data: {
            labels: labeldata,
            datasets: [
              {
                data: price_change,
                backgroundColor: colors
              }
            ]
          },
          options: {}
        });
      }
    }
  }
}
