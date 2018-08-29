import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PollingService } from './../polling.service';

@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {

  showChart: boolean;
  dataArr = [];
  pollQestionOption = {
    pollId: '',
    question: '',
    optionsA: '',
    optionsB: '',
    optionsC: '',
    optionsD: '',
    optionsE: '',
    optionsF: '',
    optionsG: '',
  };

  /* pieChartData =  {
    chartType: 'ColumnChart',
    dataTable: [ ]
  }; */

  view: any[] = [];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showDataLabel = true;
  xAxisLabel = 'Option';
  showYAxisLabel = true;
  yAxisLabel = 'Couunt';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private service: PollingService) { }

  ngOnInit() {
    this.service.getActiveQuestionResult()
      .subscribe(response => {

        this.pollQestionOption.question = response.result.question;
        this.pollQestionOption.pollId = response.result.pollid;
        this.pollQestionOption.optionsA = response.result.optiona;
        this.pollQestionOption.optionsB = response.result.optionb;
        this.pollQestionOption.optionsC = response.result.optionc;
        this.pollQestionOption.optionsD = response.result.optiond;
        this.pollQestionOption.optionsE = response.result.optione;
        this.pollQestionOption.optionsF = response.result.optionf;
        this.pollQestionOption.optionsG = response.result.optiong;

        this.showChart = true;
        const res = response.result.result;
        const dataArr = [];
        res.forEach(element => {
          console.log(typeof(element.polloption));
          console.log('Option: ' + element.polloption + '  Length: ' + element.polloption.length);
          const arr1 = {name : 'Option ' + element.polloption,  value: element.pollcount};
          dataArr.push(arr1);
        });
        this.dataArr = dataArr;
        console.log('data Arra' , this.dataArr);
      });
  }

  onSelect(event) {
    console.log(event);
  }
}
