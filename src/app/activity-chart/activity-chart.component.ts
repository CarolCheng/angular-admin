import { Component, OnInit } from '@angular/core';
import { ActivityService } from './../services/activity.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-activity-chart',
  templateUrl: './activity-chart.component.html',
  styleUrls: ['./activity-chart.component.css']
})
export class ActivityChartComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor(private service: ActivityService) { }

  ngOnInit() {
    this.service.getData()
      .then((res) => {
        const temp_max = res['list'].map(data => data.main.temp_max);
        const temp_min = res['list'].map(data => data.main.temp_min);
        const alldates = res['list'].map(data => data.dt);
        let weatherDates = [];
        alldates.forEach((temp) => {
          let jsdate = new Date(temp * 1000);
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: weatherDates,
              datasets: [{
                  data: temp_max,
                  borderColor: "#3cba9f",
                  fill: false
                },{
                  data: temp_min,
                  borderColor: "#ffcc00",
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }],
              }
            }
          });
        })
      });
  }

}
