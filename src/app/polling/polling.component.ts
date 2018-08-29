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

  view: any[] = [800, 500];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showDataLabel = true;
  xAxisLabel = 'Options';
  showYAxisLabel = true;
  yAxisLabel = 'Percentage';

  colorScheme = {
    domain: ['#907aa9', '#439ab6', '#18A347', '#AAAAAA']
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
        const resLen = res.length;
        const arr = [];
        const finalRes = [];
        for (let i = 0; i < resLen; i++) {
          const match = /\r|\n/.exec(res[i].polloption);
          if ( match ) {
            arr.push({'option': res[i].polloption, 'count': res[i].pollcount });
          } else {
            finalRes.push({'option': res[i].polloption, 'count': res[i].pollcount });
          }
        }
        this.remove_duplicates(arr, finalRes);
        const totalCount = finalRes.map((item) => {
          return item.count;
        }).reduce((total, num) => {
          return total += num;
        });
        const dataArr = [];
        finalRes.forEach(element => {
          const arr1 = {name : 'Option ' + element.option,  value: this.getPercent(element.count, totalCount)};
          dataArr.push(arr1);
        });
        this.dataArr = dataArr;
      });
  }

  onSelect(event) {
    // console.log(event);
  }

  remove_duplicates(a, b) {

    const len = a.length;
    b = b.filter( function( item ) {
        for ( let i = 0; i < len; i++ ) {
            if ( a[i].option === item.option ) {
                const sum = a[i].count + item.count;
                item.count = sum;
            }
        }
        return true;
    });
  }

  getPercent(num, total) {
    const calcNum = (num / total) * 100;
    return Math.max( Math.round(calcNum * 10) / 10 ).toFixed(1);
  }

}
