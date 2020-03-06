import { Component } from "@angular/core";
import { ExcelService } from "../excel.service";
import { DataService } from "../data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "Angular";
  barData: any = [];
  barChartLabels: any = [];
  barChartData: any = [
    { data: [], label: "DepartmentA" },
    { data: [], label: "DepartmentB" }
  ];
  public barChartType = "bar";
  public barChartLegend = true;

  doughnutChartLabels: any = [];
  doughnutChartData: any = [];
  doughnutChartType = 'doughnut';

  constructor(private datasvc: DataService, private excelsvc: ExcelService) {
    this.barData = this.datasvc.getBarData();
    this.barData.forEach(record => {
      this.barChartLabels.push(record.Year);
      this.barChartData[0].data.push(record.DepartmentA);
      this.barChartData[1].data.push(record.DepartmentB);
    });

  this.datasvc.getDoughnutChartData().forEach(element=>{
    this.doughnutChartLabels.push('Quarter No:'+element.Quarter);
    this.doughnutChartData.push(element.Profit);
  });

  }
  exportData(): any {
    console.log(this.barData);
    console.log(this.doughnutChartData);
    this.excelsvc.exportAsExcelFile(this.barData, 'BarChartOrg');
    this.excelsvc.exportAsExcelFile(this.doughnutChartData, 'DNutChartOrg');
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //  public doughnutChartData = [120, 150, 180, 90];

  //   public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  //   public radarChartData = [
  //     {data: [120, 130, 180, 70], label: '2017'},
  //     {data: [90, 150, 200, 45], label: '2018'}
  //   ];
  //   public radarChartType = 'radar';

  //  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //   public pieChartData = [120, 150, 180, 90];
  //   public pieChartType = 'pie';
}
