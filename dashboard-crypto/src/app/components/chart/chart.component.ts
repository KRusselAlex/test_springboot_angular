import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ApiService } from '../../services/api.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {

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


  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getCryptos().subscribe((data) => {
      this.cryptosData = data;
      if (this.cryptosData != null) {
        this.cryptosData.map(o=>{
          this.labeldata.push(o.name)
          this.price_change.push(o.price_change_percentage_24h)

        } )
        this.Renderchart(this.labeldata,this.price_change,this.colors)
        this.Renderlinechart(this.labeldata, this.price_change, this.colors)
        this.Renderpiechart(this.labeldata, this.price_change, this.colors)
      }
 
    });
  }

  Renderchart(labeldata:any,price_change:any[],colors:string[]) {
    const mychar = new Chart('barchart', {
      type: 'bar',
      data: {
        labels:labeldata,
        datasets:[
          {
            data:price_change,
            backgroundColor:colors
          }
        ]

      },
      options: {

      }
    })
  }
   Renderlinechart(labeldata: any, price_change: any[], colors: string[]) {
    const mychar = new Chart('linechart', {
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
      options: {

      }
    })
  }
  Renderpiechart(labeldata: any, price_change: any[], colors: string[]) {
    const mychar = new Chart('piechart', {
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
      options: {

      }
    })
  }

}
